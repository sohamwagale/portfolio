import { personalInfo } from '../data/portfolioData'

export default function RegistrationMarks() {
  const now = new Date()
  const dateCode = `${now.getFullYear()}.${String(now.getMonth()+1).padStart(2,'0')}.${String(now.getDate()).padStart(2,'0')}`

  return (
    <>
      <div className="reg-marks" aria-hidden="true">
        <div className="reg-mark tl" />
        <div className="reg-mark tr" />
        <div className="reg-mark bl" />
        <div className="reg-mark br" />
      </div>
      <div className="doc-code" aria-hidden="true">
        {personalInfo.documentMeta.docCode} ◆ {dateCode} ◆ {personalInfo.location.city.toUpperCase()}/IND ◆ © {personalInfo.name.first} {personalInfo.name.last}
      </div>
    </>
  )
}
