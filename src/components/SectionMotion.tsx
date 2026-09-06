'use client'

import { useEffect } from 'react'

export default function SectionMotion() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return

    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sections = document.querySelectorAll<HTMLElement>('main > section')
    const cards = document.querySelectorAll<HTMLElement>('.project-card')
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        entry.target.classList.toggle('motion-in-view', entry.isIntersecting)
        if (entry.isIntersecting) entry.target.classList.add('section-revealed')
      })
    }, { threshold: 0.06 })
    const cardObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('project-revealed')
          cardObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })

    const reset = () => {
      observer.disconnect()
      cardObserver.disconnect()
      sections.forEach(section => section.classList.remove('section-motion', 'motion-in-view', 'section-revealed'))
      cards.forEach(card => card.classList.remove('project-motion', 'project-revealed'))
    }
    const configure = () => {
      reset()
      if (preference.matches) return
      sections.forEach(section => {
        // Avoid hiding content already visible when hydration finishes.
        const bounds = section.getBoundingClientRect()
        if (bounds.top < window.innerHeight && bounds.bottom > 0) section.classList.add('section-revealed')
        section.classList.add('section-motion')
        observer.observe(section)
      })
      cards.forEach(card => {
        const bounds = card.getBoundingClientRect()
        if (bounds.top < window.innerHeight && bounds.bottom > 0) card.classList.add('project-revealed')
        card.classList.add('project-motion')
        cardObserver.observe(card)
      })
    }
    const revealFocusedContent = (event: FocusEvent) => {
      if (!(event.target instanceof Element)) return
      event.target.closest('section')?.classList.add('section-revealed')
      event.target.closest('.project-card')?.classList.add('project-revealed')
    }

    configure()
    preference.addEventListener('change', configure)
    document.addEventListener('focusin', revealFocusedContent)
    return () => {
      reset()
      preference.removeEventListener('change', configure)
      document.removeEventListener('focusin', revealFocusedContent)
    }
  }, [])
  return null
}
