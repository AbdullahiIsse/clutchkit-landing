export interface Testimonial {
  quote: string
  username: string
  source: string
  game: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Dropped my input lag by 8ms and gained 15 FPS in Valorant. ClutchKit is the only optimizer I trust because I can read every line of code.',
    username: '@xKr4tos',
    source: 'via Reddit',
    game: 'Valorant',
  },
  {
    quote:
      "Finally an optimizer that doesn't install a crypto miner. The risk badges actually tell you what each tweak does before you toggle it.",
    username: '@Spectro_fps',
    source: 'via Discord',
    game: 'CS2',
  },
  {
    quote:
      "Used to stutter every teamfight in League. After ClutchKit's CPU and memory tweaks, buttery smooth even in late game.",
    username: '@NullPtr',
    source: 'via GitHub',
    game: 'League of Legends',
  },
  {
    quote:
      "I've tried Hone, Cortex, and a dozen registry guides. ClutchKit is the first tool that packages it all without charging me monthly.",
    username: '@VelvetThunder',
    source: 'via YouTube',
    game: 'Fortnite',
  },
]
