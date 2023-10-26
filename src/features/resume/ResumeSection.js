import { Col, Row } from 'reactstrap'
import React from 'react'
import { personalInfo } from '../../shared/PERSONAL_INFO'
import EducationItem from './EducationItems'

const ResumeSection = () => {
    const info = personalInfo[0]

    return (
        <section id='resume' className='resume'>
            <div className='container'>
                <div className='section-title'>
                    <h2>Resume</h2>
                </div>
                <Row>
                    <Col lg='6' data-aos='fade-up'>
                        <h3 className='resume-title'>Summary</h3>
                        <div className='resume-item pb-0'>
                            <h4>{info.name}</h4>
                            <p>
                                <em>{info.description}</em>
                            </p>
                            <ul>
                                <li>
                                    <a
                                        role='button'
                                        data-bs-toggle='modal'
                                        data-bs-target='#certsModal'
                                    >
                                        Professional Certifications
                                    </a>
                                </li>
                                <li>
                                    <a href='#contact'>Contact</a>
                                </li>
                            </ul>
                        </div>
                        <EducationItem />
                    </Col>
                    <Col lg='6' data-aos='fade-up'>
                        <h3 className='resume-title'>
                            Professional Experience
                        </h3>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default ResumeSection
