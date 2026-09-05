'use client'

import { useEffect, useState } from 'react'
import RenderLinks from './RenderLinks'
import { navigation } from '@/lib/texts'

export default function Header() {
  const [activeLink, setActiveLink] = useState('Home')
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter(entry => entry.isIntersecting)
      if (visible.length) setActiveLink(visible[0].target.id)
    }, { rootMargin: '-20% 0px -60% 0px', threshold: 0 })
    for (const id of ['Home', ...navigation.map(link => link.id), 'Contact']) {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    }
    return () => observer.disconnect()
  }, [])
  return (
    <header className="sticky top-0 z-30 border-b border-border/70 bg-background/95 backdrop-blur-lg">
      <div className="w-[min(1184px,calc(100%-96px))] mx-auto max-md:w-[calc(100%-40px)] flex h-20 items-center justify-between max-md:h-[72px]">
        <a href="#Home" aria-label="Arnold Nillas — home" className="shrink-0 text-3xl font-bold tracking-[-0.06em] [&_span]:text-accent">A<span>/</span>N</a>
        <RenderLinks activeLink={activeLink} />
      </div>
    </header>
  )
}
