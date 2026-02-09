import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Code2,
  Database,
  GitBranch,
  Terminal,
  Server,
  Cpu,
  CheckCircle2,
} from "lucide-react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen max-w-2xl mx-auto px-6 py-12 md:py-16 flex flex-col gap-12 selection:bg-blue-100 selection:text-blue-900 text-zinc-800">
      {/* Header - Identitas < 10 Detik */}
      <header className="flex flex-col gap-6 border-b border-zinc-200 pb-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900">
            Raihan Ghani Fausta (Gani)
          </h1>
          <div className="flex flex-col gap-1.5">
            <span className="text-xl md:text-2xl font-bold text-blue-700 tracking-tight leading-none">
              Backend Developer
            </span>
            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.25em] leading-relaxed">
              Laravel • Node.js • Express • MySQL • MongoDB
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8 text-sm text-zinc-500">
          <a
            href="mailto:ghanifaustaraihan@gmail.com"
            className="flex items-center gap-2 hover:text-blue-600 transition-colors"
          >
            <Mail size={14} /> ghanifaustaraihan@gmail.com
          </a>
          <a
            href="tel:+6285775080266"
            className="flex items-center gap-2 hover:text-blue-600 transition-colors"
          >
            <Phone size={14} /> +62 857-7508-0266
          </a>
          <div className="flex items-center gap-2">
            <MapPin size={14} /> Bandung, Jawa Barat
          </div>
          <a
            href="https://github.com/SirGhaniR"
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2 hover:text-blue-600 transition-colors"
          >
            <Github size={14} /> github.com/SirGhaniR
          </a>
        </div>
      </header>

      {/* Fokus Utama */}
      <section>
        <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400 mb-4">
          Lingkup Kerja
        </h2>
        <div className="space-y-4">
          <p className="text-zinc-700 leading-relaxed">
            Pengembangan arsitektur server menggunakan{" "}
            <span className="font-semibold text-zinc-900 border-b-2 border-blue-100">
              Laravel (PHP)
            </span>{" "}
            dan{" "}
            <span className="font-semibold text-zinc-900 border-b-2 border-blue-100">
              Node.js/Express
            </span>
            . Pengerjaan fokus pada manajemen database{" "}
            <span className="font-semibold text-zinc-900">MySQL</span> dan{" "}
            <span className="font-semibold text-zinc-900">MongoDB</span>,
            implementasi logika autentikasi, serta penyediaan integrasi API.
          </p>
          <p className="text-zinc-500 text-xs leading-relaxed border-l-2 border-blue-100 pl-4">
            Siswa XI PPLG di SMK Swasta Prakarya Internasional Bandung.
          </p>
        </div>
      </section>

      {/* Proyek Terpilih */}
      <section>
        <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400 mb-4">
          Proyek Backend
        </h2>
        <div className="grid grid-cols-1 gap-4">
          <ProjectCard
            title="Laravel Library Management API"
            year="2025"
            desc="Sistem manajemen perpustakaan. Menggunakan Laravel Sanctum untuk autentikasi Bearer token, database constraints (foreign keys, enums), dan logika peminjaman buku dengan proteksi middleware."
            link="https://github.com/SirGhaniR/laravel-library"
          />
          <ProjectCard
            title="Subscription Tracker Core"
            year="2025"
            desc="API pelacak tagihan rutin berbasis Node.js dan MongoDB. Implementasi logika siklus billing, kalkulasi biaya per periode, dan manajemen status langganan user."
            link="https://github.com/SirGhaniR/subscription-tracker"
          />
        </div>
      </section>

      {/* Rincian Keahlian Teknikal */}
      <section>
        <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400 mb-4">
          Spesifikasi Teknikal
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
          <SkillItem
            icon={<Server size={16} className="text-blue-400" />}
            title="Laravel Ecosystem"
            desc="Sanctum Auth, Eloquent ORM, Migrations, Seeders, dan Controller logic."
          />
          <SkillItem
            icon={<Code2 size={16} className="text-blue-400" />}
            title="Node.js & Express"
            desc="REST API, implementasi JWT (JSON Web Token), dan integrasi middleware."
          />
          <SkillItem
            icon={<CheckCircle2 size={16} className="text-blue-400" />}
            title="Testing & Logging"
            desc="Unit testing menggunakan Jest dan Supertest. Logging sistem dengan Pino."
          />
          <SkillItem
            icon={<Database size={16} className="text-blue-400" />}
            title="Database"
            desc="Skema relasional di MySQL dan pemodelan data dokumen pada MongoDB."
          />
          <SkillItem
            icon={<GitBranch size={16} className="text-blue-400" />}
            title="Git Workflow"
            desc="Operasi Branching, Stash, Revert, dan manajemen repository GitHub."
          />
          <SkillItem
            icon={<Terminal size={16} className="text-blue-400" />}
            title="Environment"
            desc="Konfigurasi environment variables (.env) dan pengoperasian dasar terminal (CLI)."
          />
        </div>
      </section>

      {/* Pendidikan */}
      <section>
        <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400 mb-4">
          Pendidikan
        </h2>
        <div className="flex flex-col gap-1 border-l-2 border-blue-100 pl-4">
          <div className="flex justify-between items-baseline">
            <h3 className="text-sm font-bold text-zinc-900">
              SMK Swasta Prakarya Internasional
            </h3>
            <span className="text-[10px] font-mono text-zinc-400">
              2024 - 2027
            </span>
          </div>
          <p className="text-xs text-zinc-500 leading-relaxed">
            Jurusan Pengembangan Perangkat Lunak dan Gimm (PPLG).
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-zinc-200 pt-8 pb-10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.4em]">
          Raihan Ghani Fausta © 2025
        </p>
        <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">
          Backend Engineering
        </div>
      </footer>
    </div>
  );
};

interface ProjectCardProps {
  title: string;
  year: string;
  desc: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  year,
  desc,
  link,
}) => (
  <div className="border border-zinc-200 bg-white p-5 rounded-sm shadow-sm hover:border-blue-200 transition-colors group">
    <div className="flex justify-between items-baseline mb-2">
      <h3 className="font-bold text-zinc-900 group-hover:text-blue-700 transition-colors">
        {title}
      </h3>
      <span className="text-[10px] px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded font-mono font-bold border border-blue-100">
        {year}
      </span>
    </div>
    <p className="text-sm text-zinc-500 mb-4 leading-relaxed">{desc}</p>
    <a
      href={link}
      target="_blank"
      rel="noopener"
      className="text-xs font-bold text-zinc-900 border-b border-zinc-900 pb-0.5 hover:text-blue-700 hover:border-blue-700 transition-colors inline-block"
    >
      GitHub Repository
    </a>
  </div>
);

interface SkillItemProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ icon, title, desc }) => (
  <div className="flex gap-3">
    <div className="flex-shrink-0 mt-0.5">{icon}</div>
    <div className="flex flex-col gap-0.5">
      <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider">
        {title}
      </h4>
      <p className="text-xs text-zinc-500 leading-normal">{desc}</p>
    </div>
  </div>
);

export default App;
