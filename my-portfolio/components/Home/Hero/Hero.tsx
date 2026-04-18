import Socials from "@/components/Shared/Socials";
import Image from "next/image";
import { useState } from "react";

const PokeballScroll = () => (
  <div className="flex flex-col items-center space-y-2 mt-16">
    <span className="font-pokemon text-[0.5rem] text-poke-yellow/60 tracking-widest uppercase">
      Scroll
    </span>
    <div className="pokeball-bounce">
      <svg viewBox="0 0 60 60" width="38" height="38" xmlns="http://www.w3.org/2000/svg">
        <circle cx="30" cy="30" r="28" fill="#0a0a14" stroke="rgba(255,215,0,0.5)" strokeWidth="1.5" />
        <path d="M4,30 A26,26 0 0,1 56,30 Z" fill="#CC0000" />
        <path d="M4,30 A26,26 0 0,0 56,30 Z" fill="#f0f0f0" />
        <rect x="3" y="27" width="54" height="6" fill="#111" />
        <circle cx="30" cy="30" r="9" fill="#111" />
        <circle cx="30" cy="30" r="6" fill="#f0f0f0" />
        <circle cx="27" cy="27" r="2" fill="rgba(255,255,255,0.7)" />
      </svg>
    </div>
    <svg width="12" height="20" viewBox="0 0 12 20" className="text-poke-yellow/50">
      <path d="M6 0 L6 16 M1 11 L6 18 L11 11" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  </div>
);

export default function Hero() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex min-h-[88vh] flex-col justify-center pt-20">
      {/* ── Top badge ── */}
      <div className="mb-6 flex items-center space-x-3">
        <span className="h-px w-8 bg-poke-yellow/40" />
        <span className="font-pokemon text-[0.5rem] text-poke-yellow/70 tracking-widest uppercase">
          Trainer Card
        </span>
        <span className="h-px flex-1 bg-poke-yellow/20" />
      </div>

      {/* ── Main hero row ── */}
      <div className="flex flex-col-reverse gap-8 md:flex-row md:items-center md:justify-between">
        {/* Left: text */}
        <div className="flex flex-col space-y-5 md:w-2/3">
          {/* Name with fire glow */}
          <h1
            className="font-pokemon leading-snug text-3xl md:text-4xl transition-all duration-300"
            style={{
              color: hovered ? "#fff" : "#f0f0f0",
              textShadow: hovered
                ? "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #f97316, 0 0 82px #f97316, 0 0 92px #ea580c, 0 0 102px #dc2626, 0 0 151px #dc2626"
                : "0 0 8px rgba(255,215,0,0.2)",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            Saketh
            <br />
            <span style={{ color: hovered ? "#FFD700" : "#f0f0f0" }}>Kilaru</span>
          </h1>

          {/* Type badges */}
          <div className="flex flex-wrap gap-2">
            {[
              { label: "DATA", color: "#224b8d" },
              { label: "AI", color: "#6890F0" },
              { label: "NLP", color: "#4a0080" },
              { label: "CLOUD", color: "#1a6b3c" },
            ].map((t) => (
              <span
                key={t.label}
                className="type-badge"
                style={{ background: t.color, color: "#fff" }}
              >
                {t.label}
              </span>
            ))}
          </div>

          {/* Tagline */}
          <p className="font-pokemon text-[0.6rem] text-poke-yellow/80 tracking-wide leading-6">
            Data Engineer · AI Enthusiast · MS ADS @ Syracuse
          </p>

          {/* Bio */}
          <p className="text-base text-gray-300 leading-relaxed max-w-lg">
            I build scalable data pipelines and ML solutions. Focused on data
            engineering, NLP, and cloud-native architectures — turning messy
            operational data into insights that drive decisions.
          </p>

          {/* Stats bar */}
          <div className="rounded-lg border border-poke-yellow/20 bg-poke-card/60 p-4 space-y-2 max-w-sm">
            <p className="font-pokemon text-[0.45rem] text-poke-yellow/60 uppercase tracking-widest mb-3">
              Trainer Stats
            </p>
            {[
              { label: "Data Engineering", val: 90, cls: "" },
              { label: "ML / NLP", val: 82, cls: "high" },
              { label: "Cloud (AWS)", val: 78, cls: "mid" },
              { label: "Visualization", val: 75, cls: "" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <span className="text-[0.6rem] text-gray-400 w-36 shrink-0">{s.label}</span>
                <div className="hp-bar flex-1">
                  <div
                    className={`hp-bar-fill ${s.cls}`}
                    style={{ width: `${s.val}%` }}
                  />
                </div>
                <span className="font-pokemon text-[0.4rem] text-poke-yellow/70">{s.val}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 !mt-4">
            <Socials />
            <a
              href="/static/Saketh_Kilaru_Resume.pdf"
              download
              className="poke-btn rounded px-4 py-2 text-white text-xs flex items-center gap-2"
            >
              <span>⬇</span> Resume
            </a>
          </div>
        </div>

        {/* Right: avatar */}
        <div className="flex flex-col items-center space-y-4">
          <div
            className="relative h-36 w-36 overflow-hidden rounded-full gold-pulse"
            style={{
              border: "2px solid rgba(255,215,0,0.5)",
              boxShadow: "0 0 0 4px rgba(204,0,0,0.15), 0 0 24px rgba(255,215,0,0.2)",
            }}
          >
            <Image
              src="/static/images/avatar.png"
              alt="Saketh Kilaru"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Trainer label */}
          <div
            className="rounded-md border border-poke-yellow/30 bg-poke-card/70 px-3 py-1.5 text-center"
          >
            <p className="font-pokemon text-[0.45rem] text-poke-yellow/60 uppercase tracking-widest">
              Trainer #001
            </p>
            <p className="font-pokemon text-[0.55rem] text-white mt-1">Saketh</p>
          </div>
        </div>
      </div>

      {/* ── Pokeball Scroll Indicator ── */}
      <PokeballScroll />
    </div>
  );
}
