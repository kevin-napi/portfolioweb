import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>Kevin Chau · Portfolio</span>
      <span>CS &amp; Digital Art</span>
      <span>© {new Date().getFullYear()}</span>
    </footer>
  );
}
