import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import type { ReactNode } from 'react'

type Variant = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'blur'

interface AnimateInProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
  variant?: Variant
}

const variants = {
  'fade-up': {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
  },
  'fade-down': {
    initial: { opacity: 0, y: -24 },
    whileInView: { opacity: 1, y: 0 },
  },
  'fade-left': {
    initial: { opacity: 0, x: -24 },
    whileInView: { opacity: 1, x: 0 },
  },
  'fade-right': {
    initial: { opacity: 0, x: 24 },
    whileInView: { opacity: 1, x: 0 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
  },
  blur: {
    initial: { opacity: 0, filter: 'blur(8px)' },
    whileInView: { opacity: 1, filter: 'blur(0px)' },
  },
}

export default function AnimateIn({
  children,
  delay = 0,
  duration = 0.6,
  className = '',
  variant = 'fade-up',
}: AnimateInProps) {
  const reducedMotion = useReducedMotion()

  if (reducedMotion) {
    return <div className={className}>{children}</div>
  }

  const v = variants[variant]

  return (
    <motion.div
      initial={v.initial}
      whileInView={v.whileInView}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration, ease: [0.25, 0.1, 0.25, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
