import { useNavigate } from 'react-router-dom';
import './SubPage.css';

export default function AdmissionPage() {
  const navigate = useNavigate();

  return (
    <div className="subpage">
      <div className="subpage-hero" style={{ backgroundImage: 'url(/images/admission-aerial.jpg)' }}>
        <div className="subpage-hero-overlay" />
        <div className="subpage-hero-content">
          <h1 className="subpage-title">ADMISSION</h1>
        </div>
      </div>

      <div className="subpage-body">
        <div className="subpage-body-inner">
          <p>
            The Walker School welcomes families who are seeking a transformative educational
            experience for their children. Our admission process is designed to help us understand
            each applicant as a whole person — academically, socially, and personally.
          </p>
          <p>
            We invite you to begin your Walker journey by inquiring, scheduling a visit, or starting
            the application process. Our admission team is ready to guide your family through every
            step.
          </p>
        </div>

        <div className="subpage-visit-grid">
          <div className="subpage-visit-card">
            <h3>INQUIRE</h3>
            <p>
              Connect with our admission team to learn more about The Walker School and how we can
              support your child's growth and success.
            </p>
            <button className="subpage-visit-card-btn">&#62; CONTACT US</button>
          </div>
          <div className="subpage-visit-card">
            <h3>APPLY</h3>
            <p>
              Ready to take the next step? Begin your application and join the Walker community.
            </p>
            <button className="subpage-visit-card-btn">&#62; START APPLICATION</button>
          </div>
          <div className="subpage-visit-card">
            <h3>VISIT</h3>
            <p>
              Schedule a campus tour or shadow visit to experience Walker firsthand.
            </p>
            <button className="subpage-visit-card-btn" onClick={() => navigate('/visit')}>
              &#62; PLAN YOUR VISIT
            </button>
          </div>
          <div className="subpage-visit-card">
            <h3>TUITION</h3>
            <p>
              Learn about tuition, financial assistance, and the investment in your child's future
              at Walker.
            </p>
            <button className="subpage-visit-card-btn">&#62; VIEW TUITION INFO</button>
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
