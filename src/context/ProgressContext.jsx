import { createContext, useContext, useMemo, useCallback, useEffect } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { curriculum, allLessons } from '../data/curriculum'
import { labs } from '../data/labs'

const ProgressContext = createContext(null)

const K = {
  completed: 'cyber-academy:completed',
  quiz: 'cyber-academy:quizScores',
  notes: 'cyber-academy:notes',
  streak: 'cyber-academy:streak',
  theme: 'cyber-academy:theme',
  labSteps: 'cyber-academy:labSteps',
  name: 'cyber-academy:name',
}

/* ---- date helpers (local time, YYYY-MM-DD) ---- */
function todayStr() {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}
function daysBetween(a, b) {
  const da = new Date(a + 'T00:00:00')
  const db = new Date(b + 'T00:00:00')
  return Math.round((db - da) / 86400000)
}

export function ProgressProvider({ children }) {
  const [completed, setCompleted] = useLocalStorage(K.completed, {})
  const [quizScores, setQuizScores] = useLocalStorage(K.quiz, {})
  const [notes, setNotes] = useLocalStorage(K.notes, {})
  const [streak, setStreak] = useLocalStorage(K.streak, { count: 0, lastStudiedDate: null })
  const [theme, setTheme] = useLocalStorage(K.theme, 'light')
  const [labSteps, setLabSteps] = useLocalStorage(K.labSteps, {}) // { [labId]: { [stepIndex]: true } }
  const [userName, setUserName] = useLocalStorage(K.name, '')

  // apply theme to <html>
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }, [setTheme])

  // record a study day -> update streak
  const touchStreak = useCallback(() => {
    const today = todayStr()
    setStreak((prev) => {
      if (prev.lastStudiedDate === today) return prev
      if (prev.lastStudiedDate && daysBetween(prev.lastStudiedDate, today) === 1) {
        return { count: prev.count + 1, lastStudiedDate: today }
      }
      return { count: 1, lastStudiedDate: today }
    })
  }, [setStreak])

  const toggleComplete = useCallback((lessonId) => {
    setCompleted((prev) => {
      const next = { ...prev }
      if (next[lessonId]) {
        delete next[lessonId]
      } else {
        next[lessonId] = true
        touchStreak()
      }
      return next
    })
  }, [setCompleted, touchStreak])

  const saveQuizScore = useCallback((lessonId, correct, total) => {
    setQuizScores((prev) => ({ ...prev, [lessonId]: { correct, total } }))
  }, [setQuizScores])

  const saveNote = useCallback((lessonId, text) => {
    setNotes((prev) => ({ ...prev, [lessonId]: text }))
  }, [setNotes])

  const resetProgress = useCallback(() => {
    setCompleted({})
    setQuizScores({})
    setNotes({})
    setLabSteps({})
    setStreak({ count: 0, lastStudiedDate: null })
    // theme and name are intentionally preserved
  }, [setCompleted, setQuizScores, setNotes, setLabSteps, setStreak])

  const exportData = useCallback(() => ({
    app: 'cyber-academy',
    version: 1,
    exportedAt: new Date().toISOString(),
    name: userName,
    completed, quizScores, notes, streak, labSteps, theme,
  }), [userName, completed, quizScores, notes, streak, labSteps, theme])

  const importData = useCallback((data) => {
    if (!data || typeof data !== 'object' || data.app !== 'cyber-academy') return false
    if (data.completed) setCompleted(data.completed)
    if (data.quizScores) setQuizScores(data.quizScores)
    if (data.notes) setNotes(data.notes)
    if (data.streak) setStreak(data.streak)
    if (data.labSteps) setLabSteps(data.labSteps)
    if (data.theme) setTheme(data.theme)
    if (typeof data.name === 'string') setUserName(data.name)
    return true
  }, [setCompleted, setQuizScores, setNotes, setStreak, setLabSteps, setTheme, setUserName])

  const toggleLabStep = useCallback((labId, stepIndex) => {
    setLabSteps((prev) => {
      const lab = { ...(prev[labId] || {}) }
      if (lab[stepIndex]) delete lab[stepIndex]
      else { lab[stepIndex] = true; touchStreak() }
      return { ...prev, [labId]: lab }
    })
  }, [setLabSteps, touchStreak])

  /* ---- derived selectors ---- */
  const totalLessons = allLessons.length
  const completedCount = useMemo(
    () => allLessons.filter((l) => completed[l.id]).length,
    [completed]
  )
  const overallPct = totalLessons ? Math.round((completedCount / totalLessons) * 100) : 0

  const weekProgress = useMemo(() => {
    const map = {}
    curriculum.forEach((w) => {
      const done = w.lessons.filter((l) => completed[l.id]).length
      map[w.week] = { done, total: w.lessons.length, pct: Math.round((done / w.lessons.length) * 100) }
    })
    return map
  }, [completed])

  const nextLesson = useMemo(
    () => allLessons.find((l) => !completed[l.id]) || null,
    [completed]
  )

  // per-lab progress: { [labId]: { done, total, pct, complete } }
  const labProgress = useMemo(() => {
    const map = {}
    labs.forEach((lab) => {
      const total = lab.steps.length
      const done = Object.keys(labSteps[lab.id] || {}).length
      map[lab.id] = { done, total, pct: Math.round((done / total) * 100), complete: done === total }
    })
    return map
  }, [labSteps])

  const labsCompletedCount = useMemo(
    () => labs.filter((lab) => labProgress[lab.id]?.complete).length,
    [labProgress]
  )

  const value = {
    completed, quizScores, notes, streak, theme, labSteps, userName,
    toggleTheme, toggleComplete, saveQuizScore, saveNote, toggleLabStep, resetProgress,
    setUserName, exportData, importData,
    totalLessons, completedCount, overallPct, weekProgress, nextLesson,
    labProgress, labsCompletedCount, totalLabs: labs.length,
  }

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
}

export function useProgress() {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider')
  return ctx
}
