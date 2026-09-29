import { profile } from "@/lib/portfolio-data"

export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-10">
      <div className="flex flex-col items-start justify-between gap-4 font-mono text-xs uppercase tracking-widest text-muted-foreground md:flex-row md:items-center">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>Designed &amp; built in {profile.location}</span>
        <a href="#top" className="transition-colors hover:text-primary">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
