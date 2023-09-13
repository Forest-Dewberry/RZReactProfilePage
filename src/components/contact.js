// Contact.js
import React from 'react';
import ContactInfo from './contactInfo';

const Contact = () => (
  <section id="contact" className="contact">
    <div className="container">
      <div className="section-title">
        <h2>Contact</h2>
      </div>
      <div className="row" data-aos="fade-in">
        <div className="col-lg-5 d-flex align-items-stretch">
          <ContactInfo />
        </div>
      </div>
    </div>
  </section>
);

export default Contact;