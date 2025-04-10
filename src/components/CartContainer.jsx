import { useContext } from "react";
import { context } from "./CustomContext";
import Cart from "./Cart";
import Form from "./Form";

export const CartContainer = () => {
  const { cart, removeFromCart, clearCart } = useContext(context);
  const total = cart.reduce((sum, item) => sum + item.precio, 0);
  const handleBuy = () => {
    const form = document.getElementById("purchaseForm");
    if (!form.checkValidity()) {
      form.reportValidity(); // muestra los mensajes de error del navegador
      return;
    }
    alert("¡Gracias por tu compra! Nos contactaremos al correo indicado.");
    form.reset();
    clearCart();
    };
//como el form está dentro del mismo Cart y no separado del flujo, 
//también desaparece el form al vaciarse el carrito. Me salio de casualidad.
  return (
    <Cart
      cart={cart}
      total={total}
      removeFromCart={removeFromCart}
      handleBuy={handleBuy}
    />
  );
};
export default CartContainer;