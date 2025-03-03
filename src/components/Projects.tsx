
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
      image: "https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1Nnx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Cisco Nexus", "Palo Alto", "High Availability"]
    },
    {
      title: "AWS Cloud Migration for a Fintech Company",
      description: "Migrated on-prem workloads to AWS, implementing serverless computing and auto-scaling.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRhdGFjZW50ZXJ8ZW58MHx8MHx8fDA%3D",
      tags: ["AWS", "Serverless", "Auto-scaling"]
    },
    {
      title: "Automated Network Provisioning",
      description: "Developed Python & Ansible scripts for zero-touch provisioning (ZTP) and network automation.",
      image: "https://images.unsplash.com/photo-1691435828932-911a7801adfb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8",
      tags: ["Python", "Ansible", "ZTP"]
    },
    {
      title: "Hybrid Cloud Integration",
      description: "Connected on-prem servers with AWS & Azure, ensuring a seamless multi-cloud environment.",
      image: "https://images.unsplash.com/photo-1597733336794-12d05021d510?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDgzfHx8ZW58MHx8fHx8",
      tags: ["Multi-cloud", "Azure", "AWS"]
    }
  ];

  const softwareProjects = [
    {
      title: "Inventory Management System",
      description: "Developed a full-stack web app for real-time stock tracking & analytics using React, Node.js & MongoDB.",
      image: "https://images.unsplash.com/photo-1567335632614-abebe179111e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGludmVudG9yeXxlbnwwfHwwfHx8MA%3D%3D",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "AI-Powered Chatbot for Customer Support",
      description: "Built an NLP-based chatbot using Python, OpenAI API & Flask, reducing manual queries by 60%.",
      image: "https://images.unsplash.com/photo-1644088379091-d574269d422f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
      tags: ["Python", "OpenAI", "Flask"]
    },
    {
      title: "Automation Scripts for Server & Network Monitoring",
      description: "Created a custom Python-based monitoring tool that integrates with Prometheus & Grafana.",
      image: "https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      tags: ["Python", "Prometheus", "Grafana"]
    },
    {
      title: "E-commerce Website & Mobile App",
      description: "Designed & deployed a React Native mobile app & Next.js web store with payment gateway integration.",
      image: "https://images.unsplash.com/photo-1586880244386-8b3e34c8382c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGVjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D",
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
