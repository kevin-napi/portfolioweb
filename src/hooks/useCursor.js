import { useEffect, useRef } from 'react';

/**
 * Drives the custom cursor dot + lagging ring.
 * Adds `art-zone` class to <body> when the cursor is over
 * the art hero half or the art section.
 */
export function useCursor() {
  const mx = useRef(0);
  const my = useRef(0);
  const rx = useRef(0);
  const ry = useRef(0);

  useEffect(() => {
    const dot  = document.getElementById('cursor');
    const ring = document.getElementById('cursor-ring');
    if (!dot || !ring) return;

    const onMove = (e) => {
      mx.current = e.clientX;
      my.current = e.clientY;
      dot.style.left = e.clientX + 'px';
      dot.style.top  = e.clientY + 'px';

      // Switch accent when over the art side
      const artHalf    = document.getElementById('art-hero-half');
      const artSection = document.getElementById('art');
      const inArtHalf = artHalf && (() => {
        const r = artHalf.getBoundingClientRect();
        return e.clientX >= r.left && e.clientX <= r.right &&
               e.clientY >= r.top  && e.clientY <= r.bottom;
      })();
      const inArtSection = artSection && (() => {
        const r = artSection.getBoundingClientRect();
        return e.clientY >= r.top && e.clientY <= r.bottom;
      })();
      document.body.classList.toggle('art-zone', !!(inArtHalf || inArtSection));
    };

    document.addEventListener('mousemove', onMove);

    let raf;
    const animate = () => {
      rx.current += (mx.current - rx.current) * 0.1;
      ry.current += (my.current - ry.current) * 0.1;
      ring.style.left = rx.current + 'px';
      ring.style.top  = ry.current + 'px';
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
}
