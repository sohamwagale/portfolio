import React, { useState } from 'react';
import { InventorySkillSlot } from '../../../gamified/components/PixelCards';
import { skillCategories } from '../../data/portfolioData';
import { SkillIcon, skillLogoSources } from './SkillLogos';

// Lore and stats for each skill
const skillLore = {
  'TypeScript': { rarity: 'legendary', stat: '+45 Type Armor', desc: 'Immunity to null pointer curses and compilation maledictions.' },
  'JavaScript': { rarity: 'epic', stat: '+42 Dynamic Scripting', desc: 'The foundational language of the modern web canvas and client interactivity.' },
  'Python': { rarity: 'legendary', stat: '+48 Algorithmic Versatility', desc: 'High-level language of elegance, scripting, and machine intelligence.' },
  'Java': { rarity: 'rare', stat: '+36 OOP Discipline', desc: 'Rock-solid object-oriented foundations honed through large-cohort mentoring.' },
  'C/C++': { rarity: 'rare', stat: '+40 Memory Control', desc: 'Direct access to pointers, structs, and low-overhead compute mechanics.' },
  'SQL': { rarity: 'rare', stat: '+36 Query Syntax', desc: 'Expressive data retrieval and aggregation across relational matrices.' },
  'React': { rarity: 'legendary', stat: '+50 Component Weaving', desc: 'Constructs reactive interfaces that enchant users across all realms.' },
  'React Native': { rarity: 'epic', stat: '+43 Cross-Realm Mobile', desc: 'Builds native Android and iOS mobile applications with a unified codebase.' },
  'Next.js': { rarity: 'epic', stat: '+46 Server-Side Sorcery', desc: 'Blends edge rendering with lightning-fast static hydration and server actions.' },
  'Tailwind CSS': { rarity: 'rare', stat: '+32 Utility Enchantment', desc: 'Rapid responsive styling with utility-first arcane runes.' },
  'Expo': { rarity: 'rare', stat: '+34 App Deployment', desc: 'Accelerates universal mobile app compilation and development workflows.' },
  'Node.js': { rarity: 'epic', stat: '+44 Async Mastery', desc: 'Harnesses non-blocking event loops to orchestrate heavy backend loads.' },
  'Express': { rarity: 'rare', stat: '+35 Lightweight Dispatch', desc: 'Minimalist web framework routing requests with surgical speed.' },
  'FastAPI': { rarity: 'epic', stat: '+42 High-Speed Routing', desc: 'Powers Pythonic APIs shielded by Pydantic type validation.' },
  'REST APIs': { rarity: 'epic', stat: '+38 Protocol Mastery', desc: 'Standardized endpoint contracts connecting distributed services seamlessly.' },
  'PostgreSQL': { rarity: 'epic', stat: '+40 Relational Shield', desc: 'ACID-compliant relational vault storing critical kingdom data safely.' },
  'MySQL': { rarity: 'rare', stat: '+34 Table Optimization', desc: 'Reliable relational data engine with indexing and transaction guarantees.' },
  'MongoDB': { rarity: 'rare', stat: '+35 Document Flexibility', desc: 'NoSQL document store for high-throughput JSON documents and schemas.' },
  'SQLite': { rarity: 'common', stat: '+28 Embedded Storage', desc: 'Zero-configuration serverless database embedded directly into applications.' },
  'Firebase': { rarity: 'rare', stat: '+30 Realtime Sync', desc: 'Instant cloud synchronization, Firestore document rules, and auth barriers.' },
  'AWS': { rarity: 'rare', stat: '+38 Cloud Citadel', desc: 'Deploys serverless lambdas, cloud compute, and resilient infrastructure.' },
  'Docker': { rarity: 'rare', stat: '+35 Container Ward', desc: 'Encapsulates software into portable bastions that run predictably anywhere.' },
  'GitHub Actions': { rarity: 'rare', stat: '+37 CI/CD Automation', desc: 'Automated test suites and continuous deployment pipelines triggered on push.' },
  'Git': { rarity: 'rare', stat: '+35 Branch Chronomancy', desc: 'Distributed version control system branching timelines with surgical precision.' },
  'GitHub': { rarity: 'rare', stat: '+36 Collaboration Forge', desc: 'Hosting code repositories, automated pull requests, and review workflows.' },
  'Nginx': { rarity: 'rare', stat: '+33 Reverse Proxy Shield', desc: 'High-performance reverse proxy and static asset delivery gatekeeper.' },
  'Data Structures & Algorithms': { rarity: 'legendary', stat: '+50 Boss Slayer', desc: '140+ algorithmic challenges defeated with optimized Big-O time and space complexity.' },
  'Object-Oriented Programming': { rarity: 'epic', stat: '+42 Clean Architecture', desc: 'Encapsulation, inheritance, polymorphism, and modular class hierarchies.' },
  'DBMS': { rarity: 'epic', stat: '+40 Relational Theory', desc: 'Database normalization, transaction ACID guarantees, and B-tree indexing.' },
  'System Design': { rarity: 'legendary', stat: '+48 Scalability Vision', desc: 'Designing scalable, decoupled, and fault-tolerant distributed system architectures.' },
};

