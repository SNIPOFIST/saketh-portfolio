import { useEffect, useRef } from "react";

/* ════════════════════════════════════════════════════════════
   POKEMON SILHOUETTES  (pure SVG — no state, renders once)
════════════════════════════════════════════════════════════ */

const Pikachu = ({ opacity = 0.1, size = 200 }: { opacity?: number; size?: number }) => (
  <svg viewBox="0 0 160 200" width={size} height={size * 1.25} xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
    <polygon points="42,68 28,8 60,48" fill="#FFD700" />
    <polygon points="42,60 28,8 48,38" fill="#1a1a1a" />
    <polygon points="118,68 132,8 100,48" fill="#FFD700" />
    <polygon points="118,60 132,8 112,38" fill="#1a1a1a" />
    <ellipse cx="80" cy="90" rx="50" ry="46" fill="#FFD700" />
    <circle cx="44" cy="100" r="12" fill="#f87171" opacity="0.85" />
    <circle cx="116" cy="100" r="12" fill="#f87171" opacity="0.85" />
    <circle cx="62" cy="84" r="8" fill="#1a1a1a" />
    <circle cx="98" cy="84" r="8" fill="#1a1a1a" />
    <circle cx="64" cy="81" r="3" fill="#fff" />
    <circle cx="100" cy="81" r="3" fill="#fff" />
    <ellipse cx="80" cy="96" rx="4" ry="3" fill="#1a1a1a" />
    <path d="M68 104 Q80 114 92 104" fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
    <ellipse cx="80" cy="158" rx="48" ry="42" fill="#FFD700" />
    <ellipse cx="80" cy="158" rx="30" ry="26" fill="#f5c842" opacity="0.45" />
    <ellipse cx="28" cy="148" rx="14" ry="9" fill="#FFD700" transform="rotate(-25,28,148)" />
    <ellipse cx="132" cy="148" rx="14" ry="9" fill="#FFD700" transform="rotate(25,132,148)" />
    <ellipse cx="58" cy="196" rx="20" ry="11" fill="#CC0000" />
    <ellipse cx="102" cy="196" rx="20" ry="11" fill="#CC0000" />
    <path d="M128 168 L152 138 L136 150 L158 114 L128 140 L148 124 L100 188 Z" fill="#FFD700" />
    <path d="M50 130 Q60 120 80 122 Q100 120 110 130" fill="none" stroke="#b8860b" strokeWidth="3" opacity="0.4" strokeLinecap="round" />
  </svg>
);

const Charizard = ({ opacity = 0.08, size = 320 }: { opacity?: number; size?: number }) => (
  <svg viewBox="0 0 280 320" width={size} height={size * 1.14} xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
    <path d="M98 148 L12 50 L52 72 L22 118 L75 148 Z" fill="#b8860b" />
    <path d="M98 148 L12 50 L38 98 L75 148 Z" fill="#8b6914" opacity="0.65" />
    <path d="M182 148 L268 50 L228 72 L258 118 L205 148 Z" fill="#b8860b" />
    <path d="M182 148 L268 50 L242 98 L205 148 Z" fill="#8b6914" opacity="0.65" />
    <ellipse cx="140" cy="200" rx="52" ry="60" fill="#f97316" />
    <ellipse cx="140" cy="200" rx="32" ry="46" fill="#fdba74" opacity="0.5" />
    <path d="M118 155 Q128 128 150 122 Q168 118 172 145 L162 200 L118 200 Z" fill="#f97316" />
    <ellipse cx="158" cy="108" rx="40" ry="36" fill="#f97316" />
    <ellipse cx="185" cy="118" rx="22" ry="16" fill="#ea580c" />
    <circle cx="152" cy="100" r="9" fill="#1e3a8a" />
    <circle cx="152" cy="100" r="5.5" fill="#172554" />
    <path d="M90 210 Q65 230 60 248 L72 245 Q74 255 83 250 Q80 260 90 255 L98 225 Z" fill="#f97316" />
    <path d="M190 210 Q215 230 220 248 L208 245 Q206 255 197 250 Q200 260 190 255 L182 225 Z" fill="#f97316" />
    <path d="M115 255 Q88 285 94 315 Q106 290 112 300 Q105 275 118 262 Z" fill="#f97316" />
    <path d="M97 328 Q88 338 98 344 Q102 332 106 328 Z" fill="#FFD700" />
  </svg>
);

