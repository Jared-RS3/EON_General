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
                <p>+27 82 891 2818</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Email</h4>
                <p>eongeneral01@gmail.com</p>
                {/* <p>sales@eongeneralsupply.co.za</p> */}
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Address</h4>
                            <p>41 Fieldside Avenue, Centenary Park</p>
                            <p>Durban, KwaZulu-Natal</p>
                            <p>South Africa</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-clock"></i>
              <div>
                <h4>Business Hours</h4>
                <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p>Saturday: Closed</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
          <div className="contact-form-container">
            <div className="w-full h-full shadow-xl rounded-3xl overflow-hidden border border-gray-200">
              <iframe
                src="https://airtable.com/embed/appSsn0V2wB9xKbdq/pagvNVp0OUt4Thffr/form"
                frameBorder="0"
                width="100%"
                height="733"
                className="rounded-3xl"
                style={{
                  background: "transparent",
                  border: "none",
                }}
                title="Contact Form"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="map-container">
          <div id="map" className="map-placeholder">
            <iframe
              title="EON General Supply Company Location"
              src="https://maps.google.com/maps?q=41%20Fieldside%20Avenue%2C%20Centenary%20Park%2C%20Durban%2C%20KwaZulu-Natal%2C%20South%20Africa&z=15&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
