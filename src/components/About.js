import React from 'react';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>About Us</h2>
          <p>Building partnerships through quality and reliability</p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h3>Company Background</h3>
            <p>EON General Supply Company is a leading supplier of industrial and automotive parts in South Africa. We are committed to providing high-quality OEM and aftermarket parts to our clients across various industries.</p>
            
            <h3>Our Mission</h3>
            <p>To empower our suppliers and clients through reliable, quality products and exceptional service, building long-term partnerships that drive success.</p>
            
            <h3>Our Vision</h3>
            <p>To be the most trusted supplier in the industrial and automotive sectors, recognized for our commitment to quality, empowerment, and customer satisfaction.</p>
            
            <h3>Our Values</h3>
            <ul className="values-list">
              <li><i className="fas fa-check-circle"></i> Quality Assurance</li>
              <li><i className="fas fa-check-circle"></i> Supplier Empowerment</li>
              <li><i className="fas fa-check-circle"></i> Long-term Partnerships</li>
              <li><i className="fas fa-check-circle"></i> Industry Expertise</li>
            </ul>
          </div>
          <div className="about-certifications">
            <div className="cert-card">
              <i className="fas fa-certificate"></i>
              <h4>B-BBEE Level 1 Contributor</h4>
              <p>Certified excellence in transformation</p>
            </div>
            <div className="cert-card">
              <i className="fas fa-balance-scale"></i>
              <h4>100% Youth, Woman & Black Owned</h4>
              <p>Empowering South Africa's future</p>
            </div>
            <div className="cert-card">
              <i className="fas fa-shield-alt"></i>
              <h4>Quality Standards</h4>
              <p>Meeting international quality benchmarks</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
