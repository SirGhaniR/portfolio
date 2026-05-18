import { SectionTitle } from "./SectionTitle";

export function EducationSection() {
  return (
    <section>
      <SectionTitle>Pendidikan</SectionTitle>
      <div className="flex flex-col gap-1 border-l-2 border-primary/20 pl-4">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-sm font-bold text-base-content">
            SMK Swasta Prakarya Internasional
          </h3>
          <span className="font-mono text-[10px] text-base-content/60">
            2024 - Now
          </span>
        </div>
        <p className="text-xs leading-relaxed text-base-content/70">
          Jurusan Pengembangan Perangkat Lunak dan Gim (PPLG).
        </p>
      </div>
    </section>
  );
}
