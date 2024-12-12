import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero/index';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ProcessWorkflow from './components/ProcessWorkflow';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <Hero />
      <Services />
      <ProcessWorkflow />
      <Pricing />
      <Testimonials />
      <Portfolio />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;