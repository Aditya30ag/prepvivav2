'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function TrackingProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    // Track page views
    if (typeof window !== 'undefined' && window.gtag && process.env.NEXT_PUBLIC_GA_ID) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
        page_path: pathname,
      })
    }
  }, [pathname])

  // Add event tracking helper
  useEffect(() => {
    const trackEvent = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const eventName = target.getAttribute('data-event')
      
      if (eventName && window.gtag) {
        window.gtag('event', eventName, {
          event_category: 'engagement',
          event_label: target.textContent,
        })
      }
    }

    document.addEventListener('click', trackEvent)
    return () => document.removeEventListener('click', trackEvent)
  }, [])

  return <>{children}</>
}
