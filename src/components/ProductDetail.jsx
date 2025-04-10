
import React from "react";

const ProductDetail = ({ prod, onAddToCart }) => {
    return (
        <article className="productDetailBox">
            <div className="productDetailImage">
                <img src={prod.imagen} alt={prod.nombre}/>
            </div >
            <div className="productDetailText">
                <h1 className="productDetailTitle">{prod.nombre}</h1>
                <p className="productDetailDescription">{prod.descripcion}</p>
                <h3 className="productDetailPrice">Precio: ${prod.precio}</h3>
                <p className="productDetailRate">Valoración de nuestros usuarios: {prod.valoracion}</p>
                <button className="productDetailButton" onClick={onAddToCart}>Agregar al carrito</button>
            </div>
        </article>
    );
};

export default ProductDetail;