import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import '../styles/OurProject.css';
import FooterSection from '../Sections/FooterSection.jsx';
import RPAForm from '../RPAForm';
import InvoiceScannerImage from '../../assets/inoice-scaanner.png';
import ComingSoon from '../../assets/comingsoon.webp';


const OurProject = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showRPAForm, setShowRPAForm] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Advanced Invoice Analysis",
      image: InvoiceScannerImage,
      description: "Upload PDF or image invoices to extract and standardize data using AI",
      features: [
        "Multi-format support (PDF, JPG, PNG)",
        "AI-powered data extraction",
        "CSV and JSON output options",
        "Drag & drop interface",
        "Batch processing capabilities"
      ],
      color: "#00bcd4",
      detailedDescription: "Our Advanced Invoice Analysis tool revolutionizes how businesses process financial documents. Using cutting-edge AI technology, we extract key data points from invoices with exceptional accuracy, eliminating manual data entry and reducing errors. The system standardizes information across various invoice formats and provides clean, structured data for integration with your accounting systems.",
      liveUrl: "https://smartflows-invoice-scanner.vercel.app/",
      githubUrl: "#",
      technologies: ["React", "Node.js", "AI/ML", "Computer Vision", "PDF Processing"]
    },
    {
      id: 2,
      title: "Coming Soon",
      image: ComingSoon,
      description: "We're constantly developing new automation solutions",
      features: [
        "Stay tuned for updates",
        "More AI-powered tools",
        "Enterprise automation solutions",
        "Custom workflow automation",
        "Advanced data processing"
      ],
      color: "#008ba3",
      detailedDescription: "Our team is working on innovative automation solutions that will transform business processes across industries. Check back soon to see our latest projects or contact us to discuss custom automation solutions for your specific needs.",
      status: "in-development"
    },
    {
      id: 3,
      title: "Coming Soon",
      image:ComingSoon,
      description: "We're constantly developing new automation solutions",
      features: [
        "Stay tuned for updates",
        "More AI-powered tools",
        "Enterprise automation solutions",
        "Custom workflow automation",
        "Advanced data processing"
      ],
      color: "#00687a",
      detailedDescription: "Our team is working on innovative automation solutions that will transform business processes across industries. Check back soon to see our latest projects or contact us to discuss custom automation solutions for your specific needs.",
      status: "in-development"
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const openRPAForm = () => {
    setShowRPAForm(true);
    document.body.style.overflow = 'hidden';
  };

  const closeRPAForm = () => {
    setShowRPAForm(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="ourproject-page">
      {/* Hero Section */}
      <section className="ourproject-hero">
        <div className="ourproject-hero-content">
          <h1 className='Allh1 headings'>Our Automation Projects</h1>
          <p className="ourproject-hero-subtitle AllP headingpara">Explore our innovative solutions that transform business processes through intelligent automation</p>
          <div className="ourproject-hero-cta">
            <button onClick={openRPAForm} className="ourproject-cta-button">Start Your Project</button>
          </div>
        </div>
        <div className="ourproject-wave-divider">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="#00bcd4"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="#00bcd4"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#00bcd4"></path>
          </svg>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="ourproject-showcase">
        <div className="ourproject-showcase-header">
          <h2 className='Allh1 subheadings'>Featured Projects</h2>
          <p className="AllP headingpara">Innovative solutions driving digital transformation</p>
        </div>
        
        <div className="ourproject-grid">
          {projects.map((project, index) => (
            <div 
              className={`ourproject-card ${project.status === 'in-development' ? 'coming-soon' : ''}`}
              key={project.id}
              style={{ borderTop: `5px solid ${project.color}` }}
            >
              <div className="ourproject-card-image">
                <img src={project.image} alt={project.title} />
                {project.status === 'in-development' && (
                  <div className="coming-soon-badge">Coming Soon</div>
                )}
              </div>
              <div className="ourproject-card-content">
                <h3 className='Allh1 smallheading'>{project.title}</h3>
                <p className="ourproject-card-desc AllP smallpara">{project.description}</p>
                <ul className="ourproject-card-features">
                  {project.features.slice(0, 3).map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <div className="ourproject-card-actions">
                  <button onClick={() => openModal(project)} className="ourproject-card-button">
                    View Details
                  </button>
                  {project.liveUrl && project.status !== 'in-development' && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="ourproject-card-link">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* CTA Section */}
      <section className="ourproject-cta">
        <div className="ourproject-cta-container">
          <h2 className='subheadings Allh1'>Have an Automation Challenge?</h2>
          <p className='headingpara AllP'>Let's collaborate to create innovative solutions for your business</p>
          <button onClick={openRPAForm} className="ourproject-cta-button">Discuss Your Project</button>
        </div>
      </section>
      
      <FooterSection />

      {/* Project Detail Modal */}
      {isModalOpen && selectedProject && (
        <div className="ourproject-modal">
          <div className="ourproject-modal-overlay" onClick={closeModal}></div>
          <div className="ourproject-modal-content" style={{ borderTop: `5px solid ${selectedProject.color}` }}>
            <button className="ourproject-modal-close" onClick={closeModal}>
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
            
            <div className="ourproject-modal-header">
              <img src={selectedProject.image} alt={selectedProject.title} className="ourproject-modal-image" />
              <div className="ourproject-modal-title">
                <h2>{selectedProject.title}</h2>
                <p>{selectedProject.description}</p>
              </div>
            </div>
            
            <div className="ourproject-modal-body">
              <div className="ourproject-modal-details">
                <div className="ourproject-modal-description">
                  <h3>Project Overview</h3>
                  <p>{selectedProject.detailedDescription}</p>
                </div>
                
                <div className="ourproject-modal-features">
                  <h3>Key Features</h3>
                  <ul>
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                {selectedProject.technologies && (
                  <div className="ourproject-modal-technologies">
                    <h3>Technologies Used</h3>
                    <div className="tech-tags">
                      {selectedProject.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="ourproject-modal-actions">
                {selectedProject.liveUrl && selectedProject.status !== 'in-development' && (
                  <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="ourproject-modal-button primary">
                    View Live Project
                  </a>
                )}
                
             
                <button onClick={openRPAForm} className="ourproject-modal-button primary">
                  Request Similar Solution
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* RPA Form Modal */}
      <RPAForm isOpen={showRPAForm} onClose={closeRPAForm} />
    </div>
  );
};

export default OurProject;