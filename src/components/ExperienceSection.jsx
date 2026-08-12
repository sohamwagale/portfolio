import { useEffect, useRef } from 'react'
import { experiences } from '../data/portfolioData'

export default function ExperienceSection() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('in'), i * 60)
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
    <section className="section" id="experience" ref={ref} aria-labelledby="exp-title">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-num">01</div>
          <h2 className="sec-title" id="exp-title">
            WORK <span className="ghost">EXP.</span>
          </h2>
        </div>

        <div className="exp-table">
          {experiences.map((exp, i) => (
            <div className="exp-row reveal" key={i}>
              <div className="exp-time">
                <div className="exp-time-range">
                  {exp.range[0]}<br />{exp.range[1]}
                </div>
                <div className="exp-time-fig label">{exp.fig}</div>
              </div>
              <div className="exp-body">
                <div className="exp-role">{exp.role}</div>
                <div className="exp-org label">{exp.org}</div>
                <ul className="exp-bullets">
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
