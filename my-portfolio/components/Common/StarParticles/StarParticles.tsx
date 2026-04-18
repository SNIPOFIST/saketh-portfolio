import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

const QUANTITY = 75;
const STATICITY = 50;
const EASE = 55;

interface Circle {
  x: number;
  y: number;
  translateX: number;
  translateY: number;
  size: number;
  alpha: number;
  targetAlpha: number;
  dx: number;
  dy: number;
  magnetism: number;
  gold: boolean;
}

interface CursorStreak {
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
  width: number;
  life: number;
  maxLife: number;
}

const StarParticles = (): JSX.Element => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trailCanvasRef = useRef<HTMLCanvasElement>(null);
  const router = useRouter();

  useEffect(() => {
    const canvas = canvasRef.current;
    const trailCanvas = trailCanvasRef.current;
    if (!canvas || !trailCanvas) return;

    const ctx = canvas.getContext("2d");
    const trailCtx = trailCanvas.getContext("2d");
    if (!ctx || !trailCtx) return;

    const dpr = window.devicePixelRatio || 1;
    const circles: Circle[] = [];
    const cursorTrail: CursorStreak[] = [];
    const mouse = { x: 0, y: 0 };
    const canvasSize = { w: 0, h: 0 };

    let scrollDriftY = 0;
    let lastScrollY = window.scrollY;
    let lastCursorPoint: { x: number; y: number } | null = null;
    let rafId: number;

    function resizeCanvas() {
      canvasSize.w = window.innerWidth;
      canvasSize.h = window.innerHeight;
      circles.length = 0;

      canvas!.width = canvasSize.w * dpr;
      canvas!.height = canvasSize.h * dpr;
      canvas!.style.width = `${canvasSize.w}px`;
      canvas!.style.height = `${canvasSize.h}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      trailCanvas!.width = canvasSize.w * dpr;
      trailCanvas!.height = canvasSize.h * dpr;
      trailCanvas!.style.width = `${canvasSize.w}px`;
      trailCanvas!.style.height = `${canvasSize.h}px`;
      trailCtx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      drawParticles();
    }

    function circleParams(): Circle {
      return {
        x: Math.floor(Math.random() * canvasSize.w),
        y: Math.floor(Math.random() * canvasSize.h),
        translateX: 0,
        translateY: 0,
        size: Math.floor(Math.random() * 2) + 0.1,
        alpha: 0,
        targetAlpha: Number((Math.random() * 0.6 + 0.1).toFixed(1)),
        dx: (Math.random() - 0.5) * 0.2,
        dy: (Math.random() - 0.5) * 0.2,
        magnetism: 0.1 + Math.random() * 4,
        gold: Math.random() > 0.55,
      };
    }

    function drawCircle(circle: Circle, push = false) {
      ctx!.save();
      ctx!.translate(circle.translateX, circle.translateY);
      ctx!.beginPath();
      ctx!.arc(circle.x, circle.y, circle.size, 0, 2 * Math.PI);
      ctx!.fillStyle = circle.gold
        ? `rgba(255, 215, 0, ${circle.alpha})`
        : `rgba(255, 255, 255, ${circle.alpha})`;
      ctx!.fill();
      ctx!.restore();
      if (push) circles.push(circle);
    }

    function drawParticles() {
      ctx!.clearRect(0, 0, canvasSize.w, canvasSize.h);
      for (let i = 0; i < QUANTITY; i++) {
        drawCircle(circleParams(), true);
      }
    }

    function remapValue(value: number, s1: number, e1: number, s2: number, e2: number) {
      const r = ((value - s1) * (e2 - s2)) / (e1 - s1) + s2;
      return r > 0 ? r : 0;
    }

    function animate() {
      ctx!.clearRect(0, 0, canvasSize.w, canvasSize.h);

      for (let i = 0; i < circles.length; i++) {
        const circle = circles[i];

        const edges = [
          circle.x + circle.translateX - circle.size,
          canvasSize.w - circle.x - circle.translateX - circle.size,
          circle.y + circle.translateY - circle.size,
          canvasSize.h - circle.y - circle.translateY - circle.size,
        ];
        const closestEdge = edges.reduce((a, b) => Math.min(a, b));
        const remappedEdge = Number(remapValue(closestEdge, 0, 20, 0, 1).toFixed(2));

        if (remappedEdge > 1) {
          circle.alpha += 0.02;
          if (circle.alpha > circle.targetAlpha) circle.alpha = circle.targetAlpha;
        } else {
          circle.alpha = circle.targetAlpha * remappedEdge;
        }

        circle.x += circle.dx;
        circle.y += circle.dy + scrollDriftY;
        circle.translateX += (mouse.x / (STATICITY / circle.magnetism) - circle.translateX) / EASE;
        circle.translateY += (mouse.y / (STATICITY / circle.magnetism) - circle.translateY) / EASE;

        if (circle.x < -circle.size || circle.x > canvasSize.w + circle.size || circle.y < -circle.size) {
          circles.splice(i, 1);
          const r = circleParams();
          r.y = canvasSize.h + r.size + Math.random() * 40;
          drawCircle(r, true);
          i--;
        } else if (circle.y > canvasSize.h + circle.size) {
          circles.splice(i, 1);
          const r = circleParams();
          r.y = -r.size - Math.random() * 40;
          drawCircle(r, true);
          i--;
        } else {
          drawCircle(circle, false);
        }
      }

      // Fire-colored cursor trail — no per-frame gradient objects
      trailCtx!.clearRect(0, 0, canvasSize.w, canvasSize.h);
      trailCtx!.lineCap = "round";
      for (let i = cursorTrail.length - 1; i >= 0; i--) {
        const streak = cursorTrail[i];
        streak.life -= 1;
        if (streak.life <= 0) { cursorTrail.splice(i, 1); continue; }
        const alpha = streak.life / streak.maxLife;
        // Use a simple solid color — much cheaper than creating a gradient every frame
        trailCtx!.beginPath();
        trailCtx!.lineWidth = streak.width * alpha * 1.5;
        trailCtx!.strokeStyle = `rgba(255,${Math.round(100 + 60 * alpha)},20,${alpha * 0.85})`;
        trailCtx!.moveTo(streak.fromX, streak.fromY);
        trailCtx!.lineTo(streak.toX, streak.toY);
        trailCtx!.stroke();
      }

      scrollDriftY *= 0.92;
      rafId = requestAnimationFrame(animate);
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas!.getBoundingClientRect();
      const x = e.clientX - rect.left - canvasSize.w / 2;
      const y = e.clientY - rect.top - canvasSize.h / 2;
      if (Math.abs(x) < canvasSize.w / 2 && Math.abs(y) < canvasSize.h / 2) {
        mouse.x = x;
        mouse.y = y;
      }

      if (lastCursorPoint) {
        const dist = Math.hypot(e.clientX - lastCursorPoint.x, e.clientY - lastCursorPoint.y);
        if (dist > 4) {
          cursorTrail.push({
            fromX: lastCursorPoint.x,
            fromY: lastCursorPoint.y,
            toX: e.clientX,
            toY: e.clientY,
            width: 1.8 + Math.random() * 2,
            life: 10,
            maxLife: 10,
          });
          lastCursorPoint = { x: e.clientX, y: e.clientY };
        }
      } else {
        lastCursorPoint = { x: e.clientX, y: e.clientY };
      }
      if (cursorTrail.length > 50) cursorTrail.splice(0, cursorTrail.length - 50);
    };

    const handleScroll = () => {
      const cur = window.scrollY;
      scrollDriftY += -(cur - lastScrollY) * 0.015;
      lastScrollY = cur;
    };

    // Clear trail on route change so marks don't linger between pages
    const clearTrail = () => {
      cursorTrail.length = 0;
      lastCursorPoint = null;
      trailCtx!.clearRect(0, 0, canvasSize.w, canvasSize.h);
    };

    resizeCanvas();
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", resizeCanvas);
    router.events.on("routeChangeStart", clearTrail);
    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", resizeCanvas);
      router.events.off("routeChangeStart", clearTrail);
    };
  }, [router.events]);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{ position: "fixed", inset: 0, width: "100%", height: "100%", display: "block", pointerEvents: "none", zIndex: 0, opacity: 0.9 }}
      />
      <canvas
        ref={trailCanvasRef}
        style={{ position: "fixed", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 20 }}
      />
    </>
  );
};

export default StarParticles;
