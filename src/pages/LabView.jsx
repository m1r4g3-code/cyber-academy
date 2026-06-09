import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { getLab } from '../data/labs'
import { useProgress } from '../context/ProgressContext'
import { useWeekTheme } from '../hooks/useWeekTheme'
import ProgressRing from '../components/ProgressRing'
import Icon from '../components/Icon'

const TRACK_LABEL = { coding: 'Coding', cyber: 'Cybersecurity', both: 'Coding + Cyber' }

export default function LabView() {
  const { labId } = useParams()
  const lab = getLab(labId)
  const { labSteps, toggleLabStep, labProgress } = useProgress()

  // theme the lab in its related week's colour
  useWeekTheme(lab?.week)

  useEffect(() => { window.scrollTo(0, 0) }, [labId])

  if (!lab) {
    return <div className="center-empty">Lab not found. <Link to="/labs">Back to Labs</Link></div>
  }

  const done = labSteps[lab.id] || {}
  const lp = labProgress[lab.id] || { pct: 0, done: 0, total: lab.steps.length, complete: false }

  return (
    <article>
      <div className="lesson-top">
        <div className="crumb">
          <Link to="/labs">Labs</Link> › {lab.title}
          {lab.lessonId && <> · <Link to={`/lesson/${lab.lessonId}`}>↩ related lesson (Week {lab.week})</Link></>}
        </div>
        <div className="eyebrow head-with-icon" style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
          <Icon name={lab.icon} size={15} /> {lab.difficulty} · {TRACK_LABEL[lab.track]} · {lab.time}
        </div>
        <h1>{lab.title}</h1>
        <p className="lede" style={{ marginTop: 10 }}>{lab.summary}</p>
      </div>

      <div className="lab-progress-bar card">
        <ProgressRing pct={lp.pct} size={72} stroke={8} />
        <div>
          <div className="lc-title">{lp.done}/{lp.total} steps done</div>
          <div className="muted">
            {lp.complete ? 'Lab complete — add it to your portfolio!' : 'Tick each step as you finish it.'}
          </div>
        </div>
      </div>

      <div className="objectives card">
        <h3>What you'll build & learn</h3>
        <ul>
          {lab.objectives.map((o, i) => <li key={i}>{o}</li>)}
        </ul>
      </div>

      {lab.prerequisites?.length > 0 && (
        <p className="muted" style={{ margin: '16px 0' }}>
          <strong>Prerequisites:</strong> {lab.prerequisites.join(' · ')}
        </p>
      )}

      <div className="section-head"><h2>Steps</h2></div>

      <ol className="lab-steps">
        {lab.steps.map((step, i) => {
          const checked = !!done[i]
          return (
            <li key={i} className={`lab-step card ${checked ? 'checked' : ''}`}>
              <button
                className="lab-check"
                onClick={() => toggleLabStep(lab.id, i)}
                aria-label={checked ? 'Mark step incomplete' : 'Mark step complete'}
              >
                {checked ? '✓' : i + 1}
              </button>
              <div className="lab-step-body">
                <h3>{step.title}</h3>
                <div className="prose">
                  <ReactMarkdown>{step.body}</ReactMarkdown>
                </div>
              </div>
            </li>
          )
        })}
      </ol>

      <div className="practical" style={{ marginTop: 32 }}>
        <div className="p-eyebrow head-with-icon"><Icon name="target" size={15} /> Deliverable</div>
        <p style={{ marginTop: 8 }}>{lab.deliverable}</p>
      </div>

      {lab.stretch?.length > 0 && (
        <section className="resources">
          <h3 className="head-with-icon"><Icon name="rocket" size={18} /> Stretch goals</h3>
          <ul className="prose">
            {lab.stretch.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </section>
      )}

      <nav className="lesson-nav">
        <Link to="/labs" className="ln-link prev">
          <span className="ln-dir">‹ All labs</span>
          <span className="ln-title">Back to Labs</span>
        </Link>
      </nav>
    </article>
  )
}
