import styles from './ProjectCard.module.css';

export default function ProjectCard({ num, title, desc, tags, link, delay = 0 }) {
  return (
    <a
      href={link}
      className={`${styles.card} reveal`}
      style={{ transitionDelay: `${delay}s` }}
      target={link !== '#' ? '_blank' : undefined}
      rel="noreferrer"
    >
      <p className={styles.num}>{num}</p>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{desc}</p>
      <div className={styles.tags}>
        {tags.map((t) => <span key={t} className={styles.tag}>{t}</span>)}
      </div>
      <span className={styles.arrow}>↗</span>
    </a>
  );
}
