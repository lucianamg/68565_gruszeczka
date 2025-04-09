import { createContext, useState } from "react";

export const context = createContext();
export const ContextProvider = context.Provider;

const CustomProvider = (props) => {
    const [cartProductsAmount, setCartProductsAmount] = useState(0);
    return(
        <ContextProvider value={{cartProductsAmount, setCartProductsAmount: setCartProductsAmount}}>
            {props.children}
        </ContextProvider>

    )
}
export default CustomProvider;
//original
// <ContextProvider value={cartProductsAmount}>
//{props.children}
//</ContextProvider>