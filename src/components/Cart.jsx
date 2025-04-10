import Form from "./Form";

const Cart = ({ cart, total, removeFromCart, handleBuy }) => {
  return (
    <div className="cartContainer">
      <h2>Carrito</h2>

      {!cart || cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="cartItem">
              <img src={item.imagen} alt={item.nombre} style={{ width: "80px" }} />
              <div>
                <h3>{item.nombre}</h3>
                <p>${item.precio}</p>
              </div>
              <button onClick={() => removeFromCart(index)}>Eliminar</button>
            </div>
          ))}
          <h3>Total: ${total.toFixed(2)}</h3>
          <Form />
          <button onClick={handleBuy}>Finalizar compra</button>
        </>
      )}
    </div>
  );
};

export default Cart;








    /* Esto es para cargar objetos en firebase (clase firebase 1)
    const algo = useContext(cartContext)
    const alcocomohandleclick = () => {
        const database = getFirestore(app)
        const prodsCollection = collection(database, "products")
        const upload = addDoc (prodsCollection, {
            id: 1,
            nombre: "Reloj de Pared Cl\u00e1sico - Blanco y Bamb\u00fa",
            descripcion: "Reloj de pared minimalista redondo en color blanco con marco Bamb\u00fa.",
            precio: 29.99,
            categoria: "relojes",
            imagen: "/productos/reloj-pared-alfa-bambu.png",
            valoracion: "5"
        })
        // es lo mismo que poner
        //const upload = addDoc (prodsCollection, addProduct)
        // siendo addProduct = {
        //    id: 1,
        //    nombre: "Reloj de Pared Cl\u00e1sico - Blanco y Bamb\u00fa",
        //    descripcion: "Reloj de pared minimalista redondo en color blanco con marco Bamb\u00fa.",
        //    precio: 29.99,
        //    categoria: "relojes",
        //    imagen: "/productos/reloj-pared-alfa-bambu.png",
        //    valoracion: "5"}

        
        upload
        .then (() => {console.log("ok")})
        .catch (() => {console.log("no ok")})
    }// los mensajes de then y catch deberian pasar a tener toast (un mensaje lindo para el user y no un console log)
        // toast.success("Producto agregado a la DB")*/
 //Falta todo un pedazo de codigo de clase 12