import React from 'react';
import { useCart } from './CartContext'; // Import useCart hook

const ProductCard = ({ product }) => {
  const { addToCart } = useCart(); // Access addToCart from context

  const handleAddToCart = () => {
    addToCart(product); // Add the product to the cart
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
      <p className="text-lg text-gray-700">${product.price}</p>
      <button
        onClick={handleAddToCart}
        className="mt-4 bg-green-600 text-white py-2 cursor-pointer px-4 rounded-md hover:bg-green-500"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
