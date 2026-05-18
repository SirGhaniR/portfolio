import { SectionTitle } from "./SectionTitle";

export function EducationSection() {
  return (
    <section>
      <SectionTitle>education.txt</SectionTitle>
      <div className="flex flex-col gap-3 pl-4">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-mono text-sm font-bold text-base-content">
            SMK Swasta Prakarya Internasional
          </h3>
          <span className="font-mono text-[10px] text-base-content/30">
            <span className="text-warning">#</span> 2024 - Now
          </span>
        </div>
        <p className="font-mono text-xs leading-relaxed text-base-content/50">
          Jurusan Pengembangan Perangkat Lunak dan Gim (PPLG).
        </p>
      </div>
    </section>
  );
}
