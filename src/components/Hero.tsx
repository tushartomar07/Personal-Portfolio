
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden relative bg-gradient-to-b from-portfolio-light to-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-portfolio-light-blue rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-portfolio-blue rounded-full opacity-10 blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={cn(
            "transition-all duration-700 transform",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <span className="chip mb-5">Network Engineer & Software Developer</span>
          </div>
          
          <h1 className={cn(
            "font-medium mb-6 transition-all duration-700 delay-100",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            Empowering Networks & Software 
            <span className="block text-portfolio-blue">with Innovation & Expertise</span>
          </h1>
          
          <p className={cn(
            "text-xl md:text-2xl mb-8 max-w-2xl mx-auto transition-all duration-700 delay-200",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            Level 3 Network Engineer & Full-Stack Developer with 5+ years of experience blending high-performance IT infrastructure with cutting-edge software solutions.
          </p>
          
          <div className={cn(
            "flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <a href="#projects" className="btn-primary w-full sm:w-auto">
              View Projects
            </a>
            <a href="#about" className="btn-secondary w-full sm:w-auto">
              Learn More
            </a>
          </div>
        </div>
        
        <div className={cn(
          "mt-16 flex justify-center transition-all duration-700 delay-500",
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="animate-soft-bounce">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-8 w-8 text-portfolio-gray/60" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
