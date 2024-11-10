import React from 'react';
import '../styles/Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <p>Created By Samuel Xanda</p>
      <p>
        <a 
        href="https://github.com/samuelxanda"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link">Github</a>|
        <a
          href="https://instagram.com/niyo_x_samuel"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          Instagram
        </a> 
        |<a
          href="https://facebook.com/samuelxanda"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          Facebook
        </a> |
        <a
          href="https://www.linkedin.com/in/samuel-xanda-88523a283"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          LinkedIn
        </a>
      </p>
      
    </footer>
  );
};

export default Footer;
