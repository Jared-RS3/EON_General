import React, { useCallback, useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Services from './components/Services';
import Industries from './components/Industries';
import Brands from './components/Brands';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';

// Routes are hash-based so the site keeps working as a static build with no
// server rewrites. Section anchors stay plain ("#about"); page routes are
// prefixed with a slash ("#/privacy") so the two never collide.
function getRoute() {
  return window.location.hash.startsWith('#/privacy') ? 'privacy' : 'home';
}

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [route, setRoute] = useState(getRoute);
  const pendingScrollRef = useRef(null);

  useEffect(() => {
    const loadTimer = window.setTimeout(() => {
      setIsPageLoading(false);
    }, 900);

    return () => window.clearTimeout(loadTimer);
  }, []);

  const scrollToTarget = useCallback((target) => {
    const navbar = document.querySelector('.navbar');
    const navHeight = navbar ? navbar.offsetHeight : 0;

    window.scrollTo({
      top: target.offsetTop - navHeight,
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
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
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

  useEffect(() => {
    if (route !== 'home') return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return undefined;

    const revealTargets = document.querySelectorAll(
      'section:not(#home), .product-card, .service-card, .industry-card, .feature-card, .brand-category, .info-item, .cert-card, .map-container'
    );

    revealTargets.forEach((element, index) => {
      element.classList.add('reveal-on-scroll');
      element.style.setProperty('--reveal-delay', `${(index % 4) * 30}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px 12% 0px'
      }
    );

    revealTargets.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [route]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="App">
      {isPageLoading && (
        <div className="page-loader" role="status" aria-live="polite" aria-label="Loading website">
          <div className="page-loader-mark">
            <span className="page-loader-ring" aria-hidden="true"></span>
            <span className="page-loader-text">EON</span>
          </div>
        </div>
      )}

      <Navbar />

      {route === 'privacy' ? (
        <PrivacyPolicy />
      ) : (
        <>
          <Hero />
          <About />
          <Products />
          <Services />
          <Industries />
          <Brands />
          <WhyChooseUs />
          <Contact />
        </>
      )}

      <Footer />

      {showScrollTop && (
        <button 
          className="scroll-to-top" 
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'var(--secondary-color)',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            zIndex: 999,
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
}

export default App;
