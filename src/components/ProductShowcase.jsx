import React from 'react';
import ProductCard from './productCard';

const products = [
  { id: 1, name: "Apple", price: 2.99, image: "/images/apple.jpg" },
  { id: 2, name: "Banana", price: 1.99, image: "/images/banana1.jpg" },
  { id: 3, name: "Carrot", price: 0.99, image: "/images/Carrot.webp" },
  { id: 1, name: "garlic", price: 2.99, image: "/images/garlic.jpg" },
  { id: 2, name: "eggplant", price: 1.99, image: "/images/eggplant.jpg" },
  { id: 3, name: "onion", price: 0.99, image: "/images/onion.jpg" },
];

const ProductShowcase = () => {
  return (
    <section className="py-16 bg-green-300">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8 ">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
