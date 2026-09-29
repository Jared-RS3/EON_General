import React, { useRef } from 'react';
import { Reveal, useScrollFrame } from '../lib/motion';
import { asset } from '../data/company';

const products = [
  {
    title: 'Engine Components',
    desc: 'Complete range of pistons, gaskets, valves, and rebuild kits for heavy-duty engines.',
    image: asset('site/product-engine.jpg'),
    alt: 'Close-up of a heavy-duty engine bay',
    tags: ['Pistons', 'Gaskets', 'Valves', 'Rebuild Kits']
  },
  {
    title: 'Filters & Fluids',
    desc: 'Oil, air, and fuel filters with premium lubricants for reliable performance.',
    image: asset('oil.jpeg'),
    fit: 'contain',
    alt: 'Oil and fuel filters',
    tags: ['Oil Filters', 'Air Filters', 'Fuel Filters', 'Lubricants']
  },
  {
    title: 'Electrical Systems',
    desc: 'Batteries, starter motors, alternators, and wiring components for fleet vehicles.',
    image: asset('site/product-electrical.jpg'),
    alt: 'Starter motors alongside filters and an oil hose',
    tags: ['Batteries', 'Starters', 'Alternators', 'Wiring']
  },
  {
    title: 'Cooling Systems',
    desc: 'Radiators, water pumps, thermostats, and hoses to keep equipment operating safely.',
    image: asset('cooling.png'),
    fit: 'contain',
    alt: 'Radiator and cooling system components',
    tags: ['Radiators', 'Water Pumps', 'Thermostats', 'Hoses']
  },
  {
    title: 'Brake Systems',
    desc: 'Brake pads, discs, drums, and hydraulic components for industrial and commercial use.',
    image: asset('braking.png'),
    fit: 'contain',
    alt: 'Brake pads, discs and hydraulic components',
    tags: ['Pads', 'Discs', 'Drums', 'Hydraulics']
  },
  {
    title: 'General Parts',
    desc: 'Belts, bearings, hoses, seals, and maintenance essentials for daily operations.',
    image: asset('general.png'),
    fit: 'contain',
    alt: 'Welding electrodes and general maintenance supplies',
    tags: ['Belts', 'Bearings', 'Seals', 'Consumables']
  }
];

function Products() {
  const listRef = useRef(null);

  // As each card slides over the one before it, the covered card dims and
  // recedes slightly, giving the stack depth.
  useScrollFrame(() => {
    const list = listRef.current;
    if (!list) return;

    const cards = Array.from(list.children);
    cards.forEach((card, i) => {
      const next = cards[i + 1];
      let progress = 0;
      if (next) {
        const current = card.getBoundingClientRect();
        const upcoming = next.getBoundingClientRect();
        progress = 1 - (upcoming.top - current.top) / current.height;
        progress = Math.min(1, Math.max(0, progress));
      }
      card.style.setProperty('--cover', progress.toFixed(3));
    });
  });

  return (
    <section id="products" className="products">
      <div className="container">
        <header className="section-head section-head-split">
          <div>
            <Reveal as="p" variant="fade" className="eyebrow">Products</Reveal>
            <Reveal as="h2" className="section-title" delay={80}>
              The Right Part
              <br />
              for the Job
            </Reveal>
          </div>
          <Reveal as="p" className="section-intro" delay={160}>
            We supply both <strong>OEM</strong> parts, made by the original manufacturer for a perfect fit,
            and quality <strong>aftermarket</strong> alternatives that deliver excellent value. Every part
            is checked to meet or exceed industry standards.
          </Reveal>
        </header>

        <div className="product-stack" ref={listRef}>
          {products.map((product, i) => (
            <article className="product-card" key={product.title}>
              <div className={`product-media${product.fit === 'contain' ? ' is-contain' : ''}`}>
                <img src={product.image} alt={product.alt} loading="lazy" decoding="async" />
              </div>
              <div className="product-body">
                <p className="eyebrow">Products / {String(i + 1).padStart(2, '0')}</p>
                <div className="product-main">
                  <h3>{product.title}</h3>
                  <p>{product.desc}</p>
                </div>
                <ul className="tag-list">
                  {product.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
