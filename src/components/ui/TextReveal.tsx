import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import type { CSSProperties, ReactNode } from 'react'

interface TextRevealProps {
  children: string
  className?: string
  style?: CSSProperties
  delay?: number
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  renderWord?: (word: string, index: number) => ReactNode
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
}

const wordVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const },
  },
}

export default function TextReveal({
  children,
  className = '',
  style,
  delay = 0,
  as: Tag = 'h1',
  renderWord,
}: TextRevealProps) {
  const reducedMotion = useReducedMotion()
  const words = children.split(' ')

  if (reducedMotion) {
    if (renderWord) {
      return <Tag className={className} style={style}>{words.map((w, i) => <span key={i}>{renderWord(w, i)}{i < words.length - 1 ? ' ' : ''}</span>)}</Tag>
    }
    return <Tag className={className} style={style}>{children}</Tag>
  }

  return (
    <motion.div
      className={className}
      style={style}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      transition={{ delayChildren: delay }}
      role="heading"
      aria-level={Tag === 'h1' ? 1 : Tag === 'h2' ? 2 : Tag === 'h3' ? 3 : undefined}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={wordVariants}
          className="inline-block"
          style={{ marginRight: '0.3em' }}
        >
          {renderWord ? renderWord(word, i) : word}
        </motion.span>
      ))}
    </motion.div>
  )
}
