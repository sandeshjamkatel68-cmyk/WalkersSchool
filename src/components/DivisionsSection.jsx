import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DivisionsSection.css';

const DIVISIONS = [
  {
    slug: 'primary-school',
    label: 'PRIMARY SCHOOL',
    heading: 'PRIMARY\nSCHOOL',
    body: 'Primary School is a time of exploration. Students are developing the problem-solving and social and emotional skills they need to succeed in life.',
    detail: 'At Walker, we meet students where they are, fostering independence and curiosity. We provide the tools and space for students to develop a strong academic foundation and the self-confidence they need to begin their lifelong journey of learning and success.',
    image: '/images/division-primary.png',
    bg: '#c8253a',
  },
  {
    slug: 'lower-school',
    label: 'LOWER SCHOOL',
    heading: 'LOWER\nSCHOOL',
    body: 'Lower School builds on curiosity and fosters a love of learning. Students develop critical thinking skills and strong academic habits.',
    detail: "Walker's Lower School provides a nurturing environment where students grow as learners and individuals, building the academic and social foundations they need for lifelong success.",
    image: '/images/division-lower.jpg',
    bg: '#a01e30',
  },
  {
    slug: 'middle-school',
    label: 'MIDDLE SCHOOL',
    heading: 'MIDDLE\nSCHOOL',
    body: 'Middle School is a transformative time. Students explore their identities and passions while developing academic rigor and leadership skills.',
    detail: "At Walker, Middle School students are challenged to think critically, collaborate meaningfully, and grow as leaders in our community.",
    image: '/images/division-middle.png',
    bg: '#7a1525',
  },
  {
    slug: 'upper-school',
    label: 'UPPER SCHOOL',
    heading: 'UPPER\nSCHOOL',
    body: 'Upper School prepares students to lead in a diverse and ever-changing world through rigorous academics and transformative opportunities.',
    detail: 'Walker graduates are leaders who excel in college and beyond, carrying the values of curiosity, dignity, honor and kindness with them for life.',
    image: '/images/division-upper.png',
    bg: '#5a1020',
  },
];

export default function DivisionsSection() {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const current = DIVISIONS[active];

  return (
    <section className="divisions">
      <div className="divisions-vision">
        <p className="divisions-eyebrow">OUR VISION</p>
        <p className="divisions-vision-body">
          Walker graduates are leaders who excel in a diverse and ever-changing world.
        </p>
        <p className="divisions-vision-hint">
          Learn more about the different divisions at The Walker School by using the
          navigation to the right.
        </p>
      </div>

      <div className="divisions-student" style={{ background: current.bg }}>
        <img
          key={current.slug}
          src={current.image}
          alt={current.label}
          className="divisions-student-img"
        />
      </div>

      <div className="divisions-right">
        <nav className="divisions-nav">
          {DIVISIONS.map((d, i) => (
            <button
              key={d.slug}
              className={`divisions-nav-item${active === i ? ' active' : ''}`}
              onClick={() => setActive(i)}
            >
              {d.label}
              {active === i && <span className="divisions-nav-dash" />}
            </button>
          ))}
        </nav>

        <div className="divisions-detail">
          <h2 className="divisions-heading">{current.heading}</h2>
          <p className="divisions-body-strong">{current.body}</p>
          <p className="divisions-body">{current.detail}</p>
          <button
            className="divisions-discover-btn"
            onClick={() => navigate(`/divisions/${current.slug}`)}
          >
            &#62; DISCOVER {current.label}
          </button>
        </div>
      </div>
    </section>
  );
}
