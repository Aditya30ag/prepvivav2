import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import TrackingProvider from '@/components/analytics/TrackingProvider'
import CookieBanner from '@/components/layout/CookieBanner'
import Script from 'next/script'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.prepviva.com'),
  title: {
    default: 'PrepViva - AI Interview Preparation for UK Students & NHS Professionals',
    template: '%s | PrepViva'
  },
  description: 'Master UK university and NHS interviews with AI-powered practice. Oxbridge, medical school, Russell Group, and NHS Band 5-Consultant preparation with instant feedback.',
  keywords: [
    'UK interview preparation',
    'NHS interview questions',
    'medical school interview prep UK',
    'Oxbridge interview coaching',
    'Russell Group interview practice',
    'AI interview preparation',
    'NHS values-based interview',
    'MMI practice UK',
    'university admissions interview'
  ],
  authors: [{ name: 'PrepViva Ltd' }],
  creator: 'PrepViva',
  publisher: 'PrepViva Ltd',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.prepviva.com',
    siteName: 'PrepViva',
    title: 'PrepViva - UK\'s Leading AI Interview Platform',
    description: 'Transform interview preparation with AI-powered practice for UK universities and NHS roles.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PrepViva - AI Interview Preparation Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PrepViva - AI Interview Preparation',
    description: 'Master UK university and NHS interviews with AI-powered practice',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'PLACEHOLDER_GOOGLE_VERIFICATION_CODE',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href="https://www.prepviva.com" />
        
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
              page_path: window.location.pathname,
            });
            
            // Cookie consent defaults
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied'
            });
          `}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <TrackingProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <CookieBanner />
        </TrackingProvider>
      </body>
    </html>
  )
}


