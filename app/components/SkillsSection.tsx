import { skills } from "../data/portfolio";
import { SectionTitle } from "./SectionTitle";

export function SkillsSection() {
  return (
    <section>
      <SectionTitle>skills.txt</SectionTitle>
      <div className="grid grid-cols-1 gap-x-8 gap-y-3 pl-4 sm:grid-cols-2">
        {skills.map((skill) => (
          <article key={skill.title} className="flex gap-2.5">
            <div className="mt-0.5 shrink-0">{skill.icon}</div>
            <div className="flex flex-col gap-0.5">
              <h3 className="font-mono text-xs font-bold text-base-content">
                {skill.title}
              </h3>
              <p className="font-mono text-xs leading-relaxed text-base-content/50">
                {skill.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
