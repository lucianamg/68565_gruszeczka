import React from "react";
import Products from '../Products';
function Navbar (){
    return (
        
        <nav>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="/src/Products.jsx">Productos</a></li>
                <li><a href="/contact">Contacto</a></li>
                <li><a href="/cartWidget">Carrito</a></li>
            </ul>
        </nav>
        
    );
}
export default Navbar;

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