import React from "react";
import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/profilepic.jpeg";
import sun from "../../assets/sun.svg";
import moon from "../../assets/måne.jpg";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of FSCODZ"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Filip
          <br />
          Stojanovic
        </h1>
        <h2> Upcoming Frontend Developer</h2>
        <div className={styles.iconContainer}>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className={styles.icon} />
          </a>
          <a
            href="https://github.com/FSCODZ?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className={styles.icon} />
          </a>
          <a
            href="https://www.linkedin.com/in/filip-s-84537a201/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className={styles.icon} />
          </a>
        </div>
        <p className={styles.description}>
          I'm studying as a frontend developer and always seeking opportunities
          to expand my knowledge in web development.
        </p>
        <a href={CV} download>
          <button className="hover">CV</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
