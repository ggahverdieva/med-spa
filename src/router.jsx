import { useState, useEffect } from 'react'

// Minimal dependency-free router for this static site.
// Netlify already serves index.html for any path (see netlify.toml),
// and Vite's dev server does SPA fallback by default — so deep links work.

export function navigate(to) {
  const [path] = to.split('#')
  if ((path || '/') !== window.location.pathname) {
    window.history.pushState({}, '', to)
    window.dispatchEvent(new PopStateEvent('popstate'))
  }
}

// Returns the current pathname and re-renders on back/forward + navigate().
export function usePath() {
  const [path, setPath] = useState(window.location.pathname)
  useEffect(() => {
    const onPop = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])
  return path
}

// Drop-in <a> that does client-side navigation. Supports "/path", "#hash"
// (scroll on current page) and "/path#hash" (navigate, then scroll).
export function Link({ to, onClick, children, ...props }) {
  const handle = (e) => {
    // let the browser handle new-tab / modified clicks
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button) return
    e.preventDefault()
    onClick?.(e)

    const [path, hash] = to.split('#')
    const targetPath = path || window.location.pathname
    const changingPage = targetPath !== window.location.pathname

    if (changingPage) navigate(targetPath)

    if (hash) {
      // wait for the destination page to render, then scroll to the anchor
      requestAnimationFrame(() => requestAnimationFrame(() => {
        const el = document.getElementById(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }))
    } else if (changingPage) {
      window.scrollTo({ top: 0 })
    }
  }
  return <a href={to} onClick={handle} {...props}>{children}</a>
}
