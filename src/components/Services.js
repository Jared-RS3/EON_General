import React, { useState } from 'react';
import { Icon, Reveal } from '../lib/motion';
import { asset } from '../data/company';

const services = [
  {
    icon: 'search',
    title: 'Custom Parts Sourcing',
    desc: "Can't find what you need? Our expert team specializes in locating custom or hard-to-find parts from our extensive network of suppliers.",
    points: ['Rare and obsolete parts', 'Specialized equipment components', 'International sourcing capabilities'],
    image: asset('site/service-sourcing.jpg'),
    alt: 'Long warehouse aisles stacked with stock'
  },
  {
    icon: 'boxes',
    title: 'Bulk Supply',
    desc: 'Competitive pricing and reliable delivery for large-scale operations. We support businesses with consistent bulk supply needs.',
    points: ['Fleet management support', 'Industrial operations', 'Volume discounts available'],
    image: asset('site/service-bulk.jpg'),
    alt: 'Distribution warehouse filled with boxed stock'
  },
  {
    icon: 'wrench',
    title: 'Engine & Radiator Refurbishment',
    desc: 'Complete overhaul and refurbishment services to extend the life of your equipment and reduce replacement costs.',
    points: ['Full engine rebuilds', 'Radiator repair and reconditioning', 'Performance optimization'],
    image: asset('site/service-refurbishment.jpg'),
    alt: 'Mechanic working in an engine bay'
  },
  {
    icon: 'shield',
    title: 'OEM & Aftermarket Parts',
    desc: 'Original manufacturer parts for a guaranteed fit, or quality third-party alternatives that offer excellent value while maintaining high standards.',
    points: ['Original equipment parts', 'Quality-checked alternatives', 'Advice on the right option'],
    image: asset('site/service-oem.jpg'),
    alt: 'Engine oil being poured during a service'
  }
];

function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="services section-muted">
      <div className="container services-grid">
        <div className="services-copy">
          <Reveal as="p" variant="fade" className="eyebrow">Services</Reveal>
          <Reveal as="h2" className="section-title" delay={80}>
            Support That Goes
            <br />
            Beyond the Part
          </Reveal>

          <Reveal as="ul" className="accordion" delay={160}>
            {services.map((service, i) => {
              const open = active === i;
              return (
                <li className={`accordion-item${open ? ' is-open' : ''}`} key={service.title}>
                  <button
                    type="button"
                    className="accordion-trigger"
                    aria-expanded={open}
                    aria-controls={`service-panel-${i}`}
                    id={`service-trigger-${i}`}
                    onClick={() => setActive(i)}
                  >
                    <Icon name={service.icon} size={22} />
                    <span>{service.title}</span>
                  </button>
                  <div
                    className="accordion-panel"
                    id={`service-panel-${i}`}
                    role="region"
                    aria-labelledby={`service-trigger-${i}`}
                  >
                    <div>
                      <p>{service.desc}</p>
                      <ul className="accordion-points">
                        {service.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              );
            })}
          </Reveal>
        </div>

        <Reveal className="services-media" variant="clip" delay={120}>
          {services.map((service, i) => (
            <img
              key={service.title}
              src={service.image}
              alt={service.alt}
              className={active === i ? 'is-active' : undefined}
              aria-hidden={active !== i}
              loading="lazy"
              decoding="async"
            />
          ))}
          <span className="services-media-count" aria-hidden="true">
            {String(active + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
          </span>
        </Reveal>
      </div>
    </section>
  );
}

export default Services;
