'use client'

import { useRef, ReactNode } from 'react'

interface RippleButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  disabled?: boolean
}

export default function RippleButton({
  children,
  className = '',
  onClick,
  disabled = false
}: RippleButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)

  const createRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current
    if (!button) return

    const rect = button.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2

    const ripple = document.createElement('span')
    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.6);
      transform: scale(0);
      left: ${x}px;
      top: ${y}px;
      width: ${size}px;
      height: ${size}px;
      pointer-events: none;
    `
    ripple.classList.add('animate-ripple')

    button.appendChild(ripple)

    setTimeout(() => {
      ripple.remove()
    }, 600)

    onClick?.()
  }

  return (
    <button
      ref={buttonRef}
      className={`relative overflow-hidden ${className}`}
      onClick={createRipple}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
