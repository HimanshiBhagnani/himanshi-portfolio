import Image from "next/image"
import { projects } from "@/lib/portfolio-data"
import { SectionHeading } from "./section-heading"

export function Projects() {
  return (
    <section id="work" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading
          index="02"
          label="Selected Work"
          title="Case studies from data-dense products and the systems behind them."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-primary/60"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-muted">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} — ${project.category} interface`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute left-4 top-4 rounded-md border border-border bg-background/70 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground backdrop-blur-sm">
                  {project.index} / {project.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">
                    {project.title}
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    {project.year}
                  </span>
                </div>

                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                  {project.summary}
                </p>

                <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-border bg-border">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="bg-card p-3">
                      <div className="text-lg font-semibold text-primary">
                        {metric.value}
                      </div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
