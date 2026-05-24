import { useEffect } from 'react';

/**
 * Attaches an IntersectionObserver to all `.reveal` elements
 * and adds the `.in` class when they enter the viewport.
 * Re-runs when `deps` change (e.g. after splash screen hides).
 */
export function useReveal(deps = []) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in'); }),
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
