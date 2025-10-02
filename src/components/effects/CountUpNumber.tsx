'use client'

import { useEffect, useRef, useState } from 'react'

interface CountUpNumberProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}

export default function CountUpNumber({ 
  end, 
  duration = 2000, 
  suffix = '', 
  prefix = '',
  className = ''
}: CountUpNumberProps) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true)
          
          const startTime = Date.now()
          const step = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            
            // Easing function (ease-out)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(end * eased))
            
            if (progress < 1) {
              requestAnimationFrame(step)
            } else {
              setCount(end)
            }
          }
          
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [end, duration, hasStarted])

  return (
    <span ref={ref} className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}
