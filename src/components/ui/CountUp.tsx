import { useEffect, useRef, useState } from 'react'
import { useInView } from '../../hooks/useInView'

interface CountUpProps {
  target: number
  suffix?: string
  className?: string
  startDelay?: number
}

export default function CountUp({ target, suffix = '', className = '', startDelay = 0 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const timeout = setTimeout(() => {
      const duration = 1500
      const startTime = performance.now()

      function animate(currentTime: number) {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setValue(Math.round(eased * target))

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    }, startDelay)

    return () => clearTimeout(timeout)
  }, [isInView, target, startDelay])

  return (
    <span ref={ref} className={`font-mono ${className}`}>
      {value}{suffix}
    </span>
  )
}
