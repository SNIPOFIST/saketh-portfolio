import experiences from "@/data/experience";

const companyColors: Record<string, string> = {
  amazon: "#f97316",
  "jupiter-money": "#6890F0",
  aethereus: "#4ade80",
};

export default function Experience() {
  return (
    <div className="my-20 flex flex-col">
      {/* Section header */}
      <div className="mb-8 flex items-center space-x-4">
        <span className="font-pokemon text-poke-red text-[0.5rem] tracking-widest uppercase">
          ▶ Battle Log
        </span>
        <h2 className="font-pokemon text-xl text-poke-yellow">Experience</h2>
        <span className="h-px flex-1 bg-poke-yellow/20" />
      </div>

      <div className="flex flex-col space-y-6">
        {experiences.map((exp, i) => {
          const color = companyColors[exp.id] || "#FFD700";
          return (
            <div key={exp.id} className="poke-card p-6">
              {/* Card top bar */}
              <div
                className="mb-4 h-1 rounded-full"
                style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
              />

              <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="type-badge"
                      style={{ background: color, color: "#fff" }}
                    >
                      LVL {10 - i * 2}
                    </span>
                    <h3 className="font-pokemon text-[0.7rem] text-white leading-snug">
                      {exp.company}
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-gray-300">{exp.role}</p>
                </div>
                <span
                  className="font-pokemon text-[0.42rem] shrink-0 rounded border px-2 py-1"
                  style={{ borderColor: `${color}40`, color: color }}
                >
                  {exp.period}
                </span>
              </div>

              {/* Battle moves (highlights) */}
              <ul className="mt-4 space-y-2">
                {exp.highlights.map((h, j) => (
                  <li key={j} className="flex items-start space-x-3">
                    <span className="mt-1.5 text-poke-yellow text-xs">◆</span>
                    <span className="text-sm text-gray-400">{h}</span>
                  </li>
                ))}
              </ul>

              {/* Tech badges */}
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-sm border border-poke-yellow/20 bg-poke-dark/60 px-2.5 py-0.5 text-xs text-gray-400 font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
