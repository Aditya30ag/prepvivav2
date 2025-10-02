'use client'

import { ButtonHTMLAttributes, forwardRef, useRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  children: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', fullWidth = false, children, onClick, ...props }, ref) => {
    const internalRef = useRef<HTMLButtonElement>(null)
    const buttonRef = (ref as React.RefObject<HTMLButtonElement>) || internalRef

    const createRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (variant !== 'primary' || !buttonRef.current) {
        onClick?.(e)
        return
      }

      const button = buttonRef.current
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

      onClick?.(e)
    }

    const baseStyles = 'font-semibold transition-all duration-200 rounded-lg inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden'
    
    const variants = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5',
      secondary: 'bg-white text-blue-600 border-2 border-slate-200 hover:border-slate-300 focus:ring-blue-500 hover:shadow-md',
      ghost: 'text-slate-600 hover:text-blue-600 hover:bg-slate-50 focus:ring-slate-300'
    }
    
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    }
    
    return (
      <button
        ref={buttonRef}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
        onClick={createRipple}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
export default Button
