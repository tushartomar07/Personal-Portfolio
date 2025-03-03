
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden relative bg-transparent">
      <div className="absolute inset-0 z-0">
        {/* Original blur effects */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-portfolio-light-blue rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-portfolio-blue rounded-full opacity-10 blur-3xl"></div>
        
        {/* Developer code animation */}
        <div className="absolute top-40 left-8 md:left-20 w-16 h-20 animate-float opacity-15">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        </div>
        
        {/* Server rack animation */}
        <div className="absolute top-60 right-8 md:right-32 w-16 h-20 animate-pulse opacity-15">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-teal-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
            <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
            <line x1="6" y1="6" x2="6.01" y2="6"></line>
            <line x1="6" y1="18" x2="6.01" y2="18"></line>
          </svg>
        </div>
        
        {/* Security lock animation */}
        <div className="absolute bottom-40 right-12 md:left-1/3 w-14 h-14 animate-slow-pulse opacity-15">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        </div>
        
        {/* Network/cloud animation */}
        <div className="absolute bottom-60 left-8 md:right-1/4 w-20 h-20 animate-float-delayed opacity-15">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-indigo-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
          </svg>
        </div>
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
