import React from "react";
import '../index.css';
import { Link, NavLink } from "react-router-dom";

import { CartWidget } from './CartWidget';
/* al usar fc flecha cambiar los import ponerles llave import Products >> import { Products }*/
export const Navbar = () => { 
    return (
        <nav className="navbar">
                <NavLink to="/" className="navbar_link"> Inicio</NavLink>
                <NavLink to="/Relojes" className="navbar_link"> Relojes</NavLink>
                <NavLink to="/Carrito" className="navbar_link"> Carrito</NavLink>
                <img className="cartImg" src="carrito1.png" alt="carrito"/>
                <CartWidget /> 
        </nav>
    );
}
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