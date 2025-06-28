import React from 'react';
import styles from './Footer.module.css';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>

      <ul className={styles.permalinks}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className={styles.footerSocials}>
        <a href="https://github.com/rama1581" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/muhammad-zidan-ramadhan-47b9892a8/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://instagram.com/rama.mzr" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>

      <div className={styles.footerCopyright}>
        <small>&copy; {new Date().getFullYear()} Muhammad Zidan Ramadhan. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;