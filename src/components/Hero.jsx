import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import styles from './Hero.module.css';
import { FiArrowDown, FiDownload } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className={styles.heroContainer}>
      <div className={`container ${styles.heroContent}`}>
        <motion.h5
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.5 }}
        >
          <span className={styles.greeting}>&gt; Hello, I am</span>
        </motion.h5>

        <motion.h1 className={styles.heroTitle}>
          Muhammad Zidan Ramadhan.
        </motion.h1>

        <TypeAnimation
          sequence={[
            'A Fullstack Developer', 2000,
            'A UI/UX Enthusiast', 2000,
            'A Problem Solver', 2000,
            'A Lifelong Learner', 2000,
          ]}
          wrapper="h2"
          speed={50}
          className={styles.heroSubtitle}
          repeat={Infinity}
        />

        <motion.p
          className={styles.heroDescription}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.8 }}
        >
          Crafting robust and beautiful web applications from Bandung, Indonesia.
        </motion.p>
        
        <motion.div
          className={styles.cta}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 3 }}
        >
          <a href="/cv.pdf" download className="btn btn-primary">
            <FiDownload /> Download CV
          </a>
          <Link to="contact" smooth={true} duration={500} offset={-70} className="btn">
            Let's Talk
          </Link>
        </motion.div>
      </div>

      <Link to="about" smooth={true} duration={500} offset={-70} className={styles.scrollDown}>
        <FiArrowDown />
        <span>Scroll</span>
      </Link>
    </section>
  );
};

export default Hero;