'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    Tawk_API?: any
    Tawk_LoadStart?: Date
  }
}

const TawkTo = () => {
  useEffect(() => {
    // Initialize Tawk.to
    window.Tawk_API = window.Tawk_API || {}
    window.Tawk_LoadStart = new Date()

    const script = document.createElement('script')
    script.async = true
    script.src = 'https://embed.tawk.to/6925d3a308d0cd1961dee9fb/1jats5e3q'
    script.charset = 'UTF-8'
    script.setAttribute('crossorigin', '*')

    const firstScript = document.getElementsByTagName('script')[0]
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript)
    } else {
      document.head.appendChild(script)
    }

    return () => {
      // Cleanup on unmount
      const tawkScript = document.querySelector('script[src*="embed.tawk.to"]')
      if (tawkScript) {
        tawkScript.remove()
      }
    }
  }, [])

  return null
}

export default TawkTo

