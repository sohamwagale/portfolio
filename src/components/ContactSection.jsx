import { useEffect, useRef } from 'react'
import { personalInfo, education } from '../data/portfolioData'

export default function ContactSection() {
  const ref = useRef(null)

  const links = [
    { type: 'MAIL', label: personalInfo.contact.email, href: `mailto:${personalInfo.contact.email}` },
    { type: 'TEL',  label: personalInfo.contact.phone, href: `tel:${personalInfo.contact.phone}` },
    { type: 'LI',   label: personalInfo.contact.displayLinkedin, href: personalInfo.contact.linkedin },
    { type: 'GH',   label: personalInfo.contact.displayGithub, href: personalInfo.contact.github },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('in'), i * 70)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <footer ref={ref}>
      <section className="contact-sec" id="contact" aria-labelledby="contact-title">
        <div className="wrap">
          <div className="sec-head">
            <div className="sec-num">05</div>
            <h2 className="sec-title" id="contact-title">
              CONTACT <span className="ghost">& REACH</span>
            </h2>
          </div>

          <div className="contact-grid">
            {/* Left: headline */}
            <div className="contact-left reveal">
              <div className="contact-headline">
                LET'S<br />
                BUILD<br />
                <span className="ghost">SOMETHING.</span>
              </div>

              <div className="contact-avail">
                <span className="avail-dot" />
                {personalInfo.status.text}
              </div>

              <div
                style={{
                  marginTop: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                }}
              >
                {[
                  personalInfo.location.coords,
                  `${personalInfo.location.city.toUpperCase()} · ${personalInfo.location.state.toUpperCase()} · ${personalInfo.location.country.toUpperCase()}`,
                  personalInfo.location.timezone,
                ].map((t) => (
                  <span key={t} className="label" style={{ color: 'var(--dim)' }}>{t}</span>
                ))}
              </div>
            </div>

            {/* Right: contact links */}
            <div className="contact-right reveal reveal-delay-2">
              <div className="label" style={{ marginBottom: '8px' }}>Direct contact</div>

              <div className="contact-links-list">
                {links.map((link) => (
                  <a
                    key={link.type}
                    href={link.href}
                    className="contact-link-row"
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    id={`contact-${link.type.toLowerCase()}`}
                  >
                    <span className="contact-link-icon">{link.type}</span>
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Technical notation block */}
              <div
                style={{
                  marginTop: '28px',
                  padding: '16px',
                  border: '1px solid var(--rule)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}
              >
                {[
                  ['DOC', personalInfo.documentMeta.docCode.split(' ◆ ')[1] || 'SW-PORTFOLIO-2026'],
                  ['REV', '02'],
                  ['LANG', education.languages.map(l => l.lang.substring(0,2).toUpperCase()).join(' / ')],
                  ['INTEREST', education.interests.slice(0, 2).map(i => i.toUpperCase()).join(' · ')],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '9.5px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                    }}
                  >
                    <span style={{ color: 'var(--dim)' }}>{k}</span>
                    <span style={{ color: 'var(--muted)' }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="footer-bar">
            <span className="footer-copy">
              © {new Date().getFullYear()} {personalInfo.name.first} {personalInfo.name.last} · ALL RIGHTS RESERVED · {personalInfo.documentMeta.navDocCode}
            </span>
            <span className="footer-tech">REACT + VITE / BEBAS NEUE + IBM PLEX MONO</span>
          </div>
        </div>
      </section>
    </footer>
  )
}
