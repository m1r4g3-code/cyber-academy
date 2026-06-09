import { NavLink } from 'react-router-dom'
import { curriculum } from '../data/curriculum'
import { useProgress } from '../context/ProgressContext'
import ThemeToggle from './ThemeToggle'
import Icon from './Icon'

export default function Sidebar() {
  const { weekProgress, labsCompletedCount, totalLabs } = useProgress()

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <span className="logo"><Icon name="shield" size={24} /></span>
        <span className="brand-text">Cyber Academy</span>
      </div>

      <NavLink to="/" end className="nav-link">
        <span className="nav-icon"><Icon name="dashboard" size={18} /></span>
        <span className="nav-label">Dashboard</span>
      </NavLink>

      {curriculum.map((w) => (
        <NavLink key={w.week} to={`/week/${w.week}`} className={`nav-link wk-${w.week}`}>
          <span className="nav-icon nav-week-num">{w.week}</span>
          <span className="nav-label">Week {w.week}</span>
          <span className="nav-mini-pct">{weekProgress[w.week]?.pct ?? 0}%</span>
        </NavLink>
      ))}

      <NavLink to="/labs" className="nav-link">
        <span className="nav-icon"><Icon name="labs" size={18} /></span>
        <span className="nav-label">Labs</span>
        <span className="nav-mini-pct">{labsCompletedCount}/{totalLabs}</span>
      </NavLink>

      <NavLink to="/playground" className="nav-link">
        <span className="nav-icon"><Icon name="playground" size={18} /></span>
        <span className="nav-label">Playground</span>
      </NavLink>

      <NavLink to="/achievements" className="nav-link">
        <span className="nav-icon"><Icon name="achievements" size={18} /></span>
        <span className="nav-label">Achievements</span>
      </NavLink>

      <NavLink to="/search" className="nav-link">
        <span className="nav-icon"><Icon name="search" size={18} /></span>
        <span className="nav-label">Search</span>
      </NavLink>

      <div className="sidebar-footer">
        <span className="muted theme-label" style={{ fontSize: '0.78rem' }}>Theme</span>
        <ThemeToggle />
      </div>
    </aside>
  )
}
