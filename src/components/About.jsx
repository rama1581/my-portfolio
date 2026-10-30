import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import styles from './About.module.css';
import aboutImage from '../assets/about-me-image.jpg';
import { FiArrowUpRight } from 'react-icons/fi';

const About = () => {
  const reduceMotion = useReducedMotion();

  const highlights = [
    {
      number: '01',
      title: 'Development',
      description: 'Web, mobile applications, and Unity games.',
    },
    {
      number: '02',
      title: 'Infrastructure',
      description: 'Networking, deployment, and troubleshooting.',
    },
    {
      number: '03',
      title: 'Recognition',
      description: 'Best Presenter · IC2IE 2026.',
    },
  ];

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: {
      duration: reduceMotion ? 0 : 0.6,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1],
    },
  });

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={`container ${styles.aboutContainer}`}>
        <motion.header
          className={styles.sectionHeading}
          {...reveal(0)}
        >
          <span className={styles.sectionEyebrow}>
            01 / ABOUT
          </span>

          <h2 className={styles.sectionTitle}>
            More than
            <br />
            just <span>code.</span>
          </h2>

          <p className={styles.headingDescription}>
            A little about the person behind the projects.
          </p>
        </motion.header>

        <div className={styles.aboutGrid}>
          <motion.figure
            className={styles.aboutImage}
            {...reveal(0.1)}
          >
            <img
              src={aboutImage}
              alt="Zidan Ramadhan"
              loading="lazy"
            />

            <figcaption className={styles.imageCaption}>
              <span>MUHAMMAD ZIDAN RAMADHAN</span>
              <span>BANDUNG, INDONESIA</span>
            </figcaption>
          </motion.figure>

          <div className={styles.aboutContent}>
            <motion.div
              className={styles.aboutDescription}
              {...reveal(0.15)}
            >
              <span className={styles.contentLabel}>
                A BIT ABOUT MYSELF
              </span>

              <p className={styles.leadText}>
                I'm an Informatics graduate from Telkom University
                with an interest in building useful software and
                understanding the systems behind it.
              </p>

              <p>
                My experience spans web and mobile development,
                network administration, and game development with
                Unity. During my internship, I contributed to a
                school website and worked with infrastructure,
                deployment, and technical troubleshooting.
              </p>

              <p>
                I've also served as a practicum assistant for
                Object-Oriented Programming and Operating Systems.
                I enjoy exploring new technologies, learning through
                hands-on projects, and finding practical ways to
                solve problems.
              </p>
            </motion.div>

            <motion.div
              className={styles.highlights}
              {...reveal(0.25)}
            >
              <span className={styles.contentLabel}>
                WHAT I WORK ON
              </span>

              <div className={styles.highlightList}>
                {highlights.map((item) => (
                  <article
                    className={styles.highlightItem}
                    key={item.number}
                  >
                    <span className={styles.highlightNumber}>
                      {item.number}
                    </span>

                    <div className={styles.highlightText}>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>

                    <span className={styles.highlightMark}>
                      ↗
                    </span>
                  </article>
                ))}
              </div>
            </motion.div>

            <motion.div
              className={styles.aboutActions}
              {...reveal(0.3)}
            >
              <a href="#contact" className={styles.contactLink}>
                Let's talk
                <FiArrowUpRight aria-hidden="true" />
              </a>
            </motion.div>
          </div>
        </div>

        <div className={styles.sectionFooter}>
          <span>CURIOUS BY NATURE.</span>
          <span>ALWAYS BUILDING.</span>
        </div>
      </div>
    </section>
  );
};

export default About;