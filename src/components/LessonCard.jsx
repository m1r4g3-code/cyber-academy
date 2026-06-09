import { Link } from 'react-router-dom'
import { useProgress } from '../context/ProgressContext'

const TRACK_LABEL = { coding: 'Coding', cyber: 'Cyber', both: 'Coding + Cyber' }

export default function LessonCard({ lesson }) {
  const { completed, quizScores } = useProgress()
  const done = !!completed[lesson.id]
  const score = quizScores[lesson.id]

  return (
    <Link to={`/lesson/${lesson.id}`} className={`lesson-card card ${done ? 'done' : ''}`}>
      <div className="day-badge">
        {done ? '✓' : <>Day<br />{lesson.day}</>}
      </div>
      <div className="lc-body">
        <div className="lc-title">{lesson.title}</div>
        <div className="lc-meta">
          <span className={`tag ${lesson.track}`}>{TRACK_LABEL[lesson.track]}</span>
          {score && <span className="tag score">Quiz {score.correct}/{score.total}</span>}
          {done && <span className="muted">Completed</span>}
        </div>
      </div>
      <span className="lc-arrow">›</span>
    </Link>
  )
}
