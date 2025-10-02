'use client'

import React, { useState, useRef, useEffect } from 'react'

interface FloatingLabelInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

interface FloatingLabelTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error?: string
}

export const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({
  label,
  error,
  className = '',
  value,
  onChange,
  onFocus,
  onBlur,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [hasValue, setHasValue] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setHasValue(Boolean(value))
  }, [value])

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true)
    onFocus?.(e)
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false)
    onBlur?.(e)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(Boolean(e.target.value))
    onChange?.(e)
  }

  const isLabelFloating = isFocused || hasValue

  return (
    <div className="relative">
      <input
        ref={inputRef}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`
          peer w-full px-4 pt-6 pb-2 border-2 rounded-lg bg-white
          transition-all duration-200 ease-in-out
          focus:outline-none focus:ring-0
          ${error 
            ? 'border-red-300 focus:border-red-500' 
            : 'border-slate-300 focus:border-blue-500'
          }
          ${className}
        `}
        {...props}
      />
      <label
        className={`
          absolute left-4 transition-all duration-200 ease-in-out pointer-events-none
          ${isLabelFloating
            ? 'top-2 text-xs text-slate-600 transform scale-90 origin-left'
            : 'top-1/2 -translate-y-1/2 text-base text-slate-500'
          }
          ${error && isLabelFloating ? 'text-red-500' : ''}
          ${isFocused && !error ? 'text-blue-500' : ''}
        `}
      >
        {label}
      </label>
      {error && (
        <p className="mt-1 text-sm text-red-500 animate-fade-in">
          {error}
        </p>
      )}
    </div>
  )
}

export const FloatingLabelTextarea: React.FC<FloatingLabelTextareaProps> = ({
  label,
  error,
  className = '',
  value,
  onChange,
  onFocus,
  onBlur,
  rows = 4,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [hasValue, setHasValue] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    setHasValue(Boolean(value))
  }, [value])

  const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(true)
    onFocus?.(e)
  }

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(false)
    onBlur?.(e)
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHasValue(Boolean(e.target.value))
    onChange?.(e)
  }

  const isLabelFloating = isFocused || hasValue

  return (
    <div className="relative">
      <textarea
        ref={textareaRef}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        rows={rows}
        className={`
          peer w-full px-4 pt-6 pb-2 border-2 rounded-lg bg-white resize-y
          transition-all duration-200 ease-in-out
          focus:outline-none focus:ring-0
          ${error 
            ? 'border-red-300 focus:border-red-500' 
            : 'border-slate-300 focus:border-blue-500'
          }
          ${className}
        `}
        {...props}
      />
      <label
        className={`
          absolute left-4 transition-all duration-200 ease-in-out pointer-events-none
          ${isLabelFloating
            ? 'top-2 text-xs text-slate-600 transform scale-90 origin-left'
            : 'top-6 text-base text-slate-500'
          }
          ${error && isLabelFloating ? 'text-red-500' : ''}
          ${isFocused && !error ? 'text-blue-500' : ''}
        `}
      >
        {label}
      </label>
      {error && (
        <p className="mt-1 text-sm text-red-500 animate-fade-in">
          {error}
        </p>
      )}
    </div>
  )
}
