import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>EON General Supply Co.</h3>
            <p>Your trusted partner for quality industrial and automotive parts supply in South Africa.</p>
            <div className="certifications-footer">
              <p><i className="fas fa-certificate"></i> B-BBEE Level 1 Contributor</p>
              <p><i className="fas fa-users"></i> 100% Youth, Woman & Black Owned</p>
            </div>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#brands">Brands</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Custom Parts Sourcing</a></li>
              <li><a href="#services">Bulk Supply</a></li>
              <li><a href="#services">Engine Refurbishment</a></li>
              <li><a href="#contact">Request a Quote</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li><i className="fas fa-phone"></i> +27 (0)XX XXX XXXX</li>
              <li><i className="fas fa-envelope"></i> info@eongeneralsupply.co.za</li>
              <li><i className="fas fa-map-marker-alt"></i> South Africa</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 EON General Supply Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
