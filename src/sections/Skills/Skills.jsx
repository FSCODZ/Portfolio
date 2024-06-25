// src/sections/Skills/Skills.jsx
import styles from "./SkillsStyles.module.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJsSquare,
  FaReact,
  FaNode,
  FaFigma,
  FaGit,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
  const { theme } = useTheme();

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillIcon icon={<FaHtml5 className={styles.icon} color="orange"/>} skill="HTML" />
        <SkillIcon icon={<FaCss3Alt className={styles.icon} color="blue"/>} skill="CSS" />
        <SkillIcon
          icon={<FaJsSquare className={styles.icon} color="yellow"/>}
          skill="JavaScript"
        />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillIcon icon={<FaReact className={styles.icon} color="aqua"/>} skill="React" />
        <SkillIcon icon={<FaNode className={styles.icon} color="green" />} skill="Node" />
        <SkillIcon icon={<FaFigma className={styles.icon} color="blue" />} skill="Figma" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillIcon icon={<FaGit className={styles.icon} />} skill="Git" />
        <SkillIcon
          icon={<FaBootstrap className={styles.icon}color="purple" />}
          skill="Bootstrap"
        />
        <SkillIcon
          icon={<SiTailwindcss className={styles.icon} color="blue"/>}
          skill="Tailwind"
        />
      </div>
    </section>
  );
}

function SkillIcon({ icon, skill }) {
  return (
    <div className={styles.skillItem}>
      <div className={styles.iconContainer}>{icon}</div>
      <div>{skill}</div>
    </div>
  );
}

export default Skills;
