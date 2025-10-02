import { clsx, type ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function formatCurrency(amount: number, currency: string = '£'): string {
  return `${currency}${amount.toLocaleString('en-GB')}`
}

export function trackEvent(eventName: string, properties?: Record<string, string | number | boolean | null>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties)
  }
  // Add Segment tracking here if needed
  console.log('Track event:', eventName, properties)
}

export function generateMetaTags(title: string, description: string, keywords?: string[]) {
  return {
    title: `${title} | PrepViva`,
    description,
    keywords: keywords?.join(', '),
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'en_GB',
      url: 'https://prepviva.co.uk',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

