import React from "react";
import '../index.css';
import { Link, NavLink } from "react-router-dom";

import { CartWidget } from './CartWidget';
/* al usar fc flecha cambiar los import ponerles llave import Products >> import { Products }*/
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
} /* 56:53 clase 11: ahora puso navlink Carrito dentro de Cartwidget 
y aca dejó solo cartwidget*/
/* en clase 12 hace todo lo del provider*/

/*<li><a href="../src/Products.jsx">Productos</a></li>*/

/* con link to
function Navbar() {
    return (
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/products">Productos</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
          <li><Link to="/cartWidget">Carrito</Link></li>
        </ul>
      </nav>
    );
  }
  export default Navbar; */
  /*
  navbar viejo
              <ul className="navbar__Ul">
                <li className="navbar__Index"><a href="./index.html">Inicio</a></li>
                <li className="navbar__Products"><a href="#Products">Productos</a></li>
                <li className="navbar__Contact"><a href="#Contact">Contacto</a></li>
                <li className="navbar__Cart">
                  <a href="#CartWidget">Carrito</a> 
                  <img className="cartImg" src="carrito2.png" alt="carrito" />
                  <CartWidget />
                </li>
            </ul>
  */ 