export default function GamifiedSkills() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  
  // Default selected skill
  const [selectedSkill, setSelectedSkill] = useState({
    name: 'React',
    category: 'FRONTEND',
    ...skillLore['React'],
  });

  const categories = ['ALL', ...skillCategories.map((c) => c.name)];

  const allSkillsList = skillCategories.flatMap((cat) =>
    cat.items.map((item) => ({
      name: item,
      category: cat.name,
      ...(skillLore[item] || {
        rarity: 'rare',
        stat: '+30 Tech Proficiency',
        desc: 'Proficient software competency in production environments.',
      }),
    }))
  );

  const displayedSkills = activeCategory === 'ALL'
    ? allSkillsList
    : allSkillsList.filter((s) => s.category === activeCategory);

  const hasSelectedLogo = selectedSkill?.name && skillLogoSources[selectedSkill.name];

  return (
    <section className="rpg-section" id="rpg-skills" aria-labelledby="rpg-skills-title">
      <div className="gamified-wrap">
        <div className="rpg-sec-head">
          <div className="rpg-sec-badge">CHARACTER INVENTORY &amp; SKILL VAULT</div>
          <h2 className="rpg-sec-title" id="rpg-skills-title">
            Skills <span className="accent">&amp; Inventory</span>
          </h2>
          <p className="rpg-sec-sub">
            Equipped with production-tested technologies. Click any slot to inspect item stats, rarity tier, and lore.
          </p>
        </div>

        {/* Category Filters */}
        <div className="rpg-inv-categories">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`rpg-tab-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Inventory Layout */}
        <div className="rpg-inventory-layout">
          {/* Item Grid Slots */}
          <div className="rpg-inv-slots-grid">
            {displayedSkills.map((skill) => (
              <InventorySkillSlot
                key={`${skill.category}-${skill.name}`}
                name={skill.name}
                icon={<SkillIcon name={skill.name} />}
                rarity={skill.rarity}
                isSelected={selectedSkill?.name === skill.name}
                onClick={() => setSelectedSkill(skill)}
              />
            ))}
          </div>

          {/* Right: Equipment Inspector and Rarity Legend */}
          <div className="rpg-inv-sidebar">
            <div className="rpg-inv-desc-card">
              <div className="rpg-inv-detail-card-header">
                {hasSelectedLogo && (
                  <div className="rpg-inv-detail-logo">
                    <SkillIcon name={selectedSkill.name} />
                  </div>
                )}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="rpg-inv-desc-title">
                    <span>{selectedSkill?.name || 'Select an artifact'}</span>
                    {selectedSkill?.rarity && (
                      <span
                        style={{
                          fontSize: '10px',
                          textTransform: 'uppercase',
                          color: `var(--rpg-rarity-${selectedSkill.rarity})`,
                          fontWeight: 'bold',
                        }}
                      >
                        {selectedSkill.rarity} {selectedSkill.category ? `· ${selectedSkill.category}` : ''}
                      </span>
                    )}
                  </div>
                  {selectedSkill?.stat && (
                    <div className="rpg-inv-desc-stat">{selectedSkill.stat}</div>
                  )}
                </div>
              </div>
              <div className="rpg-inv-desc-text">
                {selectedSkill?.desc || 'Select any item slot from the inventory to view its technical properties.'}
              </div>
            </div>

            <div className="rpg-rarity-legend-box">
              <div className="rpg-rarity-legend-title">RARITY MATRIX</div>
              <div className="rpg-rarity-legend-list">
                <div className="rpg-rarity-row">
                  <span className="rpg-rarity-swatch" style={{ background: 'var(--rpg-rarity-legendary)' }} />
                  <span style={{ color: 'var(--rpg-rarity-legendary)', fontWeight: 'bold' }}>Legendary</span>
                  <span>— Core mastery &amp; architectural staples</span>
                </div>
                <div className="rpg-rarity-row">
                  <span className="rpg-rarity-swatch" style={{ background: 'var(--rpg-rarity-epic)' }} />
                  <span style={{ color: 'var(--rpg-rarity-epic)', fontWeight: 'bold' }}>Epic</span>
                  <span>— Production frameworks &amp; DB systems</span>
                </div>
                <div className="rpg-rarity-row">
                  <span className="rpg-rarity-swatch" style={{ background: 'var(--rpg-rarity-rare)' }} />
                  <span style={{ color: 'var(--rpg-rarity-rare)', fontWeight: 'bold' }}>Rare</span>
                  <span>— DevOps, tooling &amp; APIs</span>
                </div>
                <div className="rpg-rarity-row">
                  <span className="rpg-rarity-swatch" style={{ background: 'var(--rpg-rarity-common)' }} />
                  <span style={{ color: 'var(--rpg-rarity-common)', fontWeight: 'bold' }}>Common</span>
                  <span>— Embedded &amp; auxiliary tools</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
