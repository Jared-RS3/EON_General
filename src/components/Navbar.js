import React, { useEffect, useRef, useState } from 'react';
import { Icon, RollText, useScrollFrame } from '../lib/motion';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#brands', label: 'Brands' },
  { href: '#products', label: 'Products' },
  { href: '#services', label: 'Services' },
  { href: '#industries', label: 'Industries' }
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  // The nav sits over both photo-backed dark sections and light sections, so
  // it takes the theme of whichever section is currently underneath it.
  const updateTheme = () => {
    const nav = navRef.current;
    if (!nav) return;

    const probe = nav.offsetHeight / 2;
    let next = 'light';
    document.querySelectorAll('[data-theme="dark"]').forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= probe && rect.bottom >= probe) next = 'dark';
    });

    setTheme((current) => (current === next ? current : next));
    const isScrolled = window.scrollY > 8;
    setScrolled((current) => (current === isScrolled ? current : isScrolled));
  };

  useScrollFrame(updateTheme);

  // Runs even with reduced motion, and again after route changes.
  useEffect(() => {
    updateTheme();
    const onHash = () => window.requestAnimationFrame(updateTheme);
    window.addEventListener('hashchange', onHash);
    window.addEventListener('popstate', onHash);
    return () => {
      window.removeEventListener('hashchange', onHash);
      window.removeEventListener('popstate', onHash);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', isOpen);
    const onKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.classList.remove('menu-open');
    };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <>
      <nav
        ref={navRef}
        className={`navbar navbar-${isOpen ? 'dark' : theme}${scrolled ? ' is-scrolled' : ''}`}
        aria-label="Main"
      >
        <div className="nav-inner">
          <a href="#home" className="nav-logo" onClick={close} aria-label="EON General Supply Company, home">
            <span className="nav-logo-mark">EON</span>
            <span className="nav-logo-sub">General Supply Co.</span>
          </a>

          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link">
                  <RollText>{link.label}</RollText>
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="btn nav-cta">
            <RollText>Get a Quote</RollText>
          </a>

          <button
            type="button"
            className="nav-toggle"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsOpen((open) => !open)}
          >
            <Icon name={isOpen ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </nav>

      <div id="mobile-menu" className={`mobile-menu${isOpen ? ' is-open' : ''}`} aria-hidden={!isOpen}>
        <ul>
          {[...links, { href: '#contact', label: 'Contact' }].map((link, i) => (
            <li key={link.href} style={{ '--i': i }}>
              <a href={link.href} onClick={close} tabIndex={isOpen ? 0 : -1}>
                <span className="mobile-menu-index">{String(i + 1).padStart(2, '0')}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="btn btn-accent mobile-menu-cta" onClick={close} tabIndex={isOpen ? 0 : -1}>
          <RollText>Request a Quote</RollText>
        </a>
      </div>
    </>
  );
}

export default Navbar;
