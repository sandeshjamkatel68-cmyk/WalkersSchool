import { useNavigate } from 'react-router-dom';
import './AdmissionSection.css';

export default function AdmissionSection() {
  const navigate = useNavigate();

  return (
    <section className="admission-panel">
      <div className="admission-bg">
        <img
          src="/images/admission-aerial.jpg"
          alt="Walker School campus aerial view"
          className="admission-bg-img"
        />
        <div className="admission-overlay" />
      </div>

      <div className="admission-panel-content">
        <h2 className="admission-panel-title">ADMISSION</h2>
        <div className="admission-panel-btns">
          <button className="admission-panel-btn" onClick={() => navigate('/visit')}>
            &#62; PLAN YOUR VISIT
          </button>
          <button className="admission-panel-btn" onClick={() => navigate('/admission')}>
            &#62; APPLICATION PROCESS
          </button>
        </div>
      </div>

      <footer className="admission-footer">
        <span className="admission-footer-phone">(770) 427-2689</span>
        <span className="admission-footer-sep">|</span>
        <span><strong>Main Campus</strong> — 700 Cobb Parkway North, Marietta, Ga. 30062</span>
        <span className="admission-footer-sep">|</span>
        <span><strong>Primary School</strong> — 830 Damar Road, Marietta, Ga. 30062</span>
        <div className="admission-footer-socials">
          {['youtube', 'linkedin', 'facebook', 'x', 'instagram'].map((s) => (
            <a key={s} href="#" className="admission-social-icon" aria-label={s}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <circle cx="12" cy="12" r="12" fill="rgba(255,255,255,0.2)" />
              </svg>
            </a>
          ))}
        </div>
      </footer>
    </section>
  );
}
