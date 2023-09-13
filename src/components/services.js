import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServicesSection = () => {
  const services = [
    {
      icon: 'bi bi-hammer',
      title: 'Static Webpage Buildout',
      description: 'Establish your online presence with a responsive website that looks great across all devices.',
      aos: 'fade-up',
    },
    {
      icon: 'bi bi-card-checklist',
      title: 'Data Governance and Information Management Consulting',
      description: 'Understanding, collecting, and organizing data are essential for gaining deeper insights into your customer base. I can assist you in developing a comprehensive plan to facilitate this process effectively.',
      aos: 'fade-up',
      aosDelay: '100',
    },
    {
      icon: 'bi bi-bar-chart',
      title: 'Data Analysis',
      description: 'Unleash your data\'s potential with insightful dashboards, actionable insights, and advanced Machine Learning techniques. Let\'s explore its story and extract valuable knowledge together!',
      aos: 'fade-up',
      aosDelay: '200',
    },
    {
      icon: 'bi bi-cpu',
      title: 'Machine Learning-Driven Insights',
      description: 'Gain confidence in your business decisions with statistically significant findings. Say goodbye to the proverbial \'shot in the dark.\' By leveraging Machine Learning on valuable and substantial data, we can generate actionable insights that increase the likelihood of achieving your desired outcomes.',
      aos: 'fade-up',
      aosDelay: '300',
    },
    {
      icon: 'bi bi-cloud-upload',
      title: 'Website Updates',
      description: 'In today\'s fast-paced digital landscape, businesses require accessible, responsive, and cost-effective website updates to maintain their relevance. Reach out to me, and I\'ll be delighted to discuss how I can assist you in achieving just that.',
      aos: 'fade-up',
      aosDelay: '400',
    },
    {
      icon: 'bi bi-lightning',
      title: 'Freelance Services',
      description: 'Do you have a specific project in mind that falls outside the services mentioned? I\'m all ears! Share your ideas, and let\'s discuss how I can help bring your unique project to life.',
      aos: 'fade-up',
      aosDelay: '500',
    },
  ];

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
          {services.map((service, index) => (
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