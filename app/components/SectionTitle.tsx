import type { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="font-mono text-sm text-primary">
      <span className="text-base-content/40">[</span>
      <span className="text-success">ghani</span>
      <span className="text-primary">@</span>
      <span className="text-success">portfolio</span>
      <span className="text-base-content/40">]</span>
      <span className="text-info"> ~ </span>
      <span className="text-warning">$</span>
      <span className="text-base-content/40"> bat </span>
      <span className="text-info">{children}</span>
    </h2>
  );
}
