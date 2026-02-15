import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Menu, X, Zap } from 'lucide-react'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import Button from '../ui/Button'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Showcase', href: '#showcase' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Download', href: '#download' },
]

const sectionIds = ['features', 'showcase', 'how-it-works', 'download']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeId = useScrollSpy(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-base/90 backdrop-blur-xl border-b border-border'
          : 'bg-transparent'
      }`}
      style={
        scrolled
          ? { boxShadow: '0 1px 0 rgba(0,212,255,0.1)' }
          : undefined
      }
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <a href="#" className="flex items-center gap-1.5">
          <Zap size={16} className="text-accent" />
          <span className="font-display font-bold text-lg tracking-tight">
            ClutchKit
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const id = link.href.slice(1)
            const isActive = activeId === id
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative font-body font-medium text-sm transition-colors ${
                  isActive ? 'text-accent' : 'text-text-secondary hover:text-text'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                  />
                )}
              </a>
            )
          })}
        </div>

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/AbdullahiIsse/clutchkit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-text transition-colors font-body text-sm inline-flex items-center gap-1"
          >
            GitHub
            <ExternalLink size={14} />
          </a>
          <Button variant="primary" size="sm" href="#download">
            Download
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-text-secondary hover:text-text transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile slide-in panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-16 right-0 bottom-0 w-64 bg-surface border-l border-border p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`font-body font-medium text-base py-2 transition-colors ${
                  activeId === link.href.slice(1)
                    ? 'text-accent'
                    : 'text-text-secondary hover:text-text'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="border-t border-border pt-4 mt-2">
              <a
                href="https://github.com/AbdullahiIsse/clutchkit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text transition-colors font-body text-sm inline-flex items-center gap-1 mb-4"
              >
                GitHub
                <ExternalLink size={14} />
              </a>
              <Button
                variant="primary"
                size="md"
                href="#download"
                className="w-full justify-center"
              >
                Download
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
