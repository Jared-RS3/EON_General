import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Contact Us</h2>
          <p>Get in touch with our team</p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <div>
                <h4>Phone</h4>
                <p>+27 (0)XX XXX XXXX</p>
                <p>+27 (0)XX XXX XXXX</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Email</h4>
                <p>info@eongeneralsupply.co.za</p>
                <p>sales@eongeneralsupply.co.za</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Address</h4>
                <p>Street Address</p>
                <p>City, Province, Postal Code</p>
                <p>South Africa</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-clock"></i>
              <div>
                <h4>Business Hours</h4>
                <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p>Saturday: 8:00 AM - 1:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
        <div className="map-container">
          <div id="map" className="map-placeholder">
            <i className="fas fa-map-marked-alt"></i>
            <p>Map integration placeholder</p>
            <small>Add your Google Maps embed code here</small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
