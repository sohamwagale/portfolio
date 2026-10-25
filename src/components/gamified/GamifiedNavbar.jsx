import React from 'react';
import { personalInfo } from '../../data/portfolioData';

export default function GamifiedNavbar({ onToggleTheme, rpgSubTheme, onToggleSubTheme }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="rpg-navbar" role="navigation" aria-label="Gamified RPG Navigation">
      <div className="gamified-wrap rpg-navbar-inner">
        <div className="rpg-nav-top-row">
          <div className="rpg-nav-brand" onClick={() => scrollTo('rpg-hero')} role="button" tabIndex={0}>
            <div className="rpg-nav-logo-box">
              {personalInfo.name.first[0]}{personalInfo.name.last[0]}
            </div>
            <div className="rpg-nav-brand-title-wrap">
              <div className="rpg-nav-brand-text">THE LEGEND OF SOHAM</div>
              <div className="rpg-nav-brand-sub">LVL 20 SCHOLAR</div>
            </div>
          </div>

          {/* Actions shown on mobile in the top row */}
          <div className="rpg-nav-actions rpg-nav-actions-mobile">
            <button
              type="button"
              className="rpg-subtheme-toggle-btn"
              onClick={onToggleSubTheme}
              aria-label={rpgSubTheme === 'parchment' ? 'Switch to Emerald Dark Theme' : 'Switch to Parchment Light Theme'}
              title={rpgSubTheme === 'parchment' ? 'Switch to Emerald Dark Theme' : 'Switch to Parchment Light Theme'}
            >
              {rpgSubTheme === 'parchment' ? (
                <>
                  <span className="btn-icon">🌲</span>
                  <span className="btn-text">Dark</span>
                </>
              ) : (
                <>
                  <span className="btn-icon">📜</span>
                  <span className="btn-text">Light</span>
                </>
              )}
            </button>

            <button
              type="button"
              className="rpg-theme-switch-btn"
              onClick={onToggleTheme}
              aria-label="Switch to Clean Editorial Resume Theme"
              title="Switch to Clean Editorial Resume Theme"
            >
              <span className="btn-icon">📄</span>
              <span className="btn-text">Resume</span>
            </button>
          </div>
        </div>

        {/* Navigation jump links - swipeable row on mobile, center nav on desktop */}
        <ul className="rpg-nav-links" role="list">
          {[
            ['rpg-experience', '⚔️ Guild'],
            ['rpg-projects',   '📜 Quests'],
            ['rpg-skills',     '🎒 Inventory'],
            ['rpg-education',  '👑 Legend'],
            ['rpg-contact',    '💬 Commune'],
          ].map(([id, label]) => (
            <li key={id}>
              <button
                type="button"
                className="rpg-nav-link-btn"
                onClick={() => scrollTo(id)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Actions shown on desktop on the right side */}
        <div className="rpg-nav-actions rpg-nav-actions-desktop">
          <button
            type="button"
            className="rpg-subtheme-toggle-btn"
            onClick={onToggleSubTheme}
            aria-label={rpgSubTheme === 'parchment' ? 'Switch to Emerald Dark Theme' : 'Switch to Parchment Light Theme'}
            title={rpgSubTheme === 'parchment' ? 'Switch to Emerald Dark Theme' : 'Switch to Parchment Light Theme'}
          >
            {rpgSubTheme === 'parchment' ? (
              <>
                <span className="btn-icon">🌲</span>
                <span className="btn-text">Emerald Dark</span>
              </>
            ) : (
              <>
                <span className="btn-icon">📜</span>
                <span className="btn-text">Parchment Light</span>
              </>
            )}
          </button>

          <button
            type="button"
            className="rpg-theme-switch-btn"
            onClick={onToggleTheme}
            aria-label="Switch to Clean Editorial Resume Theme"
            title="Switch to Clean Editorial Resume Theme"
          >
            <span className="btn-icon">📄</span>
            <span className="btn-text">Clean Resume Mode</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
