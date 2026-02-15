import { useState, useCallback, useRef } from 'react'

interface MousePosition {
  x: number
  y: number
  isHovering: boolean
}

export function useMousePosition() {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0, isHovering: false })
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1
    setPosition({ x, y, isHovering: true })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0, isHovering: false })
  }, [])

  return { ref, position, handleMouseMove, handleMouseLeave }
}
