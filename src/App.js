import React, { useCallback, useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Services from './components/Services';
import Mission from './components/Mission';
import Industries from './components/Industries';
import Brands from './components/Brands';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import { Icon } from './lib/motion';

// Routes are hash-based so the site keeps working as a static build with no
// server rewrites. Section anchors stay plain ("#about"); page routes are
// prefixed with a slash ("#/privacy") so the two never collide.
function getRoute() {
  return window.location.hash.startsWith('#/privacy') ? 'privacy' : 'home';
}

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [route, setRoute] = useState(getRoute);
  const pendingScrollRef = useRef(null);

  const scrollToTarget = useCallback((target) => {
    const navbar = document.querySelector('.navbar');
    const navHeight = navbar ? navbar.offsetHeight : 0;
    // Home-page sections have generous top padding, so the transparent nav can
    // sit over it; anything else (e.g. policy headings) clears the nav.
    const isPageSection = target.parentElement && target.parentElement.tagName === 'MAIN';
    const top = target.getBoundingClientRect().top + window.pageYOffset - (isPageSection ? 0 : navHeight);

    window.scrollTo({
      top: Math.max(0, top),
      behavior: 'smooth'
    });
  }, []);

  useEffect(() => {
    const handleHashChange = () => setRoute(getRoute());

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Delegated so it also covers links rendered after a route change.
  useEffect(() => {
    const handleAnchorClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;

      const anchor = e.target.closest ? e.target.closest('a[href^="#"]') : null;
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || href === '#') {
        e.preventDefault();
        return;
      }

      // "#/..." is a page route; let the hashchange listener handle it.
      if (href.startsWith('#/')) return;

      let target = null;
      try {
        target = document.querySelector(href);
      } catch (err) {
        return;
      }

      e.preventDefault();

      if (target) {
        scrollToTarget(target);
        return;
      }

      // The section lives on the home page, so go there first and scroll once
      // it has rendered.
      pendingScrollRef.current = href;
      window.history.pushState(null, '', window.location.pathname + window.location.search);
      setRoute('home');
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [scrollToTarget]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 900);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const pending = pendingScrollRef.current;
    pendingScrollRef.current = null;

    if (route !== 'home') {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    if (!pending) return;

    const frame = window.requestAnimationFrame(() => {
      const target = document.querySelector(pending);
      if (target) scrollToTarget(target);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [route, scrollToTarget]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="App">
      <Navbar />

      {route === 'privacy' ? (
        <PrivacyPolicy />
      ) : (
        <main>
          <Hero />
          <About />
          <Brands />
          <Products />
          <Services />
          <Mission />
          <Industries />
          <WhyChooseUs />
          <Contact />
        </main>
      )}

      <Footer />

      <button
        type="button"
        className={`scroll-top${showScrollTop ? ' is-visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
        tabIndex={showScrollTop ? 0 : -1}
      >
        <Icon name="arrowUp" size={18} />
      </button>
    </div>
  );
}

export default App;
