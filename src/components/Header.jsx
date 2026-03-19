import { useState, useEffect } from 'react'
import '../styles/Header.css'

export default function Header({ onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollOpacity, setScrollOpacity] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      // Calcula la opacidad basada en el scroll (0 a 1 en los primeros 400px)
      const opacity = Math.min(window.scrollY / 400, 1)
      setScrollOpacity(opacity)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleNavClick = (sectionId) => {
    onNavigate(sectionId)
    setMenuOpen(false)
  }

  return (
    <header className="header" style={{ backgroundColor: `rgba(0, 0, 0, ${scrollOpacity * 0.5})`, boxShadow: `0 2px 8px rgba(0, 0, 0, ${scrollOpacity * 0.1})` }}>
      <div className="header-container">
        <div className="nav-wrapper">
          <button className="menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav ${menuOpen ? 'active' : ''}`}>
          <button onClick={() => handleNavClick('home')}>HOME</button>
          <button onClick={() => handleNavClick('conocenos')}>CONOCENOS</button>
          <button onClick={() => handleNavClick('servicios')}>SERVICIOS</button>
          <button onClick={() => handleNavClick('contacto')}>CONTACTO</button>
        </nav>
        </div>
                <div className="logo">
          <img src="/la-felipa-web/assets/logo-la-felipa.png" alt="La Felipa Logo" />
        </div>

      </div>
    </header>
  )
}
