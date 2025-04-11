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