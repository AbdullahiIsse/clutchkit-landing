import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import type { ReactNode } from 'react'

interface ButtonProps {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  icon?: ReactNode
  children: ReactNode
  href?: string
  download?: boolean | string
  target?: string
  rel?: string
  onClick?: () => void
  className?: string
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-3.5 text-base',
}

const variantClasses = {
  primary:
    'bg-accent text-base font-display font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.25)]',
  outline:
    'border border-border text-text-secondary font-display font-medium rounded-lg hover:border-border-hover hover:text-text transition-all duration-300',
  ghost: 'text-text-secondary font-body hover:text-text transition-colors',
}

const spring = { type: 'spring' as const, stiffness: 400, damping: 17 }

export default function Button({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  href,
  download,
  target,
  rel,
  onClick,
  className = '',
}: ButtonProps) {
  const reducedMotion = useReducedMotion()
  const classes = `${variantClasses[variant]} ${sizeClasses[size]} inline-flex items-center gap-2 ${className}`

  const motionProps = reducedMotion
    ? {}
    : {
        whileHover: { scale: 1.03 },
        whileTap: { scale: 0.97 },
        transition: spring,
      }

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        target={target}
        rel={rel}
        className={classes}
        {...motionProps}
      >
        {icon}
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button onClick={onClick} className={classes} {...motionProps}>
      {icon}
      {children}
    </motion.button>
  )
}
