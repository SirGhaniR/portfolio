import { SectionTitle } from "./SectionTitle";

export function WorkScopeSection() {
  return (
    <section>
      <SectionTitle>Lingkup Kerja</SectionTitle>
      <div className="space-y-4">
        <p className="leading-relaxed text-base-content/80">
          Pengembangan arsitektur server menggunakan{" "}
          <strong>Laravel (PHP)</strong> dan <strong>Node.js/Express</strong>.
          Fokus utama mencakup perancangan database MySQL dan MongoDB,
          implementasi autentikasi, serta integrasi API yang aman dan terukur.
        </p>
        <p className="border-l-2 border-primary/20 pl-4 text-xs leading-relaxed text-base-content/60">
          Siswa XI PPLG di SMK Swasta Prakarya Internasional Bandung.
        </p>
      </div>
    </section>
  );
}
