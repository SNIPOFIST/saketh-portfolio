import projects from "@/data/projects";
import Link from "@/components/Shared/Link";
import { ArrowRight } from "react-feather";

export default function Projects() {
  return (
    <div className="my-20 flex flex-col">
      <div className="mb-8 flex items-center space-x-4">
        <span className="font-pokemon text-poke-red text-[0.5rem] tracking-widest uppercase">
          ▶ Pokedex Entry
        </span>
        <h2 className="font-pokemon text-xl text-poke-yellow">Projects</h2>
        <span className="h-px flex-1 bg-poke-yellow/20" />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {projects.slice(0, 4).map((project) => (
          <div key={project.slug} className="poke-card group relative overflow-hidden">
            <div className="absolute top-0 left-0 h-0.5 w-full bg-gradient-to-r from-poke-red via-poke-yellow/40 to-transparent" />
            <Link href={`/projects/${project.slug}`} noGradientUnderline>
              <div className="p-5 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{project.iconEmoji}</span>
                  <h3 className="font-pokemon text-[0.55rem] leading-snug text-white group-hover:text-poke-yellow transition-colors">
                    {project.name}
                  </h3>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded-sm border border-poke-yellow/15 bg-poke-dark/60 px-2 py-0.5 text-xs text-gray-500 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <Link
        href="/projects"
        className="group mt-8 flex w-fit items-center space-x-2 font-pokemon text-[0.6rem] text-poke-yellow hover:text-white transition-colors"
        noGradientUnderline
      >
        <span>VIEW ALL PROJECTS</span>
        <ArrowRight className="h-3 w-3 transition duration-200 group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
