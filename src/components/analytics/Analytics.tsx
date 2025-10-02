'use client'
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const handleRouteChange = () => {
      if (typeof window.gtag !== 'undefined') {
        window.gtag('config', process.env.NEXT_PUBLIC_GA_ID!, {
          page_path: pathname,
        })
      }
    }
    handleRouteChange()
  }, [pathname, searchParams])

  useEffect(() => {
    // Track CTA clicks
    const trackCTAClicks = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const trackData = target.getAttribute('data-track')
      if (trackData) {
        window.gtag?.('event', trackData, {
          element: target.textContent,
          page: pathname,
        })
      }
    }
    document.addEventListener('click', trackCTAClicks)
    return () => document.removeEventListener('click', trackCTAClicks)
  }, [pathname])

  return null
}

export function useAnalytics() {
  return {
    trackEvent: (eventName: string, properties?: Record<string, string | number | boolean | null>) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, properties)
      }
    },
  }
}


