
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
          setCart([...cart, product]);
        } else {
          toast.error("Este producto ya está en el carrito.");
        }
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