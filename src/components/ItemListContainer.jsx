import React, { useState , useEffect } from 'react';
import { Button } from './Button';
import { Items } from './Items';
const ItemListContainer = () => {
  const [showProducts, setShowProducts] = useState([]) //es un array vacio 
  useEffect(()=>{
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((resJson) => {setShowProducts(resJson.products)})
      .catch((err) => {
        console.log("error de fetch")
        console.log(err)
        }
      )
  },[])

  return (
    <div className='itemlistcontainer'>
      {showProducts.map((products) => {
        return(
          <Items 
          key={products.id}
          prod={products} />
        )
      })}
    </div>
  );
}; /* usé thumbnail porque IMAGES venian rotas */

export default ItemListContainer;
/* Hacer un formulario usando UseRef: clase 8: 00.49 a 01.11 */
/*CLase 8 en 01.26 muestra llevarse un codigo a otro elemento como tengo que hacer yo*/

/* este era el return antes de mostrar los productos, mostraba todo el array
return (
  <div className='itemlistcontainer'>
    {JSON.stringify(showProducts)}
  </div>*/

/* Si tengo mis propios productos, crear un file products.json en public, 
cargarle los datos de los productos (id, nombre, precio, descripcion, foto, categoria, rating, etc)
luego hacer fetch localhost:5173/productos.json 
 */

/* viejo itemlistcontainer
const ItemListContainer = ({ greeting }) => {
  return (
    <div style={{
        backgroundColor: '#f2f2f2',
        padding: '1rem',
        borderRadius: '8px',
        textAlign: 'center',
        fontFamily: '"League Spartan", sans-serif',
        fontSize: '5rem',
        color: '#333',
      }}
    >
      <p>{greeting}</p>
    </div>
  );
};
export default ItemListContainer;
*/ 