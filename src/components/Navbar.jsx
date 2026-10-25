import { personalInfo } from '../data/portfolioData'

export default function Navbar({ onToggleTheme }) {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <nav className="nav" role="navigation" aria-label="Main navigation">
      <div className="nav-inner">
        <div className="nav-id">
          <span className="nav-logo">{personalInfo.name.first[0]}{personalInfo.name.last[0]}</span>
          <span className="nav-doc label">{personalInfo.documentMeta.navDocCode}</span>
        </div>

        <ul className="nav-links" role="list">
          {[
            ['experience', 'Work'],
            ['projects',   'Projects'],
            ['skills',     'Skills'],
            ['education',  'Education'],
            ['contact',    'Contact'],
          ].map(([id, label]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => { e.preventDefault(); scrollTo(id) }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-right-cluster">
          <div className="nav-status">
            <span className="nav-dot" />
            {personalInfo.status.navText}
          </div>

          <button
            type="button"
            className="theme-switch-pill"
            onClick={onToggleTheme}
            aria-label="Switch to Retro RPG Gamified Theme"
            title="Switch to Retro RPG Gamified Theme"
          >
            <span className="theme-switch-icon">🎮</span>
            <span className="theme-switch-text">RPG Mode</span>
          </button>
        </div>
      </div>
    </nav>
  )
}
