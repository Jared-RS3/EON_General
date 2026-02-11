import React from 'react';

function Products() {
  const products = [
    { icon: 'cogs', title: 'Engine Components', desc: 'Complete range of engine parts for all makes and models' },
    { icon: 'oil-can', title: 'Filters & Fluids', desc: 'Oil, air, fuel filters and quality lubricants' },
    { icon: 'car-battery', title: 'Electrical Systems', desc: 'Batteries, alternators, starters, and sensors' },
    { icon: 'fan', title: 'Cooling Systems', desc: 'Radiators, thermostats, water pumps, and hoses' },
    { icon: 'tachometer-alt', title: 'Brake Systems', desc: 'Pads, discs, drums, and hydraulic components' },
    { icon: 'toolbox', title: 'General Parts', desc: 'Belts, hoses, gaskets, and maintenance items' }
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
              <i className={`fas fa-${product.icon}`}></i>
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
