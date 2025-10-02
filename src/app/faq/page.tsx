import FAQ from '@/components/sections/FAQ'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ - PrepViva | Frequently Asked Questions',
  description: 'Find answers to common questions about PrepViva\'s AI-powered interview preparation for UK universities and NHS positions.',
  keywords: 'PrepViva FAQ, interview preparation questions, UK university interviews, NHS interview help',
  openGraph: {
    title: 'FAQ - PrepViva | Frequently Asked Questions',
    description: 'Get answers to your questions about AI-powered interview preparation for UK students and NHS professionals.',
    url: 'https://prepviva.co.uk/faq',
    siteName: 'PrepViva',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      <FAQ />
    </div>
  )
}
