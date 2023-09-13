// ContactInfo.js
import React from 'react';

const ContactInfo = () => (
  <div className="info">
    <div className="address">
      <i className="bi bi-geo-alt"></i>
      <h4>Location:</h4>
      <p>World Wide</p>
    </div>
    <div className="email">
      <i className="bi bi-envelope"></i>
      <h4>Email:</h4>
      <p><a href="mailto:info@example.com">info@example.com</a></p>
    </div>
    <div className="phone">
      <i className="bi bi-phone"></i>
      <h4>Call:</h4>
      <p><a href="tel:1-234-567-8910">+1-234-567-8910</a></p>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1835144.8375713965!2d34.250701024132056!3d32.01245562401206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d7d634c1fc4b%3A0xd96f623e456ee1cb!2sJerusalem%2C%20Israel!5e0!3m2!1sen!2sus!4v1687942778547!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
  </div>
);

export default ContactInfo;