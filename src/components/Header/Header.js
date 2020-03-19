import React from 'react';
import logo from '../../images/logo.PNG';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
            <a href="/Home">Home</a>
            <a href="/Profile">Profile</a>
            <a href="/About">About</a>
        </nav>
        </div>
        
    );
};

export default Header;