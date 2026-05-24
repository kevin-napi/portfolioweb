import { csProjects } from '../data/portfolio';
import ProjectCard from './ProjectCard';
import styles from './Engineering.module.css';

export default function Engineering() {
  return (
    <section id="engineering" className={styles.section}>
      <div className={`${styles.sHead} reveal`}>
        <span className={styles.sNum}>01</span>
        <h2 className={styles.sTitle}>Engineering Work</h2>
        <div className={styles.sRule} />
      </div>

      <div className={styles.grid}>
        {csProjects.map((p, i) => (
          <ProjectCard key={p.num} {...p} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
}
