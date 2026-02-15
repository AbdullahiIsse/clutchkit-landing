import { Download as DownloadIcon, Github } from 'lucide-react'
import Button from '../ui/Button'
import AnimateIn from '../ui/AnimateIn'
import GridBackground from '../ui/GridBackground'

export default function Download() {
  return (
    <div
      className="py-32 md:py-40 relative overflow-hidden"
      style={{
        borderTop: '1px solid transparent',
        borderImage: 'linear-gradient(to right, transparent, rgba(0,212,255,0.2), transparent) 1',
      }}
    >
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 pointer-events-none hero-glow-animation"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(0,212,255,0.05) 0%, transparent 60%), var(--color-base-raised)',
        }}
      />

      {/* Grid background */}
      <GridBackground />

      <div className="max-w-2xl mx-auto px-6 text-center relative">
        <AnimateIn>
          <span className="font-mono text-xs text-accent">
            100% Free &amp; Open Source
          </span>
        </AnimateIn>

        <AnimateIn delay={0.1} variant="scale">
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-4">
            Ready to <span className="text-accent">optimize?</span>
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <p className="font-body text-lg text-text-secondary mt-4">
            Download ClutchKit, run it, and start gaming with lower latency and
            higher FPS&mdash;in under a minute.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <Button
              variant="primary"
              size="lg"
              icon={<DownloadIcon size={20} />}
              href="/downloads/ClutchKit-Setup-1.0.0.exe"
              download
              className="px-8 py-4 text-lg"
            >
              Download for Windows
            </Button>
            <Button
              variant="outline"
              size="lg"
              icon={<Github size={20} />}
              href="https://github.com/AbdullahiIsse/clutchkit"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </Button>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.25}>
          <p className="font-mono text-xs text-text-tertiary mt-6">
            v1.0.0 &middot; ~85 MB &middot; Windows 10/11 x64
          </p>
        </AnimateIn>
      </div>
    </div>
  )
}
