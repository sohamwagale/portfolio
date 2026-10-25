import React, { useState, useEffect } from 'react';
import './gamified-theme.css';
import GamifiedNavbar from './GamifiedNavbar';
import GamifiedHero from './GamifiedHero';
import GamifiedTicker from './GamifiedTicker';
import GamifiedExperience from './GamifiedExperience';
import GamifiedProjects from './GamifiedProjects';
import GamifiedSkills from './GamifiedSkills';
import GamifiedEducation from './GamifiedEducation';
import GamifiedContact from './GamifiedContact';

export default function GamifiedPortfolio({ onToggleTheme }) {
  // RPG Sub-Theme: 'parchment' (default warm light paper) | 'emerald' (dark forest theme)
  const [rpgSubTheme, setRpgSubTheme] = useState(() => {
    return localStorage.getItem('rpg_sub_theme') || 'parchment';
  });

  useEffect(() => {
    // Apply gamified base class
    document.body.classList.add('theme-gamified-body');
    document.body.classList.remove('theme-standard-body');

    // Save and apply sub-theme class
    localStorage.setItem('rpg_sub_theme', rpgSubTheme);
    if (rpgSubTheme === 'emerald') {
      document.body.classList.add('rpg-theme-emerald');
      document.body.classList.remove('rpg-theme-parchment');
      document.documentElement.setAttribute('data-rpg-theme', 'emerald');
    } else {
      document.body.classList.add('rpg-theme-parchment');
      document.body.classList.remove('rpg-theme-emerald');
      document.documentElement.setAttribute('data-rpg-theme', 'parchment');
    }

    return () => {
      document.body.classList.remove('theme-gamified-body', 'rpg-theme-parchment', 'rpg-theme-emerald');
    };
  }, [rpgSubTheme]);

  const toggleSubTheme = () => {
    setRpgSubTheme((prev) => (prev === 'parchment' ? 'emerald' : 'parchment'));
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`gamified-root rpg-mode-${rpgSubTheme}`}>
      <GamifiedNavbar
        onToggleTheme={onToggleTheme}
        rpgSubTheme={rpgSubTheme}
        onToggleSubTheme={toggleSubTheme}
      />
      <main>
        <GamifiedHero
          onExploreQuests={() => scrollTo('rpg-projects')}
          onOpenInventory={() => scrollTo('rpg-skills')}
          onCommune={() => scrollTo('rpg-contact')}
        />
        <GamifiedTicker />
        <GamifiedExperience />
        <GamifiedProjects />
        <GamifiedSkills />
        <GamifiedEducation />
      </main>
      <GamifiedContact />
    </div>
  );
}
