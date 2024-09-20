import styles from "./SkillsStyles.module.css";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJsSquare, FaReact, FaNode, FaFigma, FaGit } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { useTheme } from "../../common/ThemeContext";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Skills() {
  const { theme } = useTheme();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  return (
    <motion.section
      id="skills"
      className={styles.container}
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <h1 className="sectionTitle">Skills</h1>
      <motion.div className={styles.skillList} variants={itemVariants}>
        <SkillIcon icon={<FaHtml5 className={styles.icon} color="orange" />} skill="HTML" />
        <SkillIcon icon={<FaCss3Alt className={styles.icon} color="blue" />} skill="CSS" />
        <SkillIcon icon={<FaJsSquare className={styles.icon} color="yellow" />} skill="JavaScript" />
      </motion.div>
      <hr />
      <motion.div className={styles.skillList} variants={itemVariants}>
        <SkillIcon icon={<FaReact className={styles.icon} color="aqua" />} skill="React" />
        <SkillIcon icon={<FaNode className={styles.icon} color="green" />} skill="Node" />
        <SkillIcon icon={<FaFigma className={styles.icon} color="blue" />} skill="Figma" />
      </motion.div>
      <hr />
      <motion.div className={styles.skillList} variants={itemVariants}>
        <SkillIcon icon={<FaGit className={styles.icon} />} skill="Git" />
        <SkillIcon icon={<FaBootstrap className={styles.icon} color="purple" />} skill="Bootstrap" />
        <SkillIcon icon={<SiTailwindcss className={styles.icon} color="blue" />} skill="Tailwind" />
      </motion.div>
    </motion.section>
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
