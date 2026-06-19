import { useEffect, useRef } from 'react'

// Reveal-on-scroll: fades + slides children in as they enter the viewport.
// Pass a `dep` (e.g. the current route) to re-scan the DOM after a page change.
export function useReveal(dep) {
  const ref = useRef(null)
  useEffect(() => {
    const root = ref.current || document
    const els = Array.from(root.querySelectorAll('[data-reveal]'))
    els.forEach(el => el.classList.add('reveal'))
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' })
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [dep])
  return ref
}
