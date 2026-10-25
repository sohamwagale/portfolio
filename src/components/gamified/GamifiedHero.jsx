import React, { useState, useEffect } from 'react';
import { PixelBox, HudStatusCard } from '../../../gamified/components/PixelCards';
import { personalInfo } from '../../data/portfolioData';

export default function GamifiedHero({ onExploreQuests, onOpenInventory, onCommune }) {
  const [timeStatus, setTimeStatus] = useState('🌙 NIGHT');

  useEffect(() => {
    const hours = new Date().getHours();
    const isDay = hours >= 6 && hours < 18;
    setTimeStatus(isDay ? '☀️ DAY' : '🌙 NIGHT');
  }, []);

  return (
    <section className="rpg-section rpg-hero" id="rpg-hero" aria-label="Hero Realm">
      <div className="gamified-wrap">
        {/* Top Bar with Location and HUD */}
        <div className="rpg-hero-top-bar">
          <div className="rpg-location-badge">
            <span>📍</span>
            <span>
              REALM: {personalInfo.location.city.toUpperCase()}, {personalInfo.location.state.toUpperCase()} · {personalInfo.location.timezone}
            </span>
          </div>

          <HudStatusCard
            name="SOHAM WAGALE"
            level={20}
            xpCurrent={86}
            xpTarget={100}
            timeStatus={timeStatus}
          />
        </div>

        {/* Main Character Parchment Card */}
        <PixelBox className="rpg-hero-main-card">
          <div className="rpg-hero-kicker">
            [CHARACTER PROFILE · CLASS: FULL-STACK SOFTWARE MAGE]
          </div>

          <h1 className="rpg-hero-title">
            {personalInfo.name.first} {personalInfo.name.last}
          </h1>

          <div className="rpg-hero-subtitle">
            {personalInfo.role}
          </div>

          <p className="rpg-hero-bio">
            {personalInfo.bio}
          </p>

          {/* Quick RPG Stats */}
          <div className="rpg-stat-counters">
            <div className="rpg-stat-box">
              <div className="rpg-stat-val">{personalInfo.metrics.cgpa} / {personalInfo.metrics.maxCgpa}</div>
              <div className="rpg-stat-lbl">ACADEMIC CGPA</div>
            </div>
            <div className="rpg-stat-box">
              <div className="rpg-stat-val">{personalInfo.metrics.leetcodeSolved}</div>
              <div className="rpg-stat-lbl">LEETCODE BOSSES</div>
            </div>
            <div className="rpg-stat-box">
              <div className="rpg-stat-val">{personalInfo.metrics.projectsCount}</div>
              <div className="rpg-stat-lbl">RECORDED QUESTS</div>
            </div>
            <div className="rpg-stat-box">
              <div className="rpg-stat-val">{personalInfo.metrics.rolesCount}</div>
              <div className="rpg-stat-lbl">GUILD ROLES</div>
            </div>
          </div>

          {/* Action Row */}
          <div className="rpg-btn-row">
            <button
              type="button"
              className="rpg-parchment-btn"
              onClick={onExploreQuests}
            >
              ⚔️ INSPECT QUESTS (PROJECTS)
            </button>
            <button
              type="button"
              className="rpg-parchment-btn"
              onClick={onOpenInventory}
            >
              🎒 OPEN SKILL INVENTORY
            </button>
            <button
              type="button"
              className="rpg-parchment-btn"
              onClick={onCommune}
            >
              💬 COMMUNE (CONTACT)
            </button>
          </div>
        </PixelBox>
      </div>
    </section>
  );
}
