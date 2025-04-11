import React, { useState , useEffect } from 'react';
import { Items } from './Items';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
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
        const productsfromdb = []
        dbanswer.docs.forEach((doc)=>{
          productsfromdb.push(doc.data())
        })
        setShowProducts(productsfromdb)
      })
      .catch(() => {toast.error("No se pudo cargar la lista de productos. Intentalo de nuevo.")})
      
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