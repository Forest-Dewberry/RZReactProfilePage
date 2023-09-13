import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioItem = ({ filter, imgSrc, title, detailsUrl }) => (
  <div className={`col-lg-4 col-md-6 portfolio-item ${filter}`}>
    <div className='portfolio-wrap'>
      <img src={imgSrc} className='img-fluid' alt='' />
      <div className='portfolio-links'>
        <a
          href={imgSrc}
          data-gallery='portfolioGallery'
          className='portfolio-lightbox'
          title={title}
        >
          <i className='bx bx-plus'></i>
        </a>
        <Link to={detailsUrl} title='More Details'>
          <i className='bx bx-link'></i>
        </Link>
      </div>
    </div>
  </div>
);

const Portfolio = () => {
  const portfolioItems = [
    {
      filter: 'filter-app',
      imgSrc: 'src/img/portfolio/apcfd.png',
      title: 'App 1',
      detailsUrl: 'portfolio-details.html',
    },
    {
      filter: 'filter-web',
      imgSrc: 'src/img/portfolio/apdesign.PNG',
      title: 'Web 3',
      detailsUrl: 'portfolio-details.html',
    },
    {
      filter: 'filter-app',
      imgSrc: 'src/img/portfolio/portfolio-3.jpg',
      title: 'App 2',
      detailsUrl: 'portfolio-details.html',
    },
    {
      filter: 'filter-card',
      imgSrc: 'src/img/portfolio/portfolio-4.jpg',
      title: 'Card 2',
      detailsUrl: 'portfolio-details.html',
    },
    {
      filter: 'filter-web',
      imgSrc: 'src/img/portfolio/portfolio-5.jpg',
      title: 'Web 2',
      detailsUrl: 'portfolio-details.html',
    },
    {
      filter: 'filter-app',
      imgSrc: 'src/img/portfolio/portfolio-6.jpg',
      title: 'App 3',
      detailsUrl: 'portfolio-details.html',
    },
    {
      filter: 'filter-card',
      imgSrc: 'src/img/portfolio/portfolio-7.jpg',
      title: 'Card 1',
      detailsUrl: 'portfolio-details.html',
    },
    {
      filter: 'filter-card',
      imgSrc: 'src/img/portfolio/portfolio-8.jpg',
      title: 'Card 3',
      detailsUrl: 'portfolio-details.html',
    },
    {
      filter: 'filter-web',
      imgSrc: 'src/img/portfolio/portfolio-9.jpg',
      title: 'Web 3',
      detailsUrl: 'portfolio-details.html',
    },
  ];

  return (
    <section id='portfolio' className='portfolio section-bg'>
      <div className='container'>
        <div className='section-title'>
          <h2>Portfolio</h2>
          <p>
            Some featured work in Web Design, Analytics, 3d Modeling, and
            Computerized Flow Dynamics.
          </p>
        </div>
        <div className='row' data-aos='fade-up'>
          <div className='col-lg-12 d-flex justify-content-center'>
            <ul id='portfolio-flters'>
              <li data-filter='*' className='filter-active'>
                All
              </li>
              <li data-filter='.filter-app'>App</li>
              <li data-filter='.filter-card'>Card</li>
              <li data-filter='.filter-web'>Web</li>
            </ul>
          </div>
        </div>
        <div
          className='row portfolio-container'
          data-aos='fade-up'
          data-aos-delay='100'
        >
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
