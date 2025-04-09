import React, { useState , useEffect } from 'react';
//import { Button } from './Button';
import { Items } from './Items';
import { useParams } from 'react-router-dom';
//import { app } from '../firebaseConfig';
import app from '../firebaseConfig';
import { collection, getFirestore, getDocs, where, query } from 'firebase/firestore';

const ItemListContainer = () => {
  const [showProducts, setShowProducts] = useState([]); //es un array vacio 
  const parameter = useParams();
  useEffect(()=>{  
    const dbProducts = getFirestore(app)
    const dbCollection = collection(dbProducts, "products")
    let gettingDocs;
    if (parameter.id === undefined){
      gettingDocs = getDocs(dbCollection)
    }else{
      const categoryFilter = query(dbCollection, where("categoria", "==", parameter.id))
      gettingDocs = getDocs(categoryFilter)
    }
    gettingDocs
      .then((dbanswer) => {
        console.log("todo bien")
        const productsfromdb = []
        dbanswer.docs.forEach((doc)=>{
          productsfromdb.push(doc.data())
        })
        console.log(productsfromdb)
        setShowProducts(productsfromdb)
      })
      .catch(() => {console.log("todo mal")})

    },[parameter.id])

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
  
}  
export default ItemListContainer;
/* Este es mi cod de cuando iba a buscar los prod a la api
const ItemListContainer = () => {
  const [showProducts, setShowProducts] = useState([]); //es un array vacio 
  const parameter = useParams();
  useEffect(()=>{  //aca abajo me falta ver como poner un filtro por que yo no tengo un archivo json 
    //fetch(parameter.name === undefined ? 'products.json' : `/${parameter.name}.json`) Cuando tenga mi archivo, ver clase 9 desde 01:48:00
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((resJson) => {
        const allproducts = resJson.products;
        if (!parameter.name){
          setShowProducts(allproducts);
        }else{
          //filtro por parameter (recordar que esto lo tengo que cambiar cuando ponga mi json porque las categorias de esta api difieren de las de mi pagina)
          const filtered = allproducts.filter(p=>
            p.category.toLowerCase() === parameter.name.toLowerCase()
          );
          setShowProducts(filtered);
        }
      })
      .catch((err) => {
        console.log("error de fetch")
        console.log(err)
        }
      )
  },[parameter.name])

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
};  usé thumbnail porque IMAGES venian rotas 
FIN DEL CODIGO de cuando traia los productos de la api
*/


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