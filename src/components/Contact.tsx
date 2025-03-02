
import React, { useEffect, useRef } from 'react';
import SectionHeading from './ui/SectionHeading';
import { cn } from '@/lib/utils';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    animatedElements?.forEach((el) => observer.observe(el));

    return () => {
      animatedElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const contactLinks = [
    {
      name: "Email",
      value: "contact@youremail.com",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
      href: "mailto:contact@youremail.com"
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/yourprofile",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
      href: "https://linkedin.com/in/yourprofile"
    },
    {
      name: "GitHub",
      value: "github.com/yourusername",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      ),
      href: "https://github.com/yourusername"
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-32" ref={sectionRef}>
      <div className="section-container">
        <SectionHeading 
          chipText="Get In Touch"
          title="Let's Build the Future Together"
          subtitle="Ready to transform your IT infrastructure or develop custom software solutions? Reach out to discuss your project!"
        />

        <div className="max-w-4xl mx-auto mt-16 grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 animate-on-scroll">
            <div className="bg-portfolio-light-blue/30 h-full rounded-2xl p-8 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-medium mb-6 text-portfolio-blue">Contact Information</h3>
                <p className="mb-6 text-portfolio-dark/80">
                  I'm looking forward to hearing about your project. Feel free to reach out through any of the following channels.
                </p>
                
                <div className="space-y-6">
                  {contactLinks.map((link, index) => (
                    <a 
                      key={index}
                      href={link.href}
                      className="flex items-center space-x-4 text-portfolio-dark/80 hover:text-portfolio-blue transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="bg-white p-3 rounded-full shadow-sm">
                        {link.icon}
                      </div>
                      <div>
                        <p className="font-medium">{link.name}</p>
                        <p className="text-sm">{link.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="absolute right-0 bottom-0 w-48 h-48 bg-portfolio-blue rounded-full opacity-10 transform translate-x-1/4 translate-y-1/4 blur-3xl"></div>
              <div className="absolute left-0 top-0 w-48 h-48 bg-portfolio-blue rounded-full opacity-10 transform -translate-x-1/4 -translate-y-1/4 blur-3xl"></div>
            </div>
          </div>
          
          <div className="md:col-span-3 animate-on-scroll">
            <form className="bg-white rounded-2xl p-8 shadow-sm border border-portfolio-light-blue/20">
              <h3 className="text-2xl font-medium mb-6">Send a Message</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-portfolio-dark/70 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-portfolio-light-blue/30 focus:border-portfolio-blue focus:ring focus:ring-portfolio-blue/20 focus:ring-opacity-50 outline-none transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-portfolio-dark/70 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-portfolio-light-blue/30 focus:border-portfolio-blue focus:ring focus:ring-portfolio-blue/20 focus:ring-opacity-50 outline-none transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-portfolio-dark/70 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-portfolio-light-blue/30 focus:border-portfolio-blue focus:ring focus:ring-portfolio-blue/20 focus:ring-opacity-50 outline-none transition-all duration-300"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-portfolio-dark/70 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-portfolio-light-blue/30 focus:border-portfolio-blue focus:ring focus:ring-portfolio-blue/20 focus:ring-opacity-50 outline-none transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn-primary w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
