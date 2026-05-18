import { BatLine, BatOutput } from "./BatOutput";
import { SectionTitle } from "./SectionTitle";

export function EducationSection() {
  return (
    <section>
      <SectionTitle>education.md</SectionTitle>
      <BatOutput file="education.md">
        <BatLine line={1}>
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="text-base font-bold text-base-content">
              SMK Swasta Prakarya Internasional
            </h3>
            <span className="text-base font-semibold text-base-content/35">
              <span className="text-warning">#</span> 2024 - Now
            </span>
          </div>
        </BatLine>
        <BatLine line={2} className="text-base-content/55">
          Jurusan Pengembangan Perangkat Lunak dan Gim (PPLG).
        </BatLine>
      </BatOutput>
    </section>
  );
}
