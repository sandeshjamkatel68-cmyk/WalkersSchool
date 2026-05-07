import { useNavigate } from 'react-router-dom';
import './SubPage.css';
import './VisitPage.css';

export default function VisitPage() {
  const navigate = useNavigate();

  return (
    <div className="subpage">
      <div className="subpage-hero" style={{ backgroundImage: 'url(/images/visit-hero.jpg)' }}>
        <div className="subpage-hero-overlay" />
        <div className="subpage-hero-content">
          <p className="subpage-eyebrow">PLAN YOUR</p>
          <h1 className="subpage-title">VISIT</h1>
        </div>
      </div>

      <div className="visit-intro">
        <p className="visit-intro-lead">
          We offer numerous opportunities for prospective families to get to know our school community.
        </p>
      </div>

      <div className="subpage-body">
        <div className="visit-sections">
          <div className="visit-section">
            <h2 className="visit-section-title">CAMPUS TOURS</h2>
            <p>
              We invite prospective families and students to visit our campus for a small group tour.
              During the tour, families will observe classes in session, learn about our curriculum and
              extracurricular opportunities, and see our Wolverines in action.
            </p>
            <button className="subpage-visit-card-btn">&#62; REGISTER FOR A CAMPUS TOUR</button>
          </div>

          <div className="visit-section">
            <h2 className="visit-section-title">SHADOW VISITS</h2>
            <p className="visit-italic">
              (for prospective students applying to grades 2–12)
            </p>
            <p>
              <strong>Lower School</strong> students applying to grades 2–5 will be matched with a grade-level
              peer who will take them to classes, recess, and lunch. Students who have officially applied
              will meet with one of our administrators to fulfill the academic assessment portion of the
              application process. The day begins at 8:15 a.m. and ends at approximately 1:15 p.m.,
              depending on grade level.
            </p>
            <button className="subpage-visit-card-btn">&#62; SCHEDULE A SHADOW VISIT</button>
          </div>
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
