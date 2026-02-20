import React, { useState } from 'react';

function Hero() {
  const assetBase = process.env.PUBLIC_URL || '';
  const cacheBuster = 'v=20260220';
  const heroImageSources = [
    `${assetBase}/assets/images/merc.avif?${cacheBuster}`,
    `${assetBase}/assets/images/merces.jpeg?${cacheBuster}`,
    `${assetBase}/assets/images/hero-truck.jpg?${cacheBuster}`
  ];
  const [heroImageIndex, setHeroImageIndex] = useState(0);

  const handleHeroImageError = () => {
    setHeroImageIndex((currentIndex) => {
      if (currentIndex >= heroImageSources.length - 1) {
        return currentIndex;
      }

      return currentIndex + 1;
    });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <img
          src={heroImageSources[heroImageIndex]}
          alt=""
          loading="eager"
          fetchPriority="high"
          decoding="async"
          onError={heroImageIndex < heroImageSources.length - 1 ? handleHeroImageError : undefined}
        />
      </div>
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Quality Parts, Reliable Service</h1>
          <p className="hero-subtitle">Your trusted partner for industrial and automotive supply solutions across South Africa</p>
          <div className="hero-stats">
            <div className="stat-item">
              <i className="fas fa-award"></i>
              <h3>B-BBEE Level 1</h3>
              <p>Contributor</p>
            </div>
            <div className="stat-item">
              <i className="fas fa-users"></i>
              <h3>100% Owned</h3>
              <p>Youth, Woman & Black</p>
            </div>
            <div className="stat-item">
              <i className="fas fa-truck"></i>
              <h3>Comprehensive</h3>
              <p>Supply Solutions</p>
            </div>
          </div>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">Request a Quote</a>
            <a href="#about" className="btn btn-secondary">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
