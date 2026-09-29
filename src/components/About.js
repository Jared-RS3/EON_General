import React from 'react';
import { Odometer, Reveal, WordReveal } from '../lib/motion';

const stats = [
  { value: 10, suffix: '+', label: 'Years Team Experience' },
  { value: 17, suffix: '+', label: 'Brands Supported' },
  { value: 100, suffix: '%', label: 'Youth, Woman & Black Owned' },
  { value: 1, prefix: 'Level ', label: 'B-BBEE Contributor' }
];

const intro =
  'EON General Supply Company is a 100% youth, woman and black-owned supplier of industrial and automotive parts. ' +
  'We deliver quality OEM and aftermarket parts to fleets, mines, ports and construction sites across South Africa, ' +
  'building long-term partnerships through reliable supply and exceptional service.';

function About() {
  return (
    <section id="about" className="about section-muted">
      <div className="container">
        <div className="about-rule" aria-hidden="true"></div>
        <Reveal as="p" variant="fade" className="eyebrow">About Us</Reveal>

        <WordReveal as="p" className="about-lede" text={intro} />

        <div className="stats">
          {stats.map((stat, i) => (
            <Reveal className="stat" delay={i * 90} key={stat.label}>
              <div className="stat-value">
                <Odometer value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <p className="stat-label">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
