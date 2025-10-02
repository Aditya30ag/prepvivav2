import { clsx } from 'clsx'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'primary' | 'success' | 'warning' | 'neutral'
  size?: 'sm' | 'md'
}

export default function Badge({ children, variant = 'primary', size = 'md' }: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full font-medium',
        {
          'bg-blue-100 text-blue-700': variant === 'primary',
          'bg-green-100 text-green-700': variant === 'success',
          'bg-yellow-100 text-yellow-700': variant === 'warning',
          'bg-gray-100 text-gray-700': variant === 'neutral',
          'px-2 py-0.5 text-xs': size === 'sm',
          'px-3 py-1 text-sm': size === 'md',
        }
      )}
    >
      {children}
    </span>
  )
}

