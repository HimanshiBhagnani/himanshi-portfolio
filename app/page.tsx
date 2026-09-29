import { SiteNav } from "@/components/portfolio/site-nav"
import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { Projects } from "@/components/portfolio/projects"
import { Skills } from "@/components/portfolio/skills"
import { Contact } from "@/components/portfolio/contact"
import { SiteFooter } from "@/components/portfolio/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <SiteFooter />
    </main>
  )
}
