import { useProgress } from '../context/ProgressContext'
import Icon from './Icon'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useProgress()
  const isDark = theme === 'dark'
  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <span className="knob"><Icon name={isDark ? 'moon' : 'sun'} size={15} /></span>
    </button>
  )
}
