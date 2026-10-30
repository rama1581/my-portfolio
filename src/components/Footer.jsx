import React from 'react';
import styles from './Footer.module.css';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/rama1581',
      icon: FaGithub,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/muhammad-zidan-ramadhan-47b9892a8/',
      icon: FaLinkedin,
    },
    {
      label: 'Instagram',
      href: 'https://instagram.com/rama.mzr',
      icon: FaInstagram,
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerTop}>
          <a href="#home" className={styles.footerBrand}>
            <span className={styles.brandMark}>ZR.</span>
            <span className={styles.brandName}>
              Muhammad Zidan Ramadhan
            </span>
          </a>

          <span className={styles.footerLocation}>
            Bandung, Indonesia
          </span>
        </div>

        <div className={styles.footerDivider} />

        <div className={styles.footerMiddle}>
          <nav className={styles.footerNavigation} aria-label="Footer navigation">
            {navigation.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className={styles.footerSocials}>
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                >
                  <Icon />
                  <FiArrowUpRight className={styles.socialArrow} />
                </a>
              );
            })}
          </div>
        </div>

        <div className={styles.footerBottom}>
          <small>
            &copy; {currentYear} Muhammad Zidan Ramadhan.
          </small>

          <small className={styles.footerCredit}>
            Designed & built with care.
          </small>

          <a href="#home" className={styles.backToTop}>
            Back to top <span>↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;