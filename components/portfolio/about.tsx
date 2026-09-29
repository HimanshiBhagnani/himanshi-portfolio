import { about } from "@/lib/portfolio-data"
import { SectionHeading } from "./section-heading"

export function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading
          index="01"
          label="About"
          title="Systems thinking, applied to the surfaces people actually touch."
        />

        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr]">
          <div className="flex flex-col gap-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="md:pl-8 md:border-l md:border-border">
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Focus areas
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {about.focus.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-foreground"
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
