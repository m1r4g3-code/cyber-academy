import { Link } from 'react-router-dom'
import { labs } from '../data/labs'
import { useProgress } from '../context/ProgressContext'
import ProgressRing from '../components/ProgressRing'

const TRACK_LABEL = { coding: 'Coding', cyber: 'Cyber', both: 'Coding + Cyber' }
const DIFF_CLASS = { Beginner: 'beginner', Intermediate: 'intermediate', Advanced: 'advanced' }

export default function Labs() {
  const { labProgress, labsCompletedCount, totalLabs } = useProgress()

  return (
    <div>
      <div className="hero">
        <div className="eyebrow">Hands-on</div>
        <h1>Labs 🧪</h1>
        <p className="lede">
          Larger, guided projects you build step by step. Each one becomes a real
          portfolio piece — check off steps as you go and watch your progress fill.
        </p>
      </div>

      <div className="section-head">
        <h2>{labsCompletedCount}/{totalLabs} labs complete</h2>
      </div>

      <div className="lesson-list">
        {labs.map((lab) => {
          const lp = labProgress[lab.id] || { pct: 0, done: 0, total: lab.steps.length, complete: false }
          return (
            <Link key={lab.id} to={`/lab/${lab.id}`} className={`lab-card card ${lp.complete ? 'done' : ''}`}>
              <div className="lab-emoji">{lab.emoji}</div>
              <div className="lc-body">
                <div className="lc-title">{lab.title}</div>
                <div className="lc-meta">
                  <span className={`tag diff ${DIFF_CLASS[lab.difficulty]}`}>{lab.difficulty}</span>
                  <span className={`tag ${lab.track}`}>{TRACK_LABEL[lab.track]}</span>
                  <span className="muted">Week {lab.week} · {lab.time}</span>
                </div>
                <p className="lab-summary">{lab.summary}</p>
              </div>
              <ProgressRing pct={lp.pct} size={56} stroke={6} />
            </Link>
          )
        })}
      </div>
    </div>
  )
}
