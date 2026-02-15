import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

const elements = [
  { x: '10%', y: '20%', size: 6, duration: 8, delay: 0, opacity: 0.08 },
  { x: '85%', y: '30%', size: 4, duration: 10, delay: 1.5, opacity: 0.06 },
  { x: '70%', y: '70%', size: 8, duration: 7, delay: 0.5, opacity: 0.1 },
  { x: '25%', y: '80%', size: 3, duration: 9, delay: 2, opacity: 0.07 },
]

export default function FloatingElements() {
  const reducedMotion = useReducedMotion()

  if (reducedMotion) return null

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
      {elements.map((el, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-accent"
          style={{
            left: el.x,
            top: el.y,
            width: el.size,
            height: el.size,
            opacity: el.opacity,
          }}
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: el.delay,
          }}
        />
      ))}
    </div>
  )
}
