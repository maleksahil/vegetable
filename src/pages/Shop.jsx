import React from "react";
import ProductCard from "../components/productCard";

const products = [
  { id: 1, name: "Tomato", price: 2.50, image: "/images/tomato.jpg" },
  { id: 2, name: "Potato", price: 1.75, image: "/images/potato.webp" },
  { id: 3, name: "Spinach", price: 1.75, image: "/images/Spinach.webp" },
  { id: 4, name: "Cauliflower", price: 1.75, image: "/images/coliflower.jpg" },
  { id: 5, name: "Cabbage", price: 1.75, image: "/images/cabbage.webp" },
  { id: 6, name: "Green Peas", price: 1.75, image: "/images/mutter.jpg" },
];

const Shop = () => {
  return (
    <div className="bg-green-300 p-4">
      <h1 className="text-3xl font-bold text-white mb-6">Shop</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
