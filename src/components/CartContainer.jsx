import { useContext } from "react";
import { context } from "./CustomContext";
import Cart from "./Cart";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import app from "../firebaseConfig";
import { toast } from 'react-toastify';

export const CartContainer = () => {
    const { cart, removeFromCart, clearCart } = useContext(context);
    const total = cart.reduce((sum, item) => sum + item.precio, 0);
    const handleBuy = () => {
        const form = document.getElementById("purchaseForm");
        if (!form.checkValidity()) {
        form.reportValidity(); 
        return;
        }
        toast.success("¡Gracias por tu compra! Nos contactaremos al correo indicado.");
        
        const db = getFirestore(app); 
        const cartDetailCollection = collection(db, "CartDetail");

        const formData = {
            email: form.elements["email"].value,
            nombre: form.elements["name"].value,
            direccion: form.elements["address"].value,
            tarjeta: form.elements["card"].value,
            vencimiento: form.elements["expiration"].value,
            cvc: form.elements["cvcCode"].value,
          };
        
        const cartData = {
            totalItems: cart.length,
            totalPrice: total,
            items: cart.map((item) => item.nombre),
            datosUsuario: formData,
            timestamp: new Date()
        };

        form.reset();
        addDoc(cartDetailCollection, cartData)
        .then((docRef) => {
          toast.success(`Compra realizada con ID: ${docRef.id}`); 
        })
        .catch((error) => {
            toast.error("No se pudo completar la compra. Intentalo de nuevo.");   
        }); 
        clearCart();
    };

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