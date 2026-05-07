import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const transparent = pathname === '/';

  return (
    <nav className={`navbar${transparent ? ' navbar--transparent' : ''}`}>
      <Link to="/" className="navbar-logo">
        <svg className="navbar-shield" viewBox="0 0 24 28" fill="none">
          <path
            d="M12 1L2 5v8c0 6 4.5 10.5 10 12 5.5-1.5 10-6 10-12V5L12 1z"
            fill={transparent ? 'white' : 'var(--maroon)'}
          />
          <path d="M9 14l2 2 4-4" stroke={transparent ? 'var(--maroon)' : 'white'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="navbar-logo-text">The Walker School</span>
      </Link>

      <ul className="navbar-links">
        <li><Link to="/admission">INQUIRE</Link></li>
        <li><Link to="/visit">VISIT</Link></li>
        <li><a href="#">SUMMER</a></li>
        <li><a href="#">WALKER WEB</a></li>
      </ul>

      <div className="navbar-actions">
        <button className="navbar-icon-btn" aria-label="Search">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>

        <button className="navbar-menu-btn" aria-label="Open menu" onClick={() => navigate('/')}>
          <span>MENU</span>
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="0" y1="2" x2="22" y2="2" />
            <line x1="0" y1="8" x2="22" y2="8" />
            <line x1="0" y1="14" x2="22" y2="14" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
