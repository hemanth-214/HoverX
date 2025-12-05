import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Features from '../components/Features';
import TechStack from '../components/TechStack';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="pt-16">
      <Hero />
      <About />
      <Services />
      <Features />
      <TechStack />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Home;
