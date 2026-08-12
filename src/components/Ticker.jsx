import { personalInfo } from '../data/portfolioData'

const baseItems = [
  `${personalInfo.name.first} ${personalInfo.name.last}`,
  '◆',
  personalInfo.role.split('|')[0].trim().toUpperCase(),
  '◆',
  personalInfo.role.split('|')[1]?.trim().toUpperCase() || 'SOFTWARE ENGINEER',
  '◆',
  `${personalInfo.location.city.toUpperCase()} · IND`,
  '◆',
  `CGPA ${personalInfo.metrics.cgpa} / 10`,
  '◆',
  `${personalInfo.metrics.leetcodeSolved} LEETCODE`,
  '◆',
  'REACT · FASTAPI · NODE.JS',
  '◆',
  'AWS · DOCKER · SUPABASE',
  '◆',
  personalInfo.status.navText.toUpperCase(),
  '◆',
  'SW-PORTFOLIO-2026',
  '◆',
]

const items = [...baseItems, ...baseItems]

export default function Ticker() {
  return (
    <div className="ticker-wrap" aria-hidden="true">
      <div className="ticker-track">
        {items.map((item, i) => (
          <span key={i} className={item === '◆' ? 'sep' : ''}>{item}</span>
        ))}
      </div>
    </div>
  )
}
