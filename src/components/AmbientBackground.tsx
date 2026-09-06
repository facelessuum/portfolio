import FlowLines from './FlowLines'

const treatments = {
  hero: {
    glow: 'bg-[radial-gradient(ellipse_at_80%_35%,rgba(206,242,115,0.06),transparent_55%),radial-gradient(ellipse_at_10%_15%,rgba(115,155,150,0.035),transparent_45%)]',
    pattern: 'bg-[linear-gradient(rgba(206,242,115,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(206,242,115,0.045)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_75%_35%,black,transparent_65%)]',
  },
  about: {
    glow: 'bg-[radial-gradient(ellipse_at_5%_40%,rgba(206,242,115,0.03),transparent_55%)]',
    pattern: 'bg-[radial-gradient(rgba(206,242,115,0.085)_1px,transparent_1px)] bg-[size:28px_28px] [mask-image:radial-gradient(ellipse_at_15%_45%,black,transparent_65%)]',
  },
  contact: {
    glow: 'bg-[radial-gradient(ellipse_at_15%_55%,rgba(206,242,115,0.045),transparent_60%)]',
    pattern: 'bg-[radial-gradient(rgba(206,242,115,0.12)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_at_90%_25%,black,transparent_50%)]',
  },
}

export default function AmbientBackground({ variant }: { variant: keyof typeof treatments }) {
  const { glow, pattern } = treatments[variant]

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[inherit]">
      <FlowLines />
      <div className={`absolute inset-0 opacity-50 ${glow}`} />
      {pattern && <div className={`absolute inset-0 ${pattern}`} />}
    </div>
  )
}
