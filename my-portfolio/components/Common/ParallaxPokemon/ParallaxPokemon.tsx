import { useEffect, useState } from "react";

/* ════════════════════════════════════════════════════════════
   POKEMON SILHOUETTES
   Each is a detailed SVG silhouette in the original creature's
   recognisable proportions and signature features.
════════════════════════════════════════════════════════════ */

/** Pikachu — round head, pointed ears w/ black tips,
 *  lightning-bolt tail, rosy cheeks, chubby body */
const Pikachu = ({ opacity = 0.1, size = 200 }: { opacity?: number; size?: number }) => (
  <svg viewBox="0 0 160 200" width={size} height={size * 1.25} xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
    {/* Left ear */}
    <polygon points="42,68 28,8 60,48" fill="#FFD700" />
    {/* Left ear black tip */}
    <polygon points="42,60 28,8 48,38" fill="#1a1a1a" />
    {/* Right ear */}
    <polygon points="118,68 132,8 100,48" fill="#FFD700" />
    {/* Right ear black tip */}
    <polygon points="118,60 132,8 112,38" fill="#1a1a1a" />
    {/* Head */}
    <ellipse cx="80" cy="90" rx="50" ry="46" fill="#FFD700" />
    {/* Cheek circles (signature) */}
    <circle cx="44" cy="100" r="12" fill="#f87171" opacity="0.85" />
    <circle cx="116" cy="100" r="12" fill="#f87171" opacity="0.85" />
    {/* Eyes */}
    <circle cx="62" cy="84" r="8" fill="#1a1a1a" />
    <circle cx="98" cy="84" r="8" fill="#1a1a1a" />
    <circle cx="64" cy="81" r="3" fill="#fff" />
    <circle cx="100" cy="81" r="3" fill="#fff" />
    {/* Nose */}
    <ellipse cx="80" cy="96" rx="4" ry="3" fill="#1a1a1a" />
    {/* Mouth */}
    <path d="M68 104 Q80 114 92 104" fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
    {/* Body */}
    <ellipse cx="80" cy="158" rx="48" ry="42" fill="#FFD700" />
    {/* Belly stripe */}
    <ellipse cx="80" cy="158" rx="30" ry="26" fill="#f5c842" opacity="0.45" />
    {/* Left arm */}
    <ellipse cx="28" cy="148" rx="14" ry="9" fill="#FFD700" transform="rotate(-25,28,148)" />
    {/* Right arm */}
    <ellipse cx="132" cy="148" rx="14" ry="9" fill="#FFD700" transform="rotate(25,132,148)" />
    {/* Left foot */}
    <ellipse cx="58" cy="196" rx="20" ry="11" fill="#CC0000" />
    {/* Right foot */}
    <ellipse cx="102" cy="196" rx="20" ry="11" fill="#CC0000" />
    {/* Lightning bolt tail */}
    <path d="M128 168 L152 138 L136 150 L158 114 L128 140 L148 124 L100 188 Z" fill="#FFD700" />
    <path d="M128 168 L152 138 L136 150 L158 114 L128 140 L148 124 L100 188 Z" fill="#b8860b" opacity="0.35" />
    {/* Back stripe detail */}
    <path d="M50 130 Q60 120 80 122 Q100 120 110 130" fill="none" stroke="#b8860b" strokeWidth="3" opacity="0.4" strokeLinecap="round" />
    <path d="M52 140 Q62 130 80 132 Q98 130 108 140" fill="none" stroke="#b8860b" strokeWidth="3" opacity="0.4" strokeLinecap="round" />
  </svg>
);

/** Charizard — bipedal dragon, large spread wings,
 *  long neck, flame on tail, clawed limbs */
