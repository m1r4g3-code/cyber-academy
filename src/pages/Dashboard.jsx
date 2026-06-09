import { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { curriculum } from '../data/curriculum'
import { useProgress } from '../context/ProgressContext'
import ProgressRing from '../components/ProgressRing'
import StreakBadge from '../components/StreakBadge'

export default function Dashboard() {
  const navigate = useNavigate()
  const { overallPct, completedCount, totalLessons, weekProgress, nextLesson, quizScores, labsCompletedCount, totalLabs, resetProgress, exportData, importData } = useProgress()
  const [confirmReset, setConfirmReset] = useState(false)
  const [dataMsg, setDataMsg] = useState('')
  const fileRef = useRef(null)

  function handleExport() {
    const blob = new Blob([JSON.stringify(exportData(), null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'cyber-academy-progress.json'
    a.click()
    URL.revokeObjectURL(url)
    setDataMsg('Progress exported ✓')
  }

  function handleImportFile(e) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      try {
        const ok = importData(JSON.parse(reader.result))
        setDataMsg(ok ? 'Progress imported ✓' : 'That file isn\'t a Cyber Academy backup.')
      } catch {
        setDataMsg('Could not read that file.')
      }
    }
    reader.readAsText(file)
    e.target.value = '' // allow re-importing the same file
  }

  const quizzesTaken = Object.keys(quizScores).length
  const greeting = (() => {
    const h = new Date().getHours()
    if (h < 12) return 'Good morning'
    if (h < 18) return 'Good afternoon'
    return 'Good evening'
  })()

  return (
    <div>
      <div className="hero">
        <div className="eyebrow">Your journey</div>
        <h1>{greeting} 👋</h1>
        <p className="lede">
          From complete beginner to a real foundation in coding and cybersecurity —
          30 days, one lesson at a time. Pick up where you left off.
        </p>
      </div>

      <div className="dash-top card">
        <ProgressRing pct={overallPct} size={150} stroke={12} sublabel="complete" />
        <div className="dash-stats">
          <div className="dash-stat-row">
            <div className="stat">
              <div className="stat-num">{completedCount}<span className="muted" style={{ fontSize: '1rem' }}> / {totalLessons}</span></div>
              <div className="stat-label">Lessons done</div>
            </div>
            <div className="stat">
              <div className="stat-num">{quizzesTaken}</div>
              <div className="stat-label">Quizzes taken</div>
            </div>
            <div className="stat">
              <StreakBadge />
            </div>
          </div>
          {nextLesson ? (
            <button className="btn" onClick={() => navigate(`/lesson/${nextLesson.id}`)}>
              {completedCount === 0 ? 'Start Day 1' : 'Continue where you left off'} →
            </button>
          ) : (
            <div className="lesson-complete-banner">🎉 You finished all 30 days — incredible work!</div>
          )}
        </div>
      </div>

      <div className="section-head">
        <h2>The 4 weeks</h2>
        <span className="muted">{overallPct}% overall</span>
      </div>

      <div className="week-grid">
        {curriculum.map((w) => {
          const wp = weekProgress[w.week] || { pct: 0, done: 0, total: w.lessons.length }
          return (
            <Link key={w.week} to={`/week/${w.week}`} className={`week-tile card wk-${w.week}`}>
              <ProgressRing pct={wp.pct} size={64} stroke={7} />
              <div className="wt-meta">
                <div className="wt-title">Week {w.week}</div>
                <div className="wt-sub">{w.title}</div>
                <div className="wt-sub">{wp.done}/{wp.total} lessons</div>
              </div>
            </Link>
          )
        })}
      </div>

      <div className="section-head">
        <h2>Hands-on Labs 🧪</h2>
        <Link to="/labs" className="btn ghost">View all →</Link>
      </div>
      <Link to="/labs" className="labs-promo card">
        <div className="labs-promo-emoji">🧪</div>
        <div>
          <div className="wt-title">Build real portfolio projects</div>
          <div className="wt-sub">
            {labsCompletedCount}/{totalLabs} labs complete — guided, step-by-step builds from a
            CLI toolbox to a full security toolkit.
          </div>
        </div>
        <span className="lc-arrow">›</span>
      </Link>

      <div className="reset-zone">
        <div className="data-row">
          <button className="btn secondary" onClick={handleExport}>⬇ Export progress</button>
          <button className="btn secondary" onClick={() => fileRef.current?.click()}>⬆ Import progress</button>
          <input ref={fileRef} type="file" accept="application/json,.json" onChange={handleImportFile} hidden />
          {dataMsg && <span className="muted" style={{ fontSize: '0.85rem' }}>{dataMsg}</span>}
        </div>
        <p className="muted" style={{ fontSize: '0.8rem', margin: '10px 0 20px' }}>
          Your progress is saved in this browser. Export a backup to keep it safe or move it to another device.
        </p>
        {!confirmReset ? (
          <button className="btn-reset" onClick={() => setConfirmReset(true)}>
            Reset all progress
          </button>
        ) : (
          <div className="reset-confirm card">
            <div>
              <strong>Reset everything?</strong>
              <div className="muted" style={{ fontSize: '0.85rem', marginTop: 4 }}>
                This clears completed lessons, quiz scores, notes, lab steps, and your streak. Your theme is kept. This cannot be undone.
              </div>
            </div>
            <div className="reset-actions">
              <button className="btn secondary" onClick={() => setConfirmReset(false)}>Cancel</button>
              <button className="btn danger" onClick={() => { resetProgress(); setConfirmReset(false) }}>Yes, reset</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
