import React from 'react';

function WhyChooseUs() {
  const features = [
    {
      icon: 'award',
      title: 'Quality Assurance',
      desc: 'Every product undergoes rigorous quality control. We only supply parts that meet or exceed industry standards, ensuring your equipment runs reliably.'
    },
    {
      icon: 'hands-helping',
      title: 'Empowering Suppliers',
      desc: 'As a B-BBEE Level 1 contributor and 100% youth, woman, and black-owned company, we\'re committed to economic transformation and supplier empowerment.'
    },
    {
      icon: 'handshake',
      title: 'Long-Term Partnerships',
      desc: 'We focus on building lasting relationships with our clients, understanding your needs, and growing together through mutual support and trust.'
    },
    {
      icon: 'user-tie',
      title: 'Industry Specialists',
      desc: 'Our team brings deep expertise in industrial and automotive sectors, providing expert advice and solutions tailored to your specific requirements.'
    }
  ];

  return (
    <section id="why-choose" className="why-choose">
      <div className="container">
        <div className="section-header">
          <h2>Why Choose Us</h2>
          <p>Your partner for excellence and reliability</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">
                <i className={`fas fa-${feature.icon}`}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
