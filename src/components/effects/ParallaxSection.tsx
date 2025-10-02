'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface ParallaxSectionProps {
  children: ReactNode
  speed?: number
  className?: string
}

export default function ParallaxSection({ 
  children, 
  speed = 0.5,
  className = '' 
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !contentRef.current) return

      const scrolled = window.scrollY
      const rect = sectionRef.current.getBoundingClientRect()
      const sectionTop = scrolled + rect.top

      if (scrolled > sectionTop - window.innerHeight && scrolled < sectionTop + rect.height) {
        const yPos = (scrolled - sectionTop) * speed
        contentRef.current.style.transform = `translateY(${yPos}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return (
    <div ref={sectionRef} className={`relative overflow-hidden ${className}`}>
      <div ref={contentRef} className="transition-transform duration-100 ease-linear">
        {children}
      </div>
    </div>
  )
}
