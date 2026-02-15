import { motion } from 'framer-motion'
import { Download, SlidersHorizontal, Swords } from 'lucide-react'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import GlassCard from '../ui/GlassCard'
import AnimateIn from '../ui/AnimateIn'

const steps = [
  {
    number: '01',
    icon: <Download size={28} className="text-accent" />,
    title: 'Download & Run',
    description:
      'Grab the portable executable — no installation, no setup wizard. Just run it.',
  },
  {
    number: '02',
    icon: <SlidersHorizontal size={28} className="text-accent" />,
    title: 'Toggle Tweaks',
    description:
      'Browse categories, read what each tweak does, check the risk level, and flip the switch.',
  },
  {
    number: '03',
    icon: <Swords size={28} className="text-accent" />,
    title: 'Game On',
    description:
      'Your system is optimized. Lower latency, higher FPS, smoother gameplay — instantly.',
  },
]

const cardVariants = ['fade-left', 'fade-up', 'fade-right'] as const

export default function HowItWorks() {
  const reducedMotion = useReducedMotion()

  return (
    <div className="py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        {/* CENTERED section intro */}
        <AnimateIn className="text-center">
          <span className="font-mono text-xs tracking-[0.15em] uppercase text-accent">
            How It Works
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-3">
            Three steps to{' '}
            <span className="text-accent">peak performance.</span>
          </h2>
        </AnimateIn>

        {/* 3-card grid with connector */}
        <div className="relative mt-16">
          {/* Animated dashed connector line (desktop only) */}
          {reducedMotion ? (
            <div className="hidden md:block absolute top-1/2 left-[16.67%] right-[16.67%] border-t-2 border-dashed border-accent/30 -translate-y-1/2 pointer-events-none" />
          ) : (
            <motion.div
              className="hidden md:block absolute top-1/2 left-[16.67%] right-[16.67%] h-[2px] border-t-2 border-dashed border-accent/30 -translate-y-1/2 pointer-events-none origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            />
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {steps.map((step, i) => (
              <AnimateIn key={step.title} delay={i * 0.1} variant={cardVariants[i]}>
                <GlassCard padding="lg" className="text-center relative">
                  {/* Large ghost step number */}
                  <span className="font-mono text-6xl font-bold text-text-ghost">
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-accent-subtle mx-auto flex items-center justify-center mt-4">
                    {step.icon}
                  </div>

                  <h3 className="font-display font-semibold text-lg mt-5">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-text-secondary mt-3 leading-relaxed">
                    {step.description}
                  </p>
                </GlassCard>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
