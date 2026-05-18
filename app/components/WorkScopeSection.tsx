import { SectionTitle } from "./SectionTitle";

export function WorkScopeSection() {
  return (
    <section>
      <SectionTitle>scope.txt</SectionTitle>
      <div className="flex flex-col gap-3 pl-4">
        <p className="font-mono text-sm leading-relaxed text-base-content/70">
          Pengembangan arsitektur server menggunakan{" "}
          <span className="text-primary">Laravel (PHP)</span> dan{" "}
          <span className="text-primary">Node.js/Express</span>. Fokus utama
          mencakup perancangan database MySQL dan MongoDB, implementasi
          autentikasi, serta integrasi API yang aman dan terukur.
        </p>
        <p className="font-mono text-xs text-base-content/40">
          <span className="text-warning">#</span> Siswa XI PPLG di SMK Swasta
          Prakarya Internasional Bandung.
        </p>
      </div>
    </section>
  );
}
