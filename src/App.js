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
import CertsModal from './CertsModal';
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
  //Platforms Modal Images
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
  //Certificates Modal Images
  const certRows = [
    [
      { imgSrc: '/src/img/certs/aerialGunnery.PNG', altText: 'Aerial Gunnery' },
      { imgSrc: '/src/img/certs/aride.avif', altText: 'Aride' },
      { imgSrc: '/src/img/certs/ASAMDegree.avif', altText: 'ASAM Degree' },
      { imgSrc: '/src/img/certs/bell222.PNG', altText: 'Bell 222' },
      { imgSrc: '/src/img/certs/bell412.PNG', altText: 'Bell 412' },
      { imgSrc: '/src/img/certs/BSBADegree.jpg', altText: 'BSBA Degree' },
    ],
    [
      { imgSrc: '/src/img/certs/ccdg.PNG', altText: 'CCDG' },
      { imgSrc: '/src/img/certs/ccpc.PNG', altText: 'CCPC' },
      { imgSrc: '/src/img/certs/cct.jpg', altText: 'CCT' },
      { imgSrc: '/src/img/certs/fireCard.PNG', altText: 'Fire Card' },
      { imgSrc: '/src/img/certs/dui.PNG', altText: 'DUI' },
      { imgSrc: '/src/img/certs/greyOwel.PNG', altText: 'Grey Owel' },
    ],
    [
      { imgSrc: '/src/img/certs/honorable.jpg', altText: 'Honorable' },
      { imgSrc: '/src/img/certs/htpo.PNG', altText: 'HTPO' },
      { imgSrc: '/src/img/certs/kerryMove.jpg', altText: 'Kerry Move' },
      { imgSrc: '/src/img/certs/lbAward.jpg', altText: 'LB Award' },
      { imgSrc: '/src/img/certs/md530fm.PNG', altText: 'MD 530 FM' },
      { imgSrc: '/src/img/certs/osha10b.PNG', altText: 'OSHA 10B' },
    ],
    [
      { imgSrc: '/src/img/certs/pMech.PNG', altText: 'PMech' },
      { imgSrc: '/src/img/certs/post.jpeg', altText: 'Post' },
      { imgSrc: '/src/img/certs/pt6t.PNG', altText: 'PT6T' },
      { imgSrc: '/src/img/certs/sasMl.PNG', altText: 'SAS ML' },
      { imgSrc: '/src/img/certs/sasVa.PNG', altText: 'SAS VA' },
      { imgSrc: '/src/img/certs/topgun.jpg', altText: 'Top Gun' },
    ],
    [{ imgSrc: '/src/img/certs/webDevFund.png', altText: 'Web Dev Fund' }],
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
        <Button variant='primary' onClick={handleShowPlatformModal}>
          Show Platforms
        </Button>{' '}
      </main>
      <Footer />
      <FlightTimeModal
        show={showFlightTimeModal}
        handleClose={handleCloseFlightTimeModal}
      />{' '}
      <PlatformModal
        show={showPlatformModal}
        handleClose={handleClosePlatformModal}
        images={images}
      />{' '}
      <CertsModal certRows={certRows} />
    </div>
  );
}

export default App;
