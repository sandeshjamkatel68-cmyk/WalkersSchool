import { useNavigate } from 'react-router-dom';
import './WeValueSection.css';

const VALUES = [
  {
    id: '01',
    slug: 'curiosity',
    title: 'CURIOSITY',
    subtitle: 'Embrace lifelong learning',
    image: '/images/curiosity.jpg',
  },
  {
    id: '02',
    slug: 'dignity',
    title: 'DIGNITY',
    subtitle: 'Respect the infinite worth of everyone',
    image: '/images/dignity.jpg',
  },
  {
    id: '03',
    slug: 'honor',
    title: 'HONOR',
    subtitle: 'Do what is right',
    image: '/images/honor.jpg',
  },
  {
    id: '04',
    slug: 'kindness',
    title: 'KINDNESS',
    subtitle: 'Care for others',
    image: '/images/kindness.jpg',
  },
];

export default function WeValueSection() {
  const navigate = useNavigate();

  return (
    <section className="we-value">
      <div className="we-value-left">
        <img
          className="we-value-student"
          src="/images/student-hero.jpg"
          alt="Walker School student"
        />
      </div>

      <div className="we-value-right">
        <h2 className="we-value-heading">WE VALUE</h2>

        <div className="value-cards">
          {VALUES.map((v) => (
            <div className="value-card" key={v.id}>
              <span className="value-card-number">{v.id}</span>

              <div className="value-card-img-wrap">
                <img
                  className="value-card-image"
                  src={v.image}
                  alt={v.title}
                />
              </div>

              <h3 className="value-card-title">{v.title}</h3>
              <p className="value-card-subtitle">{v.subtitle}</p>

              <button
                className="value-card-btn"
                onClick={() => navigate(`/values/${v.slug}`)}
              >
                &#62; LEARN MORE
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
