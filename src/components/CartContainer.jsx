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
        form.reportValidity(); // muestra los mensajes de error del form
        return;
        }
        toast.success("¡Gracias por tu compra! Nos contactaremos al correo indicado.");
        
        const db = getFirestore(app); // para mandar la info a firebase
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
            datosUsuario: formData,//aca agrego lo del form
            timestamp: new Date()
        };

        console.log("Datos a guardar en Firestore:", cartData);
        form.reset();//borro form post compra
        addDoc(cartDetailCollection, cartData)
        .then((docRef) => {
            //console.log("Compra registrada con ID:", docRef.id);
            
        })
        .catch((error) => {
            toast.error("No se pudo completar la compra. Intentalo de nuevo.");
            //console.error("Error al guardar la compra:", error);
        }); // fin de mandar la info a firebase

        clearCart();//borro carrito post compra
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