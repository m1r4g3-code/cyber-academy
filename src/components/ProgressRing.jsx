/**
 * Apple-style circular progress ring (SVG).
 * Animates the fill via stroke-dashoffset.
 */
export default function ProgressRing({ pct = 0, size = 132, stroke = 10, sublabel }) {
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (Math.min(100, Math.max(0, pct)) / 100) * circumference

  return (
    <div className="ring-wrap" style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        <circle
          className="ring-track"
          cx={size / 2} cy={size / 2} r={radius}
          fill="none" strokeWidth={stroke}
        />
        <circle
          className="ring-fill"
          cx={size / 2} cy={size / 2} r={radius}
          fill="none" strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="ring-label" style={{ fontSize: size * 0.24 }}>
        <span className="ring-pct">{pct}%</span>
        {sublabel && <span className="ring-sub">{sublabel}</span>}
      </div>
    </div>
  )
}
