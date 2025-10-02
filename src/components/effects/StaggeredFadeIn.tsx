'use client'

import { useEffect, useState, useRef, ReactNode } from 'react'

interface StaggeredFadeInProps {
  children: ReactNode
  staggerDelay?: number
  className?: string
}

export default function StaggeredFadeIn({
  children,
  staggerDelay = 100,
  className = ''
}: StaggeredFadeInProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible || !ref.current) return

    const childElements = ref.current.children
    Array.from(childElements).forEach((child, index) => {
      const element = child as HTMLElement
      element.style.opacity = '0'
      element.style.transform = 'translateY(20px)'
      element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out'

      setTimeout(() => {
        element.style.opacity = '1'
        element.style.transform = 'translateY(0)'
      }, index * staggerDelay)
    })
  }, [isVisible, staggerDelay])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
