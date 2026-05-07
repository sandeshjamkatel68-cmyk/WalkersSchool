import { useEffect, useState } from 'react';
import './IntroAnimation.css';

export default function IntroAnimation({ onComplete }) {
  const [phase, setPhase] = useState('zooming');

  useEffect(() => {
    const t = setTimeout(() => setPhase('exiting'), 3200);
    return () => clearTimeout(t);
  }, []);

  function handleTransitionEnd(e) {
    if (phase === 'exiting' && e.propertyName === 'opacity') {
      setPhase('done');
      onComplete?.();
    }
  }

  if (phase === 'done') return null;

  return (
    <div
      className={`intro${phase === 'exiting' ? ' intro--exit' : ''}`}
      onTransitionEnd={handleTransitionEnd}
    >
      <video className="intro-video" src="/videos/hero.mp4" autoPlay muted loop playsInline />
      <div className="intro-blend">
        <h1 className={`intro-heading${phase === 'zooming' ? ' intro-heading--zoom' : ''}`}>
          WE BELIEVE
        </h1>
      </div>
    </div>
  );
}
