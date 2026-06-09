# 🛡️ Cyber Academy

A sleek, Apple-style learning web app that takes you through a 30-day coding + cybersecurity journey — with lessons, 30-minute practical sessions, quizzes, progress tracking, a daily streak, notes, and dark mode. It mirrors the curriculum in `../ROADMAP.md`.

Everything is saved **locally in your browser** (localStorage) — no accounts, no internet required after install.

## Run it

You need **Node.js** (already installed if `node -v` prints a version).

```bash
cd cyber-academy
npm install      # first time only — downloads dependencies
npm run dev      # starts the app, opens http://localhost:5173
```

Then learn! Click **Start Day 1**, read the lesson, do the 30-minute practical, take the quiz, jot notes, and hit **Mark lesson complete**. Your progress, streak, quiz scores, notes, and theme all persist between sessions.

To stop the server: press `Ctrl + C` in the terminal.

## Build a production version (optional)

```bash
npm run build    # outputs static files to /dist
npm run preview  # preview the production build locally
```

## Features

- **Dashboard** — overall progress ring, per-week rings, streak, and a "Continue where you left off" button.
- **30 lessons** across 4 weeks, each with learning objectives, taught content, a 30-minute practical, a quiz, and free resources.
- **Quizzes** — instant feedback + explanations; scores saved per lesson.
- **Notes** — an autosaving notes box on every lesson.
- **Daily streak** — counts consecutive days you complete a lesson.
- **Light / dark mode** — toggle in the sidebar.

## How it's built

- **React + Vite** (fast dev server, simple build)
- **react-router-dom** for navigation, **react-markdown** for lesson content
- Plain CSS with CSS variables for the Apple aesthetic + theming
- `localStorage` for all persistence (see `src/context/ProgressContext.jsx`)

## Editing the curriculum

All lesson content lives in `src/data/curriculum.js`. Each lesson is a plain object (title, objectives, sections, practical, quiz, resources) — edit the text there and the app updates instantly.

## ⚖️ Reminder

Only practise scanning/attacking on systems you own or platforms that authorise it (TryHackMe, PortSwigger, Hack The Box). Unauthorised access is illegal.
