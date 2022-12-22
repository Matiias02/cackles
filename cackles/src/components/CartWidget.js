import {React, useContext}  from 'react'
import { CartContext } from '../contexts/cartContext'


const CartWidget = () => {
    const { productsAdded } = useContext(CartContext);
    const count = productsAdded.length;
    return (
        <div>
            <div className='cart'>
                <box-icon name='cart'></box-icon>
                <span className='item__total'>{count}</span>
            </div>
        </div>
    )
}

export default CartWidget

