import React from 'react';

const Features = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Why Shop with Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="feature-item">
            <h3 className="text-xl font-bold mb-4">Free Shipping</h3>
            <p>Enjoy free shipping on orders above $50.</p>
          </div>
          <div className="feature-item">
            <h3 className="text-xl font-bold mb-4">Quality Products</h3>
            <p>We offer top-quality products from trusted brands.</p>
          </div>
          <div className="feature-item">
            <h3 className="text-xl font-bold mb-4">24/7 Support</h3>
            <p>Our customer service is available 24/7 to help you.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
