import React from 'react';
import '../styles/Hero.css';
import Title from '../assets/title2-3.png'; 
import Mine from "../assets/background.png"
const HeroSection = () => {
  return (
    <div className="hero-section">
      {/* <a href="https://hackclub.com/">
        <img className="logo" src="https://assets.hackclub.com/banners/2024.svg" alt="Hack Club" />
      </a> */}
      <div className="hero-content">
      <div className="hero-about-image-container">
        <img className="about-image" src={Title} alt="Counterspell Rwamagana" />
        {/* <img src={Mine} className='hero-image123'/> */}
      </div>
      <div className='hero-subtitle'>
        <p>A beginner-friendly game jam for high schoolers, happening in Rwamagana, where <span className='date'>artists</span>,<span className='date'>musicians</span> , and <span className='date'>programmers</span> come together to build apps and games. <span className='date'>NOVEMBER 23-24 2024</span></p>
      </div>
        <div className="hero-buttons">
        
          <a 
          
            href="https://lu.ma/event/evt-ZCX9WADwuwPJvQF"
            data-luma-action="checkout"
            data-luma-event-id="evt-ZCX9WADwuwPJvQF">
            <button className="btn primary-btn">Register Now</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;