import { EducationSection } from "./components/EducationSection";
import { FooterSection } from "./components/FooterSection";
import { HeaderSection } from "./components/HeaderSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";
import { WorkScopeSection } from "./components/WorkScopeSection";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-12 px-6 py-12 text-zinc-800 selection:bg-blue-100 selection:text-blue-900 md:py-16">
      <HeaderSection />
      <WorkScopeSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <FooterSection />
    </main>
  );
}
