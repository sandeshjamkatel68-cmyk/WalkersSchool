import { useParams, useNavigate } from 'react-router-dom';
import './SubPage.css';

const VALUE_DATA = {
  curiosity: {
    title: 'CURIOSITY',
    eyebrow: 'WE VALUE',
    subtitle: 'Embrace lifelong learning',
    body: `Curiosity is the engine of intellectual growth. At Walker, we cultivate an environment where questions are celebrated, exploration is encouraged, and students discover the joy of learning for its own sake.

Our students are taught to ask why, to dig deeper, and to approach challenges with an open and inquisitive mind. From the youngest students in Primary School to seniors preparing for college, curiosity shapes every classroom experience at Walker.`,
    image: '/images/curiosity.jpg',
  },
  dignity: {
    title: 'DIGNITY',
    eyebrow: 'WE VALUE',
    subtitle: 'Respect the infinite worth of everyone',
    body: `At Walker, we believe every person possesses infinite worth. Dignity means treating every member of our community — students, faculty, staff, and families — with respect and compassion.

Our culture of dignity creates a safe, welcoming environment where students feel seen and valued. It is the foundation of everything we do.`,
    image: '/images/dignity.jpg',
  },
  honor: {
    title: 'HONOR',
    eyebrow: 'WE VALUE',
    subtitle: 'Do what is right',
    body: `Honor at Walker goes beyond following rules — it is a way of life. Our Honor Code calls every student and faculty member to hold themselves to the highest standard of integrity in all they do.

Students graduate Walker with a deep sense of personal responsibility and ethical courage that serves them throughout their lives.`,
    image: '/images/honor.jpg',
  },
  kindness: {
    title: 'KINDNESS',
    eyebrow: 'WE VALUE',
    subtitle: 'Care for others',
    body: `Kindness is woven into the fabric of Walker life. We believe that caring for others — in small moments and large — makes our community stronger and our world better.

Walker students learn to lead with empathy and to be a positive force in the lives of those around them, both on campus and beyond.`,
    image: '/images/kindness.jpg',
  },
};

export default function ValuePage() {
  const { value } = useParams();
  const navigate = useNavigate();
  const data = VALUE_DATA[value] || VALUE_DATA.curiosity;

  return (
    <div className="subpage">
      <div className="subpage-hero" style={{ backgroundImage: `url(${data.image})` }}>
        <div className="subpage-hero-overlay" />
        <div className="subpage-hero-content">
          <p className="subpage-eyebrow">{data.eyebrow}</p>
          <h1 className="subpage-title">{data.title}</h1>
          <p className="subpage-hero-subtitle">{data.subtitle}</p>
        </div>
      </div>

      <div className="subpage-body">
        <div className="subpage-body-inner">
          {data.body.split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
          <button className="subpage-back-btn" onClick={() => navigate('/')}>
            &#8592; Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
