import { useState, useEffect, useCallback } from 'react'

/**
 * State that persists to localStorage.
 * Usage: const [value, setValue] = useLocalStorage('key', defaultValue)
 * setValue accepts a value or an updater function, just like useState.
 */
export function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key)
      return stored !== null ? JSON.parse(stored) : defaultValue
    } catch {
      return defaultValue
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // storage full or unavailable — fail silently, app still works in-memory
    }
  }, [key, value])

  const update = useCallback((next) => {
    setValue((prev) => (typeof next === 'function' ? next(prev) : next))
  }, [])

  return [value, update]
}
