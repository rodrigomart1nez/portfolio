import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
      showButton()
  }, [])

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMenu}>
            <i className="fas fa-glasses"></i> RM 
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/aboutme'
                className='nav-links'
                onClick={closeMenu}
              >
                About Me
              </Link>
            </li>
            <li>
              <a
                href='pdfs/resume.pdf'
                download='Resume_Rodrigo_Martinez'
                className='nav-links-mobile'
                onClick={closeMenu}
              >
                Resume      <i className="far fa-file-pdf"></i>
              </a>
            </li>
          </ul>
          {button && <a href='pdfs/resume.pdf' download='Resume_Rodrigo_Martinez'> <Button buttonStyle='btn--outline'>Resume   <i className="far fa-file-pdf"></i></Button> </a>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
