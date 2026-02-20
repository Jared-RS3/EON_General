import React, { useEffect, useState } from 'react';
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

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    const loadTimer = window.setTimeout(() => {
      setIsPageLoading(false);
    }, 900);

    return () => window.clearTimeout(loadTimer);
  }, []);

  useEffect(() => {
    const anchorElements = Array.from(document.querySelectorAll('a[href^="#"]'));
    const handleAnchorClick = function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
          const navHeight = document.querySelector('.navbar').offsetHeight;
          const targetPosition = target.offsetTop - navHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
    };

    anchorElements.forEach((anchor) => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let observer;

    if (!reduceMotion) {
      const revealTargets = document.querySelectorAll(
        'section:not(#home), .product-card, .service-card, .industry-card, .feature-card, .brand-category, .info-item, .cert-card, .map-container'
      );

      revealTargets.forEach((element, index) => {
        element.classList.add('reveal-on-scroll');
        element.style.setProperty('--reveal-delay', `${(index % 6) * 70}ms`);
      });

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.15,
          rootMargin: '0px 0px -8% 0px'
        }
      );

      revealTargets.forEach((element) => observer.observe(element));
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      anchorElements.forEach((anchor) => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

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
      <Hero />
      <About />
      <Products />
      <Services />
      <Industries />
      <Brands />
      <WhyChooseUs />
      <Contact />
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
