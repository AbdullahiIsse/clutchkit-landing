export interface Category {
  icon: string
  name: string
  count: number
  description: string
}

export const categories: Category[] = [
  {
    icon: 'MousePointer',
    name: 'Input Lag',
    count: 12,
    description: 'Reduce input delay and improve mouse/keyboard responsiveness',
  },
  {
    icon: 'Monitor',
    name: 'GPU',
    count: 9,
    description: 'Optimize graphics driver settings and GPU scheduling',
  },
  {
    icon: 'Cpu',
    name: 'CPU',
    count: 8,
    description: 'Manage core affinity, priorities, and scheduling',
  },
  {
    icon: 'MemoryStick',
    name: 'Memory',
    count: 6,
    description: 'Optimize RAM allocation and virtual memory settings',
  },
  {
    icon: 'Wifi',
    name: 'Network',
    count: 11,
    description: 'Lower ping and reduce network latency',
  },
  {
    icon: 'Shield',
    name: 'Privacy',
    count: 14,
    description: 'Disable telemetry and background data collection',
  },
  {
    icon: 'Settings',
    name: 'Services',
    count: 18,
    description: 'Disable unnecessary Windows services',
  },
  {
    icon: 'Zap',
    name: 'Power',
    count: 7,
    description: 'Configure power plans for maximum performance',
  },
  {
    icon: 'Eye',
    name: 'Visual',
    count: 10,
    description: 'Reduce visual effects for better performance',
  },
]
