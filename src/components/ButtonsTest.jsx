
import React, {useState} from 'react';
/*export const Counter = ({products = '23'})=> {
    const [count,setCount] = useState(0)
    return (
        <div>
            <p>{products}</p>
            <p>{Counter}</p>
            <button>Agregar al carrito</button>
            <button>Eliminar</button>
        </div>
    )}*/
export const ButtonsTest = () => {
    const [count,setCount] = useState(0)
    const [changeColor,setChangeColor] = useState(true)
    const fcSum = () => {
        console.log("click")
        setCount(count + 1)
    }
    const fcErase = () => {
        console.log("click")
        setCount(count - 1)
    }
    const fcColor = () => {
        console.log("color")
        setChangeColor(!changeColor)
    }
    return(
        <div className="divCounter">
            <p className={changeColor ? "blue" : "red"}>{count}</p>
            <button onClick={fcSum}>Agregar al carrito</button>
            <button onClick={fcErase}>Eliminar del carrito</button>
            <button onClick={fcColor}>Cambiar el color</button>
        </div>/* este boton y el Color va en otra vista pero lo dejo aca para practicas */
    )
}


/*function CartWidget (){
    const
    return (
        
    );
}
export default CartWidget; */

/* en el futuro pondré este codigo en el componente Contador Separado de CartWidget */