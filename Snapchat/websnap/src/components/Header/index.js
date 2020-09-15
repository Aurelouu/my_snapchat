import React from 'react';
import './style.css';

const Header = (props) => {
    return (
        <header className="header">
            <nav className="headerMenu">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/login">Login</a>
                <a href="/register">Register</a>
            </nav>
            <a href="/"><img src="https://miro.medium.com/max/698/1*scO3u2bPuecZc-QOOFF0TA.jpeg"/></a>
        </header>
    );
};

export default Header;
