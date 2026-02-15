interface GridBackgroundProps {
  className?: string
}

export default function GridBackground({ className = '' }: GridBackgroundProps) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage:
          'radial-gradient(circle, rgba(0,212,255,0.03) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        maskImage:
          'radial-gradient(ellipse at center, black 30%, transparent 70%)',
        WebkitMaskImage:
          'radial-gradient(ellipse at center, black 30%, transparent 70%)',
      }}
    />
  )
}
