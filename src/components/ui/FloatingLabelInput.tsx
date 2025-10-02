'use client'

import { useState, InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

interface FloatingLabelInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

interface FloatingLabelTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error?: string
}

export function FloatingLabelInput({ label, error, ...props }: FloatingLabelInputProps) {
  const [focused, setFocused] = useState(false)
  const [hasValue, setHasValue] = useState(false)

  const isFloating = focused || hasValue || props.value

  return (
    <div className="relative">
      <input
        {...props}
        onFocus={(e) => {
          setFocused(true)
          props.onFocus?.(e)
        }}
        onBlur={(e) => {
          setFocused(false)
          setHasValue(!!e.target.value)
          props.onBlur?.(e)
        }}
        className={`peer w-full px-4 pt-6 pb-2 border ${
          error ? 'border-red-300 focus:ring-red-500' : 'border-slate-300 focus:ring-blue-500'
        } rounded-lg focus:ring-2 focus:outline-none transition-all ${props.className || ''}`}
      />
      <label
        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
          isFloating
            ? 'top-2 text-xs text-blue-600 font-medium'
            : 'top-1/2 -translate-y-1/2 text-base text-slate-500'
        }`}
      >
        {label}
      </label>
      {error && (
        <p className="mt-1 text-sm text-red-600 animate-fade-in">{error}</p>
      )}
    </div>
  )
}

export function FloatingLabelTextarea({ label, error, ...props }: FloatingLabelTextareaProps) {
  const [focused, setFocused] = useState(false)
  const [hasValue, setHasValue] = useState(false)

  const isFloating = focused || hasValue || props.value

  return (
    <div className="relative">
      <textarea
        {...props}
        onFocus={(e) => {
          setFocused(true)
          props.onFocus?.(e)
        }}
        onBlur={(e) => {
          setFocused(false)
          setHasValue(!!e.target.value)
          props.onBlur?.(e)
        }}
        className={`peer w-full px-4 pt-6 pb-2 border ${
          error ? 'border-red-300 focus:ring-red-500' : 'border-slate-300 focus:ring-blue-500'
        } rounded-lg focus:ring-2 focus:outline-none transition-all resize-none ${props.className || ''}`}
      />
      <label
        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
          isFloating
            ? 'top-2 text-xs text-blue-600 font-medium'
            : 'top-6 text-base text-slate-500'
        }`}
      >
        {label}
      </label>
      {error && (
        <p className="mt-1 text-sm text-red-600 animate-fade-in">{error}</p>
      )}
    </div>
  )
}
