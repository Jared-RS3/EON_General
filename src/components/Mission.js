import React, { useRef } from 'react';
import { Reveal, WordReveal, useScrollFrame, useSpotlight } from '../lib/motion';
import { asset } from '../data/company';

const mission =
  'To empower our suppliers and clients through reliable, quality products and exceptional service, building long-term partnerships that drive success.';

function Mission() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);

  useSpotlight(sectionRef, '.mission-card');

  // Background drifts against the scroll for a parallax window effect.
  useScrollFrame(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    if (!section || !bg) return;

    const rect = section.getBoundingClientRect();
    const vh = window.innerHeight;
    if (rect.bottom < 0 || rect.top > vh) return;
    const progress = (vh - rect.top) / (vh + rect.height);
    bg.style.transform = `translate3d(0, ${(progress - 0.5) * -14}%, 0)`;
  });

  return (
    <section className="mission" data-theme="dark" ref={sectionRef} aria-labelledby="mission-title">
      <div className="mission-bg" ref={bgRef} aria-hidden="true">
        <img src={asset('site/mission-bg.jpg')} alt="" loading="lazy" decoding="async" />
      </div>
      <div className="mission-shade" aria-hidden="true"></div>

      <div className="container mission-inner">
        <div className="mission-head">
          <Reveal as="p" variant="fade" className="eyebrow eyebrow-light" id="mission-title">
            Our Mission
          </Reveal>
          <WordReveal as="blockquote" className="mission-quote" text={mission} />
          <Reveal as="p" variant="fade" className="mission-cite" delay={100}>
            EON General Supply Company
          </Reveal>
        </div>

        <div className="mission-foot">
          <Reveal className="mission-vision" delay={60}>
            <p className="eyebrow eyebrow-light">Our Vision</p>
            <p>
              To be the most trusted supplier in the industrial and automotive sectors, recognized for our
              commitment to quality, empowerment, and customer satisfaction.
            </p>
          </Reveal>

          <Reveal className="mission-card" variant="scale" delay={160}>
            <img src={asset('Eon_general.jpeg')} alt="EON General Supply Company emblem" loading="lazy" />
            <span>B-BBEE Level 1 Contributor</span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Mission;
