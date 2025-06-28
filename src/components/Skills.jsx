import React from 'react';
import { motion } from 'framer-motion';
import styles from './Skills.module.css';
import { SiReact, SiSpringboot, SiUnity, SiTailwindcss, SiFlutter, SiJavascript, SiHtml5, SiCss3, SiNodedotjs, SiExpress, SiMongodb, SiPython, SiFigma, SiGit, SiNextdotjs, SiGo, SiCcc, SiCplusplus, SiMysql, SiSupabase, SiGithub, SiAndroidstudio } from 'react-icons/si';

const skillsData = [
  { icon: <SiGo />, name: 'Go' },
  { icon: <SiCplusplus />, name: 'C++' },
  { icon: <SiFlutter />, name: 'Flutter' },
  { icon: <SiReact />, name: 'React' },
  { icon: <SiNextdotjs />, name: 'Next.js' },
  { icon: <SiNodedotjs />, name: 'Node.js' },
  { icon: <SiJavascript />, name: 'JavaScript' },
  { icon: <SiPython />, name: 'Python' },
  { icon: <SiUnity />, name: 'Unity' },
  { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
  { icon: <SiSpringboot />, name: 'Java Spring Boot' },
  { icon: <SiMysql />, name: 'MySQL' },
  { icon: <SiFigma />, name: 'Figma' },
  { icon: <SiSupabase />, name: 'Supabase' },
  { icon: <SiGithub />, name: 'Github' },
  { icon: <SiAndroidstudio />, name: 'Android Studio' },
  { icon: <SiGit />, name: 'Git' },
];

const Skills = () => {
  return (
    <section id="skills">
      <h5 className="section-title">&gt; Loading Modules...</h5>
      <h2 className="section-header">[ My Skillset ]</h2>
      <div className={`container ${styles.skillsContainer}`}>
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className={styles.skillHex}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, delay: index * 0.1 }}
          >
            <div className={styles.skillHexInner}>
              <div className={styles.skillIcon}>{skill.icon}</div>
              <span className={styles.skillName}>{skill.name}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;