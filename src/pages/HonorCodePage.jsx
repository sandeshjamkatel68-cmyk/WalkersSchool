import { useNavigate } from 'react-router-dom';
import './SubPage.css';

export default function HonorCodePage() {
  const navigate = useNavigate();

  return (
    <div className="subpage">
      <div className="subpage-hero" style={{ backgroundImage: 'url(/images/honor-code-students.jpg)' }}>
        <div className="subpage-hero-overlay" />
        <div className="subpage-hero-content">
          <p className="subpage-eyebrow">LEARN ABOUT</p>
          <h1 className="subpage-title">THE WALKER<br />HONOR CODE</h1>
        </div>
      </div>

      <div className="subpage-body">
        <div className="subpage-body-inner">
          <p>
            Through Honor Codes in each division, Walker provides an environment in which our
            community learns to value honesty and respect others. All students and faculty are guided
            by the belief that honor is a way of life rather than a set of rules to follow.
          </p>
          <p>
            The expectation is that our graduates will carry these values with them after they leave
            our campus — that the character formed at Walker will shape how they engage with the
            world throughout their lives.
          </p>
          <p>
            Each division of The Walker School maintains its own age-appropriate Honor Code, with the
            shared foundation that honesty, integrity, and respect are non-negotiable. Students sign
            the Honor Code at the start of each year, affirming their commitment to upholding these
            values in every aspect of school life.
          </p>
          <button className="subpage-back-btn" onClick={() => navigate('/')}>
            &#8592; Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
