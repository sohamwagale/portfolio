import { personalInfo } from '../data/portfolioData'

export default function Navbar() {
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
            ['experience', '01 / Work'],
            ['projects',   '02 / Projects'],
            ['skills',     '03 / Skills'],
            ['education',  '04 / Education'],
            ['contact',    '05 / Contact'],
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

        <div className="nav-status">
          <span className="nav-dot" />
          {personalInfo.status.navText}
        </div>
      </div>
    </nav>
  )
}
