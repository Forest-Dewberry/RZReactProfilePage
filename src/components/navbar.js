import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem, Nav } from 'react-bootstrap';

const Navbar = () => {
    return (
        <>
            <i className='bi bi-list mobile-nav-toggle d-xl-none' />
            <nav id='navbar' className='nav-menu navbar'>
                <ul>
                    <Nav>
                        <NavItem>
                            <NavLink
                                to='#hero'
                                className='nav-link scrollto active'
                            >
                                <i className='bx bx-home'></i> Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='#about' className='nav-link scrollto'>
                                <i className='bx bx-user'></i> About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='#resume' className='nav-link scrollto'>
                                <i className='bx bx-file-blank'></i> Resume
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                to='#portfolio'
                                className='nav-link scrollto'
                            >
                                <i className='bx bx-book-content'></i> Portfolio
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                to='#services'
                                className='nav-link scrollto'
                            >
                                <i className='bx bx-server'></i> Services
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                to='#contact'
                                className='nav-link scrollto'
                            >
                                <i className='bx bx-envelope'></i> Contact
                            </NavLink>
                        </NavItem>
                    </Nav>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
