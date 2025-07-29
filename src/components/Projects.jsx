import React from 'react';
import { motion } from 'framer-motion';
import styles from './Projects.module.css';
import { FaChrome, FaGithub, FaInternetExplorer } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
// Ganti dengan gambar proyek Anda di folder src/assets
import IMG1 from '../assets/project1.png';
import IMG2 from '../assets/project2.png';
import IMG3 from '../assets/project3.png';
import IMG4 from '../assets/project4.png';
import IMG5 from '../assets/project5.png';

const projectsData = [
  {
    id: 1,
    image: IMG1,
    title: 'No Escape Game (Unity 3D)',
    description: 'First game project using Unity 3D, showcasing my skills in game development and design. Many Bugs, but I learned a lot.',
    github: 'https://rama1581.itch.io/no-escape-game',
  },
  {
    id: 2,
    image: IMG2,
    title: 'KOST IN(Java, Java Spring Boot)',
    description: 'Web that provides information about boarding houses in Telkom University, built with Java and Spring Boot. This project was developed as part of the IF-46-03-G7 team.',
    github: 'https://github.com/rama1581/IF-46-03-G7',
  },
   {
    id: 3,
    image: IMG3,
    title: 'FJB Tel-U(React Vite, Tailwind CSS, Firebase)',
    description: 'A web application for buying and selling items within the Telkom University community, built with React Vite, Tailwind CSS, and Firebase for real-time data handling.',
    github: 'https://fjbtelu.vercel.app/',
  },

  {
    id: 4,
    image: IMG4,
    title: 'Mie Tengah Malam Game (Unity 3D)',
    description: 'An engaging game project developed using Unity 3D, focusing on gameplay mechanics and user experience.',
    github: 'https://rama1581.itch.io/mie-tengah-malam',
  },

  {
    id: 5,
    image: IMG5,
    title: 'Just Escape Game (Unity 3D)',
    description: 'An immersive game project created with Unity 3D, emphasizing puzzle-solving and exploration.',
    github: 'https://rama1581.itch.io/justescape',
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h5 className="section-title">My Recent Work</h5>
      <h2 className="section-header">Projects</h2>

      <div className={`container ${styles.projectsContainer}`}>
        {projectsData.map((proj) => (
          <motion.article
            key={proj.id}
            className={styles.projectItem}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.projectItemImage}>
              <img src={proj.image} alt={proj.title} />
            </div>
            <h3>{proj.title}</h3>
            <p className={styles.projectDescription}>{proj.description}</p>
            <div className={styles.projectItemCta}>
              <a href={proj.github} className="btn" target="_blank" rel="noopener noreferrer">
                <FaChrome /> Try It
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;