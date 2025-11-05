'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function VisitorTracker() {
  const pathname = usePathname()

  useEffect(() => {
    // Track page view
    const trackVisit = async () => {
      try {
        await fetch('/api/track', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ page: pathname }),
        })
      } catch (error) {
        // Silently fail - don't disrupt user experience
        console.debug('Tracking failed:', error)
      }
    }

    // Track after a small delay to ensure it's a real visit
    const timeout = setTimeout(trackVisit, 1000)
    return () => clearTimeout(timeout)
  }, [pathname])

  return null // This component doesn't render anything
}

