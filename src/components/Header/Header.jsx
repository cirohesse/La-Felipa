import { useState, useEffect } from 'react';
import classNames from 'classnames';
import { MenuToggle } from '../MenuToggle';
import classes from './Header.module.css';

export const Header = ({ onNavigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calcula la opacidad basada en el scroll (0 a 1 en los primeros 400px)
      const opacity = Math.min(window.scrollY / 400, 1);
      setScrollOpacity(opacity);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavClick = (sectionId) => {
    onNavigate(sectionId);
    setMenuOpen(false);
  };

  return (
    <header
      className={classes.header}
      style={{
        backgroundColor: `rgba(0, 0, 0, ${scrollOpacity * 0.5})`,
        boxShadow: `0 2px 8px rgba(0, 0, 0, ${scrollOpacity * 0.1})`,
      }}
    >
      <div className={classes.headerContainer}>
        <div className={classes.navWrapper}>
          <MenuToggle menuOpen={menuOpen} toggleMenu={toggleMenu} />

          <nav
            className={classNames(classes.nav, {
              [classes.navActive]: menuOpen,
            })}
          >
            <div className={classes.closeNavButtonWrapperMobile}>
              <MenuToggle menuOpen={menuOpen} toggleMenu={toggleMenu} />
            </div>
            <button className={classes.navButton} onClick={() => handleNavClick('home')}>
              HOME
            </button>
            <button className={classes.navButton} onClick={() => handleNavClick('conocenos')}>
              CONOCENOS
            </button>
            <button className={classes.navButton} onClick={() => handleNavClick('servicios')}>
              SERVICIOS
            </button>
            <button className={classes.navButton} onClick={() => handleNavClick('galeria')}>
              GALERÍA
            </button>
            <button className={classes.navButton} onClick={() => handleNavClick('tarifas')}>
              TARIFAS
            </button>
            <button className={classes.navButton} onClick={() => handleNavClick('contacto')}>
              CONTACTO
            </button>
          </nav>
        </div>
        <button className={classes.logo} onClick={() => handleNavClick('home')} aria-label="Home">
          <img src="/La-Felipa/assets/logo-la-felipa.png" alt="La Felipa Logo" />
        </button>
      </div>
    </header>
  );
};
