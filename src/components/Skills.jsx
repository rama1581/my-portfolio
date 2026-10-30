import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import styles from './Skills.module.css';

import {
  SiGo,
  SiCplusplus,
  SiFlutter,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiJavascript,
  SiPython,
  SiUnity,
  SiTailwindcss,
  SiSpringboot,
  SiMysql,
  SiFigma,
  SiSupabase,
  SiGithub,
  SiAndroidstudio,
  SiGit,
} from 'react-icons/si';

const skillGroups = [
  {
    number: '01',
    title: 'Development',
    description: 'Languages & application development',
    skills: [
      { icon: <SiGo />, name: 'Go' },
      { icon: <SiCplusplus />, name: 'C++' },
      { icon: <SiJavascript />, name: 'JavaScript' },
      { icon: <SiPython />, name: 'Python' },
      { icon: <SiReact />, name: 'React' },
      { icon: <SiNextdotjs />, name: 'Next.js' },
      { icon: <SiFlutter />, name: 'Flutter' },
      { icon: <SiSpringboot />, name: 'Spring Boot' },
      { icon: <SiNodedotjs />, name: 'Node.js' },
      { icon: <SiUnity />, name: 'Unity' },
    ],
  },
  {
    number: '02',
    title: 'Tools & Platforms',
    description: 'Development workflow & interface design',
    skills: [
      { icon: <SiGit />, name: 'Git' },
      { icon: <SiGithub />, name: 'GitHub' },
      { icon: <SiFigma />, name: 'Figma' },
      { icon: <SiAndroidstudio />, name: 'Android Studio' },
      { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
    ],
  },
  {
    number: '03',
    title: 'Data & Backend',
    description: 'Databases & backend services',
    skills: [
      { icon: <SiMysql />, name: 'MySQL' },
      { icon: <SiSupabase />, name: 'Supabase' },
    ],
  },
];

const Skills = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={`container ${styles.skillsContainer}`}>
        <motion.header
          className={styles.sectionHeading}
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0 : 0.6 }}
        >
          <span className={styles.sectionEyebrow}>
            02 / CAPABILITIES
          </span>

          <h2 className={styles.sectionTitle}>
            Tools of
            <br />
            <span>the trade.</span>
          </h2>

          <p className={styles.sectionDescription}>
            Technologies I've explored and used to bring ideas
            into working applications.
          </p>
        </motion.header>

        <div className={styles.skillGroups}>
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              className={styles.skillGroup}
              key={group.number}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: reduceMotion ? 0 : 0.5,
                delay: reduceMotion ? 0 : groupIndex * 0.08,
              }}
            >
              <div className={styles.groupHeading}>
                <span className={styles.groupNumber}>
                  {group.number}
                </span>

                <div className={styles.groupInfo}>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                </div>
              </div>

              <div className={styles.skillList}>
                {group.skills.map((skill) => (
                  <div
                    className={styles.skillItem}
                    key={skill.name}
                  >
                    <span className={styles.skillIcon}>
                      {skill.icon}
                    </span>

                    <span className={styles.skillName}>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className={styles.skillsFooter}>
          <span>BUILT THROUGH PRACTICE.</span>
          <span>REFINED THROUGH CURIOSITY.</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;