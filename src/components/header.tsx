import '@styles/App.css';
import React from 'react';
import logo from '@assets/mercuryCashLogo.jpg';
export default function Header() {
    return(
        <header className='header__container'>
        <img
        className="header__img-fluid" 
        src={logo} />
        <span className='header__title--one'>mercury</span>
        <span className='header__title--two'>cash</span>
        </header>
    )
    
}