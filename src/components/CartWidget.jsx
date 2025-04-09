import React, {useContext, useState} from 'react';
import { NavLink } from 'react-router-dom';
import { context } from './CustomContext';

export const CartWidget = () => {
    const contextValue = useContext(context)
    return(
        <div className='cartWidget'>
        <NavLink to="/Cart" className="navbar_link"> 
        <img className="cartImg" src={`${import.meta.env.BASE_URL}carrito1.png`} alt="carrito"/>
        {contextValue.cartProductsAmount}
        </NavLink>
        </div>
    )
}
export default CartWidget;
