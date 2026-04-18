import skillCategories from "@/data/skills";

const categoryColors: Record<string, string> = {
  "Data Engineering": "#f97316",
  "Cloud & Pipelines": "#6890F0",
  "Analytics & ML": "#a855f7",
  "Visualization": "#22c55e",
  "Tools": "#FFD700",
};

export default function Skills() {
  return (
    <div className="my-20 flex flex-col">
      <div className="mb-8 flex items-center space-x-4">
        <span className="font-pokemon text-poke-red text-[0.5rem] tracking-widest uppercase">
          ▶ Skill Tree
        </span>
        <h2 className="font-pokemon text-xl text-poke-yellow">Skills</h2>
        <span className="h-px flex-1 bg-poke-yellow/20" />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {skillCategories.map((cat) => {
          const color = categoryColors[cat.category] || "#FFD700";
          return (
            <div key={cat.category} className="poke-card p-5">
              <div className="mb-4 flex items-center gap-2">
                <span
                  className="type-badge"
                  style={{ background: color, color: "#fff" }}
                >
                  {cat.category.split(" ")[0].toUpperCase()}
                </span>
                <h3
                  className="font-pokemon text-[0.5rem] uppercase tracking-widest"
                  style={{ color }}
                >
                  {cat.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-sm border bg-poke-dark/60 px-3 py-1 text-sm text-gray-300 font-mono transition-colors hover:border-poke-yellow/40 hover:text-white"
                    style={{ borderColor: `${color}25` }}
                  >
                    {skill}
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
