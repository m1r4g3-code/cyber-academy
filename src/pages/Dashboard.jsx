import { Link, useNavigate } from 'react-router-dom'
import { curriculum } from '../data/curriculum'
import { useProgress } from '../context/ProgressContext'
import ProgressRing from '../components/ProgressRing'
import StreakBadge from '../components/StreakBadge'

export default function Dashboard() {
  const navigate = useNavigate()
  const { overallPct, completedCount, totalLessons, weekProgress, nextLesson, quizScores, labsCompletedCount, totalLabs } = useProgress()

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
            <Link key={w.week} to={`/week/${w.week}`} className="week-tile card">
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
    </div>
  )
}
