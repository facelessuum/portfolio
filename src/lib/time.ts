export const MINUTE_MS = 60_000
export const CONTACT_COOLDOWN_MS = 60 * MINUTE_MS

const yearFormatter = new Intl.DateTimeFormat('en', {
  year: 'numeric',
  timeZone: 'Asia/Manila',
})

export function getPortfolioYear(now: number = Date.now()): string {
  return yearFormatter.format(now)
}

export function getCooldownMinutes(sentAt: number, now: number = Date.now()): number {
  if (!Number.isFinite(sentAt) || sentAt <= 0) return 0
  return Math.max(0, Math.ceil((sentAt + CONTACT_COOLDOWN_MS - now) / MINUTE_MS))
}
