import React from 'react';
import './styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Hi, I'm SRIPONSANKAR D P</h1>
        <h2>Frontend Developer</h2>
        <p>I build amazing web experiences with React</p>
        <a href="#contact" className="cta-button">Get In Touch</a>
      </div>
    </section>
  );
};

export default Hero;