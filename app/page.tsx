import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Footer } from "@/components/footer";
import { SocialSidebar } from "@/components/social-sidebar";
import { EmailSidebar } from "@/components/email-sidebar";
import { CursorRing } from "@/components/cursor-ring";

export default function Home() {
  return (
    <div className="relative">
      <CursorRing />
      <Header />
      <SocialSidebar />
      <EmailSidebar />
      <main className="px-6 md:px-12 lg:px-24 mx-auto max-w-7xl">
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
