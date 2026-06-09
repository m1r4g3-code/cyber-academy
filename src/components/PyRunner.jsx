import { useState, useRef } from 'react'
import { loadPyodideOnce } from '../utils/pyodide'

const DEFAULT_STARTER = '# Write Python here, then press Run ▶\nprint("Hello, Cyber Academy!")\n'

/**
 * In-browser Python editor + runner powered by Pyodide.
 * - Loads Pyodide lazily on first Run (~first run downloads the runtime).
 * - Captures stdout/stderr; input() is served via the browser prompt.
 */
export default function PyRunner({ starter = DEFAULT_STARTER }) {
  const [code, setCode] = useState(starter)
  const [output, setOutput] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | running
  const taRef = useRef(null)

  async function run() {
    let buf = ''
    setOutput('')
    try {
      setStatus(loadedHint())
      const py = await loadPyodideOnce()
      py.setStdout({ batched: (s) => { buf += s } })
      py.setStderr({ batched: (s) => { buf += s } })
      py.setStdin({ stdin: () => window.prompt('Your program is asking for input:') ?? '' })
      setStatus('running')
      await py.runPythonAsync(code)
    } catch (e) {
      buf += (buf && !buf.endsWith('\n') ? '\n' : '') + '⛔ ' + (e?.message || String(e))
    } finally {
      setOutput(buf || '(no output)')
      setStatus('idle')
    }
  }

  // status label helper — show a friendly loading note only the first time
  function loadedHint() {
    return globalThis.loadPyodide ? 'running' : 'loading'
  }

  // basic Tab support inside the editor
  function onKeyDown(e) {
    if (e.key === 'Tab') {
      e.preventDefault()
      const el = taRef.current
      const start = el.selectionStart
      const end = el.selectionEnd
      const next = code.slice(0, start) + '    ' + code.slice(end)
      setCode(next)
      requestAnimationFrame(() => { el.selectionStart = el.selectionEnd = start + 4 })
    }
  }

  const busy = status !== 'idle'

  return (
    <section className="pyrunner card">
      <div className="pyrunner-head">
        <span className="pyrunner-title">🐍 Try it yourself</span>
        <div className="pyrunner-actions">
          <button className="btn ghost" onClick={() => { setCode(starter); setOutput('') }} disabled={busy}>Reset</button>
          <button className="btn" onClick={run} disabled={busy}>
            {status === 'loading' ? 'Loading Python…' : status === 'running' ? 'Running…' : 'Run ▶'}
          </button>
        </div>
      </div>
      <textarea
        ref={taRef}
        className="pyrunner-editor"
        value={code}
        spellCheck={false}
        onChange={(e) => setCode(e.target.value)}
        onKeyDown={onKeyDown}
      />
      {status === 'loading' && (
        <div className="pyrunner-note">First run downloads the Python runtime (~10 MB) — this only happens once.</div>
      )}
      {output && (
        <pre className="pyrunner-output">{output}</pre>
      )}
    </section>
  )
}
