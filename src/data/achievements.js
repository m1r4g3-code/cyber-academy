/* Achievement badges. Each `test(stats)` returns true when earned.
   `stats` is the value object from ProgressContext. */
export const achievements = [
  { id: 'first-step', emoji: '👣', title: 'First Step', desc: 'Complete your first lesson',
    test: (s) => s.completedCount >= 1 },
  { id: 'quiz-whiz', emoji: '🧠', title: 'Quiz Whiz', desc: 'Take 10 quizzes',
    test: (s) => Object.keys(s.quizScores).length >= 10 },
  { id: 'streak-7', emoji: '🔥', title: 'On Fire', desc: 'Reach a 7-day streak',
    test: (s) => (s.streak?.count || 0) >= 7 },
  { id: 'halfway', emoji: '⛰️', title: 'Halfway There', desc: 'Reach 50% overall',
    test: (s) => s.overallPct >= 50 },
  { id: 'week-1', emoji: '🟢', title: 'Week 1 Cleared', desc: 'Finish all of Week 1',
    test: (s) => s.weekProgress[1]?.pct === 100 },
  { id: 'week-2', emoji: '🔵', title: 'Week 2 Cleared', desc: 'Finish all of Week 2',
    test: (s) => s.weekProgress[2]?.pct === 100 },
  { id: 'week-3', emoji: '🩷', title: 'Week 3 Cleared', desc: 'Finish all of Week 3',
    test: (s) => s.weekProgress[3]?.pct === 100 },
  { id: 'week-4', emoji: '🟣', title: 'Week 4 Cleared', desc: 'Finish all of Week 4',
    test: (s) => s.weekProgress[4]?.pct === 100 },
  { id: 'lab-rat', emoji: '🧪', title: 'Lab Rat', desc: 'Complete every hands-on lab',
    test: (s) => s.totalLabs > 0 && s.labsCompletedCount >= s.totalLabs },
  { id: 'graduate', emoji: '🎓', title: 'Graduate', desc: 'Complete all 30 lessons',
    test: (s) => s.overallPct === 100 },
]
