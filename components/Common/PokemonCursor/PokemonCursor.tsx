import { useEffect, useRef, useState } from "react";

/* ── Realistic Pokeball SVG (no SVG defs/ids — avoids duplicate-id crashes) ── */
const RealisticPokeball = ({ pressed }: { pressed: boolean }) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
    {/* Drop shadow */}
    <ellipse cx="50" cy="96" rx="28" ry="5" fill="rgba(0,0,0,0.35)" />

    {/* Background circle */}
    <circle cx="50" cy="50" r="46" fill="#111" />

    {/* Red top half — path arc, no clipPath needed */}
    <path d="M4,50 A46,46 0 0,1 96,50 Z" fill={pressed ? "#ff2222" : "#CC0000"} />
    {/* Bright red highlight on top-left of red half */}
    <ellipse cx="32" cy="26" rx="14" ry="8" fill="rgba(255,120,120,0.28)" transform="rotate(-20,32,26)" />

    {/* White bottom half — path arc */}
    <path d="M4,50 A46,46 0 0,0 96,50 Z" fill="#f0f0f0" />
    {/* Subtle bottom shadow */}
    <ellipse cx="64" cy="72" rx="12" ry="7" fill="rgba(0,0,0,0.07)" transform="rotate(15,64,72)" />

    {/* Outer border */}
    <circle cx="50" cy="50" r="46" fill="none" stroke="#1a1a1a" strokeWidth="4" />

    {/* Center band */}
    <rect x="4" y="43" width="92" height="14" fill="#1a1a1a" />

    {/* Center button ring */}
    <circle cx="50" cy="50" r="14" fill="#1a1a1a" />

    {/* Button face */}
    <circle cx="50" cy="50" r="9.5" fill={pressed ? "#CC0000" : "#f0f0f0"} />

    {/* Button inner stroke */}
    <circle cx="50" cy="50" r="9.5" fill="none"
      stroke={pressed ? "rgba(255,200,0,0.75)" : "rgba(160,160,160,0.55)"}
      strokeWidth="1.2" />

    {/* Button glare / glow */}
    {!pressed
      ? <ellipse cx="46" cy="45" rx="3.5" ry="2.5" fill="rgba(255,255,255,0.8)" transform="rotate(-30,46,45)" />
      : <circle cx="50" cy="50" r="5" fill="rgba(255,215,0,0.55)" />
    }

    {/* Gold outer ring on press */}
    {pressed && (
      <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(255,215,0,0.7)" strokeWidth="2.5" />
    )}
  </svg>
);

/* ── Fire particle system (canvas-based) ─────────────────── */
interface FireParticle {
  x: number; y: number;
  vx: number; vy: number;
  life: number; maxLife: number;
  size: number;
  type: "ember" | "flame" | "smoke";
}

function spawnFireBurst(x: number, y: number, particles: FireParticle[], count = 36) {
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 1.5 + Math.random() * 5;
    const rnd = Math.random();
    const type: FireParticle["type"] = rnd > 0.75 ? "smoke" : rnd > 0.5 ? "ember" : "flame";
    particles.push({
      x, y,
      vx: Math.cos(angle) * speed * (type === "ember" ? 1 : 0.45),
      vy: -Math.abs(Math.sin(angle)) * speed * 1.5 - 1.8,
      life: 1,
      maxLife: type === "smoke" ? 0.3 + Math.random() * 0.25 : 0.5 + Math.random() * 0.7,
      size: type === "ember" ? 2 + Math.random() * 3 : 6 + Math.random() * 12,
      type,
    });
  }
}

function drawFireParticle(ctx: CanvasRenderingContext2D, p: FireParticle) {
  const t = p.life / p.maxLife;
  if (p.type === "ember") {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size * t, 0, Math.PI * 2);
    const g = Math.round(t > 0.5 ? 200 * (t * 2 - 1) : 0);
    ctx.fillStyle = `rgba(255,${g},0,${t * 0.9})`;
    ctx.fill();
  } else if (p.type === "flame") {
    const r = p.size * (0.3 + t * 0.7);
    const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r);
    if (t > 0.66) {
      grad.addColorStop(0,   `rgba(255,255,160,${t * 0.92})`);
      grad.addColorStop(0.4, `rgba(255,140,20,${t * 0.82})`);
      grad.addColorStop(1,   `rgba(255,50,0,0)`);
    } else if (t > 0.33) {
      grad.addColorStop(0,   `rgba(255,120,20,${t * 0.85})`);
      grad.addColorStop(0.5, `rgba(200,30,0,${t * 0.7})`);
      grad.addColorStop(1,   `rgba(80,0,0,0)`);
    } else {
      grad.addColorStop(0, `rgba(180,15,0,${t * 0.6})`);
      grad.addColorStop(1, `rgba(40,0,0,0)`);
    }
    ctx.beginPath();
    ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
    ctx.fillStyle = grad;
    ctx.fill();
  } else {
    const r = p.size * (1 + (1 - t) * 1.8);
    const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r);
    grad.addColorStop(0, `rgba(60,20,0,${t * 0.22})`);
    grad.addColorStop(1, `rgba(10,0,0,0)`);
    ctx.beginPath();
    ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
    ctx.fillStyle = grad;
    ctx.fill();
  }
}

