import React from "react";
import Products from '../Products';
import '../index.css';
import CartWidget from './CartWidget';

function Navbar (){
    return (
        <nav className="navbar">
            <ul className="navbarUl">
                <li className="navbarIndex"><a href="./index.html">Inicio</a></li>
                <li className="navbarProducts"><a href="#Products">Productos</a></li>
                <li className="navbarContact"><a href="#Contact">Contacto</a></li>
                <li className="navbarCart">
                  <a href="#CartWidget">Carrito</a> 
                  <img className="cartImg" src="carrito2.png" alt="carrito" />
                  <CartWidget />
                </li>
            </ul>
        </nav>
    );
}
export default Navbar; 
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