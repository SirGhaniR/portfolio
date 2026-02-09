import { SectionTitle } from "./SectionTitle";

export function WorkScopeSection() {
  return (
    <section>
      <SectionTitle>Lingkup Kerja</SectionTitle>
      <div className="space-y-4">
        <p className="leading-relaxed text-zinc-700">
          Pengembangan arsitektur server menggunakan{" "}
          <strong>Laravel (PHP)</strong> dan <strong>Node.js/Express</strong>.
          Fokus utama mencakup perancangan database MySQL dan MongoDB,
          implementasi autentikasi, serta integrasi API yang aman dan terukur.
        </p>
        <p className="border-l-2 border-blue-100 pl-4 text-xs leading-relaxed text-zinc-500">
          Siswa XI PPLG di SMK Swasta Prakarya Internasional Bandung.
        </p>
      </div>
    </section>
  );
}
