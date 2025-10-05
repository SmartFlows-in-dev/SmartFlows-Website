import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import '../components/styles/Navbar.css';
import RPAForm from './RPAForm';
import Mainlogo from '../assets/Logomain3.png';

// Simple debounce function
const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(null, args), wait);
  };
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  const handleBookAppointment = () => {
    closeMenu();
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  // Scroll to section if hash exists in URL
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const handleInPageNavigation = (hash, e) => {
    e.preventDefault();
    closeMenu();

    if (location.pathname === '/') {
      // If on home page, scroll to section
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page with hash
      navigate(`/${hash}`);
    }
  };

  useEffect(() => {
    const handleScroll = debounce(() => {
      setScrolled(window.scrollY > 10);
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-logo">
            <Link to="/" onClick={closeMenu}>
              <img src={Mainlogo} alt="SmartFlows Logo" className="logo-image" />
            </Link>
          </div>

          <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
            {/* About Dropdown */}
            <div
              className="dropdown-container"
              onMouseEnter={() => !isOpen && setOpenDropdown('about')}
              onMouseLeave={() => !isOpen && setOpenDropdown(null)}
            >
              <button
                className={`nav-link dropdown-toggle ${openDropdown === 'about' ? 'active' : ''}`}
                onClick={() => toggleDropdown('about')}
                aria-expanded={openDropdown === 'about'}
                aria-haspopup="true"
              >
                About
                <svg
                  className={`dropdown-icon ${openDropdown === 'about' ? 'open' : ''}`}
                  viewBox="0 0 24 24"
                >
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </button>
              <div className={`dropdown-menu ${openDropdown === 'about' ? 'show' : ''}`}>
                <NavLink to="/aboutuspage" onClick={closeMenu} className="dropdown-item">
                  About Us
                </NavLink>
                <a
                  href="#testimonials"
                  onClick={(e) => handleInPageNavigation('#testimonials', e)}
                  className="dropdown-item"
                >
                  Testimonials
                </a>
                <NavLink to="/careerpage" onClick={closeMenu} className="dropdown-item">
                  Careers
                </NavLink>
              </div>
            </div>

            {/* Services Dropdown */}
            <div
              className="dropdown-container"
              onMouseEnter={() => !isOpen && setOpenDropdown('services')}
              onMouseLeave={() => !isOpen && setOpenDropdown(null)}
            >
              <button
                className={`nav-link dropdown-toggle ${openDropdown === 'services' ? 'active' : ''}`}
                onClick={() => toggleDropdown('services')}
                aria-expanded={openDropdown === 'services'}
                aria-haspopup="true"
              >
                Services
                <svg
                  className={`dropdown-icon ${openDropdown === 'services' ? 'open' : ''}`}
                  viewBox="0 0 24 24"
                >
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </button>
              <div className={`dropdown-menu ${openDropdown === 'services' ? 'show' : ''}`}>
                <NavLink to="/services" onClick={closeMenu} className="dropdown-item">
                  Services
                </NavLink>
                <NavLink to="/ourprojects" onClick={closeMenu} className="dropdown-item">
                  Our Projects
                </NavLink>
                <a
                  href="https://schools.smartflows.in/"          
                  onClick={closeMenu}
                  className="dropdown-item"
                >
                  Schools Portal
                </a>

              </div>
            </div>

            {/* Resources Dropdown */}
            <div
              className="dropdown-container"
              onMouseEnter={() => !isOpen && setOpenDropdown('resources')}
              onMouseLeave={() => !isOpen && setOpenDropdown(null)}
            >
              <button
                className={`nav-link dropdown-toggle ${openDropdown === 'resources' ? 'active' : ''}`}
                onClick={() => toggleDropdown('resources')}
                aria-expanded={openDropdown === 'resources'}
                aria-haspopup="true"
              >
                Resources
                <svg
                  className={`dropdown-icon ${openDropdown === 'resources' ? 'open' : ''}`}
                  viewBox="0 0 24 24"
                >
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </button>
              <div className={`dropdown-menu ${openDropdown === 'resources' ? 'show' : ''}`}>
                <NavLink to="/courses" onClick={closeMenu} className="dropdown-item">
                  Courses
                </NavLink>
                <NavLink to="/blogpage" onClick={closeMenu} className="dropdown-item">
                  Blogs
                </NavLink>
              </div>
            </div>

            {/* Contact link in mobile menu */}
            <a
              href="#contact"
              onClick={(e) => handleInPageNavigation('#contact', e)}
              className="nav-link mobile-contact-link"
            >
              Contact
            </a>

            {/* Desktop button container */}
            <div className="contact-and-button">
              <div className="button-container">
                <button className="navbar-btn" onClick={handleBookAppointment}>
                  Book a Demo
                </button>
              </div>
            </div>
          </div>

          {/* Mobile button container */}
          <div className="ham-and-demo-formobile">
            <div className="mobile-button-container">
              <button className="navbar-btn" onClick={handleBookAppointment}>
                Book Demo
              </button>
            </div>
            <button
              className={`hamburger ${isOpen ? 'active' : ''}`}
              onClick={toggleMenu}
              aria-label="Menu"
              aria-expanded={isOpen}
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>
      </nav>

      <RPAForm isOpen={showForm} onClose={closeForm} />
    </>
  );
}

export default Navbar;