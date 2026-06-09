import PyRunner from '../components/PyRunner'
import Icon from '../components/Icon'

export default function Playground() {
  return (
    <div>
      <div className="hero">
        <div className="eyebrow">Sandbox</div>
        <h1 className="head-with-icon"><Icon name="playground" size={30} /> Python Playground</h1>
        <p className="lede">
          Write and run Python right here in your browser — no setup needed. Perfect for
          testing ideas, redoing a lesson exercise, or just experimenting. Your code runs
          locally and privately; nothing is uploaded.
        </p>
      </div>
      <PyRunner starter={'# A sandbox to experiment in. Try editing and pressing Run ▶\n\nname = "learner"\nfor i in range(1, 4):\n    print(f"Hello {name}, this is line {i}")\n'} />
      <p className="muted" style={{ marginTop: 16, fontSize: '0.85rem' }}>
        Tip: <code>input()</code> works too — it will pop up a box asking for your input.
      </p>
    </div>
  )
}