const Charizard = ({ opacity = 0.08, size = 320 }: { opacity?: number; size?: number }) => (
  <svg viewBox="0 0 280 320" width={size} height={size * 1.14} xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
    {/* Left wing */}
    <path d="M98 148 L12 50 L52 72 L22 118 L75 148 Z" fill="#b8860b" />
    <path d="M98 148 L12 50 L38 98 L75 148 Z" fill="#8b6914" opacity="0.65" />
    {/* Wing finger spines L */}
    <line x1="98" y1="148" x2="12" y2="50"  stroke="#6b4f00" strokeWidth="2" />
    <line x1="98" y1="148" x2="38" y2="58"  stroke="#6b4f00" strokeWidth="1.5" />
    <line x1="98" y1="148" x2="22" y2="82"  stroke="#6b4f00" strokeWidth="1.5" />
    {/* Right wing */}
    <path d="M182 148 L268 50 L228 72 L258 118 L205 148 Z" fill="#b8860b" />
    <path d="M182 148 L268 50 L242 98 L205 148 Z" fill="#8b6914" opacity="0.65" />
    {/* Wing finger spines R */}
    <line x1="182" y1="148" x2="268" y2="50"  stroke="#6b4f00" strokeWidth="2" />
    <line x1="182" y1="148" x2="242" y2="58"  stroke="#6b4f00" strokeWidth="1.5" />
    <line x1="182" y1="148" x2="258" y2="82"  stroke="#6b4f00" strokeWidth="1.5" />
    {/* Body / torso */}
    <ellipse cx="140" cy="200" rx="52" ry="60" fill="#f97316" />
    {/* Belly */}
    <ellipse cx="140" cy="200" rx="32" ry="46" fill="#fdba74" opacity="0.5" />
    {/* Neck */}
    <path d="M118 155 Q128 128 150 122 Q168 118 172 145 L162 200 L118 200 Z" fill="#f97316" />
    {/* Head */}
    <ellipse cx="158" cy="108" rx="40" ry="36" fill="#f97316" />
    {/* Snout/muzzle */}
    <ellipse cx="185" cy="118" rx="22" ry="16" fill="#ea580c" />
    {/* Nostril */}
    <circle cx="194" cy="114" r="3.5" fill="#9a3412" />
    <circle cx="188" cy="116" r="2.5" fill="#9a3412" />
    {/* Horn */}
    <polygon points="168,80 160,52 178,74" fill="#c2410c" />
    {/* Eye */}
    <circle cx="152" cy="100" r="9" fill="#1e3a8a" />
    <circle cx="152" cy="100" r="5.5" fill="#172554" />
    <circle cx="149" cy="97" r="2.5" fill="rgba(255,255,255,0.8)" />
    {/* Teeth */}
    <polygon points="178,126 183,134 173,134" fill="#fff" />
    <polygon points="188,128 193,136 183,136" fill="#fff" opacity="0.8" />
    {/* Left arm */}
    <path d="M90 210 Q65 230 60 248 L72 245 Q74 255 83 250 Q80 260 90 255 L98 225 Z" fill="#f97316" />
    {/* Right arm */}
    <path d="M190 210 Q215 230 220 248 L208 245 Q206 255 197 250 Q200 260 190 255 L182 225 Z" fill="#f97316" />
    {/* Left leg */}
    <path d="M108 252 L98 290 L86 294 L82 290 L94 283 L104 252 Z" fill="#f97316" />
    {/* Left claws */}
    <path d="M82 290 L74 300 L82 298 Z" fill="#ea580c" />
    <path d="M86 294 L80 305 L88 302 Z" fill="#ea580c" />
    <path d="M94 283 L90 295 L98 292 Z" fill="#ea580c" />
    {/* Right leg */}
    <path d="M172 252 L182 290 L194 294 L198 290 L186 283 L176 252 Z" fill="#f97316" />
    {/* Right claws */}
    <path d="M198 290 L206 300 L198 298 Z" fill="#ea580c" />
    <path d="M194 294 L200 305 L192 302 Z" fill="#ea580c" />
    <path d="M186 283 L190 295 L182 292 Z" fill="#ea580c" />
    {/* Tail */}
    <path d="M115 255 Q88 285 94 315 Q106 290 112 300 Q105 275 118 262 Z" fill="#f97316" />
    {/* Flame outer */}
    <path d="M94 315 Q78 332 96 345 Q102 322 108 315 Q96 330 94 315 Z" fill="#f97316" />
    <path d="M95 322 Q82 336 97 346 Q102 328 108 322 Z" fill="#fb923c" />
    {/* Flame inner */}
    <path d="M97 328 Q88 338 98 344 Q102 332 106 328 Z" fill="#FFD700" />
    {/* Scale texture hint */}
    <circle cx="130" cy="175" r="5" fill="#ea580c" opacity="0.3" />
    <circle cx="150" cy="168" r="4" fill="#ea580c" opacity="0.25" />
    <circle cx="138" cy="188" r="4" fill="#ea580c" opacity="0.3" />
  </svg>
);

