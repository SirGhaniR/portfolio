import { EducationSection } from "./components/EducationSection";
import { FooterSection } from "./components/FooterSection";
import { HeaderSection } from "./components/HeaderSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";
import { WorkScopeSection } from "./components/WorkScopeSection";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-4xl px-3 py-6 md:px-4 md:py-10">
      <div className="rounded-xl bg-base-100/75 backdrop-blur-sm">
        <div className="flex items-center gap-2 border-b border-base-300/30 px-5 py-3 md:px-7">
          <span className="font-mono text-xs text-base-content/40">
            portfolio — zsh
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
