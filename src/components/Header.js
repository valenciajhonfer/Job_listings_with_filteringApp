import React from 'react';
import bgMobile from '../assets/bg-header-mobile.svg';
import bgDesktop from '../assets/bg-header-desktop.svg';

const Header = ()=> {
    return (
        <header>
         <img src= {bgMobile} className="mobile" alt="bg-header-mobile" />   
         <img src= {bgDesktop} className="desktop" alt="bg-header-desktop" />   
        </header>
    )
}

export default Header
