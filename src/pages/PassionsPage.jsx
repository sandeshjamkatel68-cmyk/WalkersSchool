import { useNavigate } from 'react-router-dom';
import './SubPage.css';

const AREAS = [
  {
    title: 'ATHLETICS',
    body: "Walker students compete at the highest levels while learning the values of teamwork, dedication, and sportsmanship. Our Wolverine athletic programs develop both skill and character.",
    image: '/images/passion-athletics.jpg',
  },
  {
    title: 'ARTS',
    body: "From theatre and dance to visual arts and music, Walker's arts programs give students a creative voice and the skills to use it with confidence and joy.",
    image: '/images/passion-arts.jpg',
  },
  {
    title: 'ACADEMICS',
    body: "Rigorous coursework, AP classes, and a faculty dedicated to knowing each student personally create an academic experience that is both challenging and deeply supportive.",
    image: '/images/passion-academics.jpg',
  },
];

export default function PassionsPage() {
  const navigate = useNavigate();

  return (
    <div className="subpage">
      <div className="subpage-hero" style={{ backgroundImage: 'url(/images/passion-athletics.jpg)' }}>
        <div className="subpage-hero-overlay" />
        <div className="subpage-hero-content">
          <p className="subpage-eyebrow">A WELL-ROUNDED EDUCATION</p>
          <h1 className="subpage-title">DISCOVER YOUR<br />PASSIONS</h1>
        </div>
      </div>

      <div className="subpage-body">
        <div className="subpage-body-inner">
          <p>
            Walker students are well-rounded and have the ability to dive into specific areas of
            academic and extracurricular interest while building skills across the board. We believe
            that students should have mastery of a broad range of subjects with a focus on learning
            over competition, as well as the chance to explore multiple opportunities and try new
            activities.
          </p>
        </div>

        <div className="subpage-two-col">
          {AREAS.map((a) => (
            <div className="subpage-info" key={a.title}>
              <h3>{a.title}</h3>
              <p>{a.body}</p>
            </div>
          ))}
        </div>

        <div className="subpage-body-inner">
          <button className="subpage-back-btn" onClick={() => navigate('/')}>
            &#8592; Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
