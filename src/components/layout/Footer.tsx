import { Zap } from 'lucide-react'
import AnimateIn from '../ui/AnimateIn'

const productLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Showcase', href: '#showcase' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Download', href: '#download' },
]

const communityLinks = [
  { label: 'GitHub', href: 'https://github.com/AbdullahiIsse/clutchkit' },
  { label: 'Report Issue', href: 'https://github.com/AbdullahiIsse/clutchkit/issues' },
  { label: 'Discord', href: '#' },
]

export default function Footer() {
  return (
    <footer
      className="py-16 bg-base"
      style={{
        borderTop: '1px solid transparent',
        borderImage: 'linear-gradient(to right, transparent, rgba(0,212,255,0.2), transparent) 1',
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* 3-column layout */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8">
          {/* Brand */}
          <AnimateIn variant="fade-up">
            <div className="flex items-center gap-1.5 mb-3">
              <Zap size={16} className="text-accent" />
              <span className="font-display font-bold text-lg tracking-tight">
                ClutchKit
              </span>
            </div>
            <p className="font-body text-sm text-text-tertiary leading-relaxed max-w-xs">
              Free, open-source Windows optimization. Lower latency, higher FPS,
              zero bloat.
            </p>
          </AnimateIn>

          {/* Product links */}
          <AnimateIn variant="fade-up" delay={0.08}>
            <h4 className="font-display font-semibold text-sm text-text-secondary mb-4">
              Product
            </h4>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-text-tertiary hover:text-text transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </AnimateIn>

          {/* Community links */}
          <AnimateIn variant="fade-up" delay={0.16}>
            <h4 className="font-display font-semibold text-sm text-text-secondary mb-4">
              Community
            </h4>
            <ul className="space-y-2.5">
              {communityLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="font-body text-sm text-text-tertiary hover:text-text transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </AnimateIn>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border mt-12 pt-6 text-center">
          <span className="font-mono text-xs text-text-ghost">
            &copy; {new Date().getFullYear()} ClutchKit &middot; MIT License
          </span>
        </div>
      </div>
    </footer>
  )
}
