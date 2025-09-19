import React, { useState } from 'react';
import '../components/styles/RPAForm.css';

function RPAForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    companySize: '',
    industry: '',
    currentAutomationLevel: '',
    processesToAutomate: '',
    budgetRange: '',
    timeline: '',
    additionalInfo: '',
    terms: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.terms) {
      setSubmitError('You must agree to the terms and conditions');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const scriptUrl = 'https://script.google.com/macros/s/AKfycbwwU2Fgtr777FfvUSLdgj6efE20xOo4jm9yLrjbpGiA0rfvP49AvRh7x1B9zoFuFW-O/exec';
      
      // Convert form data to URL-encoded format
      const formDataEncoded = new URLSearchParams();
      formDataEncoded.append('company_name', formData.companyName);
      formDataEncoded.append('contact_person', formData.contactPerson);
      formDataEncoded.append('email', formData.email);
      formDataEncoded.append('phone', formData.phone);
      formDataEncoded.append('company_size', formData.companySize);
      formDataEncoded.append('industry', formData.industry);
      formDataEncoded.append('current_automation_level', formData.currentAutomationLevel);
      formDataEncoded.append('processes_to_automate', formData.processesToAutomate);
      formDataEncoded.append('budget_range', formData.budgetRange);
      formDataEncoded.append('timeline', formData.timeline);
      formDataEncoded.append('additional_info', formData.additionalInfo);
      formDataEncoded.append('status', 'new');

      // First try without proxy
      let response;
      try {
        response = await fetch(scriptUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formDataEncoded,
          mode: 'no-cors' // Important for Google Apps Script
        });
      } catch (error) {
        console.log('Direct request failed, trying with proxy...');
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        response = await fetch(proxyUrl + scriptUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'X-Requested-With': 'XMLHttpRequest'
          },
          body: formDataEncoded
        });
      }

      // Check if the request actually succeeded
      if (!response.ok && response.status !== 0) { // status 0 happens with no-cors
        throw new Error('Network response was not ok');
      }

      // Reset form if submission is successful
      setFormData({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        companySize: '',
        industry: '',
        currentAutomationLevel: '',
        processesToAutomate: '',
        budgetRange: '',
        timeline: '',
        additionalInfo: '',
        terms: false
      });
      
      onClose();
      alert('Thank you! Our RPA experts will contact you within 24 hours.');

    } catch (error) {
      console.error("Error submitting form: ", error);
      setSubmitError('Failed to submit form. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="rpa-consultation-overlay">
      <div className="rpa-consultation-container">
        <button className="rpa-consultation-close-btn" onClick={onClose} disabled={isSubmitting}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <div className="rpa-consultation-header">
          <h2 className='Allh1'>RPA Consultation Request</h2>
          <p className='AllP'>Complete this form to schedule a free consultation with our automation experts</p>
        </div>
        
        {submitError && (
          <div className="rpa-form-error-message">
            {submitError}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="rpa-form-row">
            <div className="rpa-form-group">
              <label htmlFor="companyName">Company Name *</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div className="rpa-form-group">
              <label htmlFor="contactPerson">Contact Person *</label>
              <input
                type="text"
                id="contactPerson"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
          </div>
          
          <div className="rpa-form-row">
            <div className="rpa-form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div className="rpa-form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>
          </div>
          
          <div className="rpa-form-row">
            <div className="rpa-form-group">
              <label htmlFor="companySize">Company Size *</label>
              <select
                id="companySize"
                name="companySize"
                value={formData.companySize}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              >
                <option value="">Select</option>
                <option value="1-50">1-50 employees</option>
                <option value="51-200">51-200 employees</option>
                <option value="201-1000">201-1000 employees</option>
                <option value="1000+">1000+ employees</option>
              </select>
            </div>
            
            <div className="rpa-form-group">
              <label htmlFor="industry">Industry *</label>
              <select
                id="industry"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              >
                <option value="">Select</option>
                <option value="finance">Finance/Banking</option>
                <option value="healthcare">Healthcare</option>
                <option value="insurance">Insurance</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="retail">Retail/E-commerce</option>
                <option value="telecom">Telecommunications</option>
                <option value="logistics">Logistics/Supply Chain</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          
          <div className="rpa-form-group">
            <label htmlFor="currentAutomationLevel">Current Automation Level *</label>
            <select
              id="currentAutomationLevel"
              name="currentAutomationLevel"
              value={formData.currentAutomationLevel}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            >
              <option value="">Select</option>
              <option value="none">No automation currently</option>
              <option value="basic">Basic macros/scripts</option>
              <option value="some-rpa">Some RPA implemented</option>
              <option value="advanced">Advanced automation solutions</option>
            </select>
          </div>
          
          <div className="rpa-form-group">
            <label htmlFor="processesToAutomate">Processes You Want to Automate *</label>
            <textarea
              id="processesToAutomate"
              name="processesToAutomate"
              value={formData.processesToAutomate}
              onChange={handleChange}
              placeholder="Describe the processes you'd like to automate (e.g., invoice processing, data entry, report generation)"
              rows="3"
              required
              disabled={isSubmitting}
            />
          </div>
          
          <div className="rpa-form-row">
            <div className="rpa-form-group">
              <label htmlFor="budgetRange">Estimated Budget Range</label>
              <select
                id="budgetRange"
                name="budgetRange"
                value={formData.budgetRange}
                onChange={handleChange}
                disabled={isSubmitting}
              >
                <option value="">Select</option>
                <option value="5k-25k">$5,000 - $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value="100k+">$100,000+</option>
                <option value="not-sure">Not sure yet</option>
              </select>
            </div>
            
            <div className="rpa-form-group">
              <label htmlFor="timeline">Implementation Timeline</label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                disabled={isSubmitting}
              >
                <option value="">Select</option>
                <option value="1-3m">1-3 months</option>
                <option value="3-6m">3-6 months</option>
                <option value="6-12m">6-12 months</option>
                <option value="1y+">1+ years</option>
                <option value="urgent">ASAP/Urgent</option>
              </select>
            </div>
          </div>
          
          <div className="rpa-form-group">
            <label htmlFor="additionalInfo">Additional Information</label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              placeholder="Any specific requirements, existing systems, or other details we should know"
              rows="3"
              disabled={isSubmitting}
            />
          </div>
          
          <div className="rpa-form-footer">
            <div className="checkbox-group">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
              <label className='enroll-form-checkbox' htmlFor="terms">
                I agree to the <a href="#">terms and conditions</a> and <a href="#">privacy policy</a>
              </label>
            </div>
            
            <button 
              type="submit" 
              className="rpa-consultation-submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
            
            <p className="rpa-form-disclaimer">
              By submitting this form, you agree to our privacy policy. We'll never share your information without your permission.
            </p>
          </div>
        </form>
      </div>
    </div>
    
  );
}

export default RPAForm;