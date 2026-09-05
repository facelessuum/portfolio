import { Icon } from '@/components/ui/icon'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { socialLinks } from '@/lib/texts'
import { getPortfolioYear } from '@/lib/time'
import CurrentYear from './CurrentYear'

export default function Footer() {
  return (
    <footer className="w-[min(1184px,calc(100%-96px))] mx-auto max-md:w-[calc(100%-40px)] flex flex-wrap items-center gap-x-8 gap-y-5 border-t py-8 [&_p]:text-xs [&_p]:text-muted-foreground [&_nav]:ml-auto [&_nav]:flex [&_nav]:flex-wrap [&_nav]:gap-5 [&_nav]:text-xs [&_nav]:text-muted-foreground [&_nav_a]:inline-flex [&_nav_a]:items-center [&_nav_a]:gap-2 [&_a:hover]:text-accent max-md:gap-x-[18px] max-md:[&_nav]:order-4 max-md:[&_nav]:ml-0 max-md:[&_nav]:w-full">
      <a href="#Home" className="shrink-0 text-3xl font-bold tracking-[-0.06em] [&_span]:text-accent" aria-label="Back to top">A<span>/</span>N</a>
      <p>© <CurrentYear initialYear={getPortfolioYear()} /> Arnold Nillas</p>
      <nav aria-label="Social links">{socialLinks.map((link, index) => <span key={link.link} className="inline-flex items-center gap-4">{index > 0 && <span aria-hidden="true" className="h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />}<a href={link.link} target="_blank" rel="noopener noreferrer"><Icon icon={link.icon} width={14} height={14} aria-hidden="true" /> {link.label}</a></span>)}</nav>
      <a href="#Home" className="flex h-9 w-9 items-center justify-center rounded-full border max-md:ml-auto" aria-label="Back to top"><Icon icon={faArrowUp} width={14} height={14} aria-hidden="true" /></a>
    </footer>
  )
}
