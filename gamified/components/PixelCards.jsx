import React from 'react';
import './pixel-cards.css';

/**
 * =========================================================================
 * 1. BASE PIXEL BOX CONTAINER
 * Double-layered pixel border with gold shadow bevel
 * =========================================================================
 */
export const PixelBox = ({
  children,
  className = '',
  style = {},
  as: Component = 'div',
  ...props
}) => {
  return (
    <Component
      className={`rpg-pixel-box ${className}`}
      style={style}
      {...props}
    >
      {children}
    </Component>
  );
};

/**
 * =========================================================================
 * 2. PARCHMENT PROJECT / CASE STUDY CARD
 * Used for deep-dive quest project descriptions & case study modals
 * =========================================================================
 */
export const ProjectCaseStudyCard = ({
  title,
  badge = 'QUEST',
  subtitle,
  overview,
  architecture,
  results,
  stack = [],
  githubUrl,
  liveUrl,
  onClose,
  className = '',
}) => {
  return (
    <PixelBox className={`rpg-parchment-card ${className}`}>
      {onClose && (
        <button
          onClick={onClose}
          aria-label="Close Case Study"
          style={{
            position: 'absolute',
            top: 12,
            right: 12,
            background: 'var(--rpg-paper-dark)',
            color: 'var(--rpg-paper-light)',
            border: '2px solid var(--rpg-gold-dim)',
            width: 28,
            height: 28,
            cursor: 'pointer',
            fontWeight: 'bold',
            fontFamily: 'inherit',
          }}
        >
          ✕
        </button>
      )}

      <header className="rpg-parchment-title">
        <span>{title}</span>
        {badge && <span className="rpg-parchment-badge">{badge}</span>}
      </header>

      {subtitle && <div className="rpg-parchment-sub">{subtitle}</div>}

      <div className="rpg-parchment-body">
        {overview && (
          <section className="rpg-parchment-section">
            <h4 className="rpg-parchment-h4">THE MISSION & OVERVIEW</h4>
            <p>{overview}</p>
          </section>
        )}

        {architecture && (
          <section className="rpg-parchment-section">
            <h4 className="rpg-parchment-h4">ARCHITECTURE & ENGINEERING</h4>
            <p>{architecture}</p>
          </section>
        )}

        {results && (
          <section className="rpg-parchment-section">
            <h4 className="rpg-parchment-h4">KEY OUTCOMES & METRICS</h4>
            <p>{results}</p>
          </section>
        )}

        {stack.length > 0 && (
          <section className="rpg-parchment-section">
            <h4 className="rpg-parchment-h4">TECH ARTIFACTS / STACK</h4>
            <div className="rpg-tag-cloud">
              {stack.map((tech, idx) => (
                <span key={idx} className="rpg-skill-tag">
                  {tech}
                </span>
              ))}
            </div>
          </section>
        )}

        {(githubUrl || liveUrl) && (
          <footer className="rpg-btn-row">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rpg-parchment-btn"
              >
                🌐 LAUNCH LIVE DEMO
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rpg-parchment-btn"
              >
                📜 REPOSITORY SOURCE
              </a>
            )}
          </footer>
        )}
      </div>
    </PixelBox>
  );
};

/**
 * =========================================================================
 * 3. INVENTORY SKILL ITEM & DETAIL CARDS
 * RPG inventory grid slot with 4 rarities & equipment inspector
 * =========================================================================
 */
export const InventorySkillSlot = ({
  name,
  icon = '🛡️',
  rarity = 'common', // 'common' | 'rare' | 'epic' | 'legendary'
  onClick,
  isSelected = false,
  className = '',
}) => {
  return (
    <button
      type="button"
      className={`rpg-inv-slot rarity-${rarity} ${className}`}
      onClick={onClick}
      style={{
        boxShadow: isSelected
          ? '0 0 0 3px #ffffff, 0 0 12px var(--rpg-gold-bright)'
          : undefined,
      }}
      title={`${name} (${rarity.toUpperCase()})`}
    >
      <div className="rpg-inv-icon">{icon}</div>
      <div className="rpg-inv-name">{name}</div>
    </button>
  );
};

