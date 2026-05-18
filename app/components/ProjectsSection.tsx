import { projects } from "../data/portfolio";
import { SectionTitle } from "./SectionTitle";

export function ProjectsSection() {
  return (
    <section>
      <SectionTitle>projects.txt</SectionTitle>
      <div className="flex flex-col gap-4 pl-4">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-lg border border-base-300/30 bg-base-200/30 p-4 transition-colors hover:border-primary/30"
          >
            <div className="mb-2 flex items-baseline justify-between gap-4">
              <h3 className="font-mono text-sm font-bold text-base-content">
                {project.title}
              </h3>
              <span className="font-mono text-[10px] text-base-content/30">
                <span className="text-warning">#</span> {project.year}
              </span>
            </div>
            <p className="mb-3 font-mono text-xs leading-relaxed text-base-content/50">
              {project.description}
            </p>
            <div className="mb-3 flex flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded bg-base-300/50 px-2 py-0.5 font-mono text-[10px] text-base-content/40"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs text-base-content/50 transition-colors hover:text-primary"
              >
                <span className="text-info">→</span> GitHub Repository
              </a>
              <a
                href={project.readMoreLink}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs text-base-content/50 transition-colors hover:text-primary"
              >
                <span className="text-info">→</span> Read More
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
