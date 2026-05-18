import type { ReactNode } from "react";
import {
  CheckCircle2,
  Code2,
  Database,
  GitBranch,
  Server,
  Terminal,
} from "lucide-react";

export type Project = {
  title: string;
  year: string;
  description: string;
  githubLink: string;
  readMoreLink: string;
  tech: string[];
};

export type Skill = {
  title: string;
  description: string;
  icon: ReactNode;
};

export const projects: Project[] = [
  {
    title: "MERN Thinkboard",
    year: "2026",
    description:
      "Aplikasi MERN sederhana untuk melatih workflow issue, pull request, review, dan kolaborasi Git dengan orang yang belum dikenal.",
    githubLink: "https://github.com/SirGhaniR/mern_thinkboard",
    readMoreLink: "https://github.com/SirGhaniR/mern_thinkboard",
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT"],
  },
  {
    title: "Subscription Tracker API",
    year: "2026",
    description:
      "API pelacak tagihan rutin berbasis Node.js dan MongoDB dengan logika billing cycle, kalkulasi biaya, serta status langganan.",
    githubLink: "https://github.com/SirGhaniR/subscription-tracker",
    readMoreLink:
      "https://docs.google.com/document/d/1K_MsrX7nFRaXFTRBNWPAg8bnhEpDXdh_vOBPdSP5cf8/edit?usp=drive_link",
    tech: ["Node.js", "Express", "JWT", "MongoDB", "REST API", "Pino", "Zod"],
  },
  {
    title: "Laravel Library Management API",
    year: "2025",
    description:
      "Sistem manajemen perpustakaan dengan Laravel Sanctum, database constraints, dan logika peminjaman buku berbasis middleware.",
    githubLink: "https://github.com/SirGhaniR/laravel-library",
    readMoreLink:
      "https://docs.google.com/document/d/1OhjDWtiyPEiWHlapeVIX3rSQdwfCp03nBanNUswrggo/edit?usp=drive_link",
    tech: ["Laravel", "Sanctum", "MySQL", "REST API"],
  },
];

export const skills: Skill[] = [
  {
    title: "Node.js & Express",
    description:
      "REST API, JWT authentication, validasi input, dan middleware.",
    icon: <Code2 size={16} className="text-success" aria-hidden="true" />,
  },
  {
    title: "Database",
    description:
      "Pemodelan data relasional di MariaDB dan non-relasional dokumen pada MongoDB.",
    icon: <Database size={16} className="text-accent" aria-hidden="true" />,
  },
  {
    title: "Git Workflow",
    description:
      "Branching, PR, issue, fork, code review, dan kolaborasi repository di GitHub.",
    icon: <GitBranch size={16} className="text-error" aria-hidden="true" />,
  },
  {
    title: "Environment",
    description:
      "Manajemen .env, konfigurasi deployment, dan pengoperasian CLI harian.",
    icon: <Terminal size={16} className="text-warning" aria-hidden="true" />,
  },
  {
    title: "Laravel Ecosystem",
    description:
      "Sanctum Auth, Eloquent ORM, migrations, seeders, dan controller logic.",
    icon: <Server size={16} className="text-error" aria-hidden="true" />,
  },
  {
    title: "Testing & Logging",
    description:
      "Unit testing dengan Jest/Supertest dan implementasi logging menggunakan Pino.",
    icon: (
      <CheckCircle2 size={16} className="text-primary" aria-hidden="true" />
    ),
  },
];
