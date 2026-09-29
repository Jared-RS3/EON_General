import React from 'react';
import { Reveal } from '../lib/motion';
import { asset } from '../data/company';

const features = [
  {
    tag: 'Quality',
    title: 'Quality Assurance',
    desc: 'Every product undergoes rigorous quality control. We only supply parts that meet or exceed industry standards, ensuring your equipment runs reliably.',
    image: asset('site/why-quality.jpg')
  },
  {
    tag: 'B-BBEE Level 1',
    title: 'Empowering Suppliers',
    desc: "As a B-BBEE Level 1 contributor and 100% youth, woman, and black-owned company, we're committed to economic transformation and supplier empowerment.",
    image: asset('site/why-empowerment.jpg')
  },
  {
    tag: 'Partnership',
    title: 'Long-Term Partnerships',
    desc: 'We focus on building lasting relationships with our clients, understanding your needs, and growing together through mutual support and trust.',
    image: asset('site/why-partnership.jpg')
  }
];

function WhyChooseUs() {
  return (
    <section id="why-choose" className="why">
      <div className="container">
        <header className="section-head section-head-center">
          <Reveal as="p" variant="fade" className="eyebrow">Why Choose Us</Reveal>
          <Reveal as="h2" className="section-title" delay={80}>
            Quality, Empowerment &amp;
            <br />
            Partnerships That Last.
          </Reveal>
        </header>

        <div className="why-grid">
          {features.map((feature, i) => (
            <Reveal as="article" className="why-card" delay={i * 110} key={feature.title}>
              <div className="why-media">
                <img src={feature.image} alt="" loading="lazy" decoding="async" />
                <span className="media-chip">{feature.tag}</span>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
