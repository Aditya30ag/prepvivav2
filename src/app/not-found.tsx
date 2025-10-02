'use client'

import Link from 'next/link'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { Home, Search, ArrowLeft, GraduationCap } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 flex items-center justify-center px-4">
      <Container size="md">
        <div className="text-center">
          {/* 404 Visual */}
          <div className="mb-8">
            <div className="text-9xl font-black text-slate-200 mb-4">404</div>
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-blue-600" />
            </div>
          </div>

          {/* Content */}
          <h1 className="text-4xl font-bold mb-4 text-slate-900">
            Page Not Found
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/">
              <Button size="lg" variant="primary">
                <Home className="w-5 h-5 mr-2" />
                Go to Homepage
              </Button>
            </Link>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </Button>
          </div>

          {/* Popular Pages */}
          <div className="border-t border-slate-200 pt-8">
            <p className="text-sm text-slate-600 mb-4 font-medium">
              Popular Pages
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: 'Medical', href: '/medical' },
                { name: 'NHS', href: '/nhs' },
                { name: 'University', href: '/university' },
                { name: 'Pricing', href: '/pricing' }
              ].map((page) => (
                <Link
                  key={page.name}
                  href={page.href}
                  className="p-4 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all text-center"
                >
                  <GraduationCap className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <span className="text-sm font-medium text-slate-900">
                    {page.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
