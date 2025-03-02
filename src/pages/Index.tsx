
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Add scroll animation effect
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll:not(.show)');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight * 0.8) {
          element.classList.add('show');
        }
      });
    };

    // Run on initial load
    animateOnScroll();

    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);

    // Clean up
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
