import { motion } from 'framer-motion'
import { testimonials } from '../../data/testimonials'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import GlassCard from '../ui/GlassCard'
import AnimateIn from '../ui/AnimateIn'

export default function Testimonials() {
  const reducedMotion = useReducedMotion()

  return (
    <div className="py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        {/* CENTERED section intro */}
        <AnimateIn className="text-center">
          <span className="font-mono text-xs tracking-[0.15em] uppercase text-accent">
            Community
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-3">
            What gamers are saying.
          </h2>
        </AnimateIn>

        {/* 2x2 grid — auto-height for natural asymmetry */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-16">
          {testimonials.map((t, i) => (
            <AnimateIn key={t.username} delay={i * 0.08} variant="blur">
              <GlassCard padding="lg" className="h-full">
                {/* Decorative quote mark */}
                {reducedMotion ? (
                  <span className="font-display text-5xl text-accent opacity-15 leading-none select-none">
                    &ldquo;
                  </span>
                ) : (
                  <motion.span
                    className="font-display text-5xl text-accent opacity-15 leading-none select-none inline-block"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 0.15, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 + 0.1 }}
                  >
                    &ldquo;
                  </motion.span>
                )}

                {/* Quote */}
                <p className="font-body text-base md:text-lg text-white leading-relaxed -mt-4">
                  {t.quote}
                </p>

                {/* Divider */}
                <div className="mt-5 pt-4 flex items-center justify-between relative">
                  {reducedMotion ? (
                    <div className="absolute top-0 left-0 right-0 h-px bg-border" />
                  ) : (
                    <motion.div
                      className="absolute top-0 left-1/2 right-1/2 h-px bg-border origin-center"
                      initial={{ left: '50%', right: '50%' }}
                      whileInView={{ left: '0%', right: '0%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.08 + 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                    />
                  )}
                  <div>
                    <span className="font-mono text-sm text-accent">
                      {t.username}
                    </span>
                    <span className="font-body text-xs text-text-tertiary ml-2">
                      {t.source}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-text-tertiary border border-border rounded px-2 py-0.5">
                    {t.game}
                  </span>
                </div>
              </GlassCard>
            </AnimateIn>
          ))}
        </div>
      </div>
    </div>
  )
}
