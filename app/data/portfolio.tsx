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
    title: "Laravel Library Management API",
    year: "2025",
    description:
      "Sistem manajemen perpustakaan dengan Laravel Sanctum, database constraints, dan logika peminjaman buku berbasis middleware.",
    githubLink: "https://github.com/SirGhaniR/laravel-library",
    readMoreLink:
      "https://docs.google.com/document/d/1OhjDWtiyPEiWHlapeVIX3rSQdwfCp03nBanNUswrggo/edit?usp=drive_link",
    tech: ["Laravel", "Sanctum", "MySQL", "REST API"],
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
];

export const skills: Skill[] = [
  {
    title: "Laravel Ecosystem",
    description:
      "Sanctum Auth, Eloquent ORM, migrations, seeders, dan controller logic.",
    icon: <Server size={16} className="text-blue-500" aria-hidden="true" />,
  },
  {
    title: "Node.js & Express",
    description:
      "REST API, JWT authentication, validasi input, dan middleware integrasi.",
    icon: <Code2 size={16} className="text-blue-500" aria-hidden="true" />,
  },
  {
    title: "Testing & Logging",
    description:
      "Unit testing dengan Jest/Supertest dan implementasi logging menggunakan Pino.",
    icon: (
      <CheckCircle2 size={16} className="text-blue-500" aria-hidden="true" />
    ),
  },
  {
    title: "Database",
    description: "Pemodelan data relasional di MySQL dan dokumen pada MongoDB.",
    icon: <Database size={16} className="text-blue-500" aria-hidden="true" />,
  },
  {
    title: "Git Workflow",
    description:
      "Branching, stash, revert, dan kolaborasi repository di GitHub.",
    icon: <GitBranch size={16} className="text-blue-500" aria-hidden="true" />,
  },
  {
    title: "Environment",
    description:
      "Manajemen .env, konfigurasi deployment, dan pengoperasian CLI harian.",
    icon: <Terminal size={16} className="text-blue-500" aria-hidden="true" />,
  },
];
