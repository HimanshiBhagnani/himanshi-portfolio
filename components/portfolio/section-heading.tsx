export function SectionHeading({
  index,
  label,
  title,
}: {
  index: string
  label: string
  title: string
}) {
  return (
    <div className="mb-12 flex flex-col gap-4">
      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-primary">
        <span>{index}</span>
        <span className="h-px w-8 bg-primary" aria-hidden="true" />
        <span className="text-muted-foreground">{label}</span>
      </div>
      <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
    </div>
  )
}
