import { achievements } from '../data/achievements'
import { useProgress } from '../context/ProgressContext'

export default function Achievements() {
  const ctx = useProgress()
  const { overallPct, userName, setUserName } = ctx

  const earned = achievements.filter((a) => a.test(ctx))
  const earnedCount = earned.length
  const graduated = overallPct === 100

  return (
    <div>
      <div className="hero">
        <div className="eyebrow">Milestones</div>
        <h1>Achievements 🏅</h1>
        <p className="lede">
          {earnedCount}/{achievements.length} badges earned. Keep going — finish all 30 lessons
          to unlock your Certificate of Completion.
        </p>
      </div>

      <div className="badge-grid">
        {achievements.map((a) => {
          const got = a.test(ctx)
          return (
            <div key={a.id} className={`badge card ${got ? 'earned' : 'locked'}`}>
              <div className="badge-emoji">{got ? a.emoji : '🔒'}</div>
              <div className="badge-title">{a.title}</div>
              <div className="badge-desc">{a.desc}</div>
            </div>
          )
        })}
      </div>

      <div className="section-head"><h2>Certificate of Completion 🎓</h2></div>

      <div className="cert-name-row card">
        <label htmlFor="certname">Name on certificate</label>
        <input
          id="certname"
          type="text"
          value={userName}
          placeholder="Your name"
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>

      {graduated ? (
        <>
          <div className="certificate" id="certificate">
            <div className="cert-inner">
              <div className="cert-seal">🛡️</div>
              <div className="cert-eyebrow">Cyber Academy</div>
              <h2 className="cert-h">Certificate of Completion</h2>
              <p className="cert-sub">This certifies that</p>
              <div className="cert-name">{userName || 'Your Name'}</div>
              <p className="cert-sub">
                has successfully completed the<br />
                <strong>30-Day Coding &amp; Cybersecurity Bootcamp</strong>
              </p>
              <div className="cert-foot">
                <span>{new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                <span>All 30 lessons · {earnedCount}/{achievements.length} badges</span>
              </div>
            </div>
          </div>
          <div className="lesson-actions">
            <button className="btn" onClick={() => window.print()}>🖨️ Print / Save as PDF</button>
          </div>
        </>
      ) : (
        <div className="cert-locked card">
          <div className="badge-emoji">🔒</div>
          <div>
            <strong>Certificate locked</strong>
            <div className="muted" style={{ marginTop: 4 }}>
              You're at {overallPct}% — complete all 30 lessons to unlock and print your certificate.
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
