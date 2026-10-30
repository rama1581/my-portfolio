import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import styles from './Contact.module.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiLinkedinBoxLine, RiInstagramLine } from 'react-icons/ri';
import { FiArrowUpRight } from 'react-icons/fi';

const contactOptions = [
  {
    icon: MdOutlineEmail,
    platform: 'Email',
    handle: 'muhammadzidanramadhan31@gmail.com',
    link: 'mailto:muhammadzidanramadhan31@gmail.com',
    cta: 'Send an email',
  },
  {
    icon: RiLinkedinBoxLine,
    platform: 'LinkedIn',
    handle: 'Muhammad Zidan Ramadhan',
    link: 'https://www.linkedin.com/in/muhammad-zidan-ramadhan-47b9892a8/',
    cta: 'Connect with me',
  },
  {
    icon: RiInstagramLine,
    platform: 'Instagram',
    handle: '@rama.mzr',
    link: 'https://instagram.com/rama.mzr',
    cta: 'Follow my updates',
  },
];

const Contact = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <motion.div
          className={styles.contactHeader}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.sectionEyebrow}>04 / GET IN TOUCH</span>

          <h2 className={styles.sectionTitle}>
            Let's start a <span>conversation.</span>
          </h2>

          <p className={styles.sectionDescription}>
            Have a project in mind, an opportunity to share, or just want to
            connect? Feel free to reach out.
          </p>
        </motion.div>

        <div className={styles.contactList}>
          {contactOptions.map((option, index) => {
            const Icon = option.icon;
            const isEmail = option.platform === 'Email';

            return (
              <motion.a
                key={option.platform}
                href={option.link}
                target={isEmail ? undefined : '_blank'}
                rel={isEmail ? undefined : 'noopener noreferrer'}
                className={styles.contactOption}
                initial={
                  shouldReduceMotion ? false : { opacity: 0, y: 20 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: shouldReduceMotion ? 0 : index * 0.12,
                }}
              >
                <div className={styles.contactIconWrapper}>
                  <Icon className={styles.contactIcon} />
                </div>

                <div className={styles.contactInfo}>
                  <span className={styles.contactPlatform}>
                    {option.platform}
                  </span>

                  <span className={styles.contactHandle}>
                    {option.handle}
                  </span>
                </div>

                <div className={styles.contactAction}>
                  <span>{option.cta}</span>
                  <FiArrowUpRight className={styles.contactArrow} />
                </div>
              </motion.a>
            );
          })}
        </div>

        <footer className={styles.contactFooter}>
          <span>Bandung, Indonesia</span>
          <span>Designed & built by Muhammad Zidan Ramadhan</span>
        </footer>
      </div>
    </section>
  );
};

export default Contact;