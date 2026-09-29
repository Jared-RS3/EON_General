import React, { useRef } from 'react';
import { Icon, Reveal, useSpotlight } from '../lib/motion';
import { asset, company } from '../data/company';

const topics = ['Engine Components', 'Filters & Fluids', 'Electrical', 'Cooling', 'Brakes', 'Custom Sourcing', 'Bulk Supply', 'Refurbishment'];

function Contact() {
  const sectionRef = useRef(null);
  useSpotlight(sectionRef, '.contact-map');

  const details = [
    {
      icon: 'phone',
      label: 'Phone / WhatsApp',
      lines: [
        <a href={company.phoneHref} key="tel">{company.phoneDisplay}</a>,
        <a href={company.whatsappHref} target="_blank" rel="noopener noreferrer" key="wa">Message us on WhatsApp</a>
      ]
    },
    {
      icon: 'mail',
      label: 'Email',
      lines: [<a href={`mailto:${company.email}`} key="mail">{company.email}</a>]
    },
    { icon: 'pin', label: 'Address', lines: company.addressLines },
    { icon: 'clock', label: 'Business Hours', lines: company.hours }
  ];

  return (
    <section id="contact" className="contact" data-theme="dark" ref={sectionRef}>
      <div className="contact-bg" aria-hidden="true">
        <img src={asset('site/contact-bg.jpg')} alt="" loading="lazy" decoding="async" />
      </div>
      <div className="contact-shade" aria-hidden="true"></div>

      <div className="container contact-grid">
        <div className="contact-copy">
          <div>
            <Reveal as="p" variant="fade" className="eyebrow eyebrow-light">Get in Touch</Reveal>
            <Reveal as="h2" className="section-title contact-title" delay={80}>
              Discuss your parts
              <br />
              &amp; supply needs.
            </Reveal>
          </div>

          <div>
            <Reveal as="p" className="contact-intro" delay={60}>
              Tell us what you need and our team will source the right part, at the right price, delivered
              when you need it.
            </Reveal>

            <Reveal as="dl" className="contact-details" delay={120}>
              {details.map((item) => (
                <div className="contact-detail" key={item.label}>
                  <dt>
                    <Icon name={item.icon} size={16} />
                    {item.label}
                  </dt>
                  {item.lines.map((line, i) => (
                    <dd key={i}>{line}</dd>
                  ))}
                </div>
              ))}
            </Reveal>

            <Reveal as="ul" className="contact-topics" variant="fade" delay={180}>
              {topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </Reveal>
          </div>
        </div>

        <Reveal className="contact-form-card" delay={140}>
          <iframe
            src="https://airtable.com/embed/appSsn0V2wB9xKbdq/pagvNVp0OUt4Thffr/form"
            title="Request a quote"
            width="100%"
            height="733"
            loading="lazy"
          ></iframe>
        </Reveal>
      </div>

      <div className="container">
        <Reveal className="contact-map" variant="clip">
          <iframe
            title="EON General Supply Company location"
            src="https://maps.google.com/maps?q=41%20Fieldside%20Avenue%2C%20Centenary%20Park%2C%20Durban%2C%20KwaZulu-Natal%2C%20South%20Africa&z=15&output=embed"
            width="100%"
            height="380"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
