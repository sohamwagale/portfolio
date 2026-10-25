import React from 'react';
import { LegendaryItemCard } from '../../../gamified/components/PixelCards';
import { education, personalInfo } from '../../data/portfolioData';

export default function GamifiedEducation() {
  const stats = [
    { label: 'Degree', value: `${education.degree} in ${education.field} (Expected ${education.expectedGraduation})` },
    { label: 'Academy Guild', value: `${education.institution}, ${education.location}` },
    { label: 'Academic Standing', value: `CGPA ${education.cgpa} / ${education.maxCgpa}` },
    { label: 'LeetCode Solved', value: `${personalInfo.metrics.leetcodeSolved} Algorithmic Challenges Overcome` },
    { label: 'Tongues / Languages', value: education.languages.map((l) => `${l.lang} (${l.level})`).join(' · ') },
    { label: 'Core Disciplines', value: education.interests.join(' · ') },
  ];

  const actions = [
    { label: '📄 GITHUB RESUME & REPOS', href: personalInfo.contact.github },
    { label: '💼 LINKEDIN SCROLL', href: personalInfo.contact.linkedin },
    { label: '📬 TRANSMIT OFFICIAL PDF', href: `mailto:${personalInfo.contact.email}?subject=Resume%20Inquiry%20for%20Soham%20Wagale` },
  ];

  return (
    <section className="rpg-section" id="rpg-education" aria-labelledby="rpg-edu-title">
      <div className="gamified-wrap">
        <div className="rpg-sec-head" style={{ textAlign: 'center' }}>
          <div className="rpg-sec-badge">ACADEMIC LORE &amp; CREDENTIALS</div>
          <h2 className="rpg-sec-title" id="rpg-edu-title" style={{ justifyContent: 'center' }}>
            Legendary <span className="accent">CV Item</span>
          </h2>
          <p className="rpg-sec-sub">
            The culmination of academic excellence, algorithmic rigor, and software craftsmanship.
          </p>
        </div>

        <div className="rpg-edu-center">
          <LegendaryItemCard
            icon="👑"
            title="LEGENDARY ITEM OBTAINED!"
            badge="CURRICULUM VITAE · SOHAM WAGALE"
            stats={stats}
            actions={actions}
          />
        </div>
      </div>
    </section>
  );
}
