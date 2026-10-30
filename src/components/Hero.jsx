import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import {
  FiArrowDown,
  FiArrowUpRight,
  FiDownload,
  FiMapPin,
} from 'react-icons/fi';
import styles from './Hero.module.css';

const Hero = () => {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduceMotion ? 0 : 0.6,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1],
    },
  });

  return (
    <section id="home" className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <motion.div
          className={styles.introLabel}
          {...reveal(0.1)}
        >
          <span className={styles.labelLine} />
          <span>INFORMATICS GRADUATE · DEVELOPER</span>
        </motion.div>

        <motion.div
          className={styles.headingWrapper}
          {...reveal(0.2)}
        >
          <h1 className={styles.heroTitle}>
            Muhammad Zidan
            <br />
            <span className={styles.nameAccent}>
              Ramadhan<span className={styles.period}>.</span>
            </span>
          </h1>
        </motion.div>

        <motion.div
          className={styles.roleWrapper}
          {...reveal(0.3)}
        >
          <span className={styles.roleStatic}>I build</span>

          <TypeAnimation
            sequence={[
              'web applications.',
              2200,
              'mobile experiences.',
              2200,
              'interactive games.',
              2200,
            ]}
            wrapper="span"
            speed={50}
            deletionSpeed={55}
            className={styles.heroSubtitle}
            repeat={Infinity}
            cursor={!reduceMotion}
          />
        </motion.div>

        <motion.p
          className={styles.heroDescription}
          {...reveal(0.4)}
        >
          I enjoy turning ideas into practical digital experiences,
          from web and mobile applications to interactive projects.
          I care about writing useful software and understanding how
          things work behind the scenes.
        </motion.p>

        <motion.div
          className={styles.cta}
          {...reveal(0.5)}
        >
          <Link
            to="projects"
            smooth
            duration={500}
            offset={-70}
            className={styles.primaryButton}
          >
            View selected work
            <FiArrowUpRight aria-hidden="true" />
          </Link>

          <a
            href="/cv.pdf"
            download
            className={styles.secondaryButton}
          >
            <FiDownload aria-hidden="true" />
            Download CV
          </a>
        </motion.div>

        <motion.div
          className={styles.profileMeta}
          {...reveal(0.6)}
        >
          <span className={styles.location}>
            <FiMapPin aria-hidden="true" />
            Bandung, Indonesia
          </span>

          <span className={styles.metaDivider} />

          <span>Open to opportunities</span>
        </motion.div>
      </div>

      <div className={styles.heroBottom}>
        <span className={styles.bottomNote}>
          SOFTWARE · WEB · INTERACTIVE EXPERIENCES
        </span>

        <Link
          to="about"
          smooth
          duration={500}
          offset={-70}
          className={styles.scrollDown}
          aria-label="Scroll to about section"
        >
          <span>SCROLL TO EXPLORE</span>
          <FiArrowDown aria-hidden="true" />
        </Link>

        <span className={styles.sectionNumber}>01 / 05</span>
      </div>
    </section>
  );
};

export default Hero;