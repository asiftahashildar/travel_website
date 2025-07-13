import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>© 2025 Tour Operator. All rights reserved.</p>
        <p>
          Phone: +91 7795516519 | Email: rajatravels@gmail.com
        </p>
        <div className="socials">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;