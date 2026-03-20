import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className="footer" id="contacto">
      <div className="footer-container">
        <div className="footer-logo">
          <img 
            src="/assets/logo-lf-simplificado.png" 
            alt="La Felipa Logo"
          />
        </div>

        <div className="footer-contact">
          <h3>Contacto</h3>
          <p>
            <strong>Teléfono:</strong> +54 11 5881-0770
          </p>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:cabanaslafelipa@gmail.com">
              cabanaslafelipa@gmail.com
            </a>
          </p>
        </div>

        <div className="footer-social">
          <h3>Seguinos</h3>
          <div className="social-icons">
            <a 
              href="https://instagram.com/cabanaslafelipa" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.646.069 4.85 0 3.204-.012 3.584-.07 4.85-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.015-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162 0 3.403 2.759 6.162 6.162 6.162 3.403 0 6.162-2.759 6.162-6.162 0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z"/>
                <circle cx="18.406" cy="5.594" r="1.44"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2026 La Felipa | Powered by La Felipa</p>
      </div>
    </footer>
  )
}
