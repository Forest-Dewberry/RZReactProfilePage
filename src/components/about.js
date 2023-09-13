import React from 'react';
import ryanpic from '../img/ryanpic.avif';

const AboutSection = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
          <p className="mt-2">Throughout my career, I have had the privilege of working in diverse industries across the globe, gaining invaluable experiences in fast-paced and challenging environments.
            Driven by a strong sense of curiosity, I have always had a genuine passion for learning and solving complex problems. I find transforming abstract concepts into tangible outcomes deeply fulfilling, whether it's
            through creative projects, problem-solving initiatives, or innovative ventures. I have had the privilege of embarking on a fulfilling career path that encompasses various fields, including Aviation,
             Diplomatic Security, Law Enforcement, and others. Experiences rooted in my service as a <a href="" role="button" data-bs-toggle="modal" data-bs-target="#usmcModal">United States Marine.</a></p>
          <p className="mt-2">In recent years, I have focused my efforts on acquiring tech-centric skills. I find great satisfaction in the realm of data analysis, but I am equally fulfilled by tackling complex tasks and resolving
             difficult issues across various domains, be it coding, data governance, economical procurement, eCommerce, operations in austere|remote environments, and more.</p>
          <p className="mt-2">After earning my most recent degree in Business Analytics, I submitted<a href="assets/pdf/jsub.pdf" name="marineDecs"><em> "Identifying
            Aircraft Damage Mitigating Factors with Machine Learning: An Evidence-Based Approach to Rule-Making for Pilot Training Schools"</em></a> for publishing, and completed a comprehensive course in
             <a href="assets/img/certs/webDevFund.png">Web Development Fundamentals.</a></p> 
          <p className="mt-2">At present, I am dedicated to broadening my expertise in Full-Stack Development, recognizing its value in acquiring a holistic understanding of both front-end and back-end technologies.
            This pursuit aims to equip me with a versatile skill set, enabling me to undertake a wide range of projects. Moreover, I am enthusiastic about expanding my knowledge and honing my expertise in back-end development,
            as it plays a crucial role in building resilient and efficient systems, all of which are pertinent to the analysis of invaluable data. Alongside these efforts, I am actively pursuing the CompTIA+ certification,
             which serves as a testament to my commitment to continuous professional growth and proficiency.</p>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src={ryanpic} className="img-fluid img-thumbnail rounded-3" alt="A Picture of Ryan" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Data Analyst | Web Developer | Bespoke Projects</h3>
            <p className="fst-italic">
              {/*Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.*/}
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.RyanZierman.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <a href="tel:+1-234-567-8910"><span>+1 234 567 8910</span></a></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Texas, USA</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong><span>B.S. Business Analytics<br/>A.S. Aviation Maintenance Technology</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <a href="mailto:email@example.com"><span>email@example.com</span></a></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            <p>
              I am available to build responsive websites and maintain or make changes to your exiting site.
              Also offering consulting to small-business and Sole Proprietors in the realm of Data Governance, Data Analysis, Web, and eCommerce.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;