import type { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="shell-prompt font-mono text-base font-bold text-primary">
      <span className="text-success">➜</span>
      <span className="text-base-content/45"> ~/portfolio </span>
      <span className="text-warning">$</span>
      <span className="text-base-content/40"> bat </span>
      <span className="text-info">{children}</span>
    </h2>
  );
}
