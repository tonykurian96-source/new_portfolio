import Divider from "./components/divider"
import AboutMe from "./components/home/about-me"
import Education from "./components/home/education"
import Certifications from "./components/home/certifications"
import Experience from "./components/home/experience"
import ContactInfo from "./components/home/contact"
import HeroSection from "./components/home/hero-section"
import Projects from "./components/home/projects"

const page = () => {
  return (
    <main>
      <HeroSection />
      <Divider />
      <AboutMe />
      <Divider />
      <Experience />
      <Divider />
      <Projects />
      <Divider />
      <Education />
      <Divider />
      <Certifications />
      <Divider />
      <ContactInfo />
      <Divider />
    </main>
  )
}

export default page