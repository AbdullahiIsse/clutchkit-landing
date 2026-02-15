export type CellStatus = 'check' | 'x' | 'partial'

export interface ComparisonRow {
  feature: string
  clutchkit: CellStatus
  hone: CellStatus
  razer: CellStatus
  ccleaner: CellStatus
}

export interface Competitor {
  key: 'clutchkit' | 'hone' | 'razer' | 'ccleaner'
  name: string
  price: string
}

export const competitors: Competitor[] = [
  { key: 'clutchkit', name: 'ClutchKit', price: 'Free' },
  { key: 'hone', name: 'Hone', price: '$4/mo' },
  { key: 'razer', name: 'Razer Cortex', price: 'Free' },
  { key: 'ccleaner', name: 'CCleaner', price: '$30/yr' },
]

export const comparisonRows: ComparisonRow[] = [
  {
    feature: 'Open Source',
    clutchkit: 'check',
    hone: 'x',
    razer: 'x',
    ccleaner: 'x',
  },
  {
    feature: 'No Account Required',
    clutchkit: 'check',
    hone: 'x',
    razer: 'x',
    ccleaner: 'x',
  },
  {
    feature: 'No Telemetry',
    clutchkit: 'check',
    hone: 'x',
    razer: 'x',
    ccleaner: 'x',
  },
  {
    feature: '150+ Tweaks',
    clutchkit: 'check',
    hone: 'check',
    razer: 'x',
    ccleaner: 'x',
  },
  {
    feature: 'Risk Indicators',
    clutchkit: 'check',
    hone: 'partial',
    razer: 'x',
    ccleaner: 'x',
  },
  {
    feature: 'Auto Backup',
    clutchkit: 'check',
    hone: 'check',
    razer: 'x',
    ccleaner: 'check',
  },
  {
    feature: 'Works Offline',
    clutchkit: 'check',
    hone: 'x',
    razer: 'partial',
    ccleaner: 'check',
  },
  {
    feature: 'Portable Version',
    clutchkit: 'check',
    hone: 'x',
    razer: 'x',
    ccleaner: 'x',
  },
]
