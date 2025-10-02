// ==========================================
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Button from '@/components/ui/Button'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const navigation = [
    { name: 'Medical', href: '/medical' },
    { name: 'NHS', href: '/nhs' },
    { name: 'University', href: '/university' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-white/80 backdrop-blur-sm'
      } border-b border-slate-200`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 group"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-sm">PV</span>
            </div>
            <span className="text-2xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              PrepViva
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive(item.href)
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/contact">
              <Button variant="ghost" size="sm">
                Contact
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="primary" size="sm" data-event="header_cta">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-700" />
            ) : (
              <Menu className="w-6 h-6 text-slate-700" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="md:hidden fixed top-16 left-0 right-0 bottom-0 bg-white z-50 overflow-y-auto animate-fade-in">
            <div className="px-4 pt-4 pb-6 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-4 space-y-3">
                <Link href="/contact" className="block">
                  <Button
                    fullWidth
                    variant="secondary"
                    size="lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Button>
                </Link>
                <Link href="/pricing" className="block">
                  <Button
                    fullWidth
                    variant="primary"
                    size="lg"
                    onClick={() => setMobileMenuOpen(false)}
                    data-event="mobile_header_cta"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>

              {/* Mobile Menu Footer */}
              <div className="pt-6 mt-6 border-t border-slate-200">
                <p className="text-xs text-slate-500 text-center">
                  © 2025 PrepViva Ltd. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  )
}


