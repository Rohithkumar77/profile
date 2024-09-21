import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= 150) {
          setActiveSection(section.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2>Sana Soudagar</h2>
      </div>
      <ul className="navbar__links">
        {['About-me', 'Skills', 'Certifications', 'Work-Experience'].map((item) => (
          <li key={item}>
            <a href={`#${item}`} className={activeSection === item ? 'active' : ''}>
              {item.replace('-', ' ')}
              {activeSection === item && <span className="dot"></span>}
            </a>
          </li>
        ))}
      </ul>

      <div className="navbar__toggle" onClick={() => setToggle(!toggle)}>
        <span className="navbar__toggle-icon">{toggle ? '✖' : '☰'}</span>
      </div>

      {toggle && (
        <ul className="navbar__mobile">
          {['About-me', 'Skills', 'Certifications', 'Work-Experience'].map((item) => (
            <li key={`mobile-link-${item}`}>
              <a
                href={`#${item}`}
                onClick={() => setToggle(false)}
                className={activeSection === item ? 'active' : ''}
              >
                {item.replace('-', ' ')}
                {activeSection === item && <span className="dot"></span>}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
