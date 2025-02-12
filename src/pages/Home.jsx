import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import ProductShowcase from '../components/ProductShowcase';
import Footer from '../components/Footer';
import FeatureCards from '../components/FeatureCard';
import ProductCardBanner from '../components/ProductCardBanner'
import PeopleWords from '../components/PeopleWord';

const Home = () => {
  return (
    <div>
      <Hero />
      <Testimonials />
      <ProductShowcase />
      <Features />
      <FeatureCards/>
      <img className='w-full' src="/images/hero3.png"/>
      <ProductCardBanner/>
      <PeopleWords/>
      <Footer />
    </div>
  );
};

export default Home;
