import React, { useState } from 'react';
import {
  siScania,
  siVolvo,
  siMan,
  siDaf,
  siIveco,
  siToyota,
  siFord,
  siNissan,
  siMitsubishi,
  siCaterpillar,
  siJcb,
  siHitachi
} from 'simple-icons';

function Brands() {
  const assetBase = process.env.PUBLIC_URL || '';
  const [openCategories, setOpenCategories] = useState([0, 1, 2]);

  const toggleCategory = (index) => {
    setOpenCategories((currentOpenCategories) => {
      if (currentOpenCategories.includes(index)) {
        return currentOpenCategories.filter((item) => item !== index);
      }

      return [...currentOpenCategories, index];
    });
  };

  const brandCategories = [
    {
      title: 'Heavy Commercial Vehicles',
      brands: [
        { name: 'Scania', icon: siScania },
        { name: 'Volvo', icon: siVolvo },
        { name: 'Mercedes-Benz', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg' },
        { name: 'MAN', icon: siMan },
        { name: 'DAF', icon: siDaf },
        { name: 'IVECO', icon: siIveco }
      ]
    },
    {
      title: 'Light Commercial Vehicles',
      brands: [
        { name: 'Toyota', icon: siToyota },
        { name: 'Ford', icon: siFord },
        { name: 'Nissan', icon: siNissan },
        { name: 'Isuzu', logo: `${assetBase}/assets/images/logos/isuzu-logo.svg` },
        { name: 'Mitsubishi', icon: siMitsubishi }
      ]
    },
    {
      title: 'Industrial & Construction',
      brands: [
        { name: 'Caterpillar', icon: siCaterpillar },
        { name: 'Komatsu', logo: `${assetBase}/assets/images/logos/komatsu-logo.svg` },
        { name: 'JCB', icon: siJcb },
        { name: 'Liebherr', logo: `${assetBase}/assets/images/logos/liebherr-logo.svg` },
        { name: 'Hitachi', icon: siHitachi }
      ]
    }
  ];

  return (
    <section id="brands" className="brands">
      <div className="container">
        <div className="section-header">
          <h2>Brands We Support</h2>
          <p>Trusted partnerships with leading manufacturers</p>
        </div>
        <div className="brands-grid">
          {brandCategories.map((category, index) => (
            <div className="brand-category" key={index}>
              <button
                type="button"
                className="brand-category-toggle"
                onClick={() => toggleCategory(index)}
                aria-expanded={openCategories.includes(index)}
              >
                <h3>{category.title}</h3>
                <i className={`fas ${openCategories.includes(index) ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
              </button>
              {openCategories.includes(index) && (
                <div className="brand-list">
                  {category.brands.map((brand) => (
                    <div className="brand-item" key={brand.name}>
                      <div className="brand-logo-wrap">
                        {brand.icon ? (
                          <svg
                            role="img"
                            viewBox="0 0 24 24"
                            aria-label={`${brand.name} logo`}
                            className="brand-logo-svg"
                          >
                            <path d={brand.icon.path} fill={`#${brand.icon.hex}`} />
                          </svg>
                        ) : brand.logo ? (
                          <img
                            src={brand.logo}
                            alt={`${brand.name} logo`}
                            className="brand-logo"
                            loading="lazy"
                          />
                        ) : (
                          <span className="brand-fallback">{brand.name.slice(0, 2).toUpperCase()}</span>
                        )}
                      </div>
                      <span>{brand.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="brands-note">
          <p><i className="fas fa-info-circle"></i> We continuously expand our brand range to meet our clients' evolving needs. Don't see your brand? Contact us!</p>
        </div>
      </div>
    </section>
  );
}

export default Brands;
