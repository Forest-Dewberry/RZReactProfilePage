import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const HeroSection = () => {
  const typedRef = useRef();

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'a Data Analyst',
        'learning UI Design',
        'a Freelancer',
        'a Helicopter Mechanic',
        'a Website Developer',
        'an Aerial Gunner',
        'a Cat Lover',
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      id='hero'
      className='d-flex flex-column justify-content-center align-items-center'
    >
      <div className='hero-container' data-aos='fade-in'>
        <h1>Ryan Zierman</h1>
        <p>
          I'm <span ref={typedRef}></span>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
