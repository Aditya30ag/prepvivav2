'use client'

import { useEffect, useState } from 'react'

export default function ParallaxBackground() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const orbs = [
    { 
      size: 500, 
      color: 'bg-blue-100', 
      top: '10%', 
      right: '5%', 
      speed: 0.3,
      blur: 'blur-3xl'
    },
    { 
      size: 400, 
      color: 'bg-purple-100', 
      bottom: '20%', 
      left: '10%', 
      speed: 0.5,
      blur: 'blur-3xl'
    },
    { 
      size: 300, 
      color: 'bg-pink-100', 
      top: '50%', 
      right: '15%', 
      speed: 0.4,
      blur: 'blur-2xl'
    }
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {orbs.map((orb, idx) => (
        <div
          key={idx}
          className={`absolute ${orb.color} ${orb.blur} rounded-full mix-blend-multiply filter opacity-20`}
          style={{
            width: orb.size,
            height: orb.size,
            top: orb.top,
            bottom: orb.bottom,
            left: orb.left,
            right: orb.right,
            transform: `translateY(${scrollY * orb.speed}px)`,
            transition: 'transform 0.1s linear'
          }}
        />
      ))}
    </div>
  )
}
