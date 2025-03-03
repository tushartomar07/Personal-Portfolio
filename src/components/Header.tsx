
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="section-container flex items-center justify-between">
        <a 
          href="#" 
          className="text-xl font-semibold text-portfolio-dark transition-all duration-300 hover:text-portfolio-blue"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-purple-600">Tushar Tomar</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="nav-link"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="ml-4 btn-primary"
          >
            Let's Connect
          </a>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden p-2 text-portfolio-dark rounded-md"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            )}
          </svg>
        </button>

        {/* Mobile Navigation Menu */}
        <div 
          className={cn(
            'md:hidden fixed inset-0 z-50 bg-white bg-opacity-95 backdrop-blur-md transition-transform duration-300 ease-in-out',
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex justify-between items-center p-4">
            <a href="#" className="text-xl font-semibold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-purple-600">Tushar Tomar</span>
            </a>
            <button 
              className="p-2 text-portfolio-dark rounded-md"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center h-[calc(100vh-80px)] space-y-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-xl nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="btn-primary text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Let's Connect
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
