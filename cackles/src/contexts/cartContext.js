import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [state, setState] = useState()
    const [productsAdded, setProductsAdded] = useState([]);

    function addItem(item, quantity) {
        const isAlreadyAdded = isInCart(item.id);
        if (isAlreadyAdded) {
            setProductsAdded((prevState) =>
                prevState.map((productAdded) =>
                    productAdded.item.id === item.id
                        ? {
                            ...productAdded,
                            quantityAdded: productAdded.quantityAdded + quantity,
                        }
                        : productAdded
                )
            );
        } else {
            setProductsAdded((prevState) =>
                prevState.concat({ item, quantityAdded: quantity })
            );
        }
    }
    console.log(cart);

    function removeItem(itemId) {
        // console.log({ itemId });
        setCart(cart.filter(item => item.id !== itemId))
    }

    const clear = () => setCart([]);
        

    function isInCart (itemId) {
        return  cart.find(item => item.id === itemId) ? true : false
    }

    return <CartContext.Provider value={{state, setState, addItem, removeItem, clear, isInCart}}>{children}</CartContext.Provider>
}

