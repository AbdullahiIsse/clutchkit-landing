import { useState } from 'react'
import AnimateIn from '../ui/AnimateIn'

export default function Showcase() {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div className="py-28 md:py-36 bg-base-raised">
      <div className="max-w-6xl mx-auto px-6">
        {/* CENTERED section intro */}
        <AnimateIn className="text-center" variant="blur">
          <span className="font-mono text-xs tracking-[0.15em] uppercase text-accent">
            The Interface
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-3">
            See it in action.
          </h2>
          <p className="font-body text-text-secondary text-lg mt-4 max-w-2xl mx-auto">
            Browse categories, toggle tweaks, and see exactly what each
            optimization does&mdash;before you apply it.
          </p>
        </AnimateIn>

        {/* Large screenshot */}
        <AnimateIn delay={0.15} className="mt-16" variant="scale">
          <div className="relative max-w-4xl mx-auto">
            {/* Cyan glow behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[40%] bg-accent-glow rounded-full blur-[100px] pointer-events-none" />

            {/* Placeholder background */}
            <div className="relative bg-surface rounded-xl overflow-hidden">
              <img
                src="/images/app-screenshot.png"
                alt="ClutchKit interface showcase"
                loading="lazy"
                className="relative w-full rounded-xl border border-border transition-opacity duration-500"
                style={{
                  boxShadow: '0 0 80px rgba(0,0,0,0.5)',
                  opacity: imageLoaded ? 1 : 0,
                }}
                onLoad={() => setImageLoaded(true)}
                onError={(e) => {
                  const target = e.currentTarget
                  target.style.display = 'none'
                  const fallback = target.nextElementSibling as HTMLElement
                  if (fallback) fallback.style.display = 'flex'
                }}
              />
              <div className="relative bg-surface rounded-xl border border-border aspect-[16/10] items-center justify-center hidden">
                <span className="text-text-ghost font-mono text-sm">
                  App Screenshot
                </span>
              </div>
            </div>
          </div>
        </AnimateIn>

        {/* Callout pills */}
        <AnimateIn delay={0.25}>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {['150+ Tweaks', 'Auto Backup', 'One-Click Optimize'].map(
              (label) => (
                <span
                  key={label}
                  className="font-mono text-xs text-text-tertiary border border-border rounded-full px-3 py-1"
                >
                  {label}
                </span>
              ),
            )}
          </div>
        </AnimateIn>
      </div>
    </div>
  )
}
