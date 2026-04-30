import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { CertificationsSection } from '@/components/sections/CertificationsSection';
import { EducationCards } from '@/components/sections/EducationCards';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="relative bg-[#010d18] min-h-screen selection:bg-aurora-teal/25 selection:text-white">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <CertificationsSection />
      <EducationCards />
      <ContactCTA />
      <Footer />
    </main>
  );
}
