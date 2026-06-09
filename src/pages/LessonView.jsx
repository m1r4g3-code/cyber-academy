import { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { getLesson, getAdjacent } from '../data/curriculum'
import { getLabByLesson } from '../data/labs'
import { useProgress } from '../context/ProgressContext'
import { useWeekTheme } from '../hooks/useWeekTheme'
import Quiz from '../components/Quiz'
import NotesPanel from '../components/NotesPanel'

const TRACK_LABEL = { coding: 'Coding', cyber: 'Cybersecurity', both: 'Coding + Cyber' }

export default function LessonView() {
  const { lessonId } = useParams()
  const navigate = useNavigate()
  const lesson = getLesson(lessonId)
  const { completed, toggleComplete } = useProgress()

  // glow-in-the-dark theme for this lesson's week
  useWeekTheme(lesson?.week)

  // scroll to top whenever the lesson changes
  useEffect(() => { window.scrollTo(0, 0) }, [lessonId])

  if (!lesson) {
    return <div className="center-empty">Lesson not found. <Link to="/">Back to dashboard</Link></div>
  }

  const done = !!completed[lesson.id]
  const { prev, next } = getAdjacent(lesson.id)
  const relatedLab = getLabByLesson(lesson.id)

  function handleComplete() {
    toggleComplete(lesson.id)
    if (!done && next) {
      // small delay so the state update + streak registers before navigating
      setTimeout(() => navigate(`/lesson/${next.id}`), 350)
    }
  }

  return (
    <article>
      <div className="lesson-top">
        <div className="crumb">
          <Link to="/">Dashboard</Link> › <Link to={`/week/${lesson.week}`}>Week {lesson.week}</Link> › Day {lesson.day}
        </div>
        <div className="eyebrow" style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
          Day {lesson.day} · {TRACK_LABEL[lesson.track]} · {lesson.duration}
        </div>
        <h1>{lesson.title}</h1>
      </div>

      <div className="objectives card">
        <h3>What you'll learn</h3>
        <ul>
          {lesson.objectives.map((o, i) => <li key={i}>{o}</li>)}
        </ul>
      </div>

      <div className="prose">
        {lesson.sections.map((s, i) => (
          <div key={i}>
            <h3>{s.heading}</h3>
            <ReactMarkdown>{s.body}</ReactMarkdown>
          </div>
        ))}
      </div>

      <div className="practical">
        <div className="p-eyebrow">⏱️ 30-Minute Practical Session</div>
        <h3>{lesson.practical.title}</h3>
        <ol>
          {lesson.practical.steps.map((step, i) => <li key={i}>{step}</li>)}
        </ol>
        <div className="timer">Set a 30-minute timer and complete the steps above hands-on.</div>
      </div>

      {relatedLab && (
        <Link to={`/lab/${relatedLab.id}`} className="related-lab card">
          <div className="lab-emoji">{relatedLab.emoji}</div>
          <div>
            <div className="muted" style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Go deeper · Hands-on Lab
            </div>
            <div className="lc-title">{relatedLab.title}</div>
            <div className="wt-sub">{relatedLab.summary}</div>
          </div>
          <span className="btn">Start lab →</span>
        </Link>
      )}

      <Quiz lessonId={lesson.id} questions={lesson.quiz} />

      <NotesPanel lessonId={lesson.id} />

      {lesson.resources?.length > 0 && (
        <section className="resources">
          <h3>📚 Free resources</h3>
          <div className="res-list">
            {lesson.resources.map((r, i) => (
              <a key={i} href={r.url} target="_blank" rel="noreferrer" className="res-item">
                <span>🔗</span>
                <span>{r.label}</span>
                <span className="res-ext">open ↗</span>
              </a>
            ))}
          </div>
        </section>
      )}

      <div className="lesson-actions">
        <button className={`btn ${done ? 'success' : ''}`} onClick={handleComplete}>
          {done ? '✓ Completed — click to undo' : 'Mark lesson complete'}
        </button>
        {done && <span className="lesson-complete-banner">Nice — progress saved!</span>}
      </div>

      <nav className="lesson-nav">
        {prev ? (
          <Link to={`/lesson/${prev.id}`} className="ln-link prev">
            <span className="ln-dir">‹ Previous</span>
            <span className="ln-title">Day {prev.day}: {prev.title}</span>
          </Link>
        ) : <span />}
        {next ? (
          <Link to={`/lesson/${next.id}`} className="ln-link next">
            <span className="ln-dir">Next ›</span>
            <span className="ln-title">Day {next.day}: {next.title}</span>
          </Link>
        ) : (
          <Link to="/" className="ln-link next">
            <span className="ln-dir">Finish ›</span>
            <span className="ln-title">Back to dashboard</span>
          </Link>
        )}
      </nav>
    </article>
  )
}
