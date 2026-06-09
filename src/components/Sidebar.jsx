import { NavLink } from 'react-router-dom'
import { curriculum } from '../data/curriculum'
import { useProgress } from '../context/ProgressContext'
import ThemeToggle from './ThemeToggle'

export default function Sidebar() {
  const { weekProgress } = useProgress()

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <span className="logo">🛡️</span>
        <span className="brand-text">Cyber Academy</span>
      </div>

      <NavLink to="/" end className="nav-link">
        <span className="nav-icon">◎</span>
        <span className="nav-label">Dashboard</span>
      </NavLink>

      {curriculum.map((w) => (
        <NavLink key={w.week} to={`/week/${w.week}`} className="nav-link">
          <span className="nav-icon">{w.week}</span>
          <span className="nav-label">Week {w.week}</span>
          <span className="nav-mini-pct">{weekProgress[w.week]?.pct ?? 0}%</span>
        </NavLink>
      ))}

      <div className="sidebar-footer">
        <span className="muted theme-label" style={{ fontSize: '0.78rem' }}>Theme</span>
        <ThemeToggle />
      </div>
    </aside>
  )
}
