import React from 'react';

function Hero() {
  return (
    <section 
      id="home" 
      className="hero" 
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1596461200714-f5df04fdb157?q=80&w=2070&auto=format&fit=crop')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
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
