import React from "react";
import { Button } from './Button';
export const Items = (props)=> {
    return (
        <article className='itemArticle'>
        <h3>{props.prod.title}</h3>
        <img src={props.prod.thumbnail} alt={props.prod.title} className='itemImage'/>
        <h2>${props.prod.price}</h2>
        <Button 
          content="Descripción"
        />
      </article>
    );
}
