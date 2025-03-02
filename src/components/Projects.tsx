
import React, { useEffect, useRef, useState } from 'react';
import SectionHeading from './ui/SectionHeading';
import AnimatedCard from './ui/AnimatedCard';
import { cn } from '@/lib/utils';

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'networking' | 'software'>('networking');
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

  const networkingProjects = [
    {
      title: "Enterprise Data Center Network Setup",
      description: "Designed a high-availability, multi-layered network with Cisco Nexus & Palo Alto Firewalls.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      tags: ["Cisco Nexus", "Palo Alto", "High Availability"]
    },
    {
      title: "AWS Cloud Migration for a Fintech Company",
      description: "Migrated on-prem workloads to AWS, implementing serverless computing and auto-scaling.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      tags: ["AWS", "Serverless", "Auto-scaling"]
    },
    {
      title: "Automated Network Provisioning",
      description: "Developed Python & Ansible scripts for zero-touch provisioning (ZTP) and network automation.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      tags: ["Python", "Ansible", "ZTP"]
    },
    {
      title: "Hybrid Cloud Integration",
      description: "Connected on-prem servers with AWS & Azure, ensuring a seamless multi-cloud environment.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      tags: ["Multi-cloud", "Azure", "AWS"]
    }
  ];

  const softwareProjects = [
    {
      title: "Inventory Management System",
      description: "Developed a full-stack web app for real-time stock tracking & analytics using React, Node.js & MongoDB.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "AI-Powered Chatbot for Customer Support",
      description: "Built an NLP-based chatbot using Python, OpenAI API & Flask, reducing manual queries by 60%.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      tags: ["Python", "OpenAI", "Flask"]
    },
    {
      title: "Automation Scripts for Server & Network Monitoring",
      description: "Created a custom Python-based monitoring tool that integrates with Prometheus & Grafana.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      tags: ["Python", "Prometheus", "Grafana"]
    },
    {
      title: "E-commerce Website & Mobile App",
      description: "Designed & deployed a React Native mobile app & Next.js web store with payment gateway integration.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      tags: ["React Native", "Next.js", "Payment Gateway"]
    }
  ];

  const currentProjects = activeTab === 'networking' ? networkingProjects : softwareProjects;

  return (
    <section id="projects" className="py-20 md:py-32 bg-portfolio-light" ref={sectionRef}>
      <div className="section-container">
        <SectionHeading 
          chipText="Featured Projects"
          title="Recent Work & Achievements"
          subtitle="Explore my portfolio of successful projects across networking, cloud, and software development."
        />

        <div className="flex justify-center mb-10 animate-on-scroll">
          <div className="inline-flex p-1 bg-white rounded-full shadow-sm">
            <button
              onClick={() => setActiveTab('networking')}
              className={cn(
                "px-6 py-2 text-sm font-medium rounded-full transition-all duration-300",
                activeTab === 'networking' 
                  ? "bg-portfolio-blue text-white shadow" 
                  : "text-portfolio-dark/70 hover:text-portfolio-dark"
              )}
            >
              Networking & Cloud
            </button>
            <button
              onClick={() => setActiveTab('software')}
              className={cn(
                "px-6 py-2 text-sm font-medium rounded-full transition-all duration-300",
                activeTab === 'software' 
                  ? "bg-portfolio-blue text-white shadow" 
                  : "text-portfolio-dark/70 hover:text-portfolio-dark"
              )}
            >
              Software & AI
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-on-scroll">
          {currentProjects.map((project, index) => (
            <div 
              key={index}
              className={cn(
                "group overflow-hidden rounded-2xl bg-white border border-portfolio-light-blue/20 shadow-sm transition-all duration-300 hover:shadow-lg",
                index % 2 === 0 ? "animate-fade-up" : "opacity-0 animate-delayed-fade-up"
              )}
            >
              <div className="h-52 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="chip text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                <p className="text-sm text-portfolio-dark/70">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center animate-on-scroll">
          <a href="#contact" className="btn-primary inline-flex items-center">
            <span>Discuss Your Project</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-2" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