export const InventoryDetailCard = ({
  name = 'Select an item',
  category,
  rarity,
  stat,
  description = 'Rarity and stat bonuses will appear here upon inspection.',
  className = '',
}) => {
  return (
    <div className={`rpg-inv-desc-card ${className}`}>
      <div className="rpg-inv-desc-title">
        <span>{name}</span>
        {rarity && (
          <span
            style={{
              fontSize: '10px',
              textTransform: 'uppercase',
              color: `var(--rpg-rarity-${rarity})`,
              fontWeight: 'bold',
            }}
          >
            {rarity} {category ? `· ${category}` : ''}
          </span>
        )}
      </div>
      {stat && <div className="rpg-inv-desc-stat">{stat}</div>}
      <div className="rpg-inv-desc-text">{description}</div>
    </div>
  );
};

/**
 * =========================================================================
 * 4. RPG DIALOGUE BOX CARD
 * NPC / Character dialogue box with typewriter text & interactive choices
 * =========================================================================
 */
export const RpgDialogueCard = ({
  speaker = 'Soham the Wanderer',
  avatar,
  text,
  options = [],
  className = '',
}) => {
  return (
    <PixelBox className={`rpg-dialogue-card ${className}`}>
      <div className="rpg-dialogue-speaker">
        {avatar && <span style={{ marginRight: 6 }}>{avatar}</span>}
        <span>{speaker}</span>
      </div>
      <div className="rpg-dialogue-text">{text}</div>
      {options.length > 0 && (
        <div className="rpg-dialogue-options">
          {options.map((opt, idx) => (
            <button
              key={idx}
              type="button"
              className="rpg-dialogue-opt-btn"
              onClick={opt.onClick}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </PixelBox>
  );
};

/**
 * =========================================================================
 * 5. HUD STATUS & XP TRACKER CARD
 * Status badge with level, animated XP bar, and environmental indicator
 * =========================================================================
 */
export const HudStatusCard = ({
  name = 'SOHAM WAGALE',
  level = 1,
  xpCurrent = 45,
  xpTarget = 100,
  timeStatus = '☀️ DAY',
  className = '',
}) => {
  const percent = Math.min(100, Math.max(0, (xpCurrent / xpTarget) * 100));

  return (
    <div className={`rpg-hud-card ${className}`}>
      <span className="rpg-hud-title">{name}</span>
      <div className="rpg-xp-track" title={`XP: ${xpCurrent} / ${xpTarget}`}>
        <div className="rpg-xp-bar" style={{ width: `${percent}%` }} />
      </div>
      <span className="rpg-xp-text">LV. {level}</span>
      {timeStatus && (
        <span
          className="rpg-xp-text"
          style={{ color: 'var(--rpg-teal-glow)', marginLeft: 4 }}
        >
          {timeStatus}
        </span>
      )}
    </div>
  );
};

/**
 * =========================================================================
 * 6. SIMPLE VIEW PROJECT CARD
 * Clean, modern enchanted-forest grid card for portfolio project displays
 * =========================================================================
 */
export const SimpleProjectCard = ({
  name,
  zone,
  title,
  description,
  stack = [],
  githubUrl,
  liveUrl,
  className = '',
}) => {
  return (
    <article className={`rpg-simple-card ${className}`}>
      <div>
        <div className="rpg-simple-badge">
          {name} {zone ? `· ${zone}` : ''}
        </div>
        <h3 className="rpg-simple-card-title">{title}</h3>
        <p className="rpg-simple-card-desc">{description}</p>
        {stack.length > 0 && (
          <div className="rpg-tag-cloud" style={{ marginBottom: 16 }}>
            {stack.map((s, idx) => (
              <span key={idx} className="rpg-skill-tag">
                {s}
              </span>
            ))}
          </div>
        )}
      </div>

      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rpg-parchment-btn"
            style={{ padding: '6px 12px', fontSize: '11px' }}
          >
            GitHub
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rpg-parchment-btn"
            style={{ padding: '6px 12px', fontSize: '11px' }}
          >
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
};

/**
 * =========================================================================
 * 7. EXPERIENCE / TIMELINE CARD
 * Career, coordinator & mentorship achievements
 * =========================================================================
 */
export const ExperienceCard = ({
  role,
  org,
  period,
  bullets = [],
  className = '',
}) => {
  return (
    <div className={`rpg-experience-card ${className}`}>
      <h3 className="rpg-exp-role">{role}</h3>
      <div className="rpg-exp-org">
        {org} · {period}
      </div>
      {bullets.length > 0 && (
        <ul className="rpg-exp-bullets">
          {bullets.map((b, idx) => (
            <li key={idx} style={{ marginBottom: 4 }}>
              {b}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

/**
 * =========================================================================
 * 8. LEGENDARY ITEM OBTAINED / RESUME CARD
 * Fanfare card for resume unlocks, certificates, or awards
 * =========================================================================
 */
export const LegendaryItemCard = ({
  icon = '👑',
  title = 'LEGENDARY ITEM OBTAINED!',
  badge = 'CURRICULUM VITAE',
  stats = [],
  actions = [],
  className = '',
}) => {
  return (
    <PixelBox className={`rpg-legendary-card ${className}`}>
      <div className="rpg-legendary-icon">{icon}</div>
      <div
        className="rpg-parchment-title"
        style={{ justifyContent: 'center', border: 'none', marginBottom: 4 }}
      >
        <span>{title}</span>
      </div>
      {badge && <div className="rpg-parchment-badge">{badge}</div>}

      {stats.length > 0 && (
        <div className="rpg-legendary-stats-box">
          {stats.map((item, idx) => (
            <div key={idx} style={{ marginBottom: idx < stats.length - 1 ? 6 : 0 }}>
              <strong>{item.label}:</strong> {item.value}
            </div>
          ))}
        </div>
      )}

      {actions.length > 0 && (
        <div className="rpg-btn-row" style={{ justifyContent: 'center' }}>
          {actions.map((act, idx) =>
            act.href ? (
              <a
                key={idx}
                href={act.href}
                target={act.target || '_blank'}
                rel="noopener noreferrer"
                className="rpg-parchment-btn"
              >
                {act.label}
              </a>
            ) : (
              <button
                key={idx}
                type="button"
                onClick={act.onClick}
                className="rpg-parchment-btn"
              >
                {act.label}
              </button>
            )
          )}
        </div>
      )}
    </PixelBox>
  );
};

/**
 * =========================================================================
 * 9. QUEST LOG ENTRY CARD
 * Quest tracking card with active / completed status
 * =========================================================================
 */
export const QuestLogCard = ({
  name,
  zone,
  isCompleted = false,
  onInspect,
  className = '',
}) => {
  return (
    <div className={`rpg-quest-card ${className}`}>
      <div>
        <div className="rpg-quest-name">
          {isCompleted ? '✅ ' : '⏳ '}Quest: {name}
        </div>
        {zone && <div className="rpg-quest-zone">{zone}</div>}
      </div>
      {onInspect && (
        <button
          type="button"
          onClick={onInspect}
          className="rpg-parchment-btn"
          style={{ padding: '4px 10px', fontSize: '10px' }}
        >
          INSPECT
        </button>
      )}
    </div>
  );
};

/**
 * =========================================================================
 * 10. ACHIEVEMENT TOAST CARD
 * Pop-up reward notification with retro chiptune vibe
 * =========================================================================
 */
export const AchievementToast = ({
  icon = '⭐',
  message,
  className = '',
  style = {},
}) => {
  return (
    <div className={`rpg-toast-card ${className}`} style={style}>
      <span className="rpg-toast-icon">{icon}</span>
      <span>{message}</span>
    </div>
  );
};
