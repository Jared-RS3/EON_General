import React from 'react';

function Products() {
  const products = [
    {
      title: 'Engine Components',
      desc: 'Complete range of pistons, gaskets, valves, and rebuild kits for heavy-duty engines.',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&h=800&fit=crop&q=80'
    },
    {
      title: 'Filters & Fluids',
      desc: 'Oil, air, and fuel filters with premium lubricants for reliable performance.',
      image: '/assets/images/oil.jpeg'
    },
    {
      title: 'Electrical Systems',
      desc: 'Batteries, starter motors, alternators, and wiring components for fleet vehicles.',
      image: '/assets/images/starters.jpeg'
    },
    {
      title: 'Cooling Systems',
      desc: 'Radiators, water pumps, thermostats, and hoses to keep equipment operating safely.',
      image: '/assets/images/rad.jpeg'
    },
    {
      title: 'Brake Systems',
      desc: 'Brake pads, discs, drums, and hydraulic components for industrial and commercial use.',
      image: '/assets/images/brakes.jpeg'
    },
    {
      title: 'General Parts',
      desc: 'Belts, bearings, hoses, seals, and maintenance essentials for daily operations.',
      image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=1200&h=800&fit=crop&q=80'
    }
  ];

  return (
    <section id="products" className="products">
      <div className="container">
        <div className="section-header">
          <h2>Our Products</h2>
          <p>Comprehensive range of quality parts and components</p>
        </div>
        <div className="products-grid">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <img src={product.image} alt={product.title} className="product-image" loading="lazy" />
              <h3>{product.title}</h3>
              <p>{product.desc}</p>
            </div>
          ))}
        </div>
        <div className="products-info">
          <div className="info-box">
            <h4>OEM & Aftermarket Parts</h4>
            <p><strong>OEM (Original Equipment Manufacturer):</strong> Parts made by the original vehicle/equipment manufacturer, ensuring perfect fit and reliability.</p>
            <p><strong>Aftermarket:</strong> Quality alternative parts made by third-party manufacturers, offering excellent value while maintaining high standards.</p>
          </div>
          <div className="info-box">
            <h4>Quality Assurance</h4>
            <p>All our products undergo rigorous quality checks to ensure they meet or exceed industry standards. We stand behind every part we supply.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
