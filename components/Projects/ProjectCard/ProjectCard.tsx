import Link from "@/components/Shared/Link";
import { GitHubLogo } from "@/components/Shared/Icons";
import { Project } from "@/data/projects";
import { cleanLink, getGitHubOwnerAndRepoFromLink } from "@/utils/helpers";

interface ProjectCardProps extends Project {}

const ProjectCard = ({
  slug,
  name,
  description,
  tech,
  link,
  githubLink,
  period,
  iconEmoji,
}: ProjectCardProps): JSX.Element => {
  return (
    <div className="poke-card overflow-hidden">
      {/* Red top stripe */}
      <div className="h-1 w-full bg-gradient-to-r from-poke-red via-poke-yellow/40 to-transparent" />

      <div className="p-6 space-y-4">
        <div className="flex items-start space-x-4">
          <div
            className="flex h-13 w-13 shrink-0 items-center justify-center rounded-lg text-2xl"
            style={{
              background: "rgba(255,215,0,0.07)",
              border: "1px solid rgba(255,215,0,0.25)",
              minWidth: 52,
              minHeight: 52,
            }}
          >
            {iconEmoji}
          </div>
          <div className="flex flex-col space-y-1">
            <Link
              href={`/projects/${slug}`}
              className="font-pokemon text-[0.65rem] text-white hover:text-poke-yellow transition-colors"
              noGradientUnderline
            >
              {name}
            </Link>
            <span className="font-pokemon text-[0.4rem] text-gray-600">{period}</span>
          </div>
        </div>

        <p className="text-sm text-gray-400">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-sm border border-poke-yellow/15 bg-poke-dark/60 px-2.5 py-0.5 text-xs text-gray-500 font-mono"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          {link && (
            <Link href={link} noHighlight className="text-sm text-gray-400 hover:text-poke-yellow">
              {cleanLink(link)}
            </Link>
          )}
          {githubLink && (
            <Link
              href={githubLink}
              icon={<GitHubLogo />}
              noHighlight
              className="text-sm text-gray-400 hover:text-poke-yellow"
            >
              {getGitHubOwnerAndRepoFromLink(githubLink)}
            </Link>
          )}
          <Link
            href={`/projects/${slug}`}
            className="ml-auto font-pokemon text-[0.5rem] text-poke-yellow hover:text-white transition-colors"
            noGradientUnderline
          >
            Inspect →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
