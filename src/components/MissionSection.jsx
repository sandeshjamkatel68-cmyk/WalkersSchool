import { useNavigate } from 'react-router-dom';
import './MissionSection.css';

export default function MissionSection() {
  const navigate = useNavigate();

  return (
    <section className="mission">
      <div className="mission-content">
        <p className="mission-eyebrow">DISCOVERING</p>
        <h2 className="mission-heading">OUR MISSION</h2>
        <p className="mission-body">
          The Walker School inspires transformative learning through meaningful relationships,
          academic excellence and unique opportunities.
        </p>
        <button className="mission-link" onClick={() => navigate('/mission')}>
          READ MORE <span>+</span>
        </button>
      </div>

      <div className="mission-photo">
        <img
          src="/images/mission-crowd.jpg"
          alt="Walker School students celebrating"
        />
      </div>
    </section>
  );
}
