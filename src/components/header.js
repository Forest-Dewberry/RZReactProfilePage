import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import ryanpic from '../img/ryanpic.avif';
import SocialButtons from '../features/socialButtons/SocialButtons';

const Header = () => {
    return (
        <header id='header'>
            <div className='d-flex flex-column'>
                <div className='profile'>
                    <img
                        src={ryanpic}
                        alt='Ryan'
                        className='img-fluid rounded-circle'
                    />
                    <h1 className='text-light'>
                        <NavLink to='/'>Ryan Zierman</NavLink>
                    </h1>
                    <div className='social-links mt-3 text-center'>
                        <SocialButtons />
                    </div>
                </div>
            </div>
            <Navbar />
        </header>
    );
};

export default Header;
