import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AOS from 'aos'

import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AboutSection from './components/About'
import FactsSection from './components/Facts'
import ResumeSection from './features/resume/ResumeSection'

import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './scss/style.scss'
import 'aos/dist/aos.css'

function App() {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        })
    }, [])

    return (
        <Router>
            <div className='App'>
                <Header />
                <main id='main'>
                    <HeroSection />
                    <AboutSection />
                    <ResumeSection />
                    <FactsSection />
                    <Contact />
                </main>
                <Footer />
            </div>
        </Router>
    )
}

export default App
