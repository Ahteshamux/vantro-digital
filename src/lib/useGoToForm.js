import { useNavigate } from 'react-router-dom'

/**
 * Returns a click handler that scrolls to the inline lead form when the
 * current page has one, and routes to /contact when it doesn't.
 *
 * Shared components (Proof, Packages, Comparison) render on several pages —
 * only some of which include a ContactSection — so a hardcoded "#contact"
 * anchor would silently do nothing on the others.
 */
export function useGoToForm() {
  const navigate = useNavigate()

  return (e) => {
    e.preventDefault()
    const inline = document.getElementById('contact')
    if (inline) {
      inline.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      navigate('/contact')
    }
  }
}
