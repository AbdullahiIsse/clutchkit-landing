import { useMemo, type ReactNode } from 'react'
import { useMousePosition } from '../../hooks/useMousePosition'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg'
  tilt?: boolean
}

const paddingClasses = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

export default function GlassCard({
  children,
  className = '',
  hover = true,
  padding = 'md',
  tilt = true,
}: GlassCardProps) {
  const { ref, position, handleMouseMove, handleMouseLeave } = useMousePosition()
  const reducedMotion = useReducedMotion()

  const isCoarsePointer = useMemo(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(pointer: coarse)').matches
  }, [])

  const enableTilt = tilt && !reducedMotion && !isCoarsePointer

  const tiltStyle = enableTilt && position.isHovering
    ? {
        transform: `perspective(800px) rotateX(${-position.y * 4}deg) rotateY(${position.x * 4}deg)`,
        transition: 'transform 0.15s ease-out',
      }
    : {
        transform: 'none',
        transition: 'transform 0.4s ease-out',
      }

  const glowStyle = enableTilt && position.isHovering
    ? {
        background: `radial-gradient(300px circle at ${(position.x + 1) * 50}% ${(position.y + 1) * 50}%, rgba(0,212,255,0.08), transparent 60%)`,
      }
    : {}

  return (
    <div
      ref={ref}
      onMouseMove={enableTilt ? handleMouseMove : undefined}
      onMouseLeave={enableTilt ? handleMouseLeave : undefined}
      className={`relative bg-surface border border-border rounded-xl transition-colors duration-300 ${
        hover ? 'hover:bg-surface-raised hover:border-border-hover' : ''
      } ${paddingClasses[padding]} ${className}`}
      style={enableTilt ? tiltStyle : undefined}
    >
      {enableTilt && (
        <div
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={glowStyle}
        />
      )}
      <div className="relative">{children}</div>
    </div>
  )
}
