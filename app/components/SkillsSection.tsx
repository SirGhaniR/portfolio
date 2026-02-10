import { skills } from "../data/portfolio";
import { SectionTitle } from "./SectionTitle";

export function SkillsSection() {
  return (
    <section>
      <SectionTitle>Skills</SectionTitle>
      <div className="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
        {skills.map((skill) => (
          <article key={skill.title} className="flex gap-3">
            <div className="mt-0.5 shrink-0">{skill.icon}</div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900">
                {skill.title}
              </h3>
              <p className="text-xs leading-normal text-zinc-600">
                {skill.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
