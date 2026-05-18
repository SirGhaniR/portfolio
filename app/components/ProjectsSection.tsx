import { projects } from "../data/portfolio";
import { SectionTitle } from "./SectionTitle";

export function ProjectsSection() {
  return (
    <section>
      <SectionTitle>Projects</SectionTitle>
      <div className="grid grid-cols-1 gap-4">
        {projects.map((project) => (
          <article
            key={project.title}
            className="card border border-base-200 bg-base-100 p-5 shadow-sm transition-colors hover:border-primary/30"
          >
            <div className="mb-2 flex items-baseline justify-between gap-4">
              <h3 className="font-bold text-base-content transition-colors group-hover:text-primary">
                {project.title}
              </h3>
              <span className="badge border border-primary/20 bg-primary/10 font-mono text-[10px] font-bold text-primary">
                {project.year}
              </span>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-base-content/70">
              {project.description}
            </p>
            <div className="mb-4 flex flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="badge border border-base-200 bg-base-200/50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-base-content/70"
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
                className="link link-hover border-b border-base-content pb-0.5 text-xs font-bold text-base-content"
              >
                GitHub Repository
              </a>
              <a
                href={project.readMoreLink}
                target="_blank"
                rel="noreferrer"
                className="link link-hover border-b border-primary pb-0.5 text-xs font-bold text-primary"
              >
                Read More
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
