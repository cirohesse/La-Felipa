import classes from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={classes.footer} id="contacto">
      <div className={classes.footerContainer}>
        <div className={classes.footerLogo}>
          <img src="/La-Felipa/assets/logo-lf-simplificado.png" alt="La Felipa Logo" />
        </div>

        <div className={classes.footerContact}>
          <h3>Contacto</h3>
          <p>
            <svg
              className={classes.contactIcon}
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M19.11 4.93A9.77 9.77 0 0 0 12.16 2C6.67 2 2.21 6.47 2.21 11.95c0 1.76.46 3.48 1.33 5L2 22l5.19-1.5a9.9 9.9 0 0 0 4.76 1.22h.01c5.49 0 9.95-4.47 9.95-9.95a9.86 9.86 0 0 0-2.8-6.84zM12 20.04h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.08.89.91-3-.2-.31a8.19 8.19 0 0 1-1.25-4.35c0-4.53 3.69-8.22 8.23-8.22 2.2 0 4.27.85 5.83 2.41a8.15 8.15 0 0 1 2.4 5.81c0 4.53-3.69 8.22-8.22 8.22zm4.51-6.16c-.25-.13-1.47-.73-1.7-.81-.23-.08-.39-.13-.56.12-.16.24-.63.81-.78.98-.14.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.25-.74-.66-1.24-1.48-1.38-1.72-.14-.24-.01-.36.11-.49.11-.11.25-.29.37-.43.12-.14.16-.24.25-.41.08-.16.04-.31-.02-.43-.06-.13-.56-1.35-.76-1.84-.2-.49-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.23.25-.86.84-.86 2.04s.88 2.36 1 2.52c.12.16 1.73 2.64 4.19 3.71.59.26 1.05.41 1.41.53.59.19 1.12.16 1.54.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.17-.06-.1-.22-.16-.47-.29z" />
            </svg>
            <strong>Teléfono:</strong> +54 11 5881-0770
          </p>
          <p>
            <svg
              className={classes.contactIcon}
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            <strong>Email:</strong>{' '}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=lafelipa.cba@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              lafelipa.cba@gmail.com
            </a>
          </p>
        </div>

        <div className={classes.footerSocial}>
          <h3>Seguinos</h3>
          <div className={classes.socialIcons}>
            <a
              href="https://instagram.com/lafelipa.ok"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.646.069 4.85 0 3.204-.012 3.584-.07 4.85-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.015-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162 0 3.403 2.759 6.162 6.162 6.162 3.403 0 6.162-2.759 6.162-6.162 0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z" />
                <circle cx="18.406" cy="5.594" r="1.44" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className={classes.footerBottom}>
        <p>Copyright © 2026 La Felipa | Powered by La Felipa</p>
      </div>
    </footer>
  );
};
