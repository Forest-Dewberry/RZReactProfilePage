import Header from './components/header';
import HeroSection from './components/heroSection';
import Contact from './components/contact';
import Footer from './components/footer';
import AboutSection from './components/about';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'; //??
import './App.css';
import './scss/style.scss';
import SkillsSection from './components/skillsSection';

function App() {
  return (
    <div className='App'>
      <Header />
      <main id='main'>
      <HeroSection />
        <AboutSection />
        <SkillsSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
