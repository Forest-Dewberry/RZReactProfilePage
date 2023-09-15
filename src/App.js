//import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutSection from './components/About';
import FactsSection from './components/Facts';


import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './scss/style.scss';
import ServicesSection from './components/Services';

function App() {
    return (
        <Router>
            <div className='App'>
                <Header />
                <main id='main'>
                    <HeroSection />
                    <AboutSection />

                    <FactsSection />

                    <Contact />
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
