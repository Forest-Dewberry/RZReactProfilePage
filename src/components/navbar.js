import React from 'react';
import NavItem from './navItem';

class Navbar extends React.Component {
  render() {
    return (
      <>
        <i className='bi bi-list mobile-nav-toggle d-xl-none' />
        <nav id='navbar' className='nav-menu navbar'>
          <ul>
            <NavItem
              link='#hero'
              aClass='nav-link scrollto active'
              iclass='bx bx-home'
              text='Home'
            />
            <NavItem
              link='#about'
              aClass='nav-link scrollto'
              iClass='bx bx-user'
              text='About'
            />
            <NavItem
              link='#resume'
              aClass='nav-link scrollto'
              iClass='bx bx-file-blank'
              text='Resume'
            />
            <NavItem
              link='#portfolio'
              aClass='nav-link scrollto'
              iClass='bx bx-book-content'
              text='Portfolio'
            />
            <NavItem
              aClink='#services'
              aClass='nav-link scrollto'
              iClass='bx bx-server'
              text='Services'
            />
            <NavItem
              aClink='#contact'
              aClass='nav-link scrollto'
              iClass='bx bx-envelope'
              text='Contact'
            />
          </ul>
        </nav>
      </>
    );
  }
}

export default Navbar;
