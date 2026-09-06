import type { CSSProperties } from 'react'

const paths = [
  'M-100 90H240L400 250H760L960 50H1500',
  'M-100 130H220L400 310H800L1020 90H1500',
  'M-100 530H260L440 350H840L1080 590H1500',
  'M-100 570H280L440 410H820L1060 650H1500',
  'M1080 -100V100L920 260V480L1100 660V900',
]

export default function FlowLines({ variant = 'default' }: { variant?: 'default' | 'projects' }) {
  return (
    <div className={`flow-background flow-background-${variant}`} aria-hidden="true">
      <svg viewBox="0 0 1400 800" preserveAspectRatio="xMidYMid slice" fill="none">
        {paths.map((d, index) => <g key={d} style={{ '--flow-delay': `${index * -2.3}s` } as CSSProperties}><path d={d} className="background-track" /><path d={d} pathLength="100" className="background-packet" /></g>)}
      </svg>
    </div>
  )
}
