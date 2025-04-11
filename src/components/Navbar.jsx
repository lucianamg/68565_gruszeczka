import React from "react";
import '../index.css';
import { Link, NavLink } from "react-router-dom";
import { CartWidget } from './CartWidget';

export const Navbar = () => { 
    return (
        <nav className="navbar">
                <NavLink to="/" className="navbar_link"> Inicio</NavLink>
                <NavLink to="/Categoria/relojes" className="navbar_link"> Relojes</NavLink>
                <NavLink to="/Categoria/agendas" className="navbar_link"> Agendas</NavLink>
                <NavLink to="/Categoria/libros-y-apps" className="navbar_link"> Apps y libros</NavLink>
                <CartWidget /> 
        </nav>
    );
} 