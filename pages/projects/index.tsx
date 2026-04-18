import type { NextPage } from "next";
import { NextSeo } from "next-seo";

import ProjectCard from "@/components/Projects/ProjectCard";
import projects from "@/data/projects";

const ProjectsPage: NextPage = () => {
  return (
    <>
      <NextSeo title="Projects" />
      <div className="flex flex-col pt-10">
        {/* Header */}
        <div className="mb-2 flex items-center space-x-4">
          <span className="font-pokemon text-[0.5rem] text-poke-red tracking-widest uppercase">
            ▶ Pokedex
          </span>
          <span className="h-px flex-1 bg-poke-yellow/20" />
        </div>
        <h1 className="font-pokemon text-2xl text-poke-yellow mb-3">All Projects</h1>
        <p className="mb-12 text-base text-gray-400">
          Data engineering, ML, and analytics projects — caught and documented.
        </p>
        <div className="grid gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
