import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navbar.module.css';

const navLinks = ['home', 'about', 'skills', 'projects', 'contact'];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className={`${styles.navbar} ${
        isScrolled ? styles.scrolled : ''
      }`}
      aria-label="Main navigation"
    >
      <div className={styles.navContainer}>
        <Link
          to="home"
          smooth
          duration={500}
          className={styles.logo}
          onClick={closeMobileMenu}
          aria-label="Muhammad Zidan Ramadhan, home"
        >
          <span className={styles.logoMark}>ZR.</span>
          <span className={styles.logoText}>Muhammad Zidan Ramadhan</span>
        </Link>

        <button
          type="button"
          className={`${styles.mobileMenuIcon} ${
            isMobileMenuOpen ? styles.menuOpen : ''
          }`}
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="portfolio-navigation"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul
          id="portfolio-navigation"
          className={`${styles.navMenu} ${
            isMobileMenuOpen ? styles.active : ''
          }`}
        >
          {navLinks.map((link, index) => (
            <li key={link}>
              <Link
                to={link}
                smooth
                duration={500}
                spy
                offset={-85}
                activeClass={styles.activeLink}
                className={styles.navLink}
                onClick={closeMobileMenu}
              >
                <span className={styles.navIndex}>
                  0{index + 1}
                </span>
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;