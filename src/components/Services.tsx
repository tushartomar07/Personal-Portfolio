
import React, { useEffect, useRef } from 'react';
import SectionHeading from './ui/SectionHeading';
import AnimatedCard from './ui/AnimatedCard';
import { cn } from '@/lib/utils';

const Services: React.FC = () => {
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

  const networkingServices = [
    {
      title: "Enterprise Networking & Security",
      description: "Expert setup and management of Cisco Nexus, Palo Alto, SD-WAN, VLAN, VPN, and firewall systems.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-portfolio-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
      ),
    },
    {
      title: "Cloud & Virtualization",
      description: "Implementation of AWS, Azure, VMware, Kubernetes, and hybrid cloud infrastructure for scalable solutions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-portfolio-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
        </svg>
      ),
    },
    {
      title: "Server & Data Center Management",
      description: "Optimization of Windows Server, Linux, Hyper-V, and enterprise storage solutions for maximum reliability.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-portfolio-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
      ),
    },
    {
      title: "Network Automation & Monitoring",
      description: "Development of Python, Ansible, and Terraform scripts for automated configurations and monitoring.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-portfolio-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      ),
    },
  ];

  const developmentServices = [
    {
      title: "Full-Stack Development",
      description: "End-to-end application development with React, Node.js, Python, Java, and SQL/NoSQL databases.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-portfolio-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
    },
    {
      title: "AI & Automation",
      description: "Creation of AI-driven chatbots, automation scripts, and machine learning models for business enhancement.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-portfolio-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"></path>
          <path d="M7 17v-1a4 4 0 0 1 4-4 1 1 0 0 0 1-1V9"></path>
          <path d="M17 17v-1a1 1 0 0 0-1-1 4 4 0 0 1-4-4V9"></path>
        </svg>
      ),
    },
    {
      title: "DevOps & CI/CD Pipelines",
      description: "Implementation of Docker, Kubernetes, Jenkins, and GitHub Actions for seamless deployments.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-portfolio-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 12m-10 0a10 10 0 1 0 20 0a10 10 0 1 0 -20 0"></path>
          <path d="M12 2l0 20"></path>
          <path d="M12 12l8.66 5"></path>
          <path d="M12 12l-8.66 5"></path>
        </svg>
      ),
    },
    {
      title: "Web & Mobile App Development",
      description: "Design and implementation of scalable, secure, and user-friendly web and mobile applications.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-portfolio-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32" ref={sectionRef}>
      <div className="section-container">
        <SectionHeading 
          chipText="What I Do"
          title="Specialized Services & Expertise"
          subtitle="I offer a comprehensive range of networking and software development services to meet your business needs."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          <div className="animate-on-scroll">
            <div className="mb-10">
              <h3 className="text-2xl font-medium mb-4 text-portfolio-blue">Networking & Cloud Solutions</h3>
              <p>Strategic IT infrastructure planning and implementation for maximum performance and security.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {networkingServices.map((service, index) => (
                <AnimatedCard 
                  key={index}
                  className="glass-card border border-portfolio-light-blue/20"
                  delayIndex={index % 2}
                >
                  <div className="mb-4">{service.icon}</div>
                  <h4 className="text-lg font-medium mb-2">{service.title}</h4>
                  <p className="text-sm text-portfolio-dark/70">{service.description}</p>
                </AnimatedCard>
              ))}
            </div>
          </div>

          <div className="animate-on-scroll">
            <div className="mb-10">
              <h3 className="text-2xl font-medium mb-4 text-portfolio-blue">Software Development & AI</h3>
              <p>Custom software solutions to streamline operations and drive business growth.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {developmentServices.map((service, index) => (
                <AnimatedCard 
                  key={index}
                  className="glass-card border border-portfolio-light-blue/20"
                  delayIndex={index % 2}
                >
                  <div className="mb-4">{service.icon}</div>
                  <h4 className="text-lg font-medium mb-2">{service.title}</h4>
                  <p className="text-sm text-portfolio-dark/70">{service.description}</p>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