/** Mewtwo — slender bipedal psychic, large domed head,
 *  PSI tube from skull, long whip tail, bulky chest */
const Mewtwo = ({ opacity = 0.07, size = 260 }: { opacity?: number; size?: number }) => (
  <svg viewBox="0 0 180 300" width={size} height={size * 1.67} xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
    {/* Left leg */}
    <path d="M64 230 L58 280 L68 283 L74 280 L70 268 L72 230 Z" fill="#c084fc" />
    {/* Left foot */}
    <ellipse cx="60" cy="280" rx="14" ry="9" fill="#a855f7" />
    {/* Right leg */}
    <path d="M116 230 L122 280 L112 283 L106 280 L110 268 L108 230 Z" fill="#c084fc" />
    {/* Right foot */}
    <ellipse cx="120" cy="280" rx="14" ry="9" fill="#a855f7" />
    {/* Torso */}
    <path d="M52 130 Q46 175 54 230 L126 230 Q134 175 128 130 Z" fill="#c084fc" />
    {/* Chest plate (bulkier) */}
    <ellipse cx="90" cy="162" rx="32" ry="28" fill="#d8b4fe" opacity="0.55" />
    {/* Left shoulder */}
    <ellipse cx="46" cy="145" rx="18" ry="24" fill="#c084fc" />
    {/* Left upper arm */}
    <path d="M30 152 Q20 180 26 205 L38 202 Q32 178 38 152 Z" fill="#c084fc" />
    {/* Left hand */}
    <ellipse cx="28" cy="210" rx="14" ry="18" fill="#a855f7" />
    {/* Left claws */}
    <line x1="18" y1="222" x2="12" y2="232" stroke="#7e22ce" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="24" y1="226" x2="20" y2="238" stroke="#7e22ce" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="32" y1="227" x2="30" y2="240" stroke="#7e22ce" strokeWidth="2.5" strokeLinecap="round" />
    {/* Right shoulder */}
    <ellipse cx="134" cy="145" rx="18" ry="24" fill="#c084fc" />
    {/* Right upper arm */}
    <path d="M150 152 Q160 180 154 205 L142 202 Q148 178 142 152 Z" fill="#c084fc" />
    {/* Right hand */}
    <ellipse cx="152" cy="210" rx="14" ry="18" fill="#a855f7" />
    {/* Right claws */}
    <line x1="162" y1="222" x2="168" y2="232" stroke="#7e22ce" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="156" y1="226" x2="160" y2="238" stroke="#7e22ce" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="148" y1="227" x2="150" y2="240" stroke="#7e22ce" strokeWidth="2.5" strokeLinecap="round" />
    {/* Neck */}
    <rect x="76" y="108" width="28" height="28" rx="10" fill="#c084fc" />
    {/* Head — large dome */}
    <ellipse cx="90" cy="78" rx="50" ry="48" fill="#c084fc" />
    {/* Head indentation (signature crease) */}
    <path d="M62 60 Q90 72 118 60" fill="none" stroke="#a855f7" strokeWidth="3" opacity="0.5" strokeLinecap="round" />
    {/* Psychic tube from back of skull */}
    <path d="M120 50 Q148 40 144 76 Q142 95 130 106" fill="none" stroke="#9333ea" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
    {/* Tube end ball */}
    <circle cx="130" cy="106" r="6" fill="#7e22ce" />
    {/* Eyes */}
    <circle cx="70" cy="76" r="8" fill="#4c1d95" />
    <circle cx="110" cy="76" r="8" fill="#4c1d95" />
    <circle cx="68" cy="73" r="3" fill="#fff" opacity="0.7" />
    <circle cx="108" cy="73" r="3" fill="#fff" opacity="0.7" />
    {/* Tail — long whip */}
    <path d="M90 230 Q112 252 108 278 Q100 295 90 300 Q88 290 92 278 Q98 258 88 242 Q86 248 82 240 Z" fill="#c084fc" />
    {/* Tail tip bulb */}
    <circle cx="90" cy="300" r="7" fill="#a855f7" />
  </svg>
);

