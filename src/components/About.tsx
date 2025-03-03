
import React, { useEffect, useRef } from 'react';
import SectionHeading from './ui/SectionHeading';
import AnimatedCard from './ui/AnimatedCard';
import { cn } from '@/lib/utils';

const About: React.FC = () => {
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

  return (
    <section id="about" className="bg-portfolio-light py-20 md:py-32" ref={sectionRef}>
      <div className="section-container">
        <SectionHeading 
          chipText="About Me"
          title="Bridging the Gap Between Networks & Code"
          subtitle="I combine technical expertise in enterprise networking with a passion for creating innovative software solutions."
        />

        <div className="grid md:grid-cols-2 gap-10 items-center mt-16">
          <div className="space-y-6">
            <div className="animate-on-scroll">
              <p className="text-lg mb-4">
                As a Level 3 Network Engineer & Software Developer with 3+ years of experience, I specialize in building robust IT infrastructure and developing cutting-edge applications.
              </p>
              <p className="text-lg mb-4">
                My BTech degree in Computer Science Engineering provided me with a strong foundation, which I've leveraged to successfully execute multiple enterprise projects and freelance solutions.
              </p>
              <p className="text-lg">
                My work helps businesses achieve scalability, security, and efficiency through optimized network infrastructure, cloud deployments, and custom software applications.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8 animate-on-scroll">
              <div className="glass-card rounded-xl p-4 border border-portfolio-light-blue/30">
                <h3 className="text-lg font-medium text-portfolio-blue mb-2">Education</h3>
                <p className="text-sm">BTech in Computer Science Engineering</p>
              </div>
              <div className="glass-card rounded-xl p-4 border border-portfolio-light-blue/30">
                <h3 className="text-lg font-medium text-portfolio-blue mb-2">Experience</h3>
                <p className="text-sm">3+ Years of Professional Experience</p>
              </div>
            </div>
          </div>

          <div className="relative animate-on-scroll">
            <div className="aspect-square rounded-2xl overflow-hidden bg-white shadow-xl border border-white">
              <img 
                src="https://images.unsplash.com/photo-1597239450996-ea7c2c564412?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Professional portrait" 
                className="w-full h-full object-cover opacity-90"
                style={{ objectPosition: 'center' }}
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-portfolio-blue rounded-2xl opacity-10 blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
