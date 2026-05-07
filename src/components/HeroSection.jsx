import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <video
        className="hero-video"
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="hero-overlay" />

      <div className="hero-content">
        <p className="hero-eyebrow">THE WALKER SCHOOL</p>
        <p className="hero-description">
          The Walker School inspires transformative learning through meaningful
          relationships, academic excellence and unique opportunities. With an
          average class size of 15 students, each student is challenged,
          supported and most of all…
        </p>
        <div className="hero-cta">
          <button className="hero-btn" onClick={() => navigate('/admission')}>
            &#62; INQUIRE
          </button>
          <button className="hero-btn hero-btn-outline" onClick={() => navigate('/visit')}>
            &#62; VISIT
          </button>
        </div>
      </div>

      <h1 className="hero-word">KNOWN</h1>
    </section>
  );
}
