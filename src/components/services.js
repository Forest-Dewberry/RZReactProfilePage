import React, { useEffect } from 'react';
import { SERVICES} from '../shared/SERVICES';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServicesSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Services</h2>
          <p></p>
        </div>

        <div className="row">
          {SERVICES.map((service, index) => (
            <div className="col-lg-4 col-md-6 icon-box" data-aos={service.aos} data-aos-delay={service.aosDelay} key={index}>
              <div className="icon"><i className={service.icon}></i></div>
              <h4 className="title"><a href="">{service.title}</a></h4>
              <p className="description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;