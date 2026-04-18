import education from "@/data/education";

export default function Education() {
  return (
    <div className="my-20 flex flex-col">
      <div className="mb-8 flex items-center space-x-4">
        <span className="font-pokemon text-poke-red text-[0.5rem] tracking-widest uppercase">
          ▶ Origin Story
        </span>
        <h2 className="font-pokemon text-xl text-poke-yellow">Education</h2>
        <span className="h-px flex-1 bg-poke-yellow/20" />
      </div>

      <div className="flex flex-col space-y-5">
        {education.map((edu, i) => (
          <div key={edu.id} className="poke-card p-6">
            <div
              className="mb-4 h-0.5 rounded-full"
              style={{
                background: i === 0
                  ? "linear-gradient(90deg, #FFD700, transparent)"
                  : "linear-gradient(90deg, #6890F0, transparent)",
              }}
            />
            <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="font-pokemon text-[0.65rem] text-poke-yellow leading-snug">
                  {edu.institution}
                </h3>
                <p className="text-sm text-gray-300 mt-1">{edu.degree}</p>
                <p className="text-xs text-gray-500 mt-0.5">{edu.location}</p>
              </div>
              <div className="text-right shrink-0">
                <span className="font-pokemon text-[0.42rem] text-gray-500">{edu.period}</span>
                {edu.gpa && (
                  <p className="font-pokemon text-[0.5rem] text-poke-yellow mt-1">
                    GPA {edu.gpa}
                  </p>
                )}
              </div>
            </div>
            {edu.details && edu.details.length > 0 && (
              <ul className="mt-3 space-y-1">
                {edu.details.map((d, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-gray-500">
                    <span className="text-poke-yellow">◆</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
