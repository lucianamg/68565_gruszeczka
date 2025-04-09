import React from "react";
import { Button } from './Button';
import { Link } from "react-router-dom";
export const Items = (props)=> {
    return (
        <article className='itemArticle' title={props.prod.nombre}>
        <h3>{props.prod.nombre}</h3>
        <img src={props.prod.imagen} alt={props.prod.nombre} className='itemImage'/>
        <h2>${props.prod.precio}</h2>
        <Link to={`/ProductDetail/${props.prod.id}`}>
        Descripción
        </Link> 
      </article>
    );           //el Link deberia redirigir a product detail
}
