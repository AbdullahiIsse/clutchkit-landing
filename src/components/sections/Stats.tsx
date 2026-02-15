import AnimateIn from '../ui/AnimateIn'
import CountUp from '../ui/CountUp'

const stats = [
  { target: 150, suffix: '+', label: 'System Tweaks', accent: true },
  { target: 9, suffix: '', label: 'Categories', accent: true },
  { target: 100, suffix: '%', label: 'Free Forever', accent: true },
  { target: 0, suffix: '', label: 'Accounts Required', accent: false },
]

export default function Stats() {
  return (
    <section className="bg-base-raised border-y border-border py-16">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8 text-center">
        {stats.map((stat, i) => (
          <AnimateIn key={stat.label} delay={i * 0.08} variant="scale">
            <div>
              <CountUp
                target={stat.target}
                suffix={stat.suffix}
                startDelay={i * 200}
                className={`font-medium text-4xl md:text-5xl ${
                  stat.accent ? 'text-accent' : 'text-text font-bold'
                }`}
              />
              <p className="font-body text-sm text-text-secondary mt-2">
                {stat.label}
              </p>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  )
}
