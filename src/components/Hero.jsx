import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      {/* CS Half */}
      <div className={`${styles.half} ${styles.csHalf}`}>
        <div className={styles.csGrid} />
        <span className={styles.decoNum}>01</span>
        <p className={styles.halfTag}>Computer Science</p>
        <h1 className={styles.heroTitle}>
          Building<br />systems that<br />think.
        </h1>
        <p className={styles.heroDesc}>
          CS student with a passion for clean code, elegant architecture,
          and solving hard problems from first principles.
        </p>
        <a href="#engineering" className={`${styles.heroCta} ${styles.ctaCs}`}>
          View projects <span>→</span>
        </a>
      </div>

      {/* Divider */}
      <div className={styles.divider}>
        <div className={styles.divChip}>&amp; also</div>
      </div>

      {/* Art Half */}
      <div className={`${styles.half} ${styles.artHalf}`} id="art-hero-half">
        <div className={styles.artBlob} aria-hidden="true">
          <svg viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <circle cx="120" cy="200" r="240" fill="#3a7fb5" opacity="0.5" />
            <circle cx="480" cy="500" r="200" fill="#7aaed4" opacity="0.3" />
            <circle cx="280" cy="700" r="140" fill="#5b9fd4" opacity="0.25" />
          </svg>
        </div>
        <span className={`${styles.decoNum} ${styles.decoLight}`}>02</span>
        <p className={styles.halfTag}>Digital Art</p>
        <h1 className={`${styles.heroTitle} ${styles.heroTitleArt}`}>
          Making things<br />that <em>feel</em>.
        </h1>
        <p className={`${styles.heroDesc} ${styles.heroDescArt}`}>
          Digital artist exploring color, form, and expression —
          where code ends and creativity begins.
        </p>
        <a href="#art" className={`${styles.heroCta} ${styles.ctaArt}`}>
          View gallery <span>→</span>
        </a>
      </div>
    </section>
  );
}
