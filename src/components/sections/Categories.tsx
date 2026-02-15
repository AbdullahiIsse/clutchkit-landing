import {
  MousePointer,
  Monitor,
  Cpu,
  MemoryStick,
  Wifi,
  Shield,
  Settings,
  Zap,
  Eye,
} from 'lucide-react'
import { categories } from '../../data/categories'
import GlassCard from '../ui/GlassCard'
import AnimateIn from '../ui/AnimateIn'
import type { ReactNode } from 'react'

const iconMap: Record<string, ReactNode> = {
  MousePointer: <MousePointer size={16} className="text-text-secondary" />,
  Monitor: <Monitor size={16} className="text-text-secondary" />,
  Cpu: <Cpu size={16} className="text-text-secondary" />,
  MemoryStick: <MemoryStick size={16} className="text-text-secondary" />,
  Wifi: <Wifi size={16} className="text-text-secondary" />,
  Shield: <Shield size={16} className="text-text-secondary" />,
  Settings: <Settings size={16} className="text-text-secondary" />,
  Zap: <Zap size={16} className="text-text-secondary" />,
  Eye: <Eye size={16} className="text-text-secondary" />,
}

const columnVariants = ['fade-left', 'fade-up', 'fade-right'] as const

export default function Categories() {
  return (
    <div className="py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        {/* CENTERED heading with accent number */}
        <AnimateIn className="text-center">
          <span className="font-mono text-xs tracking-[0.15em] uppercase text-accent">
            Categories
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-3">
            <span className="text-accent font-mono">150+</span> tweaks across 9
            categories.
          </h2>
          <p className="font-body text-text-secondary text-lg mt-4 max-w-2xl mx-auto">
            Every optimization is categorized, risk-labeled, and fully
            reversible. Pick what matters for your setup.
          </p>
        </AnimateIn>

        {/* 3-col grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-16">
          {categories.map((cat, i) => (
            <AnimateIn
              key={cat.name}
              delay={i * 0.06}
              variant={columnVariants[i % 3]}
            >
              <GlassCard padding="sm" className="p-5 h-full">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-md bg-surface-bright flex items-center justify-center">
                    {iconMap[cat.icon]}
                  </div>
                  <span className="font-mono font-medium text-xl text-accent">
                    {cat.count}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-sm mt-3">
                  {cat.name}
                </h3>
                <p className="font-body text-xs text-text-tertiary mt-1 leading-relaxed">
                  {cat.description}
                </p>
              </GlassCard>
            </AnimateIn>
          ))}
        </div>
      </div>
    </div>
  )
}
