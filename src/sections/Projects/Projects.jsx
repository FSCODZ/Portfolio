import styles from "./ProjectsStyles.module.css";
import väder from "../../assets/väder.png";
import ProjectCard from "../../common/ProjectCard";
import CIO from "../../assets/CIO.jpeg"

function Projects() {
  return (
    <section id="projects" className={styles.container}>
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
          link="https://github.com/FSCODZ/Weather-App/tree/main/weather-app"
          h3="WEATHERFZ"
          p="Weather app"
        />
      </div>
    </section>
  );
}

export default Projects;