/* ── Component ────────────────────────────────────────────── */
export default function PokemonCursor() {
  const [pos, setPos]         = useState({ x: -200, y: -200 });
  const [pressed, setPressed] = useState(false);
  const [onLink, setOnLink]   = useState(false);
  const fireCanvasRef         = useRef<HTMLCanvasElement>(null);
  const particlesRef          = useRef<FireParticle[]>([]);
  const rafRef                = useRef<number>(0);

  useEffect(() => {
    /* Hide system cursor */
    const style = document.createElement("style");
    style.innerHTML = `*, *::before, *::after { cursor: none !important; }`;
    style.id = "pokecursor-style";
    document.head.appendChild(style);

    /* Setup fire canvas */
    const fc  = fireCanvasRef.current!;
    const fctx = fc.getContext("2d")!;
    const dpr  = window.devicePixelRatio || 1;

    const resize = () => {
      fc.width        = window.innerWidth  * dpr;
      fc.height       = window.innerHeight * dpr;
      fc.style.width  = `${window.innerWidth}px`;
      fc.style.height = `${window.innerHeight}px`;
      fctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    /* Particle loop */
    const loop = () => {
      fctx.clearRect(0, 0, fc.width, fc.height);
      const ps = particlesRef.current;
      for (let i = ps.length - 1; i >= 0; i--) {
        const p = ps[i];
        p.life -= 0.025 + (p.type === "ember" ? 0.008 : 0);
        p.x  += p.vx;
        p.y  += p.vy;
        p.vy -= 0.09;
        p.vx *= 0.96;
        if (p.life <= 0) { ps.splice(i, 1); continue; }
        drawFireParticle(fctx, p);
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    /* Events */
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const el = e.target as HTMLElement;
      setOnLink(!!(el.closest("a") || el.closest("button") || el.tagName === "A" || el.tagName === "BUTTON"));
    };
    const onDown = () => setPressed(true);
    const onUp   = () => setPressed(false);
    const onClick = (e: MouseEvent) => {
      spawnFireBurst(e.clientX, e.clientY, particlesRef.current, 40);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup",   onUp);
    window.addEventListener("click",     onClick);

    return () => {
      document.getElementById("pokecursor-style")?.remove();
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup",   onUp);
      window.removeEventListener("click",     onClick);
    };
  }, []);

  const scale   = onLink ? 1.35 : pressed ? 0.88 : 1;
  const rotate  = pressed ? "8deg" : "0deg";
  const shadow  = onLink
    ? "drop-shadow(0 0 10px rgba(255,215,0,0.9)) drop-shadow(0 0 4px rgba(255,215,0,0.6))"
    : pressed
    ? "drop-shadow(0 0 10px rgba(204,0,0,0.9))"
    : "drop-shadow(0 0 5px rgba(255,215,0,0.35)) drop-shadow(0 2px 4px rgba(0,0,0,0.6))";

  return (
    <>
      {/* Fire canvas */}
      <canvas
        ref={fireCanvasRef}
        style={{ position: "fixed", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 999990 }}
      />
      {/* Pokeball */}
      <div
        style={{
          position: "fixed",
          left: pos.x,
          top: pos.y,
          width: 40,
          height: 40,
          transform: `translate(-50%,-50%) scale(${scale}) rotate(${rotate})`,
          zIndex: 999999,
          pointerEvents: "none",
          filter: shadow,
          transition: "transform 0.12s cubic-bezier(.34,1.56,.64,1), filter 0.15s ease",
        }}
      >
        <RealisticPokeball pressed={pressed} />
      </div>
    </>
  );
}
