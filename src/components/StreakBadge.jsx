import { useProgress } from '../context/ProgressContext'
import Icon from './Icon'

export default function StreakBadge() {
  const { streak } = useProgress()
  const count = streak?.count || 0
  return (
    <div className="streak" title="Consecutive days studied">
      <Icon name="flame" size={17} className="flame" />
      <span>{count} day{count === 1 ? '' : 's'} streak</span>
    </div>
  )
}
