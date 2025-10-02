/*** FILE: /components/layout/CookieBanner.tsx ***/
'use client'

import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState({
    essential: true, // Always true
    analytics: false,
    marketing: false
  })

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const handleAccept = () => {
    const fullConsent = { essential: true, analytics: true, marketing: true }
    localStorage.setItem('cookieConsent', JSON.stringify(fullConsent))
    setShowBanner(false)
    // Enable analytics
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted',
        'ad_storage': 'granted'
      })
    }
  }

  const handleDecline = () => {
    const minimalConsent = { essential: true, analytics: false, marketing: false }
    localStorage.setItem('cookieConsent', JSON.stringify(minimalConsent))
    setShowBanner(false)
    // Disable analytics
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied'
      })
    }
  }

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences))
    setShowPreferences(false)
    setShowBanner(false)
    // Update analytics consent
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': preferences.analytics ? 'granted' : 'denied',
        'ad_storage': preferences.marketing ? 'granted' : 'denied'
      })
    }
  }

  if (!showBanner && !showPreferences) return null

  return (
    <>
      {showBanner && !showPreferences && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50 p-4">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-600">
              We use cookies to improve your experience and analyse site usage. 
              By continuing, you agree to our use of cookies. 
              You can manage preferences in Cookie Settings.
            </p>
            <div className="flex gap-3">
              <button
                onClick={handleAccept}
                className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-blue-700"
              >
                Accept All
              </button>
              <button
                onClick={() => setShowPreferences(true)}
                className="border border-slate-300 px-4 py-2 rounded text-sm font-semibold hover:bg-slate-50"
              >
                Manage Preferences
              </button>
              <button
                onClick={handleDecline}
                className="text-slate-600 px-4 py-2 text-sm hover:text-slate-800"
              >
                Decline Non-Essential
              </button>
            </div>
          </div>
        </div>
      )}

      {showPreferences && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-md w-full m-4 p-6">
            <h2 className="text-2xl font-bold mb-4">Cookie Preferences</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">Essential Cookies</p>
                  <p className="text-sm text-slate-600">Required for site functionality</p>
                </div>
                <input
                  type="checkbox"
                  checked={true}
                  disabled
                  className="h-5 w-5"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">Analytics Cookies</p>
                  <p className="text-sm text-slate-600">Help us improve our service</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({...preferences, analytics: e.target.checked})}
                  className="h-5 w-5"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">Marketing Cookies</p>
                  <p className="text-sm text-slate-600">For personalised advertising</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences({...preferences, marketing: e.target.checked})}
                  className="h-5 w-5"
                />
              </div>
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={handleSavePreferences}
                className="flex-1 bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700"
              >
                Save Preferences
              </button>
              <button
                onClick={() => setShowPreferences(false)}
                className="flex-1 border border-slate-300 py-2 rounded font-semibold hover:bg-slate-50"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

