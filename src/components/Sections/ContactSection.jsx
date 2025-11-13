import React, { useState, useEffect, useRef } from 'react';
import '../styles/ContactSection.css';
import '../styles/Global.css';

const ContactSection = () => {
  // Refs for animation
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const formRef = useRef(null);
  const infoCardRef = useRef(null);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Animation observer
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const appearOnScroll = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          appearOnScroll.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = [
      sectionRef.current,
      titleRef.current,
      subtitleRef.current,
      formRef.current,
      infoCardRef.current
    ].filter(Boolean);

    elements.forEach(el => appearOnScroll.observe(el));

    return () => appearOnScroll.disconnect();
  }, []);

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(
        '/api',  // Proxied by Netlify function to GAS
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            ...formData,
            timestamp: new Date().toISOString()
          }).toString()
        }
      );

      if (!response.ok) throw new Error('Submission failed');
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle WhatsApp click
  const handleWhatsAppClick = () => {
    const phoneNumber = '+919922668095';
    const message = 'Hi SmartFlows Team 👋,\n\nWe are interested in your RPA services and would like to know more about how automation can help our business.\n\nPlease share more details or let us know a good time to connect.\n\nThanks!';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Pre-filled email content
  const emailAddress = 'corporate@smartflows.in';
  const emailSubject = 'Inquiry from SmartFlows Website';
  const emailBody = `Hello SmartFlows Team,

I hope this message finds you well.

I am reaching out regarding the following query:
[Please briefly describe your query here – e.g., service inquiry, automation requirement, support request, etc.]

Some quick details to help you respond better:
- Name: [Your Full Name]
- Organization: [Your Company Name]
- Contact Number: [Your Contact Number]
- Preferred Time for Contact: [Your availability]

Looking forward to your response.

Best regards,  
[Your Name]`;

  return (
    <section className="contact-section" id="contact" ref={sectionRef}>
      <div className="contact-container">
        <div className="section-header-contacts">
          <h2 className="section-title-contacts Allh1 headings" ref={titleRef}>
            Get in <span>Touch</span>
          </h2>
          <p className="section-subtitle-contacts headingpara AllP" ref={subtitleRef}>
            Have a project in mind or want to discuss possibilities? We'd love to hear from you.
          </p>
        </div>

        <div className="contact-content">
          <form className="contact-form AllP " ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group-contactform">
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder=" " 
                required 
              />
              <label>Your Name</label>
            </div>
            
            <div className="form-group-contactform">
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder=" " 
                required 
              />
              <label>Your Email</label>
            </div>
            
            <div className="form-group-contactform">
              <textarea 
                rows="5" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder=" " 
                required
              ></textarea>
              <label>Your Message</label>
            </div>
            
            {submitStatus === 'success' && (
              <div className="form-message success">
                Thank you! We'll contact you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="form-message error">
                Submission failed. Please try again or contact us directly.
              </div>
            )}
            
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
            </button>
          </form>

          <div className="contact-info">
            <div className="info-card Allh1 " ref={infoCardRef}>
              <h3>Let's Collaborate</h3>
              
              <div className="info-item">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <p>Hinjewadi IT Park, Phase 1, Pune, Maharashtra</p>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <a 
                  href={`mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`}
                  className="contact-link"
                >
                  corporate@smartflows.in
                </a>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <a 
                  href="#" 
                  className="contact-link" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleWhatsAppClick();
                  }}
                >
                  +91 9922668095
                </a>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 8v4l3 3"></path>
                  </svg>
                </div>
                <p>Fast Response Guaranteed: Typically reply within 2 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;