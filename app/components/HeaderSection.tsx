import { Github, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { BatLine, BatOutput } from "./BatOutput";

export function HeaderSection() {
  return (
    <header className="flex flex-col gap-6">
      <p className="shell-prompt font-mono text-base font-bold text-primary">
        <span className="text-success">➜</span>
        <span className="text-base-content/40"> ~/portfolio </span>
        <span className="text-warning">$</span>
        <span className="text-base-content/40"> bat </span>
        <span className="text-info">about.md</span>
      </p>

      <BatOutput file="about.md">
        <BatLine line={1}>
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-md border border-base-300/50 bg-base-300/30 p-1 md:h-28 md:w-28">
            <Image
              src="/img/profile.jpeg"
              fill={true}
              alt="Raihan Ghani Fausta Picture"
              className="rounded object-cover"
            />
          </div>
        </BatLine>
        <BatLine line={2}>
          <span>
            <span className="text-warning">#</span>{" "}
            <span className="text-base-content">Raihan Ghani Fausta</span>
          </span>
        </BatLine>
        <BatLine line={3}>
          <span className="text-error">**Role:**</span>{" "}
          <span className="text-primary">Backend Engineer</span>
        </BatLine>
        <BatLine line={4}>
          <span className="text-error">**Stack:**</span>{" "}
          <span className="text-base-content/70">
            MongoDB — React — Express.js — Node.js
          </span>
        </BatLine>
      </BatOutput>

      <div className="flex flex-col gap-2">
        <p className="shell-prompt font-mono text-base font-bold text-primary">
          <span className="text-success">➜</span>
          <span className="text-base-content/40"> ~/portfolio </span>
          <span className="text-warning">$</span>
          <span className="text-base-content/40"> bat </span>
          <span className="text-info">contacts.md</span>
        </p>

        <BatOutput file="contacts.md">
          <BatLine line={1}>
            <a
              href="mailto:ghanifaustaraihan@gmail.com"
              className="inline-flex items-center gap-2 text-base-content/70 transition-colors hover:text-primary"
            >
              <Mail size={16} className="text-warning" aria-hidden="true" />
              ghanifaustaraihan@gmail.com
            </a>
          </BatLine>
          <BatLine line={2}>
            <a
              href="tel:+6285775080266"
              className="inline-flex items-center gap-2 text-base-content/70 transition-colors hover:text-primary"
            >
              <Phone size={16} className="text-info" aria-hidden="true" />
              +62 857-7508-0266
            </a>
          </BatLine>
          <BatLine line={3}>
            <span className="inline-flex items-center gap-2 text-base-content/70">
              <MapPin size={16} className="text-accent" aria-hidden="true" />
              Bandung, Jawa Barat
            </span>
          </BatLine>
          <BatLine line={4}>
            <a
              href="https://github.com/SirGhaniR"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-base-content/70 transition-colors hover:text-primary"
            >
              <Github
                size={16}
                className="text-base-content/40"
                aria-hidden="true"
              />
              github.com/SirGhaniR
            </a>
          </BatLine>
        </BatOutput>
      </div>
    </header>
  );
}
