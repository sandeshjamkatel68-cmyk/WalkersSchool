import { useNavigate } from 'react-router-dom';
import './HonorCodeSection.css';

export default function HonorCodeSection() {
  const navigate = useNavigate();

  return (
    <section className="honor-code">
      <div className="honor-code-photo">
        <img
          src="/images/honor-code-students.jpg"
          alt="Walker School students walking"
        />
      </div>

      <div className="honor-code-content">
        <p className="honor-code-eyebrow">LEARN ABOUT</p>
        <h2 className="honor-code-heading">
          THE WALKER<br />HONOR CODE
        </h2>
        <p className="honor-code-body">
          Through Honor Codes in each division, Walker provides an environment in which our
          community learns to value honesty and respect others. All students and faculty are guided
          by the belief that honor is a way of life rather than a set of rules to follow, and the
          expectation is that our graduates will carry these values with them after they leave our
          campus.
        </p>
        <button className="honor-code-link" onClick={() => navigate('/honor-code')}>
          READ MORE <span>+</span>
        </button>
      </div>
    </section>
  );
}
