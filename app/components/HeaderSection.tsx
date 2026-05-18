import { Github, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export function HeaderSection() {
  return (
    <header className="flex flex-col gap-6">
      <p className="font-mono text-sm text-primary">
        <span className="text-base-content/40">[</span>
        <span className="text-success">ghani</span>
        <span className="text-primary">@</span>
        <span className="text-success">portfolio</span>
        <span className="text-base-content/40">]</span>
        <span className="text-info"> ~ </span>
        <span className="text-warning">$</span>
        <span className="text-base-content/40"> bat </span>
        <span className="text-info">about.txt</span>
      </p>

      <div className="flex items-center gap-5 pl-4">
        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg border border-base-300/50 bg-base-300/30 p-1 md:h-28 md:w-28">
          <Image
            src="/img/profile.jpeg"
            fill={true}
            alt="Raihan Ghani Fausta Picture"
            className="rounded-md object-cover"
          />
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="font-mono text-xl font-bold text-base-content md:text-2xl">
            Raihan Ghani Fausta
          </h1>
          <p className="font-mono text-base text-primary md:text-lg">
            Backend Engineer
          </p>
          <p className="font-mono text-xs text-base-content/40">
            Laravel — Node.js — Express — MySQL — MongoDB
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className="font-mono text-sm text-primary">
          <span className="text-base-content/40">[</span>
          <span className="text-success">ghani</span>
          <span className="text-primary">@</span>
          <span className="text-success">portfolio</span>
          <span className="text-base-content/40">]</span>
          <span className="text-info"> ~ </span>
          <span className="text-warning">$</span>
          <span className="text-base-content/40"> bat </span>
          <span className="text-info">contacts.txt</span>
        </p>

        <div className="flex flex-col gap-1.5 pl-4 text-sm md:flex-row md:flex-wrap md:gap-x-6">
          <a
            href="mailto:ghanifaustaraihan@gmail.com"
            className="inline-flex items-center gap-2 font-mono text-sm text-base-content/60 transition-colors hover:text-primary"
          >
            <Mail size={14} className="text-warning" aria-hidden="true" />
            ghanifaustaraihan@gmail.com
          </a>
          <a
            href="tel:+6285775080266"
            className="inline-flex items-center gap-2 font-mono text-sm text-base-content/60 transition-colors hover:text-primary"
          >
            <Phone size={14} className="text-info" aria-hidden="true" />
            +62 857-7508-0266
          </a>
          <p className="inline-flex items-center gap-2 font-mono text-sm text-base-content/60">
            <MapPin size={14} className="text-accent" aria-hidden="true" />
            Bandung, Jawa Barat
          </p>
          <a
            href="https://github.com/SirGhaniR"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-base-content/60 transition-colors hover:text-primary"
          >
            <Github
              size={14}
              className="text-base-content/40"
              aria-hidden="true"
            />
            github.com/SirGhaniR
          </a>
        </div>
      </div>
    </header>
  );
}
