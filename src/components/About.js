import React from 'react';
import '../styles/About.css';
// import aboutImage from '../assets/title2-3.png';

const About = () => {
  return (
    <>
    <div className="about-section">
    <div className="about-content">
        <h2 className="about-title">
          What is <span>Counterspell?</span>
        </h2>
        <p className="about-description">
          Counterspell is a creative, beginner-friendly game jam happening right here in <span>Rwamagana</span>, bringing together high school students interested in <span>coding</span>, <span>art</span>, <span>music</span>, and <span>game design</span>. Whether you're Expert coder or completely new to game development, this event is for you.
        </p>
      </div>
      <div className="about-content">
        <h2  className="about-title">During this event, you'll have the chance to:</h2>
        <p className="about-description">
            Build your own game with a team or solo.
            Attend workshops designed for beginners and learn new skills.
            Get help from mentors and make friends along the way.
            Receive swag, enjoy free meals, and participate in fun challenges.
        </p>
         <p className="about-description">
        You don’t need any prior experience, just your creativity and willingness to learn! Join us for an exciting weekend of making games and connecting with like-minded people.</p>
      </div>
       <div className="about-content">
        <h2 className="about-title">Build, Learn, Play</h2>
       <p className="about-description">No matter your skill level, join fellow creatives for an unforgettable experience of teamwork, innovation, and fun at Rwamagana’s first game jam!</p>
      </div>
      
      
    </div>
    </>
    
  );
};

export default About;
