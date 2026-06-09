import {
  ShieldCheck, LayoutDashboard, FlaskConical, SquareTerminal, Award, Search, Sparkles,
  Download, Upload, Timer, Brain, NotebookPen, BookOpen, ExternalLink, Wrench, Wifi,
  KeyRound, FileSearch, Radar, Trophy, Footprints, Flame, Mountain, CircleCheck,
  GraduationCap, Lock, Sun, Moon, PartyPopper, RotateCcw, Target, Rocket, HelpCircle,
} from 'lucide-react'

// One place to map friendly names -> Lucide icon components.
const MAP = {
  shield: ShieldCheck,
  dashboard: LayoutDashboard,
  labs: FlaskConical,
  playground: SquareTerminal,
  code: SquareTerminal,
  achievements: Award,
  search: Search,
  sparkles: Sparkles,
  download: Download,
  upload: Upload,
  timer: Timer,
  brain: Brain,
  notes: NotebookPen,
  resources: BookOpen,
  lesson: BookOpen,
  link: ExternalLink,
  wrench: Wrench,
  wifi: Wifi,
  key: KeyRound,
  'file-search': FileSearch,
  radar: Radar,
  trophy: Trophy,
  footprints: Footprints,
  flame: Flame,
  mountain: Mountain,
  check: CircleCheck,
  graduate: GraduationCap,
  lock: Lock,
  sun: Sun,
  moon: Moon,
  party: PartyPopper,
  reset: RotateCcw,
  target: Target,
  rocket: Rocket,
}

/**
 * <Icon name="labs" /> — renders a Lucide icon. Inherits currentColor unless
 * `color` is given, so it can pick up the active accent via CSS.
 */
export default function Icon({ name, size = 20, strokeWidth = 2, className, color }) {
  const C = MAP[name] || HelpCircle
  return <C size={size} strokeWidth={strokeWidth} className={className} color={color} aria-hidden="true" />
}
