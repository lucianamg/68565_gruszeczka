import React from 'react';
import Navbar from './Navbar';


function Header (){ 
    return (
        <header className="header">
            <a className='headerALogo' href="#"><img className="headerLogo" src="Atempo_Market_Logo.webp" alt="Logo"/></a>
            <h1>ATEMPO</h1>
            <p>manejá tus tiempos!</p>
            <Navbar />
        </header>
    );
}
export default Header;

/*
<img src="Atempo_Market_Logo.webp" alt="logo" />
*/