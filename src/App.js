import React, { useState } from 'react';
import Header from './components/header';
import HeroSection from './components/heroSection';
import Contact from './components/contact';
import Footer from './components/footer';
import AboutSection from './components/about';
import SkillsSection from './components/skillsSection';
import FactsSection from './components/facts';
import FlightTimeModal from './components/flightTimeModal';
import PlatformModal from './components/PlatformModal';
//import Portfolio from './components/portfolio'; // errors here with browser.dom fix later

import 'bootstrap/dist/js/bootstrap.bundle';
import GLightbox from 'glightbox';
import Isotope from 'isotope-layout';
import Swiper from 'swiper';
import Typed from 'typed.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './App.css';
import './scss/style.scss';
import ServicesSection from './components/services';

function App() {
  const [showFlightTimeModal, setShowFlightTimeModal] = useState(false);
  const [showPlatformModal, setShowPlatformModal] = useState(false);

  const handleCloseFlightTimeModal = () => setShowFlightTimeModal(false);
  const handleShowFlightTimeModal = () => setShowFlightTimeModal(true);

  const handleClosePlatformModal = () => setShowPlatformModal(false);
  const handleShowPlatformModal = () => setShowPlatformModal(true);

  const images = [
    '530skidRiding.JPG',
    '412mercy.JPG',
    '212st.JPG',
    '530gunners.JPG',
    's61.JPG',
    's64tower.JPG',
    'ch53dTanker.JPG',
    'ch53eBoat.jpg',
    '24.jpg',
    '212st.JPG',
    '222mercy.JPG',
    '530s.JPG',
    'bw530b.JPG',
    'bwGunner.JPG',
    'ch53d.JPG',
    'ch54a.JPG',
    'paGuys.JPG',
    'r22.JPG',
    'zandv530.JPG',
    'zandv212.JPG',
  ];

  return (
    <div className='App'>
      <Header />
      <main id='main'>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <FactsSection />
        <ServicesSection />
        <Contact />
        <Button variant='primary' onClick={handleShowFlightTimeModal}>
          Show Flight Time
        </Button>{' '}
        {/* Button to open the FlightTimeModal */}
        <Button variant='primary' onClick={handleShowPlatformModal}>
          Show Platforms
        </Button>{' '}
        {/* Button to open the PlatformModal */}
      </main>
      <Footer />
      <FlightTimeModal
        show={showFlightTimeModal}
        handleClose={handleCloseFlightTimeModal}
      />{' '}
      {/* FlightTimeModal component */}
      <PlatformModal
        show={showPlatformModal}
        handleClose={handleClosePlatformModal}
        images={images}
      />{' '}
      {/* PlatformModal component */}
    </div>
  );
}

export default App;
