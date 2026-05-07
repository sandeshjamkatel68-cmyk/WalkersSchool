import { Children, useEffect, useRef } from 'react';
import './HorizontalScroller.css';

export default function HorizontalScroller({ children }) {
  const count = Children.count(children);
  const ref = useRef(null);
  const busy = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const STEP = () => el.clientWidth / 2;
    const MAX = () => (count * el.clientWidth) - el.clientWidth;

    function scrollBy(dir) {
      if (busy.current) return;
      busy.current = true;
      const next = Math.max(0, Math.min(MAX(), el.scrollLeft + dir * STEP()));
      el.scrollTo({ left: next, behavior: 'smooth' });
      setTimeout(() => { busy.current = false; }, 600);
    }

    function onWheel(e) {
      if (e.deltaY === 0) return;
      e.preventDefault();
      scrollBy(e.deltaY > 0 ? 1 : -1);
    }

    function onKey(e) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        scrollBy(1);
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        scrollBy(-1);
      }
    }

    el.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKey);
    return () => {
      el.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKey);
    };
  }, [count]);

  return (
    <div className="hs-outer" ref={ref}>
      <div className="hs-track" style={{ '--panel-count': count }}>
        {children}
      </div>
    </div>
  );
}
