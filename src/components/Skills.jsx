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
  SiLaravel,
  SiFirebase,
  SiPhp,
  SiHtml5,
  SiCss3,
  SiBlender,
  SiCloudflare,
  SiLinux,
} from 'react-icons/si';

import { FaJava } from 'react-icons/fa';

const skillGroups = [
  {
    number: '01',
    title: 'Development',
    description: 'Programming languages & application development',
    skills: [
      { icon: <SiGo />, name: 'Go' },
      { icon: <SiCplusplus />, name: 'C++' },
      { icon: <FaJava />, name: 'Java' },
      { icon: <SiJavascript />, name: 'JavaScript' },
      { icon: <SiPython />, name: 'Python' },
      { icon: <SiPhp />, name: 'PHP' },
      { icon: <SiHtml5 />, name: 'HTML5' },
      { icon: <SiCss3 />, name: 'CSS3' },
      { icon: <SiReact />, name: 'React' },
      { icon: <SiNextdotjs />, name: 'Next.js' },
      { icon: <SiFlutter />, name: 'Flutter' },
      { icon: <SiUnity />, name: 'Unity' },
    ],
  },
  {
    number: '02',
    title: 'Backend & Data',
    description: 'Server-side development & data management',
    skills: [
      { icon: <SiLaravel />, name: 'Laravel' },
      { icon: <SiSpringboot />, name: 'Spring Boot' },
      { icon: <SiNodedotjs />, name: 'Node.js' },
      { icon: <SiMysql />, name: 'MySQL' },
      { icon: <SiSupabase />, name: 'Supabase' },
      { icon: <SiFirebase />, name: 'Firebase' },
    ],
  },
  {
    number: '03',
    title: 'Tools & Platforms',
    description: 'Development workflow & creative tools',
    skills: [
      { icon: <SiGit />, name: 'Git' },
      { icon: <SiGithub />, name: 'GitHub' },
      { icon: <SiFigma />, name: 'Figma' },
      { icon: <SiAndroidstudio />, name: 'Android Studio' },
      { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
      { icon: <SiBlender />, name: 'Blender' },
    ],
  },
  {
    number: '04',
    title: 'Infrastructure & Networking',
    description: 'Network administration & infrastructure',
    skills: [
      { icon: <SiCloudflare />, name: 'Cloudflare' },
      { icon: <SiLinux />, name: 'Linux' },
      { icon: null, name: 'Networking' },
      { icon: null, name: 'Firewall' },
      { icon: null, name: 'DNS' },
      { icon: null, name: 'HTTPS' },
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
            03 / CAPABILITIES
          </span>

          <h2 className={styles.sectionTitle}>
            Tools of
            <br />
            <span>the trade.</span>
          </h2>

          <p className={styles.sectionDescription}>
            Technologies and tools I've explored through building
            applications, developing games, and working with
            infrastructure.
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
                    {skill.icon && (
                      <span className={styles.skillIcon}>
                        {skill.icon}
                      </span>
                    )}

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