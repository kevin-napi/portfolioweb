import styles from './Cursor.module.css';

export default function Cursor() {
  return (
    <>
      <div id="cursor" className={styles.dot} />
      <div id="cursor-ring" className={styles.ring} />
    </>
  );
}
