export interface Feature {
  icon: string
  title: string
  description: string
}

export const features: Feature[] = [
  {
    icon: 'Timer',
    title: 'Input Lag Reduction',
    description:
      'Disable unnecessary system services, optimize timer resolution, and reduce DPC latency for razor-sharp responsiveness.',
  },
  {
    icon: 'Cpu',
    title: 'CPU Optimization',
    description:
      'Pin game processes to performance cores, adjust thread priorities, and disable background throttling for consistent frame delivery.',
  },
  {
    icon: 'Gauge',
    title: 'FPS Boost',
    description:
      'Strip GPU overhead, optimize shader caches, and configure power plans to extract every frame your hardware can deliver.',
  },
  {
    icon: 'EyeOff',
    title: 'Privacy & Telemetry',
    description:
      'Disable Windows telemetry, scheduled tasks, and background data collection that steals CPU cycles during gameplay.',
  },
  {
    icon: 'HardDrive',
    title: 'Storage & Memory',
    description:
      'Optimize NTFS settings, configure virtual memory, and manage startup programs to free RAM for your games.',
  },
  {
    icon: 'Wifi',
    title: 'Network Optimization',
    description:
      'Tune TCP/IP parameters, disable Nagle\'s algorithm, and optimize DNS settings for lower ping and reduced packet loss.',
  },
]
