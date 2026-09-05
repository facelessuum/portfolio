import { Icon } from '@/components/ui/icon'
import { faArrowDown, faArrowUpRightFromSquare, faCode, faLightbulb, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { projectTexts, socialLinks } from '@/lib/texts'
import { Button } from './ui/button'
import SectionHeading from './SectionHeading'
import AmbientBackground from './AmbientBackground'

const principles = [
  { icon: faLightbulb, title: 'Learn by building.', text: 'Self-taught, hands-on, and always looking for the next thing to figure out.' },
  { icon: faPuzzlePiece, title: 'Make the complex click.', text: 'Break a tricky problem into small pieces. Build a solution that makes sense.' },
  { icon: faCode, title: 'Care about the details.', text: 'Clear code, thoughtful interfaces, and useful tools. The small things add up.' },
]

export default function Introduction() {
  const github = socialLinks.find(link => link.label === 'GitHub')!

  return (
    <section id="Introduction" className="relative isolate py-[104px] max-md:py-16 border-y bg-card">
      <AmbientBackground variant="about" />
      <div className="w-[min(1184px,calc(100%-96px))] mx-auto max-md:w-[calc(100%-40px)]">
        <SectionHeading number="02" label="Behind the code" title="Curiosity is where it starts." />
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-xl border border-border bg-background p-6 sm:p-8 [&_h3]:mt-8 [&_h3]:text-2xl [&_h3]:font-medium [&_h3]:tracking-[-0.04em]">
            <div className="relative z-10 flex items-center justify-between gap-5 [&_>_span:last-child]:max-w-36 [&_>_span:last-child]:text-right [&_>_span:last-child]:leading-5"><span className="shrink-0 text-3xl font-bold tracking-[-0.06em] [&_span]:text-accent">A<span>/</span>N</span><span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">The person behind the pixels</span></div>
            <h3>Arnold Nillas<span className="text-accent">.</span></h3>
            <p className="mt-2 text-[11px] leading-5 text-muted-foreground">Full stack developer · Curious by default</p>
            <dl className="mt-7 border-t py-2 [&_>_div]:flex [&_>_div]:flex-wrap [&_>_div]:items-center [&_>_div]:justify-between [&_>_div]:gap-x-4 [&_>_div]:gap-y-1 [&_>_div]:py-2 [&_>_div]:text-xs [&_dt]:text-muted-foreground [&_dd_a]:inline-flex [&_dd_a]:items-center [&_dd_a]:gap-2 [&_dd_a:hover]:text-accent">
              <div><dt>My path</dt><dd>Self-taught & still learning</dd></div>
              <div><dt>My focus</dt><dd>Web apps & useful tools</dd></div>
              <div><dt>My work</dt><dd><a href="#Projects">{String(projectTexts.projects.length).padStart(2, '0')} selected projects <Icon icon={faArrowUpRightFromSquare} width={10} height={10} aria-hidden="true" /></a></dd></div>
            </dl>
            <a href={github.link} target="_blank" rel="noopener noreferrer" className="mt-3 flex items-center gap-3 rounded-md border border-border bg-card px-4 py-3 text-xs transition-colors hover:border-accent/40 hover:text-accent"><Icon icon={faGithub} width={17} height={17} aria-hidden="true" /> Find me on GitHub <Icon icon={faArrowUpRightFromSquare} width={12} height={12} aria-hidden="true" className="ml-auto" /></a>
          </div>
          <div >
            <p className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.18em] text-accent [&_>_span]:text-muted-foreground">A little more human, a little less résumé</p>
            <h3 className="mb-6 mt-5 text-3xl leading-snug tracking-[-0.04em] lg:text-4xl [&_span]:text-muted-foreground">A developer by craft.<br />A problem solver <span>by nature.</span></h3>
            <div className="flex flex-col gap-5 text-sm leading-7 text-muted-foreground">
              <p>I’m Arnold, a self-taught developer who enjoys figuring out how things work — and how to make them work better.</p>
              <p>I enjoy taking an idea from the first sketch to a working application, figuring out the unfamiliar parts and refining the details along the way.</p>
              <blockquote className="flex items-start gap-4 border-l-2 border-accent bg-accent/[0.04] p-5 text-base leading-7 text-foreground [&_>_svg]:mt-1 [&_>_svg]:shrink-0 [&_>_svg]:text-accent"><Icon icon={faLightbulb} width={20} height={20} aria-hidden="true" /><p>The part I enjoy most? Turning “what if” into something you can actually use.</p></blockquote>
              <Button asChild variant="outline" className="mt-1 h-11 w-fit"><a href="/arnoldresume.pdf" download="Arnold-Nillas-Resume.pdf">Download my résumé <Icon icon={faArrowDown} width={14} height={14} aria-hidden="true" className="ml-6" /></a></Button>
            </div>
          </div>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3 [&_article]:rounded-lg [&_article]:border [&_article]:border-border [&_article]:bg-background [&_article]:p-6 [&_article]:transition-colors [&_article:hover]:border-accent/40 [&_h3]:mb-2 [&_h3]:mt-5 [&_h3]:text-base [&_h3]:font-medium [&_h3]:tracking-tight [&_p]:text-xs [&_p]:leading-6 [&_p]:text-muted-foreground">
          {principles.map(({ icon, title, text }, index) => (
            <article key={title}>
              <div className="flex items-center justify-between"><span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/[0.08] text-accent"><Icon icon={icon} width={18} height={18} aria-hidden="true" /></span><span className="font-mono text-[10px] text-muted-foreground">{String(index + 1).padStart(2, '0')}</span></div>
              <h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
