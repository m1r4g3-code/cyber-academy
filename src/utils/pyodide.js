/* Lazily load Pyodide (Python in the browser) from the CDN, once. */
const PYODIDE_VERSION = 'v0.26.4'
const BASE = `https://cdn.jsdelivr.net/pyodide/${PYODIDE_VERSION}/full/`

let pyodidePromise = null

export function loadPyodideOnce() {
  if (pyodidePromise) return pyodidePromise

  pyodidePromise = new Promise((resolve, reject) => {
    // Pyodide already injected?
    if (globalThis.loadPyodide) {
      globalThis.loadPyodide({ indexURL: BASE }).then(resolve, reject)
      return
    }
    const script = document.createElement('script')
    script.src = `${BASE}pyodide.js`
    script.onload = () => {
      globalThis.loadPyodide({ indexURL: BASE }).then(resolve, reject)
    }
    script.onerror = () => {
      pyodidePromise = null // allow retry
      reject(new Error('Could not download Python. Check your internet connection and try again.'))
    }
    document.head.appendChild(script)
  })

  return pyodidePromise
}
