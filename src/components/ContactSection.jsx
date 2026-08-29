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
            <h2 className="sec-title" id="contact-title">
              Contact <span className="ghost">&amp; Reach</span>
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

            </div>
          </div>

          <div className="footer-bar">
            <span className="footer-copy">
              &copy; {new Date().getFullYear()} {personalInfo.name.first.charAt(0)}{personalInfo.name.first.slice(1).toLowerCase()} {personalInfo.name.last.charAt(0)}{personalInfo.name.last.slice(1).toLowerCase()} &middot; All rights reserved
            </span>
            <span className="footer-tech">Built with React + Vite</span>
          </div>
        </div>
      </section>
    </footer>
  )
}
