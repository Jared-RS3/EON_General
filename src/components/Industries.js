import React, { useEffect, useRef, useState } from 'react';
import { Icon, Reveal } from '../lib/motion';
import { asset } from '../data/company';

const industries = [
  {
    sector: 'Industrial',
    title: 'Mining',
    desc: 'Parts for the haul trucks, excavators and loaders that keep mining operations producing.',
    image: asset('site/industry-mining.jpg')
  },
  {
    sector: 'Industrial',
    title: 'Construction',
    desc: 'Components for the construction equipment and heavy machinery that build our infrastructure.',
    image: asset('site/industry-construction.jpg')
  },
  {
    sector: 'Automotive',
    title: 'Trucks & Trailers',
    desc: 'OEM and aftermarket parts for commercial vehicle fleets, trucks and trailers.',
    image: asset('site/industry-fleets.jpg')
  },
  {
    sector: 'Industrial',
    title: 'Ports & Terminals',
    desc: 'Parts and components for port equipment, terminal tractors and handling fleets.',
    image: asset('site/industry-ports.jpg')
  },
  {
    sector: 'Industrial',
    title: 'Material Handling',
    desc: 'Replacement parts that keep forklifts and warehouse equipment moving.',
    image: asset('site/industry-material-handling.jpg')
  },
  {
    sector: 'Automotive',
    title: 'Buses & Coaches',
    desc: 'Engine, brake and cooling parts for bus and coach operators.',
    image: asset('site/industry-buses.jpg')
  },
  {
    sector: 'Industrial',
    title: 'Manufacturing',
    desc: 'Maintenance parts and consumables that keep production facilities running.',
    image: asset('site/industry-manufacturing.jpg')
  },
  {
    sector: 'Industrial',
    title: 'Agriculture',
    desc: 'Parts for tractors and agricultural equipment, season after season.',
    image: asset('site/industry-agriculture.jpg')
  }
];

function Industries() {
  const trackRef = useRef(null);
  const drag = useRef(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  const updateEdges = () => {
    const track = trackRef.current;
    if (!track) return;
    const start = track.scrollLeft <= 4;
    const end = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
    setEdges((current) => (current.start === start && current.end === end ? current : { start, end }));
  };

  useEffect(() => {
    updateEdges();
    window.addEventListener('resize', updateEdges);
    return () => window.removeEventListener('resize', updateEdges);
  }, []);

  const step = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector('.industry-card');
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const distance = card ? card.offsetWidth + gap : track.clientWidth * 0.8;
    track.scrollBy({ left: direction * distance, behavior: 'smooth' });
  };

  // Click-and-drag scrolling for mouse users; touch devices scroll natively.
  const onPointerDown = (e) => {
    if (e.pointerType !== 'mouse' || e.button !== 0) return;
    const track = trackRef.current;
    drag.current = { x: e.clientX, left: track.scrollLeft, moved: false };
    track.classList.add('is-dragging');
  };

  const onPointerMove = (e) => {
    if (!drag.current) return;
    const dx = e.clientX - drag.current.x;
    if (Math.abs(dx) > 4) drag.current.moved = true;
    trackRef.current.scrollLeft = drag.current.left - dx;
  };

  const endDrag = () => {
    if (!drag.current) return;
    trackRef.current.classList.remove('is-dragging');
    drag.current = null;
  };

  return (
    <section id="industries" className="industries">
      <div className="container">
        <header className="section-head section-head-row">
          <div>
            <Reveal as="p" variant="fade" className="eyebrow">Industries We Serve</Reveal>
            <Reveal as="h2" className="section-title" delay={80}>
              Built for the Industries That Keep South Africa Moving
            </Reveal>
          </div>
          <Reveal className="carousel-controls" variant="fade" delay={160}>
            <button
              type="button"
              className="square-btn"
              onClick={() => step(-1)}
              disabled={edges.start}
              aria-label="Previous industries"
            >
              <Icon name="arrowLeft" size={18} />
            </button>
            <button
              type="button"
              className="square-btn"
              onClick={() => step(1)}
              disabled={edges.end}
              aria-label="Next industries"
            >
              <Icon name="arrowRight" size={18} />
            </button>
          </Reveal>
        </header>
      </div>

      <Reveal variant="left" delay={120}>
        <div
          className="carousel-track"
          ref={trackRef}
          onScroll={updateEdges}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          onClickCapture={(e) => {
            if (drag.current && drag.current.moved) e.preventDefault();
          }}
          tabIndex={0}
          aria-label="Industries we serve"
        >
          {industries.map((industry) => (
            <article className="industry-card" key={industry.title}>
              <img src={industry.image} alt="" loading="lazy" decoding="async" draggable="false" />
              <div className="industry-card-shade" aria-hidden="true"></div>
              <span className="industry-sector">{industry.sector}</span>
              <div className="industry-card-body">
                <h3>{industry.title}</h3>
                <p>{industry.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </Reveal>

      <div className="container">
        <Reveal as="p" variant="fade" className="industries-note">
          We also supply parts for passenger vehicles, tension cars and bogies.
        </Reveal>
      </div>
    </section>
  );
}

export default Industries;
