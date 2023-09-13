import React from 'react';

const HeroSection = () => {
  return (
    <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
      <div className="hero-container" data-aos="fade-in">
        <h1>Ryan Zierman</h1>
        <p>I'm <span className="typed" data-typed-html="true" data-typed-items="a Data Analyst, learning UI Design, a Freelancer, a Helicopter Mechanic, a Website Developer, an Aerial Gunner, a Cat Lover"></span></p>
      </div>
    </section>
  );
};

export default HeroSection;