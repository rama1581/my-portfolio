import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';
import aboutImage from '../assets/about-me-image.jpg'; 
import { FaAward, FaUsers, FaFolderOpen } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about">
      <h5 className="section-title">Get To Know</h5>
      <h2 className="section-header">About Me</h2>

      <div className={`container ${styles.aboutContainer}`}>
        <motion.div
          className={styles.aboutImage}
          initial={{ rotateY: -90, opacity: 0 }}
          whileInView={{ rotateY: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img src={aboutImage} alt="About Me" />
        </motion.div>

        <div className={styles.aboutContent}>
          <motion.div
             className={styles.aboutCards}
             initial={{ y: 50, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.3}}
          >
            <article className={styles.aboutCard}>
              <FaAward className={styles.aboutIcon} />
              <h5>Experience</h5>
              <small>2+ Years Learning</small>
            </article>
            <article className={styles.aboutCard}>
              <FaUsers className={styles.aboutIcon} />
              <h5>Team Projects</h5>
              <small>5+ In Bandung</small>
            </article>
            <article className={styles.aboutCard}>
              <FaFolderOpen className={styles.aboutIcon} />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </motion.div>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5}}
          >
            Seorang mahasiswa Informatika dari Telkom University yang bersemangat dalam membangun solusi digital yang inovatif. Saya terpesona oleh bagaimana barisan kode dapat diubah menjadi pengalaman pengguna yang fungsional dan indah. Saat ini, saya fokus memperdalam keahlian di bidang Fullstack Development dan UI/UX Design.
          </motion.p>
           <motion.div
             initial={{ y: 50, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.7}}
          >
            <a href="#contact" className="btn btn-primary">Let's Connect</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;