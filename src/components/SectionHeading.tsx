interface Props {
  number: string
  label: string
  title: string
  description?: string
}

export default function SectionHeading({ number, label, title, description }: Props) {
  return (
    <div className="mb-12 flex items-end justify-between gap-10 max-md:items-start max-md:flex-col max-md:gap-5 max-md:mb-8">
      <div>
        <p className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.18em] text-accent [&_>_span]:text-muted-foreground"><span>{number} /</span> {label}</p>
        <h2 className="mt-5 text-[clamp(30px,3.4vw,46px)] font-medium leading-[1.13] tracking-[-0.055em]">{title}</h2>
      </div>
      {description && <p className="max-w-xs text-sm leading-6 text-muted-foreground">{description}</p>}
    </div>
  )
}
