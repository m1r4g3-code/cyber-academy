import { useParams, Link } from 'react-router-dom'
import { getWeek } from '../data/curriculum'
import { useProgress } from '../context/ProgressContext'
import LessonCard from '../components/LessonCard'
import { useWeekTheme } from '../hooks/useWeekTheme'

export default function WeekView() {
  const { weekNum } = useParams()
  const week = getWeek(weekNum)
  const { weekProgress } = useProgress()

  useWeekTheme(week?.week)

  if (!week) {
    return <div className="center-empty">Week not found. <Link to="/">Back to dashboard</Link></div>
  }

  const wp = weekProgress[week.week]

  return (
    <div>
      <div className="lesson-top">
        <div className="crumb"><Link to="/">Dashboard</Link> › Week {week.week}</div>
      </div>

      <div className="hero" style={{ marginBottom: 20 }}>
        <div className="eyebrow">Week {week.week} · {wp?.pct ?? 0}% complete</div>
        <h1>{week.title}</h1>
      </div>

      <div className="week-banner">
        <strong>🎯 Goal</strong>
        <div className="goal">{week.goal}</div>
        <div className="can-do"><strong>By the end of this week you can:</strong> {week.canDo}</div>
      </div>

      <div className="lesson-list">
        {week.lessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </div>
  )
}
