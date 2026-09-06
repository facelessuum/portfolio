import type { CSSProperties } from 'react'

const routes = [
  'M20 110H100L150 160H190', 'M420 90H330L280 140V175',
  'M10 300H95L150 245H185', 'M420 310H345L290 255H255',
  'M125 20V85L185 145V175', 'M320 420V345L255 280V255',
  'M30 210H180', 'M260 210H410',
]

export default function HeroSculpture() {
  return (
    <div className="hero-art tech-art" aria-hidden="true">
      <div className="hero-art-grid" />
      <svg className="tech-circuit" viewBox="0 0 440 440" fill="none">
        {routes.map((d, index) => <g key={d}><path d={d} className="circuit-track" /><path d={d} pathLength="100" className="circuit-packet" style={{ animationDelay: `${index * -.7}s` }} /></g>)}
        {[ [20,110], [420,90], [10,300], [420,310], [125,20], [320,420], [30,210], [410,210] ].map(([cx,cy]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4" className="circuit-terminal" />)}
        <circle cx="220" cy="220" r="150" className="tech-reticle" />
        <circle cx="220" cy="220" r="175" className="tech-reticle tech-reticle-outer" />
      </svg>
      <div className="tech-stack">
        {[0, 1, 2, 3].map(index => <div className="tech-layer" key={index} style={{ '--layer': index } as CSSProperties}><span className="chip-corner" /><div className="chip-grid" />{index === 3 && <div className="chip-core"><span>{'</>'}</span></div>}</div>)}
      </div>
      <span className="tech-label tech-label-top">01 / CREATIVE ENGINEERING</span>
      <span className="tech-label tech-label-left">INPUT<br /><b>IDEAS</b></span>
      <span className="tech-label tech-label-right">OUTPUT<br /><b>EXPERIENCES</b></span>
      <span className="tech-label tech-label-bottom"><i /> BUILD · CONNECT · ITERATE</span>
    </div>
  )
}
