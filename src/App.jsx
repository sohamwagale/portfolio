import './index.css'
import RegistrationMarks from './components/RegistrationMarks'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import EducationSection from './components/EducationSection'
import ContactSection from './components/ContactSection'

function App() {
  return (
    <>
      <RegistrationMarks />
      <Navbar />
      <main>
        <Hero />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
      </main>
      <ContactSection />
    </>
  )
}

export default App
