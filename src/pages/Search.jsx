import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { allLessons } from '../data/curriculum'
import { labs } from '../data/labs'

// Build a lightweight search index once.
const index = [
  ...allLessons.map((l) => ({
    type: 'lesson',
    to: `/lesson/${l.id}`,
    title: l.title,
    sub: `Day ${l.day} · Week ${l.week}`,
    emoji: '📘',
    haystack: [
      l.title,
      ...(l.objectives || []),
      ...(l.sections || []).map((s) => s.heading),
      l.practical?.title,
    ].join(' ').toLowerCase(),
  })),
  ...labs.map((lab) => ({
    type: 'lab',
    to: `/lab/${lab.id}`,
    title: lab.title,
    sub: `Lab · Week ${lab.week} · ${lab.difficulty}`,
    emoji: lab.emoji,
    haystack: [lab.title, lab.summary, ...(lab.objectives || [])].join(' ').toLowerCase(),
  })),
]

export default function Search() {
  const [q, setQ] = useState('')

  const results = useMemo(() => {
    const term = q.trim().toLowerCase()
    if (!term) return []
    return index.filter((item) => item.haystack.includes(term)).slice(0, 40)
  }, [q])

  return (
    <div>
      <div className="hero">
        <div className="eyebrow">Find anything</div>
        <h1>Search 🔍</h1>
      </div>

      <input
        className="search-input"
        type="search"
        autoFocus
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search lessons and labs… (e.g. SQL injection, loops, hashing)"
      />

      {q.trim() && (
        <p className="muted" style={{ margin: '14px 2px' }}>
          {results.length} result{results.length === 1 ? '' : 's'} for “{q.trim()}”
        </p>
      )}

      <div className="lesson-list">
        {results.map((r) => (
          <Link key={r.type + r.to} to={r.to} className="lesson-card card">
            <div className="day-badge" style={{ fontSize: '1.3rem' }}>{r.emoji}</div>
            <div className="lc-body">
              <div className="lc-title">{r.title}</div>
              <div className="lc-meta"><span className="muted">{r.sub}</span></div>
            </div>
            <span className="lc-arrow">›</span>
          </Link>
        ))}
        {q.trim() && results.length === 0 && (
          <div className="center-empty">No matches. Try a different word.</div>
        )}
      </div>
    </div>
  )
}
