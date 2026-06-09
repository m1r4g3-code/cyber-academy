import { useProgress } from '../context/ProgressContext'

export default function StreakBadge() {
  const { streak } = useProgress()
  const count = streak?.count || 0
  return (
    <div className="streak" title="Consecutive days studied">
      <span className="flame">🔥</span>
      <span>{count} day{count === 1 ? '' : 's'} streak</span>
    </div>
  )
}
