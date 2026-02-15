import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Download, Github } from 'lucide-react'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import Button from '../ui/Button'
import TextReveal from '../ui/TextReveal'
import GridBackground from '../ui/GridBackground'
import FloatingElements from '../ui/FloatingElements'

const ease = [0.25, 0.1, 0.25, 1] as const

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease, delay },
})

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const reducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const screenshotY = useTransform(scrollYProgress, [0, 1], [0, -80])
  const screenshotScale = useTransform(scrollYProgress, [0, 1], [1, 0.95])
  const screenshotRotate = useTransform(scrollYProgress, [0, 1], [1, -1])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen pt-20 pb-12 flex items-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 pointer-events-none hero-glow-animation"
        style={{
          background:
            'radial-gradient(ellipse at 65% 20%, rgba(0,212,255,0.06) 0%, transparent 55%)',
        }}
      />

      {/* Grid background */}
      <GridBackground />

      {/* Floating ambient elements */}
      <FloatingElements />

      <div className="max-w-6xl mx-auto px-6 w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left — Text */}
          <div className="lg:col-span-5">
            <motion.span
              {...fadeUp(0)}
              className="inline-block font-mono text-xs text-text-tertiary border border-border rounded-full px-3 py-1"
            >
              v1.0.0 &middot; Open Source
            </motion.span>

            <TextReveal
              className="font-display font-bold leading-[0.88] mt-6"
              style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)' }}
              delay={0.1}
              renderWord={(word) =>
                word === 'optimized.' ? (
                  <span className="text-accent">{word}</span>
                ) : (
                  word
                )
              }
            >
              Your PC, optimized.
            </TextReveal>

            <motion.p
              initial={reducedMotion ? false : { opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.2 }}
              className="font-body font-light text-lg md:text-xl text-text-secondary max-w-md leading-relaxed mt-6"
            >
              A free, open-source Windows tool that reduces input lag, boosts
              FPS, and fine-tunes your system&mdash;no bloat, no telemetry, full
              control.
            </motion.p>

            <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-4 mt-10">
              <Button
                variant="primary"
                size="lg"
                icon={<Download size={18} />}
                href="/downloads/ClutchKit-Setup-1.0.0.exe"
                download
              >
                Download Free
              </Button>
              <Button
                variant="outline"
                size="lg"
                icon={<Github size={18} />}
                href="https://github.com/AbdullahiIsse/clutchkit"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Source
              </Button>
            </motion.div>

            <motion.div
              {...fadeUp(0.4)}
              className="flex items-center gap-2 mt-12 font-body text-xs text-text-tertiary"
            >
              <span>Windows 10/11</span>
              <span className="text-text-ghost">&middot;</span>
              <span>No install needed</span>
              <span className="text-text-ghost">&middot;</span>
              <span>100% free</span>
            </motion.div>
          </div>

          {/* Right — Screenshot with parallax */}
          <motion.div
            className="lg:col-span-7 relative"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.5,
            }}
          >
            <motion.div
              className="lg:translate-x-4"
              style={
                reducedMotion
                  ? { rotate: 1 }
                  : {
                      y: screenshotY,
                      scale: screenshotScale,
                      rotate: screenshotRotate,
                    }
              }
            >
              <img
                src="/images/app-screenshot.png"
                alt="ClutchKit application screenshot"
                className="w-full rounded-xl border border-border shadow-2xl shadow-black/50"
                style={{
                  boxShadow:
                    '0 0 80px rgba(0,212,255,0.06), 0 25px 50px -12px rgba(0,0,0,0.5)',
                }}
                onError={(e) => {
                  const target = e.currentTarget
                  target.style.display = 'none'
                  const fallback = target.nextElementSibling as HTMLElement
                  if (fallback) fallback.style.display = 'flex'
                }}
              />
              <div className="bg-surface rounded-xl border border-border aspect-[16/10] items-center justify-center hidden">
                <span className="text-text-ghost font-mono text-sm">
                  App Screenshot
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
