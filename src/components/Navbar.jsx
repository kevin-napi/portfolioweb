import styles from './Navbar.module.css';

const links = ['About', 'Engineering', 'Art', 'Contact'];

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        K. <em className={styles.accent}>Chau</em>
      </div>
      <ul className={styles.links}>
        {links.map((l) => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} className={styles.link}>
              {l}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
