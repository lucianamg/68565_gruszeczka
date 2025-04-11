
import { createContext, useState, useEffect } from "react";
import { toast } from 'react-toastify';
export const context = createContext();
export const ContextProvider = context.Provider;


const CustomProvider = (props) => {
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
      });
      
      useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
      }, [cart]);
      
      const cartProductsAmount = cart.length;
      
      const addToCart = (product) => {
        const alreadyInCart = cart.some((item) => item.id === product.id);
        if (!alreadyInCart) {
          setCart([...cart, product]);//los tres puntos son COPIAR array!!
        } else {
          toast.error("Este producto ya está en el carrito.");
        }// esta es mi solucion para que no agregue mas del mismo item al producto
      };
      
      const removeFromCart = (index) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
        toast.info("Producto eliminado del carrito");
      };
      const clearCart = () => {
        setCart([]);
        localStorage.removeItem("cart");
      };
    return(
        <context.Provider value={{ cart, addToCart, removeFromCart, clearCart, cartProductsAmount }}>
        {props.children}
      </context.Provider>

    )
}
export default CustomProvider;
//original
// <ContextProvider value={cartProductsAmount}>
//{props.children}
//</ContextProvider>

/* segundo
import { createContext, useState } from "react";

export const context = createContext();
export const ContextProvider = context.Provider;

const CustomProvider = (props) => {
    const [cartProductsAmount, setCartProductsAmount] = useState(0);
    return(
        <ContextProvider value={{cartProductsAmount, setCartProductsAmount: setCartProductsAmount}}>
            {props.children}
        </ContextProvider>

    )
}
export default CustomProvider;*/