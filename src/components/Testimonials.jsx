import React from 'react';

const Testimonials = () => {
  return (
    <section className="bg-gray-800 text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">What Our Customers Say</h2>
        <div className="flex justify-center gap-8">
          <div className="testimonial">
            <p className="text-xl mb-4">"Amazing products! Fast shipping and great customer service."</p>
            <h4 className="font-semibold">John Doe</h4>
            <p>New York, USA</p>
          </div>
          <div className="testimonial">
            <p className="text-xl mb-4">"I love the quality and pricing of the products at Carrot Store!"</p>
            <h4 className="font-semibold">Jane Smith</h4>
            <p>Los Angeles, USA</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
