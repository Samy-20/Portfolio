// src/components/Header.js
import React from 'react';

const Header = () => {
    return (
        <header style={headerStyle}>
            <h1>My Portfolio</h1>
            <nav className='m-3'>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
};

const headerStyle = {
    background: '#333',
    color: '#fff',
    padding: '10px 20px',
    textAlign: 'center',
};

export default Header;