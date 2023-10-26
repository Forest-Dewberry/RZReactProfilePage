import React from 'react'
import { Button, Row, Col } from 'reactstrap'
import { BsGlobeAmericas } from 'react-icons/bs'
import { GiHelicopter } from 'react-icons/gi'
import { TbCertificate } from 'react-icons/tb'
import AOS from 'aos'
import 'aos/dist/aos.css' // You can also load CSS styles from the package

const FactsSection = () => {
    return (
        <section id='facts' className='facts'>
            <div className='container'>
                <div className='section-title'>
                    <h2>Facts</h2>
                    <p>
                        These data-purecounter effects are pretty neat. They are
                        a great way to attract the viewers attention to any
                        metric. Wrapping them in an anchor pointed to a modal is
                        a great way to make additional content accessible
                        without leaving the main page. CSS styling adds a border
                        on hover, making it more apparent they may be clicked.
                    </p>
                </div>
                <Row className='g-0'>
                    <FactBox
                        icon={<GiHelicopter />}
                        counterEnd={2000}
                        title='+ Hours of Flight Time'
                        description='700+ NVG'
                        modalTarget='flightTimeModal'
                    />
                    <FactBox
                        icon={<GiHelicopter />}
                        counterEnd={16}
                        title='Different Platforms'
                        description='of experience'
                        modalTarget='platformsModal'
                    />
                    <FactBox
                        icon={<TbCertificate />}
                        counterEnd={25}
                        title='Professional Certifications & Awards'
                        modalTarget='certsModal'
                    />
                    <FactBox
                        icon={<BsGlobeAmericas />}
                        counterEnd={40}
                        title='Countries Visited'
                        description='Lived in 6'
                        modalTarget='countriesModal'
                    />
                </Row>
            </div>
        </section>
    )
}

const FactBox = ({ icon, counterEnd, title, description, modalTarget }) => (
    <Col
        lg='3'
        md='6'
        className='d-md-flex align-items-md-stretch'
        data-aos='fade-up'
    >
        <Button data-bs-toggle='modal' data-bs-target={`#${modalTarget}`}>
            <div className='count-box'>
                <div className='icon-container'>{icon}</div>
                <span
                    data-purecounter-start='0'
                    data-purecounter-end={counterEnd}
                    data-purecounter-duration='1'
                    className='purecounter'
                ></span>
                <p>
                    <strong>{title}</strong> <br />
                    {description}
                </p>
            </div>
        </Button>
    </Col>
)

export default FactsSection
