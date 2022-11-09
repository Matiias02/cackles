import React from 'react'
import CartWidget from './CartWidget';
import  Kike  from '../img/dunk/img01 (1).webp'




const navbar = ({greeting}) => {
    return (
        <div>
        <p>{greeting}</p>

                <header>
                        <a href='#'>
                            <div className='logo'>
                                <img src={Kike} alt='logo' width='150' ></img>
                            </div>
                        </a>
                        <ul>
                            <li>
                                <a href='#'>Inicio</a>
                            </li>
                            <li>
                                <a href='#'>Productos</a>
                            </li>
                            {/* <li>
                                <a href='#'>Cackles</a>
                            </li> */}
                            <div className='cart'>
                                <CartWidget></CartWidget>
                            </div>
                        </ul>
                </header>
        </div>
        
    )
}

export default navbar


