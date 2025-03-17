import React from 'react';
import { Navbar } from './Navbar';


export default () => { 
    return (
        <header className="header">
            <a className='header__aLogo' href="#"><img className="header__imgLogo" src="Atempo_Market_Logo.webp" alt="Logo"/></a>
            <h1>ATEMPO</h1>
            <p>manejá tus tiempos!</p>
            <Navbar />
        </header>
    );
}
/*
<img src="Atempo_Market_Logo.webp" alt="logo" />
*/