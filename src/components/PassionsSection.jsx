import { useNavigate } from 'react-router-dom';
import './PassionsSection.css';

const PASSIONS = [
  {
    slug: 'athletics',
    label: 'ATHLETICS',
    image: '/images/passion-athletics.jpg',
  },
  {
    slug: 'arts',
    label: 'ARTS',
    image: '/images/passion-arts.jpg',
  },
  {
    slug: 'academics',
    label: 'ACADEMICS',
    image: '/images/passion-academics.jpg',
  },
];

export default function PassionsSection() {
  const navigate = useNavigate();

  return (
    <section className="passions">
      <div className="passions-content">
        <p className="passions-eyebrow">A WELL-ROUNDED EDUCATION</p>
        <h2 className="passions-heading">
          DISCOVER YOUR<br />PASSIONS
        </h2>
        <p className="passions-body">
          Walker students are well-rounded and have the ability to dive into specific areas of
          academic and extracurricular interests while building skills across the board. We believe
          that students should have a mastery of a broad range of subjects with a focus on learning
          over competition, as well as the chance to explore multiple opportunities and try new
          activities.
        </p>
        <button className="passions-link" onClick={() => navigate('/passions')}>
          READ MORE <span>+</span>
        </button>
      </div>

      <div className="passions-cards">
        {PASSIONS.map((p) => (
          <div
            className="passion-card"
            key={p.slug}
            onClick={() => navigate('/passions')}
          >
            <img src={p.image} alt={p.label} />
            <div className="passion-card-overlay">
              <button className="passion-card-plus">+</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
