import React from 'react';
import { Navbar } from './Navbar';


export default () => { 
    return (
        <header className="header">
            <a className='header__aLogo' href="#">
                <img 
                className="header__imgLogo" 
                src={`${import.meta.env.BASE_URL}Atempo_Market_Logo.png`} 
                alt="Logo"
                />
            </a>
            <p>manejá tus tiempos!</p>
            <Navbar />
        </header>
    );
}
/*
<img src="Atempo_Market_Logo.png" alt="logo" />
*/