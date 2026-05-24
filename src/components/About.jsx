import { csSkills, artSkills } from "../data/portfolio";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={`${styles.sHead} reveal`}>
        <span className={styles.sNum}>00</span>
        <h2 className={styles.sTitle}>About</h2>
        <div className={styles.sRule} />
      </div>

      <div className={styles.grid}>
        <div className={`${styles.col} reveal`}>
          <p className={styles.colLabel}>The Engineer</p>
          <p className={styles.colText}>
            I&apos;m a Computer Science major who loves building things. From
            web apps to ML pipelines. I care about software that&apos;s
            well-crafted, performant, and actually useful.
          </p>
          <div className={styles.tags}>
            {csSkills.map((s) => (
              <span key={s} className={styles.tag}>
                {s}
              </span>
            ))}
          </div>
        </div>

        <div
          className={`${styles.col} ${styles.colRight} reveal`}
          style={{ transitionDelay: "0.15s" }}
        >
          <p className={styles.colLabel}>The Artist</p>
          <p className={styles.colText}>
            Outside of code, I create digital art. Illustrations, generative
            pieces, and visual experiments. Art and engineering aren&apos;t
            opposites; they&apos;re two languages for the same curiosity.
          </p>
          <div className={styles.tags}>
            {artSkills.map((s) => (
              <span key={s} className={styles.tag}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
