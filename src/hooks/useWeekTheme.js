import { useEffect } from 'react'

/**
 * Applies the glow-in-the-dark week theme by setting data-week="N"
 * on <html> while the component is mounted. Cleans up on unmount or
 * when the week changes, restoring the normal light/dark theme.
 */
export function useWeekTheme(week) {
  useEffect(() => {
    if (!week) return undefined
    const root = document.documentElement
    root.setAttribute('data-week', String(week))
    return () => root.removeAttribute('data-week')
  }, [week])
}
