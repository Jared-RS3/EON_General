import React from 'react';

function Industries() {
  return (
    <section id="industries" className="industries">
      <div className="container">
        <div className="section-header">
          <h2>Industries We Serve</h2>
          <p>Specialized expertise across key sectors</p>
        </div>
        <div className="industries-content">
          <div className="industry-card">
            <div className="industry-image">
              <i className="fas fa-industry"></i>
            </div>
            <h3>Industrial</h3>
            <p>We supply essential parts and components for:</p>
            <ul>
              <li>Heavy machinery and equipment</li>
              <li>Construction equipment</li>
              <li>Mining operations</li>
              <li>Manufacturing facilities</li>
              <li>Agricultural equipment</li>
              <li>Material handling equipment</li>
            </ul>
          </div>
          <div className="industry-card">
            <div className="industry-image">
              <i className="fas fa-truck"></i>
            </div>
            <h3>Automotive</h3>
            <p>Comprehensive automotive solutions for:</p>
            <ul>
              <li>Commercial vehicle fleets</li>
              <li>Trucks and trailers</li>
              <li>Buses and coaches</li>
              <li>Light commercial vehicles</li>
              <li>Passenger vehicles</li>
              <li>Workshop and garage support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Industries;
