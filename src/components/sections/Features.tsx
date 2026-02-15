import {
  Timer,
  Cpu,
  Gauge,
  EyeOff,
  HardDrive,
  Wifi,
} from 'lucide-react'
import { features } from '../../data/features'
import GlassCard from '../ui/GlassCard'
import AnimateIn from '../ui/AnimateIn'
import type { ReactNode } from 'react'

const iconMap: Record<string, ReactNode> = {
  Timer: <Timer size={20} className="text-accent" />,
  Cpu: <Cpu size={20} className="text-accent" />,
  Gauge: <Gauge size={20} className="text-accent" />,
  EyeOff: <EyeOff size={20} className="text-accent" />,
  HardDrive: <HardDrive size={20} className="text-accent" />,
  Wifi: <Wifi size={20} className="text-accent" />,
}

// Cards 0, 3, 4 are wide (col-span-2); cards 1, 2, 5 are narrow (col-span-1)
const spanClasses = [
  'lg:col-span-2',
  'lg:col-span-1',
  'lg:col-span-1',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-1',
]

export default function Features() {
  return (
    <div className="py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        {/* LEFT-ALIGNED section intro */}
        <AnimateIn variant="fade-left">
          <span className="font-mono text-xs tracking-[0.15em] uppercase text-accent">
            Core Features
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-3">
            Everything you need, nothing you don&apos;t.
          </h2>
          <p className="font-body text-text-secondary text-lg mt-4 max-w-2xl">
            ClutchKit bundles the most impactful Windows tweaks into one
            lightweight tool&mdash;each one explained, categorized, and
            reversible.
          </p>
        </AnimateIn>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
          {features.map((feature, i) => {
            const isWide = spanClasses[i] === 'lg:col-span-2'

            return (
              <AnimateIn
                key={feature.title}
                delay={i * 0.08}
                className={`${spanClasses[i]}`}
                variant={i % 2 === 0 ? 'fade-up' : 'fade-right'}
              >
                <GlassCard padding="lg" className="h-full">
                  {isWide ? (
                    /* Horizontal layout for wide cards */
                    <div className="flex gap-5">
                      <div className="w-10 h-10 rounded-lg bg-accent-subtle flex items-center justify-center shrink-0">
                        {iconMap[feature.icon]}
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-base md:text-lg text-white">
                          {feature.title}
                        </h3>
                        <p className="font-body text-sm text-text-secondary leading-relaxed mt-2">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ) : (
                    /* Vertical layout for narrow cards */
                    <>
                      <div className="w-10 h-10 rounded-lg bg-accent-subtle flex items-center justify-center">
                        {iconMap[feature.icon]}
                      </div>
                      <h3 className="font-display font-semibold text-base md:text-lg text-white mt-4">
                        {feature.title}
                      </h3>
                      <p className="font-body text-sm text-text-secondary leading-relaxed mt-2">
                        {feature.description}
                      </p>
                    </>
                  )}
                </GlassCard>
              </AnimateIn>
            )
          })}
        </div>
      </div>
    </div>
  )
}
