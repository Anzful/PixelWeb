'use client'

import { useEffect, useState } from 'react'

declare global {
  interface Window {
    Tawk_API?: any
    Tawk_LoadStart?: Date
  }
}

// IP addresses that should not see the Tawk.to widget (admin IPs)
const WHITELISTED_IPS = [
  '31.146.70.219',
]

const TawkTo = () => {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    // Check if user's IP is whitelisted (should not see chat)
    const checkIP = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json')
        const data = await response.json()
        const userIP = data.ip
        
        // If IP is whitelisted, don't load Tawk.to
        if (WHITELISTED_IPS.includes(userIP)) {
          console.log('Tawk.to: Admin IP detected, hiding widget')
          setShouldLoad(false)
          return
        }
        
        setShouldLoad(true)
      } catch (error) {
        // If IP check fails, load Tawk.to anyway for regular users
        console.log('Tawk.to: IP check failed, loading widget')
        setShouldLoad(true)
      }
    }

    checkIP()
  }, [])

  useEffect(() => {
    if (!shouldLoad) return

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
  }, [shouldLoad])

  return null
}

export default TawkTo
