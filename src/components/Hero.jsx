import React from 'react';

const Hero = () => {
  return (
    <section className="text-white text-center animate-fade-in">
      <div >
      <div class="relative h-screen flex items-center justify-center bg-[url('/images/Hero.webp')] bg-cover bg-center">
 
  <div class="absolute inset-0 bg-black/60"></div>

  <div class="relative z-10 text-center text-white px-6">
  <h1 className="text-5xl font-bold mb-4">Welcome to Carrot Store</h1>
        <p className="text-lg mb-6">Shop the best products at affordable prices</p>
        <a
          href="/shop"
          className="bg-white text-green-600 px-6 py-2 rounded-md text-lg font-semibold hover:bg-gray-100"
        >
          Start Shopping
        </a>  </div>
</div>


       
      </div>
    </section>
  );
};

export default Hero;
