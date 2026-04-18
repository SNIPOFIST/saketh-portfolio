import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import Link from "@/components/Shared/Link";
import { ArrowLeft } from "react-feather";
import projects, { Project } from "@/data/projects";

interface ProjectPageProps {
  project: Project;
}

const ProjectPage: NextPage<ProjectPageProps> = ({ project }) => {
  return (
    <>
      <NextSeo title={project.name} />
      <div className="flex flex-col">
        <Link
          href="/projects"
          className="group mb-8 flex items-center space-x-2 text-gray-400 transition hover:text-accent"
          noGradientUnderline
        >
          <ArrowLeft className="h-4 w-4 transition duration-200 group-hover:-translate-x-1" />
          <span>All Projects</span>
        </Link>

        {/* Pokeball + title */}
        <div className="poke-card p-6 mb-6 flex items-center gap-5">
          <div
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl text-4xl"
            style={{ background: "rgba(255,215,0,0.08)", border: "1px solid rgba(255,215,0,0.25)" }}
          >
            {project.iconEmoji}
          </div>
          <div>
            <h1 className="font-pokemon text-base md:text-xl text-poke-yellow leading-snug">{project.name}</h1>
            <p className="font-pokemon text-[0.42rem] text-gray-600 mt-1">{project.period}</p>
          </div>
        </div>

        <p className="mb-8 text-base text-gray-300 leading-relaxed">{project.longDescription}</p>

        <div className="mb-8 poke-card p-6">
          <h2 className="font-pokemon text-[0.6rem] text-poke-yellow mb-4">◆ Key Highlights</h2>
          <ul className="space-y-3">
            {project.highlights.map((highlight, i) => (
              <li key={i} className="flex items-start space-x-3">
                <span className="text-poke-red mt-1 shrink-0">◆</span>
                <span className="text-sm text-gray-300">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="font-pokemon text-[0.6rem] text-poke-yellow mb-4">◆ Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-sm border border-poke-yellow/20 bg-poke-card/60 px-3 py-1 text-sm text-gray-400 font-mono"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {(project.link || project.githubLink) && (
          <div className="flex flex-wrap gap-4">
            {project.link && (
              <Link href={project.link}>Visit Project</Link>
            )}
            {project.githubLink && (
              <Link href={project.githubLink}>View on GitHub</Link>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { notFound: true };
  }

  return {
    props: { project },
  };
};

export default ProjectPage;
