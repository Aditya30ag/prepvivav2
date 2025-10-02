'use client'

import { useEffect, useRef, useState, ReactNode, Children } from 'react'

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
  const [visibleIndexes, setVisibleIndexes] = useState<Set<number>>(new Set())
  const ref = useRef<HTMLDivElement>(null)
  const [hasTriggered, setHasTriggered] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasTriggered) {
          setHasTriggered(true)
          
          const childrenArray = Children.toArray(children)
          childrenArray.forEach((_, index) => {
            setTimeout(() => {
              setVisibleIndexes((prev) => new Set(prev).add(index))
            }, index * staggerDelay)
          })
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [children, staggerDelay, hasTriggered])

  const childrenArray = Children.toArray(children)

  return (
    <div ref={ref} className={className}>
      {childrenArray.map((child, index) => (
        <div
          key={index}
          className={`transition-all duration-500 ${
            visibleIndexes.has(index)
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
