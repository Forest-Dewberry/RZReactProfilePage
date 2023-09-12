import React from 'react';
import Navbar from './navbar';
import ryanpic from '../img/ryanpic.avif';

class Header extends React.Component {
  render() {
    return (
      <header id='header'>
        <div class='d-flex flex-column'>
          <div class='profile'>
            <img src={ryanpic} alt='Ryan' class='img-fluid rounded-circle' />
            <h1 class='text-light'>
              <a href='index.html'>Ryan Zierman</a>
            </h1>
            <div class='social-links mt-3 text-center'>
              <a
                href='https://www.linkedin.com/in/ryanzierman/'
                class='linkedin'
              >
                <i class='bx bxl-linkedin'></i>
              </a>
              <a
                href='https://www.upwork.com/freelancers/~0187bd3af11ed06692'
                class='upwork'
              >
                <i class='bx bxl-upwork'></i>
              </a>
              <a href='https://github.com/JOATZ' class='printables'>
                <i class='bx bxl-github'></i>
              </a>
            </div>
          </div>
        </div>
        <Navbar />
      </header>
    );
  }
}

export default Header;
