import { clsx } from 'clsx'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg'
}

export default function Card({ children, className, hover = false, padding = 'md' }: CardProps) {
  return (
    <div
      className={clsx(
        'bg-white rounded-xl border border-neutral-100',
        {
          'hover:shadow-lg transition-shadow duration-300': hover,
          'shadow-sm': !hover,
          'p-4': padding === 'sm',
          'p-6 md:p-8': padding === 'md',
          'p-8 md:p-12': padding === 'lg',
        },
        className
      )}
    >
      {children}
    </div>
  )
}

