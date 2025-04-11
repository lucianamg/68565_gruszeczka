import { useParams } from "react-router-dom";
import { useContext } from "react";
import { context } from "./CustomContext";
import ProductDetail from "./ProductDetail";
import React, { useState , useEffect } from 'react';
import { toast } from 'react-toastify';
import { Items } from './Items';
import app from '../firebaseConfig';
import { collection, getFirestore, getDocs, where, query } from 'firebase/firestore';

export const ProductDetailContainer = () => {
    const [showProduct, setShowProduct] = useState({})
    const parameter = useParams()
    
    const contextValue = useContext(context)//esto es para el carrito

    useEffect(()=>{  
        const idWrapper = parseInt(parameter.id)
        const dbProducts = getFirestore(app)
        const dbCollection = collection(dbProducts, "products")
        const categoryFilter = query(dbCollection, where("id", "==", idWrapper))//parameter.id
        const gettingDocs = getDocs(categoryFilter)
        .then((dbanswer) => {
            const productsfromdb = []
            dbanswer.docs.forEach((doc)=>{
              productsfromdb.push(doc.data())
            })
            console.log(productsfromdb)
            setShowProduct(productsfromdb[0])
          })
          .catch(() => {
            //console.log("todo mal")
            toast.error("No se pudo cargar la lista de productos, inténtalo de nuevo.");
        })
        },[])//[no va parameter.id]
//esto es para el carrito
    const handleAddToCart = () => {
        contextValue.addToCart(showProduct);
    }
    if (!showProduct || !showProduct.nombre) return <p>Cargando producto...</p>;
    return(
        <div className="productDetailContainer">
            
            <ProductDetail prod={showProduct} onAddToCart={handleAddToCart} />
        </div>
    )
}
export default ProductDetailContainer;



/* anterior version, cambié la parte que agrega productos
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { context } from "./CustomContext";
import ProductDetail from "./ProductDetail";
import React, { useState , useEffect } from 'react';
import { Items } from './Items';
import app from '../firebaseConfig';
import { collection, getFirestore, getDocs, where, query } from 'firebase/firestore';

export const ProductDetailContainer = () => {
    const [showProduct, setShowProduct] = useState({})
    const parameter = useParams()
    
    const contextValue = useContext(context)//esto es para el carrito

    useEffect(()=>{  
        const idWrapper = parseInt(parameter.id)
        const dbProducts = getFirestore(app)
        const dbCollection = collection(dbProducts, "products")
        const categoryFilter = query(dbCollection, where("id", "==", idWrapper))//parameter.id
        const gettingDocs = getDocs(categoryFilter)
        .then((dbanswer) => {
            const productsfromdb = []
            dbanswer.docs.forEach((doc)=>{
              productsfromdb.push(doc.data())
            })
            console.log(productsfromdb)
            setShowProduct(productsfromdb[0])
          })
          .catch(() => {console.log("todo mal")})
        },[])//[no va parameter.id]
//esto es para el carrito
    const handleAddToCart = () => {
        contextValue.setCartProductsAmount(contextValue.cartProductsAmount + 1)
    }
    if (!showProduct || !showProduct.nombre) return <p>Cargando producto...</p>;
    return(
        <div className="productDetailContainer">
            
            <ProductDetail prod={showProduct} onAddToCart={handleAddToCart} />
        </div>
    )
}
export default ProductDetailContainer;
*/