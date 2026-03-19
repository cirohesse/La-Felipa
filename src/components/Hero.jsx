import '../styles/Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <img 
        src="/la-felipa-web/assets/hero.jpg" 
        alt="La Felipa - Cabañas en La Cumbrecita"
        className="hero-image"
      />
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h2>La Felipa</h2>
        <p className="hero-subtitle">Tu lugar en La Cumbrecita</p>
      </div>
    </section>
  )
}
