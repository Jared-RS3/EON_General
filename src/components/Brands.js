import React from 'react';

function Brands() {
  const brandCategories = [
    {
      title: 'Heavy Commercial Vehicles',
      brands: ['Scania', 'Volvo', 'Mercedes-Benz', 'MAN', 'DAF', 'IVECO']
    },
    {
      title: 'Light Commercial Vehicles',
      brands: ['Toyota', 'Ford', 'Nissan', 'Isuzu', 'Mitsubishi']
    },
    {
      title: 'Industrial & Construction',
      brands: ['Caterpillar', 'Komatsu', 'JCB', 'Liebherr', 'Hitachi']
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
              <h3>{category.title}</h3>
              <div className="brand-list">
                {category.brands.map((brand, i) => (
                  <div className="brand-item" key={i}>{brand}</div>
                ))}
              </div>
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
