import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);

  const handleNavToggle = () => {
    setIsNavOpen((prev) => !prev);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const handleHomeClick = () => {
    window.scrollTo(0, 0);
    closeNav();
  };

  // Close nav on route change
  useEffect(() => {
    setIsNavOpen(false);
  }, [location]);

  // Lock body scroll and handle escape key / focus trap / screen resize
  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add('nav-open');
    } else {
      document.body.classList.remove('nav-open');
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isNavOpen) return;

      if (e.key === 'Escape') {
        setIsNavOpen(false);
        return;
      }

      // Focus trap within open mobile header
      if (e.key === 'Tab' && headerRef.current) {
        const focusables = headerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;

        const firstElement = focusables[0];
        const lastElement = focusables[focusables.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768 && isNavOpen) {
        setIsNavOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);

    return () => {
      document.body.classList.remove('nav-open');
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [isNavOpen]);

  return (
    <header className="site-header" ref={headerRef}>
      <nav className="nav" aria-label="Main navigation">
        <Link to="/" onClick={handleHomeClick} className="nav-logo" aria-label="Salaheddine Lafnouche — Home">
          <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="40" height="40" rx="12" fill="currentColor" fillOpacity="0.06"/>
            <path d="M26 13H17C14.7909 13 13 14.7909 13 17C13 19.2091 14.7909 21 17 21H23C25.2091 21 27 22.7909 27 25C27 27.2091 25.2091 29 23 29H13L27 29V23" 
                  stroke="var(--accent)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="28" cy="13" r="2.5" fill="var(--accent)"/>
          </svg>
        </Link>

        <ul className="nav-links" role="list" id="nav-links">
          <li>
            <NavLink to="/" onClick={handleHomeClick} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" onClick={closeNav} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeNav} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeNav} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume" onClick={closeNav} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Resume
            </NavLink>
          </li>
        </ul>

        <div className="nav-actions">
          <button 
            className="theme-toggle" 
            onClick={(e) => toggleTheme(e)}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'} 
            title={theme === 'dark' ? 'Switch to light mode (T)' : 'Switch to dark mode (T)'}
          >
            <svg className="icon-sun" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
            <svg className="icon-moon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>

          <button 
            className="hamburger" 
            onClick={handleNavToggle}
            aria-label={isNavOpen ? 'Close menu' : 'Open menu'} 
            aria-expanded={isNavOpen} 
            aria-controls="nav-links"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </nav>
      <div className="nav-backdrop" onClick={closeNav} aria-hidden="true" />
    </header>
  );
};

