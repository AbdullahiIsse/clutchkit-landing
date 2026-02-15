import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'accent' | 'safe' | 'medium' | 'advanced'
  className?: string
}

const variantClasses = {
  default: 'border border-border text-text-tertiary',
  accent: 'border border-accent/20 text-accent bg-accent-subtle',
  safe: 'border border-safe/20 text-safe bg-safe/5',
  medium: 'border border-medium/20 text-medium bg-medium/5',
  advanced: 'border border-advanced/20 text-advanced bg-advanced/5',
}

export default function Badge({
  children,
  variant = 'default',
  className = '',
}: BadgeProps) {
  return (
    <span
      className={`text-xs font-mono px-2 py-0.5 rounded-full inline-block ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
