import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import About from "./Components/About"
import Experience from './Components/Experience'
import Skills from "./Components/Skills"
import Educations from "./Components/Educations"
import Footer from "./Components/Footer"
import Projects from "./Components/Projects"
import Moto from "./Components/Moto"

const App = () => {
  return (
    <div className="overflow-x-hidden antialiased bg-neutral-50 text-neutral-800">
      {/* Content wrapper with glass effect */}
      <div className="relative min-h-screen">
        {/* Main content */}
        <div className="container relative px-8 mx-auto">
          {/* <Navbar /> */}
            <Moto />
          <main className="relative space-y-2 md:space-y-2">
            <div id="contactme" >
              <Hero />
            </div>
            <div id="about">
              <About />
            </div>
            <div id="skills">
              <Skills />
            </div>
            <div id="projects">
              <Projects />
            </div>
            <div id="experience">
              <Experience />
            </div>
            <div id="educations" >
              <Educations />
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App