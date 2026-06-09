import { useState, useEffect } from 'react'
import { useProgress } from '../context/ProgressContext'

const LETTERS = ['A', 'B', 'C', 'D', 'E']

/**
 * Multiple-choice quiz with instant per-question feedback + explanations.
 * Records the score to context once all questions are answered.
 */
export default function Quiz({ lessonId, questions }) {
  const { saveQuizScore, quizScores } = useProgress()
  // answers[i] = chosen option index (or undefined)
  const [answers, setAnswers] = useState({})

  // reset when navigating between lessons
  useEffect(() => { setAnswers({}) }, [lessonId])

  function choose(qIndex, optIndex) {
    if (answers[qIndex] !== undefined) return // lock after answering
    const next = { ...answers, [qIndex]: optIndex }
    setAnswers(next)
    if (Object.keys(next).length === questions.length) {
      const correct = questions.reduce(
        (acc, q, i) => acc + (next[i] === q.answer ? 1 : 0), 0
      )
      saveQuizScore(lessonId, correct, questions.length)
    }
  }

  const answeredCount = Object.keys(answers).length
  const allDone = answeredCount === questions.length
  const correctCount = questions.reduce(
    (acc, q, i) => acc + (answers[i] === q.answer ? 1 : 0), 0
  )
  const prevBest = quizScores[lessonId]

  return (
    <section className="quiz card">
      <h3>🧠 Knowledge check</h3>
      <p className="quiz-sub">
        {prevBest ? `Best score: ${prevBest.correct}/${prevBest.total}. ` : ''}
        Answer all {questions.length} to record your score.
      </p>

      {questions.map((q, qi) => {
        const chosen = answers[qi]
        const answered = chosen !== undefined
        return (
          <div className="quiz-q" key={qi}>
            <div className="q-text"><span className="q-num">{qi + 1}.</span>{q.q}</div>
            <div className="quiz-options">
              {q.options.map((opt, oi) => {
                let cls = 'quiz-opt'
                if (chosen === oi) cls += ' selected'
                if (answered && oi === q.answer) cls += ' correct'
                if (answered && chosen === oi && oi !== q.answer) cls += ' wrong'
                return (
                  <button
                    key={oi}
                    className={cls}
                    disabled={answered}
                    onClick={() => choose(qi, oi)}
                  >
                    <span className="opt-letter">{LETTERS[oi]}</span>
                    <span>{opt}</span>
                  </button>
                )
              })}
            </div>
            {answered && (
              <div className="quiz-explain">
                <strong>{chosen === q.answer ? 'Correct! ' : 'Not quite. '}</strong>
                {q.explain}
              </div>
            )}
          </div>
        )
      })}

      {allDone && (
        <div className="quiz-result">
          <span className="qr-score">{correctCount}/{questions.length}</span>
          <span>
            {correctCount === questions.length
              ? 'Perfect score — you nailed it! 🎉'
              : correctCount >= questions.length / 2
                ? 'Nice work. Review the explanations above for any you missed.'
                : 'Good effort — reread the lesson and the explanations, then revisit.'}
          </span>
        </div>
      )}
    </section>
  )
}
