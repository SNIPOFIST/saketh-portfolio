import Breadcrumb from "./Breadcrumb";
import Nav from "./Nav";

export default function Header() {
  return (
    <nav
      className="relative z-50 my-4 flex items-center justify-between px-8"
      style={{
        borderBottom: "1px solid rgba(255,215,0,0.08)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      {/* Skip link */}
      <a
        href="#main"
        className="absolute left-1/2 -translate-y-32 rounded border border-poke-yellow/40 bg-poke-dark px-4 py-2 font-pokemon text-[0.5rem] text-poke-yellow transition focus:translate-y-0"
      >
        Skip to main content
      </a>

      {/* Left: Pokeball logo + breadcrumb */}
      <div className="flex items-center gap-3">
        <svg viewBox="0 0 40 40" width="24" height="24" className="animate-float-slow opacity-80">
          <circle cx="20" cy="20" r="18" fill="#0a0a14" stroke="rgba(255,215,0,0.5)" strokeWidth="1.5"/>
          <path d="M4,20 A16,16 0 0,1 36,20 Z" fill="#CC0000"/>
          <path d="M4,20 A16,16 0 0,0 36,20 Z" fill="#f0f0f0"/>
          <rect x="2" y="18" width="36" height="4" fill="#111"/>
          <circle cx="20" cy="20" r="5" fill="#111"/>
          <circle cx="20" cy="20" r="3.5" fill="#f0f0f0"/>
          <circle cx="18" cy="18" r="1.2" fill="rgba(255,255,255,0.6)"/>
        </svg>
        <Breadcrumb />
      </div>

      <Nav />
    </nav>
  );
}
