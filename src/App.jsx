import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import WeekView from './pages/WeekView'
import LessonView from './pages/LessonView'
import Labs from './pages/Labs'
import LabView from './pages/LabView'
import Playground from './pages/Playground'
import Achievements from './pages/Achievements'
import Search from './pages/Search'

export default function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/week/:weekNum" element={<WeekView />} />
          <Route path="/lesson/:lessonId" element={<LessonView />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/lab/:labId" element={<LabView />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </main>
    </div>
  )
}
