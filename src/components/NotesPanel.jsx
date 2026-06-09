import { useState, useEffect, useRef } from 'react'
import { useProgress } from '../context/ProgressContext'

/**
 * Per-lesson notes with debounced autosave to localStorage (via context).
 */
export default function NotesPanel({ lessonId }) {
  const { notes, saveNote } = useProgress()
  const [text, setText] = useState(notes[lessonId] || '')
  const [saved, setSaved] = useState(false)
  const timer = useRef(null)

  // load the right note when switching lessons
  useEffect(() => {
    setText(notes[lessonId] || '')
    setSaved(false)
  }, [lessonId]) // eslint-disable-line react-hooks/exhaustive-deps

  function onChange(e) {
    const value = e.target.value
    setText(value)
    setSaved(false)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      saveNote(lessonId, value)
      setSaved(true)
    }, 500)
  }

  return (
    <section className="notes">
      <h3>📝 My notes</h3>
      <textarea
        value={text}
        onChange={onChange}
        placeholder="Jot down what you learned, questions, command outputs, flags…"
      />
      <div className="save-state">{saved ? 'Saved ✓' : text ? 'Typing…' : ''}</div>
    </section>
  )
}
