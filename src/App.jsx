import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Conocenos from './components/Conocenos'
import Servicios from './components/Servicios'
import Footer from './components/Footer'
import './styles/App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
console.log('force deploy')
  return (
    <div className="App">
      <Header onNavigate={scrollToSection} />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="conocenos">
          <Conocenos />
        </section>
        <section id="servicios">
          <Servicios />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
