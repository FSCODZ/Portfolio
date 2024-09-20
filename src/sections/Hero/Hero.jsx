import React from "react";
import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/profilepic.jpeg";
import sun from "../../assets/sun.svg";
import moon from "../../assets/måne.jpg";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";
import { motion } from "framer-motion"; // Import Framer Motion

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;

  // Animation settings for coming in from the right
  const containerVariants = {
    hidden: { opacity: 0, x: 50 },  // Starts 50px to the right
    visible: {
      opacity: 1,
      x: 0, // Moves to its original position
      transition: { duration: 0.8, staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },  // Each item starts 50px to the right
    visible: {
      opacity: 1,
      x: 0,  // Moves to its original position
      transition: { duration: 0.8 }
    }
  };

  return (
    <motion.section
      id="hero"
      className={styles.container}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className={styles.colorModeContainer} variants={itemVariants}>
        <motion.img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of FSCODZ"
          initial={{ x: 100 }}  // Starts 100px to the right
          animate={{ x: 0 }}  // Moves to original position
          transition={{ duration: 0.8 }}
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </motion.div>
      <motion.div className={styles.info} variants={itemVariants}>
        <h1>
          Filip
          <br />
          Stojanovic
        </h1>
        <h2> Upcoming Frontend Developer</h2>
        <motion.div className={styles.iconContainer} variants={itemVariants}>
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
        </motion.div>
        <p className={styles.description}>
          I'm studying as a frontend developer and always seeking opportunities
          to expand my knowledge in web development.
        </p>
        <a href={CV} download>
          <button className="hover">CV</button>
        </a>
      </motion.div>
    </motion.section>
  );
}

export default Hero;