/** Lugia — giant legendary bird, swept-back wings,
 *  long elegant neck, spiky back ridges */
const Lugia = ({ opacity = 0.07, size = 340 }: { opacity?: number; size?: number }) => (
  <svg viewBox="0 0 380 300" width={size} height={size * 0.79} xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
    {/* Body */}
    <ellipse cx="200" cy="185" rx="75" ry="85" fill="#e2e8f0" />
    {/* Belly (lighter) */}
    <ellipse cx="200" cy="195" rx="48" ry="60" fill="#f8fafc" opacity="0.7" />
    {/* Left wing — large, feathered, swept */}
    <path d="M132 165 L18 90 L28 138 L8 178 L42 168 L22 210 L62 188 L48 225 L100 198 Z" fill="#94a3b8" />
    {/* Left wing ridge */}
    <path d="M132 165 L18 90 L38 132 L20 170 L50 162" fill="none" stroke="#64748b" strokeWidth="2.5" strokeLinecap="round" />
    {/* Left wing feather tips */}
    <path d="M100 198 L82 230 L108 222 Z" fill="#cbd5e1" />
    <path d="M62 188 L44 218 L68 210 Z" fill="#cbd5e1" />
    {/* Right wing */}
    <path d="M268 165 L382 90 L372 138 L392 178 L358 168 L378 210 L338 188 L352 225 L300 198 Z" fill="#94a3b8" />
    {/* Right wing ridge */}
    <path d="M268 165 L382 90 L362 132 L380 170 L350 162" fill="none" stroke="#64748b" strokeWidth="2.5" strokeLinecap="round" />
    {/* Right wing feather tips */}
    <path d="M300 198 L318 230 L292 222 Z" fill="#cbd5e1" />
    <path d="M338 188 L356 218 L332 210 Z" fill="#cbd5e1" />
    {/* Neck (long, elegant S-curve) */}
    <path d="M180 110 Q160 80 168 48 Q176 18 200 12 Q224 6 232 32 Q240 58 225 88 L215 118 L180 118 Z" fill="#e2e8f0" />
    {/* Head */}
    <ellipse cx="204" cy="16" rx="30" ry="24" fill="#e2e8f0" />
    {/* Beak / pointed snout */}
    <path d="M218 20 L250 28 L220 34 Z" fill="#cbd5e1" />
    {/* Eye */}
    <circle cx="195" cy="12" r="6" fill="#1e3a8a" />
    <circle cx="193" cy="10" r="2.5" fill="#fff" opacity="0.8" />
    {/* Back ridge spikes (signature Lugia feature) */}
    <path d="M182 108 L172 88 L188 102" fill="#94a3b8" />
    <path d="M192 104 L182 82 L198 98" fill="#94a3b8" />
    <path d="M202 102 L195 78 L208 96" fill="#94a3b8" />
    <path d="M212 104 L208 80 L218 98" fill="#94a3b8" />
    <path d="M220 108 L218 84 L226 102" fill="#94a3b8" />
    {/* Tail */}
    <path d="M175 262 Q164 282 160 296 L170 290 Q172 300 180 295 Q177 285 182 292 Q184 278 190 296 Q196 280 196 262 Z" fill="#e2e8f0" />
    {/* Tail fin spikes */}
    <path d="M162 278 L152 268 L165 274" fill="#94a3b8" />
    <path d="M168 288 L156 280 L170 286" fill="#94a3b8" />
    {/* Feet */}
    <path d="M175 262 L165 278 L158 276 L160 270 Z" fill="#94a3b8" />
    <path d="M225 262 L235 278 L242 276 L240 270 Z" fill="#94a3b8" />
    {/* Foot claws */}
    <line x1="158" y1="276" x2="150" y2="284" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
    <line x1="163" y1="278" x2="157" y2="287" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
    <line x1="242" y1="276" x2="250" y2="284" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
    <line x1="237" y1="278" x2="243" y2="287" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

/** Rayquaza — enormous sky serpent, banded body,
 *  decorative head appendages, small wings */
const Rayquaza = ({ opacity = 0.065, size = 500 }: { opacity?: number; size?: number }) => (
  <svg viewBox="0 0 120 520" width={size * 0.23} height={size} xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
    {/* Main serpentine body — S-curve path */}
    <path
      d="M52 0 Q82 0 85 28 Q90 60 72 88 Q54 116 58 148 Q62 180 78 206 Q94 232 86 264 Q78 296 58 320 Q38 344 42 376 Q46 408 62 432 Q68 450 60 480 Q58 495 60 520 Q55 500 52 480 Q44 452 36 432 Q18 408 22 376 Q26 344 46 320 Q66 296 58 264 Q50 232 36 206 Q22 180 26 148 Q30 116 48 88 Q66 60 62 28 Q58 0 52 0 Z"
      fill="#2d6a2d"
    />
    {/* Yellow diamond markings (signature Rayquaza) */}
    <ellipse cx="60" cy="100" rx="7" ry="12" fill="#FFD700" opacity="0.85" />
    <ellipse cx="60" cy="165" rx="7" ry="12" fill="#FFD700" opacity="0.85" />
    <ellipse cx="60" cy="240" rx="7" ry="12" fill="#FFD700" opacity="0.85" />
    <ellipse cx="60" cy="315" rx="7" ry="12" fill="#FFD700" opacity="0.85" />
    <ellipse cx="60" cy="390" rx="7" ry="12" fill="#FFD700" opacity="0.85" />
    {/* Scale lines */}
    <path d="M44 80 Q60 74 76 80"  fill="none" stroke="#FFD700" strokeWidth="2" opacity="0.4" />
    <path d="M40 148 Q60 140 80 148" fill="none" stroke="#FFD700" strokeWidth="2" opacity="0.4" />
    <path d="M36 220 Q60 210 84 220" fill="none" stroke="#FFD700" strokeWidth="2" opacity="0.4" />
    {/* Small decorative wings (mid-body) */}
    <path d="M28 200 L4 175 L14 195 L2 215 L28 205 Z"  fill="#1a4a1a" />
    <path d="M92 200 L116 175 L106 195 L118 215 L92 205 Z" fill="#1a4a1a" />
    {/* Head region (wider) */}
    <ellipse cx="60" cy="22" rx="26" ry="22" fill="#2d6a2d" />
    {/* Head flat face */}
    <ellipse cx="60" cy="18" rx="18" ry="14" fill="#1a4a1a" />
    {/* Head horns / appendages (signature) */}
    <path d="M46 8  L32 -8  L44 4"  fill="#FFD700" />
    <path d="M74 8  L88 -8  L76 4"  fill="#FFD700" />
    <path d="M40 14 L22 2   L38 12" fill="#FFD700" />
    <path d="M80 14 L98 2   L82 12" fill="#FFD700" />
    <path d="M36 22 L18 14  L36 20" fill="#FFD700" />
    <path d="M84 22 L102 14 L84 20" fill="#FFD700" />
    {/* Eyes (glowing yellow) */}
    <circle cx="48" cy="18" r="4.5" fill="#FFD700" />
    <circle cx="72" cy="18" r="4.5" fill="#FFD700" />
    <circle cx="48" cy="18" r="2.5" fill="#1a1a1a" />
    <circle cx="72" cy="18" r="2.5" fill="#1a1a1a" />
    {/* Mouth */}
    <path d="M46 28 L60 32 L74 28" fill="none" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" />
    {/* Tail tip */}
    <path d="M52 500 Q56 510 60 520 Q64 510 68 500" fill="#1a4a1a" />
  </svg>
);

/* ── Pokeball decorations ─────────────────────────────────── */
const PokeballBg = ({ size = 180, opacity = 0.055 }: { size?: number; opacity?: number }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="47" fill="none" stroke="rgba(255,215,0,1)" strokeWidth="1.5" opacity={opacity * 10} />
    {/* Top half — red arc (no clipPath needed) */}
    <path d="M6,50 A44,44 0 0,1 94,50 Z" fill="rgba(204,0,0,1)" opacity={opacity} />
    {/* Bottom half — white arc */}
    <path d="M6,50 A44,44 0 0,0 94,50 Z" fill="rgba(240,240,240,1)" opacity={opacity * 0.6} />
    <rect x="4" y="46" width="92" height="8" fill="rgba(20,20,40,1)" opacity={opacity * 2.5} />
    <circle cx="50" cy="50" r="12" fill="rgba(20,20,40,1)" opacity={opacity * 2.5} />
    <circle cx="50" cy="50" r="7" fill="rgba(240,240,240,1)" opacity={opacity} />
  </svg>
);

/* ════════════════════════════════════════════════════════════
   COMPONENT
════════════════════════════════════════════════════════════ */
export default function ParallaxPokemon() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const h = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const t = (f: number) => `translateY(${scrollY * f}px)`;

  return (
    <div
      style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 1, overflow: "hidden" }}
      aria-hidden="true"
    >
      {/* ── Ambient glows ── */}
      <div style={{ position: "absolute", top: 0, right: 0, width: "45vw", height: "45vh",
        background: "radial-gradient(circle at 85% 12%, rgba(204,0,0,0.09) 0%, transparent 65%)", transform: t(0.04) }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, width: "40vw", height: "40vh",
        background: "radial-gradient(circle at 12% 88%, rgba(255,215,0,0.07) 0%, transparent 65%)", transform: t(0.09) }} />
      <div style={{ position: "absolute", top: "40vh", left: "38vw", width: "25vw", height: "25vh",
        background: "radial-gradient(circle, rgba(104,144,240,0.05) 0%, transparent 70%)", transform: t(0.06) }} />

      {/* ── Large Pokeball – top right ── */}
      <div style={{ position: "absolute", top: "-80px", right: "-100px", transform: t(0.07) }}>
        <PokeballBg size={420} opacity={0.048} />
      </div>

      {/* ── Medium Pokeball – mid left ── */}
      <div style={{ position: "absolute", top: "38vh", left: "-70px", transform: t(0.17) }}>
        <PokeballBg size={240} opacity={0.065} />
      </div>

      {/* ── Small Pokeball – lower right ── */}
      <div style={{ position: "absolute", top: "70vh", right: "9vw", transform: t(0.28) }}>
        <PokeballBg size={110} opacity={0.08} />
      </div>

      {/* ══ POKEMON SILHOUETTES ══ */}

      {/* Rayquaza — full height right column, slow drift */}
      <div style={{ position: "absolute", top: "0vh", right: "1vw", transform: t(0.1), filter: "blur(0.3px)" }}>
        <Rayquaza size={480} opacity={0.07} />
      </div>

      {/* Charizard — upper right, mid speed */}
      <div style={{ position: "absolute", top: "4vh", right: "14vw", transform: t(0.14), filter: "blur(0.4px)" }}>
        <Charizard size={300} opacity={0.085} />
      </div>

      {/* Lugia — spans the upper-left area */}
      <div style={{ position: "absolute", top: "8vh", left: "-30px", transform: t(0.11), filter: "blur(0.5px)" }}>
        <Lugia size={320} opacity={0.075} />
      </div>

      {/* Mewtwo — mid page, left */}
      <div style={{ position: "absolute", top: "42vh", left: "4vw", transform: t(0.21), filter: "blur(0.3px)" }}>
        <Mewtwo size={220} opacity={0.08} />
      </div>

      {/* Pikachu — lower left, faster */}
      <div style={{ position: "absolute", bottom: "5vh", left: "6vw", transform: t(0.26), filter: "blur(0.2px)" }}>
        <Pikachu size={180} opacity={0.1} />
      </div>

      {/* Second Pikachu — tiny, mid-right */}
      <div style={{ position: "absolute", top: "55vh", right: "24vw", transform: t(0.32), filter: "blur(0.3px)" }}>
        <Pikachu size={100} opacity={0.07} />
      </div>
    </div>
  );
}
