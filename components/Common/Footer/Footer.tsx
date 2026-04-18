import Link from "@/components/Shared/Link";
import Socials from "@/components/Shared/Socials";

export default function Footer() {
  return (
    <footer
      className="mx-auto mb-12 flex max-w-4xl flex-col items-center space-y-4 px-8 text-center"
      style={{ borderTop: "1px solid rgba(255,215,0,0.1)", paddingTop: "2rem" }}
    >
      <div className="pokeball-bounce">
        <svg viewBox="0 0 40 40" width="30" height="30">
          <circle cx="20" cy="20" r="18" fill="#0a0a14" stroke="rgba(255,215,0,0.4)" strokeWidth="1.5"/>
          <path d="M4,20 A16,16 0 0,1 36,20 Z" fill="#CC0000"/>
          <path d="M4,20 A16,16 0 0,0 36,20 Z" fill="#f0f0f0"/>
          <rect x="2" y="18" width="36" height="4" fill="#111"/>
          <circle cx="20" cy="20" r="5" fill="#111"/>
          <circle cx="20" cy="20" r="3.5" fill="#f0f0f0"/>
          <circle cx="18" cy="18" r="1.2" fill="rgba(255,255,255,0.6)"/>
        </svg>
      </div>

      <Socials small />

      <p className="font-pokemon text-[0.45rem] text-gray-500 tracking-widest">
        TRAINER SAKETH KILARU — GOTTA BUILD &apos;EM ALL
      </p>
      <p className="text-xs text-gray-600">
        Built with{" "}
        <Link href="https://nextjs.org" className="text-poke-yellow/60 hover:text-poke-yellow">
          Next.js
        </Link>{" "}
        · Data Engineer · Syracuse University
      </p>
    </footer>
  );
}
