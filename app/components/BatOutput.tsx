import type { ReactNode } from "react";

interface BatOutputProps {
  children: ReactNode;
  file: string;
}

export function BatOutput({ children, file }: BatOutputProps) {
  return (
    <div className="bat-output mt-3 font-mono">
      <div className="grid grid-cols-[3rem_minmax(0,1fr)] border-y border-base-content/35 md:grid-cols-[3.5rem_minmax(0,1fr)]">
        <div className="border-r border-base-content/35" />
        <div className="px-3 py-3 text-base font-bold text-base-content/70 md:px-4">
          File: <span className="text-base-content">~/portfolio/{file}</span>
        </div>
      </div>
      <div className="py-3">{children}</div>
    </div>
  );
}

interface BatLineProps {
  children?: ReactNode;
  className?: string;
  line: number;
}

export function BatLine({ children, className = "", line }: BatLineProps) {
  return (
    <div className="grid grid-cols-[3rem_minmax(0,1fr)] md:grid-cols-[3.5rem_minmax(0,1fr)]">
      <div className="border-r border-base-content/35 px-3 text-right text-base font-semibold leading-8 text-base-content/35 md:px-4">
        {line}
      </div>
      <div
        className={`min-w-0 px-3 text-base font-semibold leading-8 text-base-content/70 md:px-4 ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
