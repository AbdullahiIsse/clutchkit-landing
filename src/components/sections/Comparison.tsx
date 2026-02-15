import { motion } from 'framer-motion'
import { Check, X, Minus } from 'lucide-react'
import { competitors, comparisonRows, type CellStatus, type ComparisonRow } from '../../data/comparisons'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import AnimateIn from '../ui/AnimateIn'

function StatusIcon({
  status,
  isClutchKit,
}: {
  status: CellStatus
  isClutchKit: boolean
}) {
  if (status === 'check') {
    return (
      <Check
        size={18}
        className={isClutchKit ? 'text-accent' : 'text-text-tertiary'}
      />
    )
  }
  if (status === 'partial') {
    return <Minus size={18} className="text-text-tertiary" />
  }
  return <X size={18} className="text-text-ghost" />
}

const rowVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 },
}

export default function Comparison() {
  const reducedMotion = useReducedMotion()

  return (
    <div className="py-28 md:py-36 bg-base-raised">
      <div className="max-w-6xl mx-auto px-6">
        {/* LEFT-ALIGNED section intro */}
        <AnimateIn>
          <span className="font-mono text-xs tracking-[0.15em] uppercase text-accent">
            Comparison
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-3">
            How ClutchKit <span className="text-accent">stacks up.</span>
          </h2>
          <p className="font-body text-text-secondary text-lg mt-4 max-w-2xl">
            No subscriptions, no hidden telemetry, no walled-off features.
          </p>
        </AnimateIn>

        {/* Comparison grid */}
        <AnimateIn delay={0.15} className="mt-16" variant="scale">
          <div className="overflow-x-auto -mx-6 px-6">
            <div className="min-w-[640px]">
              {/* Header row */}
              <div className="grid grid-cols-5 gap-0">
                {/* Empty feature label cell */}
                <div className="p-4" />

                {/* Competitor headers */}
                {competitors.map((comp) => (
                  <div
                    key={comp.key}
                    className={`p-4 text-center ${
                      comp.key === 'clutchkit'
                        ? 'border-t-2 border-x border-accent bg-accent-subtle/50 rounded-t-lg border-b-0'
                        : ''
                    }`}
                  >
                    <span
                      className={`block text-sm font-semibold ${
                        comp.key === 'clutchkit'
                          ? 'text-accent font-display'
                          : 'text-text-secondary font-body'
                      }`}
                    >
                      {comp.name}
                    </span>
                    <span
                      className={`block mt-1 font-mono ${
                        comp.key === 'clutchkit'
                          ? 'font-bold text-lg text-accent'
                          : 'text-text-tertiary text-sm'
                      }`}
                    >
                      {comp.price}
                    </span>
                  </div>
                ))}
              </div>

              {/* Data rows with stagger */}
              {reducedMotion ? (
                comparisonRows.map((row: ComparisonRow, i: number) => (
                  <div
                    key={row.feature}
                    className={`grid grid-cols-5 gap-0 ${
                      i % 2 === 0 ? 'bg-surface/50' : ''
                    }`}
                  >
                    <div className="p-4 flex items-center">
                      <span className="font-body text-sm text-text-secondary">
                        {row.feature}
                      </span>
                    </div>
                    {competitors.map((comp) => (
                      <div
                        key={comp.key}
                        className={`p-4 flex items-center justify-center ${
                          comp.key === 'clutchkit'
                            ? 'bg-accent-subtle border-x border-accent/10'
                            : ''
                        }`}
                      >
                        <StatusIcon
                          status={row[comp.key]}
                          isClutchKit={comp.key === 'clutchkit'}
                        />
                      </div>
                    ))}
                  </div>
                ))
              ) : (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ staggerChildren: 0.06 }}
                >
                  {comparisonRows.map((row: ComparisonRow, i: number) => (
                    <motion.div
                      key={row.feature}
                      variants={rowVariants}
                      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                      className={`grid grid-cols-5 gap-0 ${
                        i % 2 === 0 ? 'bg-surface/50' : ''
                      }`}
                    >
                      <div className="p-4 flex items-center">
                        <span className="font-body text-sm text-text-secondary">
                          {row.feature}
                        </span>
                      </div>
                      {competitors.map((comp) => (
                        <div
                          key={comp.key}
                          className={`p-4 flex items-center justify-center relative overflow-hidden ${
                            comp.key === 'clutchkit'
                              ? 'bg-accent-subtle border-x border-accent/10'
                              : ''
                          }`}
                        >
                          <StatusIcon
                            status={row[comp.key]}
                            isClutchKit={comp.key === 'clutchkit'}
                          />
                          {comp.key === 'clutchkit' && row[comp.key] === 'check' && (
                            <motion.div
                              className="absolute inset-0 bg-accent/15"
                              initial={{ opacity: 0.15 }}
                              animate={{ opacity: 0 }}
                              transition={{ duration: 0.6, delay: i * 0.06 + 0.3 }}
                            />
                          )}
                        </div>
                      ))}
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* Bottom border for ClutchKit column */}
              <div className="grid grid-cols-5 gap-0">
                <div />
                {competitors.map((comp) => (
                  <div
                    key={comp.key}
                    className={
                      comp.key === 'clutchkit'
                        ? 'border-b-2 border-x border-accent rounded-b-lg h-1 bg-accent-subtle/50'
                        : ''
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </div>
  )
}
