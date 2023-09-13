import Header from './components/header';
import HeroSection from './components/heroSection';
import Contact from './components/contact';
import Footer from './components/footer';
import AboutSection from './components/about';
import SkillsSection from './components/skillsSection';
import FactsSection from './components/facts';

import 'bootstrap/dist/js/bootstrap.bundle';
import GLightbox from 'glightbox';
import Isotope from 'isotope-layout';
import Swiper from 'swiper';
import Typed from 'typed.js';
//import { Waypoint } from 'react-waypoint';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'; //??
import './App.css';
import './scss/style.scss';
import ServicesSection from './components/services';

function App() {
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
      </main>
      <Footer />
    </div>
  );
}

export default App;
