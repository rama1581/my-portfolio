import React from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiLinkedinBoxLine, RiInstagramLine } from 'react-icons/ri'; 

const Contact = () => {
  const contactOptions = [
    {
      icon: <MdOutlineEmail className={styles.contactIcon} />,
      platform: 'Email',
      handle: 'muhammadzidanramadhan31@gmail.com',
      link: 'mailto:muhammadzidanramadhan31@gmail.com',
      cta: 'Send a message',
    },
    {
      icon: <RiLinkedinBoxLine className={styles.contactIcon} />,
      platform: 'LinkedIn',
      handle: 'Muhammad Zidan Ramadhan',
      link: 'https://www.linkedin.com/in/muhammad-zidan-ramadhan-47b9892a8/', 
      cta: 'View Profile',
    },
    {
      icon: <RiInstagramLine className={styles.contactIcon} />,
      platform: 'Instagram',
      handle: '@rama.mzr', 
      link: 'https://instagram.com/rama.mzr', 
      cta: 'Follow Me',
    },
  ];

  return (
    <section id="contact">
      <h5 className="section-title">&gt; Establishing Connection...</h5>
      <h2 className="section-header">[ Find Me On ]</h2>

      <div className={`container ${styles.contactContainer}`}>
        {contactOptions.map((option, index) => (
          <motion.a
            key={index}
            href={option.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactOption}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {option.icon}
            <h4>{option.platform}</h4>
            <h5>{option.handle}</h5>
            <span className={styles.ctaLink}>{option.cta}</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Contact;