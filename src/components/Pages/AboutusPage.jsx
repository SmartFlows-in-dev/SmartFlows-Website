import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/AboutusPage.css';
import Robot from '../../assets/robot3.png';
import Heroimg2 from '../../assets/aboutus2.png'
import Box1 from '../../assets/aboutus-box1.png'
import Box2 from '../../assets/Box2.png'


import aiimgforcard from '../../assets/Artificial_Intelligence_img.png';
import system_integration from '../../assets/system_integration.png';
import TeamImage from '../../assets/teamimg.png';
import FooterSection from '../Sections/FooterSection.jsx';
import RPAForm from '../RPAForm.jsx';
import BeginnerCourseImg from '../../assets/begnner-card.jpeg';
import IntermediateCourseImg from '../../assets/intermidite-coursecard.jpeg';
import AdvancedCourseImg from '../../assets/advanced-course-card.jpeg';

const AboutPage = () => {
  const [projectsCompleted, setProjectsCompleted] = useState(0);
  const [satisfactionRate, setSatisfactionRate] = useState(0);
  const [automationHours, setAutomationHours] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const sectionRefs = useRef([]);

  const handleBookAppointment = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  useEffect(() => {
    const animateStats = () => {
      animateValue(0, 150, 2000, setProjectsCompleted, () => {
        setProjectsCompleted(prev => prev + '+');
      });
      animateValue(0, 100, 2000, setSatisfactionRate, () => {
        setSatisfactionRate(prev => prev + '%');
      });
      animateValue(0, 5000, 2500, setAutomationHours, () => {
        setAutomationHours(prev => prev + '+');
      });
    };

    const animateValue = (start, end, duration, setValue, onComplete) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setValue(Math.floor(progress * (end - start) + start));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else if (onComplete) {
          onComplete();
        }
      };
      window.requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          if (entry.target.classList.contains('aboutpage-stats-section')) {
            animateStats();
          }
        }
      });
    }, { threshold: 0.1 });

    sectionRefs.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const courses = [
    {
      id: 1,
      title: "Beginner Automation",
      level: "Beginner",
      duration: "4 weeks",
      description: "Master the basics of RPA and automation concepts",
      imageUrl: BeginnerCourseImg,
      rating: 4.5,
      students: 120,
      instructor: "John Doe",
      certification: "UiPath Certified Professional",
      features: [
        "Hands-on projects",
        "Expert mentorship",
        "Certification"
      ]
    },
    {
      id: 2,
      title: "Intermediate RPA",
      level: "Intermediate",
      duration: "6 weeks",
      description: "Build complex workflows and integrate systems",
      imageUrl: IntermediateCourseImg,
      rating: 4.8,
      students: 85,
      instructor: "Jane Smith",
      certification: "UiPath Advanced Certified Professional",
      features: [
        "API integrations",
        "Exception handling",
        "Complex workflows"
      ]
    },
    {
      id: 3,
      title: "Advanced AI Automation",
      level: "Advanced",
      duration: "8 weeks",
      description: "Combine RPA with AI/ML for intelligent automation",
      imageUrl: AdvancedCourseImg,
      rating: 4.9,
      students: 45,
      instructor: "Alex Johnson",
      certification: "UiPath AI Specialist",
      features: [
        "Document understanding",
        "Machine learning models",
        "Cognitive automation"
      ]
    }
  ];

  const capabilities = [
    {
      title: "Robotic Process Automation",
      description: "UiPath, Automation Anywhere, Blue Prism, Power Automate with e35555+999999999999999666666nterprise-grade implementations",
      image: Box1,
      ariaLabel: "Robotic Process Automation"
    },
    {
      title: "Artificial Intelligence",
      description: "Document understanding, machine learning, cognitive automation and NLP integration",
      image: aiimgforcard,
      alt: "Artificial Intelligence"
    },
    {
      title: "System Integration",
      description: "REST APIs, database connectors, legacy system automation with seamless data flow",
      image: system_integration,
      alt: "System Integration"
    },
    {
      title: "Process Optimization",
      description: "Process mining, workflow analysis, performance benchmarking and continuous improvement",
       image: Box2,
      ariaLabel: "Process Optimization"
    }
  ];

  return (
    <div className="aboutpage-page">
      <section className="aboutpage-hero" ref={el => sectionRefs.current[0] = el}>
        <div className="aboutpage-hero-content">
          <h1>Transforming Businesses Through Intelligent Automation</h1>
          <p>We deliver cutting-edge automation solutions that drive efficiency, reduce costs, and unlock new possibilities for organizations of all sizes.</p>
          <div className="aboutpage-hero-buttons">
            <Link to="/services" className="aboutpage-btn-primary">Explore Our Services</Link>
            <button className="aboutpage-btn-outline btn-at-top" onClick={handleBookAppointment}>
              Schedule Consultation
            </button>
          </div>
        </div>
        <div className="aboutpage-hero-image">
          <img src={Box2} alt="Automation technology" />
          <div className="aboutpage-glow-effect"></div>
        </div>
      </section>

      <section className="aboutpage-stats-section" ref={el => sectionRefs.current[1] = el}>
        <div className="aboutpage-stats-container">
          <div className="aboutpage-stat-item">
            <div className="aboutpage-stat-number">{projectsCompleted}</div>
            <div className="aboutpage-stat-label">Successful Projects</div>
          </div>
          <div className="aboutpage-stat-item">
            <div className="aboutpage-stat-number">{satisfactionRate}</div>
            <div className="aboutpage-stat-label">Client Satisfaction</div>
          </div>
          <div className="aboutpage-stat-item">
            <div className="aboutpage-stat-number">{automationHours}</div>
            <div className="aboutpage-stat-label">Hours Automated</div>
          </div>
        </div>
      </section>

      <section className="aboutpage-mission-section" ref={el => sectionRefs.current[2] = el}>
        <div className="aboutpage-mission-content">
          <div className="aboutpage-section-tag">OUR MISSION</div>
          <h2>Empowering Digital Transformation</h2>
          <p className="aboutpage-mission-statement">
            We believe automation should be accessible, understandable, and valuable for every organization.
            Our mission is to bridge the gap between technological potential and practical implementation,
            delivering solutions that create measurable impact.
          </p>
          <div className="aboutpage-values-grid">
            <div className="aboutpage-value-card">
              <div className="aboutpage-value-icon" aria-label="Innovation">🚀</div>
              <h3>Innovation</h3>
              <p>Pioneering new approaches to automation challenges with cutting-edge solutions</p>
            </div>
            <div className="aboutpage-value-card">
              <div className="aboutpage-value-icon" aria-label="Excellence">🏆</div>
              <h3>Excellence</h3>
              <p>Reliable solutions with meticulous attention to detail and quality assurance</p>
            </div>
            <div className="aboutpage-value-card">
              <div className="aboutpage-value-icon" aria-label="Partnership">🤝</div>
              <h3>Partnership</h3>
              <p>Working collaboratively to understand and solve your unique business challenges</p>
            </div>
            <div className="aboutpage-value-card">
              <div className="aboutpage-value-icon" aria-label="Impact">📈</div>
              <h3>Impact</h3>
              <p>Delivering solutions that create measurable business value and ROI</p>
            </div>
          </div>
        </div>
        <div className="aboutpage-mission-image">
          <img src={Heroimg2} alt="Our mission visualization" />
        </div>
      </section>

      <section className="aboutpage-team-section" ref={el => sectionRefs.current[3] = el}>
        <div className="aboutpage-team-image">
          <img
            src={TeamImage}
            alt="Our expert team"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/600x400?text=Team+Image';
            }}
          />
        </div>
        <div className="aboutpage-team-content">
          <div className="aboutpage-section-tag">OUR TEAM</div>
          <h2>Automation Experts Driving Your Success</h2>
          <p>
            Our team combines deep technical expertise with business acumen to deliver automation solutions
            that solve real business problems. With certifications across all major RPA platforms and
            experience across industries, we bring the right skills to every engagement.
          </p>
          <div className="aboutpage-team-stats">
            <div className="aboutpage-team-stat">
              <div className="aboutpage-team-stat-number">50+</div>
              <div className="aboutpage-team-stat-label">Certified Experts</div>
            </div>
            <div className="aboutpage-team-stat">
              <div className="aboutpage-team-stat-number">15+</div>
              <div className="aboutpage-team-stat-label">Industries Served</div>
            </div>
          </div>
        </div>
      </section>

      <section className="aboutpage-capabilities-section" ref={el => sectionRefs.current[4] = el}>
        <div className="aboutpage-section-header">
          <div className="aboutpage-section-tag">OUR CAPABILITIES</div>
          <h2>Comprehensive Automation Expertise</h2>
          <p>We combine technical depth with industry knowledge to deliver transformative solutions</p>
        </div>
        <div className="aboutpage-capabilities-grid">
          {capabilities.map((capability, index) => (
            <div className="aboutpage-capability-card" key={index}>
              {capability.icon ? (
                <div className="aboutpage-capability-icon" aria-label={capability.ariaLabel}>
                  {capability.icon}
                </div>
              ) : (
                <img
                  src={capability.image}
                  alt={capability.alt}
                  className="aboutpage-capability-icon-img"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/60x60?text=Icon';
                  }}
                />
              )}
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="aboutpage-courses-section" ref={el => sectionRefs.current[5] = el}>
        <div className="aboutpage-section-header">
          <div className="aboutpage-section-tag">LEARNING</div>
          <h2>Build Your Automation Expertise</h2>
          <p>Comprehensive training programs to develop automation skills at every level</p>
        </div>
        <div className="aboutpage-courses-grid">
          {courses.map((course) => (
            <div className="aboutpage-course-card" key={course.id}>
              <Link
                to={{
                  pathname: "/courses",
                  search: `?level=${course.level}`,
                }}
                className="aboutpage-course-link"
              >
                <div className="aboutpage-course-image-container">
                  <img
                    src={course.imageUrl}
                    alt={course.title}
                    className="aboutpage-course-image"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/400x250?text=Course+Image';
                    }}
                  />
                  <div className="aboutpage-course-badge">{course.level}</div>
                </div>
                <div className="aboutpage-course-content">
                  <h3 className="aboutpage-course-title">{course.title}</h3>
                  <div className="aboutpage-course-meta">
                    <span className="aboutpage-course-duration">{course.duration}</span>
                    <span className="aboutpage-course-rating">
                      <span className="aboutpage-course-stars">★★★★★</span>
                      <span>({course.rating})</span>
                    </span>
                  </div>
                  <p className="aboutpage-course-description">{course.description}</p>
                  <div className="aboutpage-course-features">
                    {course.features.map((feature, index) => (
                      <div key={index} className="aboutpage-course-feature">
                        <span className="aboutpage-course-feature-icon">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="aboutpage-course-footer">
                    <span className="aboutpage-course-students">{course.students}+ students enrolled</span>
                    <span className="aboutpage-course-link-text">View Details →</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="aboutpage-cta" ref={el => sectionRefs.current[6] = el}>
        <div className="aboutpage-cta-content">
          <h2>Ready to Transform Your Business with Automation?</h2>
          <p>Whether you need enterprise automation solutions or want to build expertise within your team, we have the perfect offering for you.</p>
          <div className="aboutpage-cta-buttons">
            <Link to="/courses" className="aboutpage-btn-primary">Get Started</Link>
            <button className="aboutpage-btn-outline btn-at-bottom" onClick={handleBookAppointment}>
              Request Demo
            </button>
          </div>
        </div>
      </section>

      <FooterSection />
      <RPAForm isOpen={showForm} onClose={closeForm} />
    </div>
  );
};

export default AboutPage;