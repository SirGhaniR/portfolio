import { projects } from "../data/portfolio";
import { SectionTitle } from "./SectionTitle";

export function ProjectsSection() {
  return (
    <section>
      <SectionTitle>Proyek Backend</SectionTitle>
      <div className="grid grid-cols-1 gap-4">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group rounded-sm border border-zinc-200 bg-white p-5 shadow-sm transition-colors hover:border-blue-200"
          >
            <div className="mb-2 flex items-baseline justify-between gap-4">
              <h3 className="font-bold text-zinc-900 transition-colors group-hover:text-blue-700">
                {project.title}
              </h3>
              <span className="rounded border border-blue-100 bg-blue-50 px-1.5 py-0.5 font-mono text-[10px] font-bold text-blue-600">
                {project.year}
              </span>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-zinc-600">
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-block border-b border-zinc-900 pb-0.5 text-xs font-bold text-zinc-900 transition-colors hover:border-blue-700 hover:text-blue-700"
            >
              GitHub Repository
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
