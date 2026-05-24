import { useRef } from 'react';
import { artPieces } from '../data/portfolio';
import ArtPiece from './ArtPiece';
import styles from './ArtGallery.module.css';

export default function ArtGallery() {
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX    = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e) => {
    isDragging.current = true;
    startX.current    = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };
  const onMouseUp   = () => { isDragging.current = false; };
  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    scrollRef.current.scrollLeft = scrollLeft.current - (x - startX.current) * 1.4;
  };

  return (
    <section id="art" className={styles.section}>
      <div className={`${styles.sHead} reveal`}>
        <span className={styles.sNum}>02</span>
        <h2 className={styles.sTitle}>Art &amp; Digital Work</h2>
        <div className={styles.sRule} />
      </div>

      <div className={`${styles.hint} reveal`}>
        <div className={styles.hintLine} />
        Drag to explore
        <div className={styles.hintLine} />
      </div>

      <div
        className={styles.scroll}
        ref={scrollRef}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onMouseMove={onMouseMove}
      >
        <div className={styles.track}>
          {artPieces.map((p, i) => (
            <ArtPiece key={i} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
