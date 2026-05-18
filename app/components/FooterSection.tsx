export function FooterSection() {
  return (
    <footer className="flex flex-col gap-2">
      <p className="font-mono text-sm text-primary">
        <span className="text-base-content/40">[</span>
        <span className="text-success">ghani</span>
        <span className="text-primary">@</span>
        <span className="text-success">portfolio</span>
        <span className="text-base-content/40">]</span>
        <span className="text-info"> ~ </span>
        <span className="text-warning">$</span>
        <span className="text-base-content/40"> </span>
        <span className="animate-pulse">▊</span>
      </p>
      <p className="font-mono text-[10px] text-base-content/30 pl-0.5">
        Raihan Ghani Fausta © 2025 — Backend Engineering
      </p>
    </footer>
  );
}