const Mewtwo = ({ opacity = 0.07, size = 260 }: { opacity?: number; size?: number }) => (
  <svg viewBox="0 0 180 300" width={size} height={size * 1.67} xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
    <path d="M64 230 L58 280 L68 283 L74 280 L70 268 L72 230 Z" fill="#c084fc" />
    <ellipse cx="60" cy="280" rx="14" ry="9" fill="#a855f7" />
    <path d="M116 230 L122 280 L112 283 L106 280 L110 268 L108 230 Z" fill="#c084fc" />
    <ellipse cx="120" cy="280" rx="14" ry="9" fill="#a855f7" />
    <path d="M52 130 Q46 175 54 230 L126 230 Q134 175 128 130 Z" fill="#c084fc" />
    <ellipse cx="90" cy="162" rx="32" ry="28" fill="#d8b4fe" opacity="0.55" />
    <ellipse cx="46" cy="145" rx="18" ry="24" fill="#c084fc" />
    <ellipse cx="134" cy="145" rx="18" ry="24" fill="#c084fc" />
    <rect x="76" y="108" width="28" height="28" rx="10" fill="#c084fc" />
    <ellipse cx="90" cy="78" rx="50" ry="48" fill="#c084fc" />
    <path d="M120 50 Q148 40 144 76 Q142 95 130 106" fill="none" stroke="#9333ea" strokeWidth="9" strokeLinecap="round" />
    <circle cx="70" cy="76" r="8" fill="#4c1d95" />
    <circle cx="110" cy="76" r="8" fill="#4c1d95" />
    <path d="M90 230 Q112 252 108 278 Q100 295 90 300 Q88 290 92 278 Q98 258 88 242 Z" fill="#c084fc" />
  </svg>
);

const Lugia = ({ opacity = 0.07, size = 340 }: { opacity?: number; size?: number }) => (
  <svg viewBox="0 0 380 300" width={size} height={size * 0.79} xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
    <ellipse cx="200" cy="185" rx="75" ry="85" fill="#e2e8f0" />
    <ellipse cx="200" cy="195" rx="48" ry="60" fill="#f8fafc" opacity="0.7" />
    <path d="M132 165 L18 90 L28 138 L8 178 L42 168 L22 210 L62 188 L48 225 L100 198 Z" fill="#94a3b8" />
    <path d="M268 165 L382 90 L372 138 L392 178 L358 168 L378 210 L338 188 L352 225 L300 198 Z" fill="#94a3b8" />
    <path d="M180 110 Q160 80 168 48 Q176 18 200 12 Q224 6 232 32 Q240 58 225 88 L215 118 L180 118 Z" fill="#e2e8f0" />
    <ellipse cx="204" cy="16" rx="30" ry="24" fill="#e2e8f0" />
    <circle cx="195" cy="12" r="6" fill="#1e3a8a" />
    <path d="M182 108 L172 88 L188 102" fill="#94a3b8" />
    <path d="M202 102 L195 78 L208 96" fill="#94a3b8" />
  </svg>
);

const Rayquaza = ({ opacity = 0.065, size = 500 }: { opacity?: number; size?: number }) => (
  <svg viewBox="0 0 120 520" width={size * 0.23} height={size} xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
    <path
      d="M52 0 Q82 0 85 28 Q90 60 72 88 Q54 116 58 148 Q62 180 78 206 Q94 232 86 264 Q78 296 58 320 Q38 344 42 376 Q46 408 62 432 Q68 450 60 480 Q58 495 60 520 Q55 500 52 480 Q44 452 36 432 Q18 408 22 376 Q26 344 46 320 Q66 296 58 264 Q50 232 36 206 Q22 180 26 148 Q30 116 48 88 Q66 60 62 28 Q58 0 52 0 Z"
      fill="#2d6a2d"
    />
    <ellipse cx="60" cy="100" rx="7" ry="12" fill="#FFD700" opacity="0.85" />
    <ellipse cx="60" cy="240" rx="7" ry="12" fill="#FFD700" opacity="0.85" />
    <ellipse cx="60" cy="390" rx="7" ry="12" fill="#FFD700" opacity="0.85" />
    <path d="M28 200 L4 175 L14 195 L2 215 L28 205 Z"  fill="#1a4a1a" />
    <path d="M92 200 L116 175 L106 195 L118 215 L92 205 Z" fill="#1a4a1a" />
    <ellipse cx="60" cy="22" rx="26" ry="22" fill="#2d6a2d" />
    <circle cx="48" cy="18" r="4.5" fill="#FFD700" />
    <circle cx="72" cy="18" r="4.5" fill="#FFD700" />
  </svg>
);

