import { useParams, useNavigate } from 'react-router-dom';
import './SubPage.css';

const DIVISION_DATA = {
  'primary-school': {
    eyebrow: 'EXPLORE',
    title: 'PRIMARY\nSCHOOL',
    subtitle: 'A time of exploration and discovery',
    body: `Primary School at Walker is a time of exploration. Students are developing the problem-solving and social and emotional skills they need to succeed in life.

At Walker, we meet students where they are, fostering independence and curiosity. We provide the tools and space for students to develop a strong academic foundation and the self-confidence they need to begin their lifelong journey of learning and success.

Our Primary School campus at 830 Damar Road provides a nurturing, joyful environment where the youngest Wolverines take their first steps as learners and community members.`,
    image: '/images/division-primary.png',
  },
  'lower-school': {
    eyebrow: 'EXPLORE',
    title: 'LOWER\nSCHOOL',
    subtitle: 'Building strong foundations for lifelong learning',
    body: `Lower School at Walker builds on the curiosity and wonder students develop in Primary School, deepening academic skills and fostering a genuine love of learning.

Students in grades 2–5 engage in a rich curriculum that develops critical thinking, creative problem-solving, and collaborative skills — all within a caring community of educators who know each child personally.`,
    image: '/images/division-lower.png',
  },
  'middle-school': {
    eyebrow: 'EXPLORE',
    title: 'MIDDLE\nSCHOOL',
    subtitle: 'A transformative journey of growth and discovery',
    body: `Middle School at Walker is one of the most dynamic and formative experiences in a student's life. Students in grades 6–8 explore their identities, develop their passions, and step into greater leadership.

Our faculty create a challenging academic environment that also nurtures the whole person, helping students navigate the unique opportunities and complexities of early adolescence with confidence.`,
    image: '/images/division-middle.png',
  },
  'upper-school': {
    eyebrow: 'EXPLORE',
    title: 'UPPER\nSCHOOL',
    subtitle: 'Preparing leaders for a diverse and changing world',
    body: `Upper School at Walker prepares students for success in college and beyond through rigorous academics, transformative extracurricular opportunities, and a culture defined by honor, curiosity, dignity, and kindness.

Our graduates leave Walker ready to lead — in college classrooms, on athletic fields, in artistic endeavors, and in the communities they serve throughout their lives.`,
    image: '/images/division-upper.png',
  },
};

export default function DivisionPage() {
  const { division } = useParams();
  const navigate = useNavigate();
  const data = DIVISION_DATA[division] || DIVISION_DATA['primary-school'];

  return (
    <div className="subpage">
      <div className="subpage-hero" style={{ backgroundImage: `url(${data.image})`, backgroundPosition: 'center top' }}>
        <div className="subpage-hero-overlay" />
        <div className="subpage-hero-content">
          <p className="subpage-eyebrow">{data.eyebrow}</p>
          <h1 className="subpage-title" style={{ whiteSpace: 'pre-line' }}>{data.title}</h1>
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
