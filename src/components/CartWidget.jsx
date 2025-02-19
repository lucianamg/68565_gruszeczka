
import React, {useState} from 'react';

const Counter = ({products = '23'})=> {
    const [count,setCount] = useState(0)
    return(
        <div className="divCounter">
            <p>{products}</p>
        </div>
    )
}
export default Counter;

/*function CartWidget (){
    const
    return (
        
    );
}
export default CartWidget; */

/* en el futuro pondré este codigo en el componente Contador Separado de CartWidget */