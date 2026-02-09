import { SectionTitle } from "./SectionTitle";

export function EducationSection() {
  return (
    <section>
      <SectionTitle>Pendidikan</SectionTitle>
      <div className="flex flex-col gap-1 border-l-2 border-blue-100 pl-4">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-sm font-bold text-zinc-900">
            SMK Swasta Prakarya Internasional
          </h3>
          <span className="font-mono text-[10px] text-zinc-500">
            2024 - 2027
          </span>
        </div>
        <p className="text-xs leading-relaxed text-zinc-600">
          Jurusan Pengembangan Perangkat Lunak dan Gim (PPLG).
        </p>
      </div>
    </section>
  );
}
