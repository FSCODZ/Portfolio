import styles from "./NavbarStyles.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
