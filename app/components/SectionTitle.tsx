import type { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
      {children}
    </h2>
  );
}
