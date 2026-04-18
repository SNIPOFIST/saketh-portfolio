import Link from "@/components/Shared/Link";

export default function Contact() {
  return (
    <div className="my-20 flex flex-col">
      <div className="mb-8 flex items-center space-x-4">
        <span className="font-pokemon text-poke-red text-[0.5rem] tracking-widest uppercase">
          ▶ Send Message
        </span>
        <h2 className="font-pokemon text-xl text-poke-yellow">Contact</h2>
        <span className="h-px flex-1 bg-poke-yellow/20" />
      </div>

      <div className="poke-card p-8 max-w-xl">
        {/* Pokeball decoration */}
        <div className="mb-5 flex items-center gap-3">
          <svg viewBox="0 0 40 40" width="28" height="28">
            <circle cx="20" cy="20" r="18" fill="#0a0a14" stroke="rgba(255,215,0,0.4)" strokeWidth="1.5"/>
            <path d="M4,20 A16,16 0 0,1 36,20 Z" fill="#CC0000"/>
            <path d="M4,20 A16,16 0 0,0 36,20 Z" fill="#f0f0f0"/>
            <rect x="2" y="18" width="36" height="4" fill="#111"/>
            <circle cx="20" cy="20" r="6" fill="#111"/>
            <circle cx="20" cy="20" r="4" fill="#f0f0f0"/>
            <circle cx="18" cy="18" r="1.3" fill="rgba(255,255,255,0.65)"/>
          </svg>
          <p className="font-pokemon text-[0.55rem] text-poke-yellow/80 tracking-wider">
            WANT TO TRADE?
          </p>
        </div>

        <p className="text-base text-gray-300 leading-relaxed mb-4">
          Open to data engineering, ML engineering, and data science opportunities.
          Send me a Pokeball — I mean, an email:
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            href="mailto:srkilaru@syr.edu"
            noExternalLinkIcon
            noGradientUnderline
            className="poke-btn rounded px-4 py-2 text-white"
          >
            srkilaru@syr.edu
          </Link>
          <Link
            href="https://www.linkedin.com/in/sakethkil/"
            noExternalLinkIcon
            noGradientUnderline
            className="rounded border border-poke-yellow/40 bg-poke-dark/60 px-4 py-2 font-pokemon text-[0.55rem] text-poke-yellow hover:border-poke-yellow/80 transition-colors"
          >
            LinkedIn ↗
          </Link>
          <a
            href="/static/Saketh_Kilaru_Resume.pdf"
            download
            className="rounded border border-poke-yellow/40 bg-poke-dark/60 px-4 py-2 font-pokemon text-[0.55rem] text-poke-yellow hover:border-poke-yellow/80 transition-colors flex items-center gap-1.5"
          >
            ⬇ Resume PDF
          </a>
        </div>
      </div>
    </div>
  );
}
