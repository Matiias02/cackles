import { createContext, useEffect, useState } from "react";

export const CartContext = createContext([]);

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [state, setState] = useState()
    const [productsAdded, setProductsAdded] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const amount = productsAdded
            .map((product) => parseInt(product.item.price) * product.quantityAdded)
            .reduce((partialSum, a) => partialSum + a, 0);
        setTotalAmount(amount);
    }, [productsAdded]);

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
    // console.log(productsAdded); 

    function removeItem(itemId) {
        setProductsAdded((prevState) =>
        prevState.filter((product) => product.item.id !== itemId)
    );
    }

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0 );
    }

    const totalProducts = () => {
        cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);
    }

    const clear = () => {
    setProductsAdded([]);
    setTotalAmount(0);
    }

    function isInCart (itemId) {
        return  cart.find(item => item.id === itemId) ? true : false
    }


    return <CartContext.Provider value={{
                state,
                setState, 
                addItem, 
                removeItem, 
                clear, 
                isInCart, 
                totalPrice,
                totalProducts,
                productsAdded,
                totalAmount,
            }}>{children}
    </CartContext.Provider>
}

