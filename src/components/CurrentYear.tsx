'use client'

import { useSyncExternalStore } from 'react'
import { getPortfolioYear, MINUTE_MS } from '@/lib/time'

function subscribe(onChange: () => void) {
  const timer = window.setInterval(onChange, MINUTE_MS)
  window.addEventListener('focus', onChange)
  document.addEventListener('visibilitychange', onChange)
  return () => {
    window.clearInterval(timer)
    window.removeEventListener('focus', onChange)
    document.removeEventListener('visibilitychange', onChange)
  }
}

export default function CurrentYear({ initialYear }: { initialYear: string }) {
  // Preserve hydration, then replace the build-time year with the live year.
  const year = useSyncExternalStore(subscribe, getPortfolioYear, () => initialYear)
  return <>{year}</>
}
