import { useNavigate } from 'react-router-dom';
import './SubPage.css';

export default function MissionPage() {
  const navigate = useNavigate();

  return (
    <div className="subpage">
      <div className="subpage-hero" style={{ backgroundImage: 'url(/images/mission-crowd.jpg)' }}>
        <div className="subpage-hero-overlay" />
        <div className="subpage-hero-content">
          <p className="subpage-eyebrow">DISCOVERING</p>
          <h1 className="subpage-title">OUR MISSION</h1>
          <p className="subpage-hero-subtitle">
            The Walker School inspires transformative learning through meaningful relationships,
            academic excellence and unique opportunities.
          </p>
        </div>
      </div>

      <div className="subpage-body">
        <div className="subpage-body-inner">
          <p>
            The Walker School was founded on the belief that education is about more than academic
            achievement. It is about developing the whole person — intellectually, ethically, and
            socially — so that every student is prepared to lead a life of meaning and impact.
          </p>
          <p>
            We accomplish this mission through rigorous academics, meaningful relationships between
            students and faculty, and a wide range of extracurricular opportunities that allow every
            student to discover and develop their unique passions and talents.
          </p>
          <p>
            For the eighth year in a row, The Walker School has been named the Best College Prep
            Private School, Best Private High School, and Best Private K-12 school in Cobb County
            by Niche — a testament to the transformative education we provide every day.
          </p>
          <button className="subpage-back-btn" onClick={() => navigate('/')}>
            &#8592; Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
