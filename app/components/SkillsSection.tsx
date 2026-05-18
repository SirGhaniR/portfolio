import { skills } from "../data/portfolio";
import { BatLine, BatOutput } from "./BatOutput";
import { SectionTitle } from "./SectionTitle";

export function SkillsSection() {
  return (
    <section>
      <SectionTitle>skills.md</SectionTitle>
      <BatOutput file="skills.md">
        {skills.map((skill, index) => (
          <BatLine key={skill.title} line={index + 1}>
            <article className="flex gap-3">
              <div className="mt-1 shrink-0">{skill.icon}</div>
              <div className="min-w-0">
                <h3 className="text-base font-bold text-base-content">
                  {skill.title}
                </h3>
                <p className="text-base leading-7 text-base-content/55">
                  {skill.description}
                </p>
              </div>
            </article>
          </BatLine>
        ))}
      </BatOutput>
    </section>
  );
}
