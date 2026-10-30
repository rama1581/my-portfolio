import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import styles from './Projects.module.css';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';

import IMG1 from '../assets/project1.png';
import IMG2 from '../assets/project2.png';
import IMG3 from '../assets/project3.png';

const projectsData = [
  {
    id: '01',
    image: IMG1,
    title: 'USED',
    category: 'GAME DEVELOPMENT',
    technologies: ['Unity', 'C#', '3D'],
    description:
      'A first-person narrative game about loneliness, complicated friendships, and the feeling of being taken for granted. Built with Unity 3D, the experience focuses on environmental storytelling, everyday interactions, and emotionally driven scenes.',
    links: [
      {
        label: 'Play on itch.io',
        url: 'https://rama1581.itch.io/used',
        type: 'external',
      },
    ],
  },
  {
    id: '02',
    image: IMG2,
    title: 'KOST IN',
    category: 'WEB DEVELOPMENT',
    technologies: ['Java', 'Spring Boot'],
    description:
      'A web application for discovering boarding-house information around Telkom University, developed collaboratively as part of the IF-46-03-G7 team.',
    links: [
      {
        label: 'Source code',
        url: 'https://github.com/rama1581/IF-46-03-G7',
        type: 'github',
      },
    ],
  },
  {
    id: '03',
    image: IMG3,
    title: 'FJB Tel-U',
    category: 'WEB APPLICATION',
    technologies: ['React', 'Tailwind CSS', 'Firebase'],
    description:
      'A marketplace web application for the Telkom University community, designed to support buying and selling through a straightforward interface and Firebase-powered data handling.',
    links: [
      {
        label: 'Live website',
        url: 'https://fjbtelu.vercel.app/',
        type: 'external',
      },
    ],
  },
];

const Projects = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={`container ${styles.projectsContainer}`}>
        <motion.header
          className={styles.sectionHeading}
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0 : 0.6 }}
        >
          <span className={styles.sectionEyebrow}>
            03 / SELECTED WORK
          </span>

          <h2 className={styles.sectionTitle}>
            Things I've
            <br />
            <span>put together.</span>
          </h2>

          <p className={styles.sectionDescription}>
            A selection of projects I've built, explored, and learned
            from along the way.
          </p>
        </motion.header>

        <div className={styles.projectsList}>
          {projectsData.map((project, index) => (
            <motion.article
              key={project.id}
              className={styles.projectItem}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.08 }}
              transition={{
                duration: reduceMotion ? 0 : 0.55,
                delay: reduceMotion ? 0 : (index % 2) * 0.08,
              }}
            >
              <div className={styles.projectImageWrapper}>
                <img
                  className={styles.projectImage}
                  src={project.image}
                  alt={`${project.title} project preview`}
                  loading="lazy"
                />

                <span className={styles.projectImageIndex}>
                  {project.id}
                </span>
              </div>

              <div className={styles.projectContent}>
                <div className={styles.projectMeta}>
                  <span className={styles.projectCategory}>
                    {project.category}
                  </span>

                  <span className={styles.projectTechnologies}>
                    {project.technologies.join(' · ')}
                  </span>
                </div>

                <h3 className={styles.projectTitle}>
                  {project.title}
                </h3>

                <p className={styles.projectDescription}>
                  {project.description}
                </p>

                <div className={styles.projectLinks}>
                  {project.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                      aria-label={`${link.label}: ${project.title}`}
                    >
                      {link.type === 'github' ? (
                        <FiGithub aria-hidden="true" />
                      ) : (
                        <FiArrowUpRight aria-hidden="true" />
                      )}

                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <footer className={styles.projectsFooter}>
          <span>SELECTED PROJECTS</span>
          <span>LEARNING BY BUILDING.</span>
        </footer>
      </div>
    </section>
  );
};

export default Projects;