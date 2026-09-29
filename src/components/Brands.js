import React, { useRef, useState } from 'react';
import { siScania, siCaterpillar, siHitachi, siTata } from 'simple-icons';
import { Icon, Reveal, useSpotlight } from '../lib/motion';
import { asset } from '../data/company';

const categories = [
  {
    id: 'commercial',
    title: 'Heavy Commercial',
    brands: [
      { name: 'Scania', icon: siScania },
      { name: 'Terberg', logo: 'https://www.royalterberggroup.com/globalassets/rtg/logos/terberg-royal-groep_logo-fc-zpayoff.png' },
      { name: 'Mercedes-Benz', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg' },
      { name: 'Shacman', logo: 'https://www.shacman.com/upload/images/2024/08/12/8663024ef62a4ef9acfd264f1a924297.png' },
      { name: 'Sinotruk', logo: asset('logos/sinotruk-logo.svg') },
      { name: 'FAW', logo: asset('logos/faw-logo.svg') },
      { name: 'Eicher', logo: asset('logos/eicher-logo.svg') },
      { name: 'Ashok Leyland', logo: asset('logos/ashok-leyland-logo.svg') },
      { name: 'Mahindra', logo: asset('logos/mahindra-logo.jpg') },
      { name: 'Tata', icon: siTata }
    ]
  },
  {
    id: 'industrial',
    title: 'Industrial & Construction',
    brands: [
      { name: 'Caterpillar', icon: siCaterpillar },
      { name: 'Komatsu', logo: asset('logos/komatsu-logo.svg') },
      { name: 'Hitachi', icon: siHitachi },
      { name: 'SANY', logo: 'https://www.sanyglobal.com/static/common/head-footer-img/logo.jpg' },
      { name: 'TCM', logo: asset('logos/tcm-logo.svg') },
      { name: 'Toyota', logo: 'https://www.toyota-industries.com/assets/images/components/site_header/logo.svg' },
      { name: 'LiuGong', logo: asset('logos/liugong-logo.svg'), invert: true }
    ]
  }
];

const filters = [{ id: 'all', title: 'All Brands' }, ...categories.map(({ id, title }) => ({ id, title }))];

function BrandLogo({ brand }) {
  if (brand.icon) {
    return (
      <svg role="img" viewBox="0 0 24 24" aria-label={`${brand.name} logo`} className="brand-svg">
        <path d={brand.icon.path} fill={`#${brand.icon.hex}`} />
      </svg>
    );
  }

  return (
    <img
      src={brand.logo}
      alt={`${brand.name} logo`}
      className={`brand-img${brand.invert ? ' brand-img-invert' : ''}`}
      loading="lazy"
    />
  );
}

function Brands() {
  const [filter, setFilter] = useState('all');
  const sectionRef = useRef(null);

  // A narrow band so the logos colour in row by row as they pass the middle.
  useSpotlight(sectionRef, '.brand-tile', { band: 0.22 }, [filter]);

  const brands = categories
    .filter((category) => filter === 'all' || category.id === filter)
    .flatMap((category) => category.brands);

  return (
    <section id="brands" className="brands" ref={sectionRef}>
      <div className="container">
        <header className="section-head section-head-center">
          <Reveal as="p" variant="fade" className="eyebrow">Brands We Support</Reveal>
          <Reveal as="h2" className="section-title" delay={80}>
            Parts for the Machines
            <br />
            That Move South Africa
          </Reveal>
          <Reveal className="chip-tabs" delay={160} role="tablist" aria-label="Filter brands">
            {filters.map((item) => (
              <button
                type="button"
                role="tab"
                aria-selected={filter === item.id}
                className={`chip-tab${filter === item.id ? ' is-active' : ''}`}
                onClick={() => setFilter(item.id)}
                key={item.id}
              >
                {item.title}
              </button>
            ))}
          </Reveal>
        </header>

        <Reveal className="brand-grid" variant="none">
          {brands.map((brand, i) => (
            <div className="brand-tile" style={{ '--i': i }} key={`${filter}-${brand.name}`}>
              <BrandLogo brand={brand} />
              <span className="brand-name">{brand.name}</span>
            </div>
          ))}
          <a href="#contact" className="brand-tile brand-tile-cta" style={{ '--i': brands.length }} key={`${filter}-cta`}>
            <span className="brand-cta-text">Don&rsquo;t see your brand?</span>
            <span className="brand-cta-link">
              Ask us <Icon name="arrowUpRight" size={16} />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export default Brands;
