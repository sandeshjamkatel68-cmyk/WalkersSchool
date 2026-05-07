import { useNavigate } from 'react-router-dom';
import './AwardSection.css';

export default function AwardSection() {
  const navigate = useNavigate();

  return (
    <section className="award">
      <div className="award-left">
        <img
          className="award-student"
          src="/images/award-student.jpg"
          alt="Walker School student"
        />
      </div>

      <div className="award-content">
        <p className="award-eyebrow">THAT'S WHY FOR THE EIGHTH YEAR IN A ROW, WE ARE</p>
        <h2 className="award-headline">
          COBB<br />
          COUNTY'S BEST<br />
          PRIVATE<br />
          SCHOOL
        </h2>
        <p className="award-body">
          The Walker School has again been named the Best College Prep Private School, Best
          Private High School and Best Private K-12 school in Cobb County by Niche.
        </p>

        <button className="award-read-more" onClick={() => navigate('/mission')}>
          READ MORE <span className="award-plus">+</span>
        </button>
      </div>
    </section>
  );
}
