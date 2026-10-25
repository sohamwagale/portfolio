import React from 'react';

export default function GamifiedTicker() {
  const items = [
    '⚔️ ACTIVE QUEST: SOFTWARE ENGINEERING INTERNSHIPS 2026',
    '🛡️ 140+ LEETCODE ALGORITHMIC BEASTS DEFEATED',
    '💎 REACT · TYPESCRIPT · FASTAPI · NODE.JS · DOCKER · AWS',
    '📜 CGPA 8.6 / 10.0 · DYPCET GUILD',
    '🌲 ENCHANTED FOREST RPG RESUME THEME',
    '⚡ FULL-STACK ARCHITECT & DISTRIBUTED SYSTEMS ENTHUSIAST',
  ];

  return (
    <div className="rpg-ticker-strip" aria-hidden="true">
      <div className="rpg-ticker-inner">
        {items.concat(items).map((text, idx) => (
          <span key={idx} className="rpg-ticker-item">
            {text}
            <span className="sep">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
