export function FooterSection() {
  return (
    <footer className="flex flex-col gap-2">
      <p className="shell-prompt font-mono text-base font-bold text-primary">
        <span className="text-success">➜</span>
        <span className="text-base-content/40"> ~/portfolio </span>
        <span className="text-warning">$</span>
        <span className="text-base-content/40"> </span>
        <span className="animate-pulse">▊</span>
      </p>
      <p className="pl-0.5 font-mono text-base font-semibold text-base-content/30">
        Raihan Ghani Fausta © 2025 — Backend Engineering
      </p>
    </footer>
  );
}
