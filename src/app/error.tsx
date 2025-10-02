// ==========================================
'use client'

import { useEffect } from 'react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { AlertCircle, RefreshCcw, Home } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log error to error reporting service (e.g., Sentry)
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 flex items-center justify-center px-4">
      <Container size="md">
        <div className="text-center">
          {/* Error Icon */}
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-12 h-12 text-red-600" />
          </div>

          {/* Content */}
          <h1 className="text-4xl font-bold mb-4 text-slate-900">
            Something Went Wrong
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto">
            We encountered an unexpected error. Our team has been notified and 
            is working to fix the issue.
          </p>

          {/* Error Details (Development Only) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="bg-slate-100 border border-slate-300 rounded-lg p-4 mb-8 text-left max-w-2xl mx-auto">
              <p className="text-sm font-mono text-slate-700 break-all">
                {error.message}
              </p>
              {error.digest && (
                <p className="text-xs text-slate-500 mt-2">
                  Error ID: {error.digest}
                </p>
              )}
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="primary"
              onClick={reset}
            >
              <RefreshCcw className="w-5 h-5 mr-2" />
              Try Again
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => window.location.href = '/'}
            >
              <Home className="w-5 h-5 mr-2" />
              Go to Homepage
            </Button>
          </div>

          {/* Support Info */}
          <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg max-w-md mx-auto">
            <p className="text-sm text-slate-700 mb-2">
              If this problem persists, please contact our support team:
            </p>
            <a
              href="mailto:support@prepviva.com"
              className="text-blue-600 font-semibold hover:underline"
            >
              support@prepviva.com
            </a>
          </div>
        </div>
      </Container>
    </div>
  )
}

// ==========================================
