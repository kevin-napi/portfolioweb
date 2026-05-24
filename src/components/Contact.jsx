import { contactLinks } from '../data/portfolio';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className="reveal">
        <h2 className={styles.heading}>
          Let&apos;s make<br />
          something<br />
          <em className={styles.accent}>together.</em>
        </h2>
      </div>

      <div className={`${styles.links} reveal`} style={{ transitionDelay: '0.15s' }}>
        {contactLinks.map((l) => (
          <a
            key={l.type}
            href={l.href}
            className={styles.link}
            target={l.href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
          >
            <span className={styles.linkName}>{l.name}</span>
            <span className={styles.linkType}>{l.type}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
