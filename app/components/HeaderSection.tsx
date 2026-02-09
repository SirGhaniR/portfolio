import { Github, Mail, MapPin, Phone } from "lucide-react";

export function HeaderSection() {
  return (
    <header className="flex flex-col gap-6 border-b border-zinc-200 pb-10">
      {/* Top row: photo + name */}
      <div className="flex items-center gap-5">
        {/* Photo */}
        <div className="h-30 w-30 shrink-0 overflow-hidden rounded-full border border-zinc-200">
          <img
            src="img/profile.jpeg"
            alt="Raihan Ghani Fausta"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Name & role */}
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900">
            Raihan Ghani Fausta (Gani)
          </h1>

          <div className="flex flex-col gap-1.5">
            <p className="text-xl font-bold leading-none tracking-tight text-blue-700 md:text-2xl">
              Backend Developer
            </p>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-500">
              Laravel • Node.js • Express • MySQL • MongoDB
            </p>
          </div>
        </div>
      </div>

      {/* Contact info */}
      <div className="grid grid-cols-1 gap-x-8 gap-y-2 text-sm text-zinc-600 sm:grid-cols-2">
        <a
          href="mailto:ghanifaustaraihan@gmail.com"
          className="inline-flex items-center gap-2 transition-colors hover:text-blue-600"
        >
          <Mail size={14} aria-hidden="true" /> ghanifaustaraihan@gmail.com
        </a>
        <a
          href="tel:+6285775080266"
          className="inline-flex items-center gap-2 transition-colors hover:text-blue-600"
        >
          <Phone size={14} aria-hidden="true" /> +62 857-7508-0266
        </a>
        <p className="inline-flex items-center gap-2">
          <MapPin size={14} aria-hidden="true" /> Bandung, Jawa Barat
        </p>
        <a
          href="https://github.com/SirGhaniR"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 transition-colors hover:text-blue-600"
        >
          <Github size={14} aria-hidden="true" /> github.com/SirGhaniR
        </a>
      </div>
    </header>
  );
}
