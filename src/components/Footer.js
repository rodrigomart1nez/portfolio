import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <i className="fas fa-glasses"></i> RM
            </Link>
          </div>
          <small className='website-rights'>Site by Rodrigo Martinez</small>
          <div className='social-icons'>
            <a
              className='social-icon-link mail'
              href='mailto:if722258@iteso.mx'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Mail'
            >
              <i className='fas fa-envelope' />
            </a>
            <a
              className='social-icon-link github'
              href='https://github.com/rodrigomart1nez'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub'
            >
              <i className='fab fa-github' />
            </a>
            <a
              className='social-icon-link resume'
              href='pdfs/resume_español.pdf'
              download='Resume_Rodrigo_Martinez'
              target='_blank'
              aria-label='Resume'
            >
              <i className='fas fa-file' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
