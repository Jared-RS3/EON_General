import React, { useRef } from 'react';
import { RollText, useScrollFrame } from '../lib/motion';
import { asset } from '../data/company';

function Hero() {
  const mediaRef = useRef(null);

  // Gentle parallax: the photo drifts down at a third of the scroll speed.
  useScrollFrame(() => {
    const media = mediaRef.current;
    if (!media || window.scrollY > window.innerHeight * 1.2) return;
    media.style.transform = `translate3d(0, ${window.scrollY * 0.3}px, 0)`;
  });

  return (
    <section id="home" className="hero" data-theme="dark">
      <div className="hero-media" ref={mediaRef} aria-hidden="true">
        <picture>
          <source srcSet={asset('merc.avif')} type="image/avif" />
          <img src={asset('site/hero.jpg')} alt="" fetchPriority="high" decoding="async" />
        </picture>
      </div>
      <div className="hero-shade" aria-hidden="true"></div>

      <div className="container hero-inner">
        <h1 className="hero-title">
          <span className="line-mask"><span style={{ '--i': 0 }}>Quality Parts,</span></span>
          <span className="line-mask"><span style={{ '--i': 1 }}>Reliable Service<span className="accent-dot">.</span></span></span>
        </h1>

        <div className="hero-aside">
          <p>
            Your trusted partner for industrial and automotive supply solutions across South Africa.
          </p>
          <a href="#products" className="btn btn-accent">
            <RollText>Explore Products</RollText>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
