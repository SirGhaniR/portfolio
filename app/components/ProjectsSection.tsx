import { projects } from "../data/portfolio";
import { BatLine, BatOutput } from "./BatOutput";
import { SectionTitle } from "./SectionTitle";

export function ProjectsSection() {
  return (
    <section>
      <SectionTitle>projects.md</SectionTitle>
      <BatOutput file="projects.md">
        {projects.map((project, index) => {
          const line = index * 5;

          return (
            <div
              key={project.title}
              className="transition-colors hover:text-base-content"
            >
              <BatLine line={line + 1}>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-base font-bold text-base-content">
                    <span className="text-warning">##</span>{" "}
                    <span className="text-info">{project.title}</span>
                  </h3>
                  <span className="text-base font-semibold text-base-content/35">
                    <span className="text-warning">#</span> {project.year}
                  </span>
                </div>
              </BatLine>
              <BatLine line={line + 2} className="text-base-content/65">
                {project.description}
              </BatLine>
              <BatLine line={line + 3}>
                <div className="flex flex-wrap gap-x-3 gap-y-0">
                  <span className="text-base font-semibold text-error">
                    **Tech:**
                  </span>
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-base font-semibold text-base-content/45"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </BatLine>
              <BatLine line={line + 4}>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-0">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-base font-semibold text-base-content/55 transition-colors hover:text-primary"
                  >
                    <span className="text-info">→</span> GitHub Repository
                  </a>
                  <a
                    href={project.readMoreLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-base font-semibold text-base-content/55 transition-colors hover:text-primary"
                  >
                    <span className="text-info">→</span> Read More
                  </a>
                </div>
              </BatLine>
              {index < projects.length - 1 ? (
                <BatLine line={line + 5} className="text-base-content/40">
                  &nbsp;
                </BatLine>
              ) : null}
            </div>
          );
        })}
      </BatOutput>
    </section>
  );
}
