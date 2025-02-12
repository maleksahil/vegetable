import React from 'react';
import { useCart } from '../components/CartContext'; // Import useCart hook

const Cart = () => {
  const { cart } = useCart(); // Access cart from context

  return (
    <section className="py-16 bg-green-200">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-lg">Your cart is empty.</p>
        ) : (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {cart.map((product, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-lg text-gray-700">${product.price}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <button className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-500">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
