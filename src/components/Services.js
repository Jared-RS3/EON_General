import React from 'react';

function Services() {
  const services = [
    {
      icon: 'search',
      title: 'Custom Parts Sourcing',
      desc: "Can't find what you need? Our expert team specializes in locating custom or hard-to-find parts from our extensive network of suppliers.",
      points: ['Rare and obsolete parts', 'Specialized equipment components', 'International sourcing capabilities']
    },
    {
      icon: 'boxes',
      title: 'Bulk Supply',
      desc: 'Competitive pricing and reliable delivery for large-scale operations. We support businesses with consistent bulk supply needs.',
      points: ['Fleet management support', 'Industrial operations', 'Volume discounts available']
    },
    {
      icon: 'wrench',
      title: 'Engine & Radiator Refurbishment',
      desc: 'Complete overhaul and refurbishment services to extend the life of your equipment and reduce replacement costs.',
      points: ['Full engine rebuilds', 'Radiator repair and reconditioning', 'Performance optimization']
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Comprehensive solutions beyond parts supply</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                <i className={`fas fa-${service.icon}`}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <ul>
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
