import { profile } from "@/lib/portfolio-data"
import { SectionHeading } from "./section-heading"

export function Contact() {
  return (
    <section id="contact" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading
          index="04"
          label="Contact"
          title="Have a hard problem hiding behind a complex interface? Let's talk."
        />

        <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-end">
          <div>
            <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
              I take on a small number of product and design-system engagements
              each year. Reach out with a few words about what you&apos;re
              building.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-flex items-center gap-3 text-2xl font-semibold tracking-tight text-foreground transition-colors hover:text-primary md:text-3xl"
            >
              <span
                className="h-2 w-2 rounded-full bg-primary"
                aria-hidden="true"
              />
              {profile.email}
            </a>
          </div>

          <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border">
            {profile.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-full items-center justify-between gap-2 bg-background p-5 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:bg-card hover:text-primary"
                >
                  {social.label}
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
