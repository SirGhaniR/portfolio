import { EducationSection } from "./components/EducationSection";
import { FooterSection } from "./components/FooterSection";
import { HeaderSection } from "./components/HeaderSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";
import { WorkScopeSection } from "./components/WorkScopeSection";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-4xl px-3 py-6 md:px-4 md:py-10">
      <div className="terminal-window overflow-hidden rounded-lg bg-base-100/85 shadow-xl shadow-base-100/30 backdrop-blur-sm">
        <div className="flex items-center justify-between gap-3 border-b border-base-300/30 px-4 py-3 md:px-6">
          <span className="truncate font-mono text-[11px] text-base-content/50">
            portfolio — zsh
          </span>
          <span className="font-mono text-[11px] text-base-content/30">
            ~/portfolio
          </span>
        </div>
        <div className="flex flex-col gap-12 px-5 py-8 md:gap-14 md:px-7 md:py-10">
          <HeaderSection />
          <WorkScopeSection />
          <ProjectsSection />
          <SkillsSection />
          <EducationSection />
          <FooterSection />
        </div>
      </div>
    </div>
  );
}
