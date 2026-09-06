export default function ServiceVisual({ index }: { index: number }) {
  return (
    <div className={`service-visual service-visual-${index}`} aria-hidden="true">
      {index === 0 ? (
        <div className="mini-browser">
          <div className="mini-toolbar"><i /><i /><i /><span /></div>
          <div className="mini-web-content"><div><b /><b /><small /><em /></div><div className="mini-flower">✳</div></div>
          <div className="mini-web-tiles"><i /><i /><i /></div>
          <div className="mini-cursor">↖</div>
        </div>
      ) : index === 1 ? (
        <div className="mini-app">
          <div className="mini-sidebar"><b /><i /><i /><i /></div>
          <div className="mini-dashboard"><div className="mini-app-header"><span /><i /></div><div className="mini-metrics"><i /><i /></div><div className="mini-chart">{[35, 60, 45, 80, 65, 95].map((height, i) => <span key={i} style={{ height: `${height}%`, animationDelay: `${i * -0.3}s` }} />)}</div></div>
          <span className="mini-app-badge">✓ synced</span>
        </div>
      ) : (
        <div className="mini-workflow">
          <svg viewBox="0 0 280 180" preserveAspectRatio="none" fill="none"><path d="M40 45H95Q110 45 110 60V90H170V60Q170 45 185 45H240M40 135H95Q110 135 110 120V90M170 90V120Q170 135 185 135H240" /><path className="flow-signal" d="M40 45H95Q110 45 110 60V90H170V120Q170 135 185 135H240" /></svg>
          <span className="flow-node flow-input-one">{'{ }'}</span><span className="flow-node flow-input-two">↗</span><span className="flow-node flow-core">✳</span><span className="flow-node flow-output-one">✓</span><span className="flow-node flow-output-two">✓</span>
        </div>
      )}
      <span className="visual-caption">{['DESIGNED TO CONNECT', 'BUILT TO WORK', 'MAKE IT FLOW'][index]}</span>
    </div>
  )
}
