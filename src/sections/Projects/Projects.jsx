import styles from "./ProjectsStyles.module.css";
import weather from "../../assets/weather.jpg";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={weather}
          link="https://github.com/FSCODZ/Weather-App/tree/main/weather-app"
          h3="WEATHERFZ"
          p="Weather app"
        />
      </div>
    </section>
  );
}

export default Projects;
