import React from 'react';
import { ExperienceCard } from '../../../gamified/components/PixelCards';
import { experiences } from '../../data/portfolioData';

export default function GamifiedExperience() {
  return (
    <section className="rpg-section" id="rpg-experience" aria-labelledby="rpg-exp-title">
      <div className="gamified-wrap">
        <div className="rpg-sec-head">
          <div className="rpg-sec-badge">GUILD CHRONICLES &amp; CAREER MILESTONES</div>
          <h2 className="rpg-sec-title" id="rpg-exp-title">
            Work <span className="accent">Experience</span>
          </h2>
          <p className="rpg-sec-sub">
            Leadership, mentorship, and coordination quests accomplished across university organizations.
          </p>
        </div>

        <div className="rpg-exp-grid">
          {experiences.map((exp, idx) => (
            <ExperienceCard
              key={idx}
              role={`${exp.fig} · ${exp.role}`}
              org={exp.org}
              period={`${exp.range[0]} - ${exp.range[1]}`}
              bullets={exp.bullets}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
