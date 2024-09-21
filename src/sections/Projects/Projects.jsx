import styles from "./ProjectsStyles.module.css";
import väder from "../../assets/väder.png";
import ProjectCard from "../../common/ProjectCard";
import CIO from "../../assets/CIO.jpeg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <motion.section
      id="projects"
      className={styles.container}
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={CIO}
          link="https://cioforetag.netlify.app/"
          h3="CIO"
          p="E-commerce"
        />
        <ProjectCard
          src={väder}
          link="https://weather-fs.netlify.app/"
          h3="WEATHERFZ"
          p="Weather app"
        />
      </div>
    </motion.section>
  );
}

export default Projects;
