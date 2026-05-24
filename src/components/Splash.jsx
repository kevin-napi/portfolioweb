import styles from './Splash.module.css';

export default function Splash({ visible }) {
  return (
    <div className={`${styles.splash} ${!visible ? styles.out : ''}`}>
      <h1 className={styles.name}>
        Kevin <em className={styles.accent}>Chau</em>
      </h1>
      <p className={styles.sub}>Engineer &nbsp;·&nbsp; Artist &nbsp;·&nbsp; CS Major</p>
      <div className={styles.track}>
        <div className={styles.fill} />
      </div>
    </div>
  );
}