const PokeballBg = ({ size = 180, opacity = 0.055 }: { size?: number; opacity?: number }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="47" fill="none" stroke="rgba(255,215,0,1)" strokeWidth="1.5" opacity={opacity * 10} />
    <path d="M6,50 A44,44 0 0,1 94,50 Z" fill="rgba(204,0,0,1)" opacity={opacity} />
    <path d="M6,50 A44,44 0 0,0 94,50 Z" fill="rgba(240,240,240,1)" opacity={opacity * 0.6} />
    <rect x="4" y="46" width="92" height="8" fill="rgba(20,20,40,1)" opacity={opacity * 2.5} />
    <circle cx="50" cy="50" r="12" fill="rgba(20,20,40,1)" opacity={opacity * 2.5} />
    <circle cx="50" cy="50" r="7" fill="rgba(240,240,240,1)" opacity={opacity} />
  </svg>
);

/* ════════════════════════════════════════════════════════════
   LAYER CONFIG  (factor = parallax speed)
════════════════════════════════════════════════════════════ */
const LAYERS = [
  { id: "glow1",    factor: 0.04 },
  { id: "glow2",    factor: 0.09 },
  { id: "glow3",    factor: 0.06 },
  { id: "pkball1",  factor: 0.07 },
  { id: "pkball2",  factor: 0.17 },
  { id: "pkball3",  factor: 0.28 },
  { id: "rayquaza", factor: 0.10 },
  { id: "charizard",factor: 0.14 },
  { id: "lugia",    factor: 0.11 },
  { id: "mewtwo",   factor: 0.21 },
  { id: "pika1",    factor: 0.26 },
  { id: "pika2",    factor: 0.32 },
];

/* ════════════════════════════════════════════════════════════
   COMPONENT  — renders once, then updates via DOM refs only
════════════════════════════════════════════════════════════ */
export default function ParallaxPokemon() {
  const layerRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const sy = window.scrollY;
        for (const { id, factor } of LAYERS) {
          const el = layerRefs.current[id];
          if (el) el.style.transform = `translateY(${sy * factor}px)`;
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const ref = (id: string) => (el: HTMLDivElement | null) => { layerRefs.current[id] = el; };

  return (
    <div
      style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 1, overflow: "hidden" }}
      aria-hidden="true"
    >
      {/* Ambient glows */}
      <div ref={ref("glow1")} style={{ position: "absolute", top: 0, right: 0, width: "45vw", height: "45vh",
        background: "radial-gradient(circle at 85% 12%, rgba(204,0,0,0.09) 0%, transparent 65%)" }} />
      <div ref={ref("glow2")} style={{ position: "absolute", bottom: 0, left: 0, width: "40vw", height: "40vh",
        background: "radial-gradient(circle at 12% 88%, rgba(255,215,0,0.07) 0%, transparent 65%)" }} />
      <div ref={ref("glow3")} style={{ position: "absolute", top: "40vh", left: "38vw", width: "25vw", height: "25vh",
        background: "radial-gradient(circle, rgba(104,144,240,0.05) 0%, transparent 70%)" }} />

      {/* Pokeballs */}
      <div ref={ref("pkball1")} style={{ position: "absolute", top: "-80px", right: "-100px" }}>
        <PokeballBg size={420} opacity={0.048} />
      </div>
      <div ref={ref("pkball2")} style={{ position: "absolute", top: "38vh", left: "-70px" }}>
        <PokeballBg size={240} opacity={0.065} />
      </div>
      <div ref={ref("pkball3")} style={{ position: "absolute", top: "70vh", right: "9vw" }}>
        <PokeballBg size={110} opacity={0.08} />
      </div>

      {/* Pokemon silhouettes */}
      <div ref={ref("rayquaza")} style={{ position: "absolute", top: "0vh", right: "1vw", filter: "blur(0.3px)" }}>
        <Rayquaza size={480} opacity={0.07} />
      </div>
      <div ref={ref("charizard")} style={{ position: "absolute", top: "4vh", right: "14vw", filter: "blur(0.4px)" }}>
        <Charizard size={300} opacity={0.085} />
      </div>
      <div ref={ref("lugia")} style={{ position: "absolute", top: "8vh", left: "-30px", filter: "blur(0.5px)" }}>
        <Lugia size={320} opacity={0.075} />
      </div>
      <div ref={ref("mewtwo")} style={{ position: "absolute", top: "42vh", left: "4vw", filter: "blur(0.3px)" }}>
        <Mewtwo size={220} opacity={0.08} />
      </div>
      <div ref={ref("pika1")} style={{ position: "absolute", bottom: "5vh", left: "6vw", filter: "blur(0.2px)" }}>
        <Pikachu size={180} opacity={0.1} />
      </div>
      <div ref={ref("pika2")} style={{ position: "absolute", top: "55vh", right: "24vw", filter: "blur(0.3px)" }}>
        <Pikachu size={100} opacity={0.07} />
      </div>
    </div>
  );
}
