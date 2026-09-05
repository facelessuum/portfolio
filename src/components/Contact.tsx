'use client'

import { Icon } from '@/components/ui/icon'
import { faPaperPlane, faSpinner } from '@fortawesome/free-solid-svg-icons'

import { useEffect, useRef, useState, type FormEvent } from 'react'
import CopyEmail from './CopyEmail'
import AmbientBackground from './AmbientBackground'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import emailjs from '@emailjs/browser'
import { getCooldownMinutes } from '@/lib/time'

function readSentAt() {
  try {
    const value = localStorage.getItem('timer')
    const timestamp = value ? new Date(value).getTime() : 0
    return Number.isFinite(timestamp) ? timestamp : 0
  } catch {
    return 0
  }
}

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [minutesLeft, setMinutesLeft] = useState(0)
  const [status, setStatus] = useState<{ kind: 'success' | 'error'; message: string } | null>(null)
  const sentAt = useRef(0)
  const sending = useRef(false)

  useEffect(() => {
    sentAt.current = readSentAt()
    const update = () => {
      sentAt.current = Math.max(sentAt.current, readSentAt())
      setMinutesLeft(getCooldownMinutes(sentAt.current))
    }
    update()
    const interval = window.setInterval(update, 15000)
    window.addEventListener('storage', update)
    window.addEventListener('focus', update)
    document.addEventListener('visibilitychange', update)
    return () => {
      window.clearInterval(interval)
      window.removeEventListener('storage', update)
      window.removeEventListener('focus', update)
      document.removeEventListener('visibilitychange', update)
    }
  }, [])

  async function sendEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (sending.current) return
    const lastSent = Math.max(sentAt.current, readSentAt())
    const remainingMinutes = getCooldownMinutes(lastSent)
    if (remainingMinutes > 0) {
      setMinutesLeft(remainingMinutes)
      return
    }
    const form = event.currentTarget
    const data = new FormData(form)
    const payload = { name: String(data.get('name') ?? '').trim(), email: String(data.get('email') ?? '').trim(), message: String(data.get('message') ?? '').trim() }
    if (!payload.name || !payload.email || !payload.message) {
      setStatus({ kind: 'error', message: 'Please fill in each field before sending.' })
      return
    }
    const service = process.env.NEXT_PUBLIC_SERVICE_ID
    const template = process.env.NEXT_PUBLIC_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    if (!service || !template || !publicKey) {
      setStatus({ kind: 'error', message: 'The contact form is unavailable. Please copy the email address to get in touch directly.' })
      return
    }
    sending.current = true
    setLoading(true)
    setStatus(null)
    try {
      await emailjs.send(service, template, payload, publicKey)
      sentAt.current = Date.now()
      setMinutesLeft(getCooldownMinutes(sentAt.current))
      try { localStorage.setItem('timer', new Date(sentAt.current).toISOString()) } catch { /* The in-memory cooldown still applies when storage is unavailable. */ }
      form.reset()
      setStatus({ kind: 'success', message: 'Message sent. Thanks for reaching out — I’ll get back to you soon!' })
    } catch {
      setStatus({ kind: 'error', message: 'Your message could not be sent. Please try again or copy the email address to contact me directly.' })
    } finally {
      sending.current = false
      setLoading(false)
    }
  }

  return (
    <section id="Contact" className="relative isolate py-[104px] max-md:py-16">
      <AmbientBackground variant="contact" />
      <div className="mx-auto grid w-[min(1184px,calc(100%-96px))] gap-12 max-md:w-[calc(100%-40px)] lg:grid-cols-2 lg:gap-24">
        <div>
          <p className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.18em] text-accent [&_>_span]:text-muted-foreground"><span>05 /</span> Start a conversation</p>
          <h2 className="mt-6 text-5xl leading-[1.06] tracking-[-0.06em] sm:text-6xl [&_span]:text-accent">Have something<br />in mind?<br /><span>Let’s build it.</span></h2>
          <p className="mb-8 mt-6 max-w-sm text-sm leading-7 text-muted-foreground">A new project, a tricky problem, or just a hello. I’d love to hear what you’re thinking.</p>
          <CopyEmail />
        </div>
        <form onSubmit={sendEmail} className="flex flex-col gap-5 rounded-xl border border-border bg-card p-6 sm:p-8 [&_label]:mb-2 [&_label]:block [&_label]:text-xs [&_label]:text-muted-foreground [&_input]:rounded-md [&_input]:bg-background [&_input]:text-sm [&_textarea]:rounded-md [&_textarea]:bg-background [&_textarea]:text-sm [&_input]:h-11 [&_textarea]:min-h-36 [&_textarea]:resize-y" aria-label="Contact Arnold" aria-busy={loading}>
          <div className="grid gap-5 sm:grid-cols-2">
            <div><label htmlFor="name">Your name</label><Input id="name" name="name" autoComplete="name" required maxLength={100} placeholder="Alex Morgan" disabled={loading} /></div>
            <div><label htmlFor="email">Email address</label><Input id="email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="alex@example.com" disabled={loading} /></div>
          </div>
          <div><label htmlFor="message">What are you working on?</label><Textarea id="message" name="message" required maxLength={5000} placeholder="Tell me a little about your project..." disabled={loading} /></div>
          <div aria-live="polite" aria-atomic="true">
            {status && <p className={`text-sm leading-6 ${status.kind === 'error' ? 'text-red-300' : 'text-accent'}`}>{status.message}</p>}
            {minutesLeft > 0 && <p className="mt-2 text-xs leading-5 text-muted-foreground">You can send another message in {minutesLeft} {minutesLeft === 1 ? 'minute' : 'minutes'}. For a follow-up, copy the email address to contact me directly.</p>}
          </div>
          <Button type="submit" disabled={loading || minutesLeft > 0} className="h-12 w-full">{loading ? 'Sending…' : 'Send message'}<Icon icon={loading ? faSpinner : faPaperPlane} width={14} height={14} aria-hidden="true" className={`ml-auto ${loading ? "animate-spin" : ""}`} /></Button>
        </form>
      </div>
    </section>
  )
}
