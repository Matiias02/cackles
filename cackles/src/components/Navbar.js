import React from 'react';
import CartWidget from './CartWidget';
import  Kike  from '../assets/img/dunk/descarga-removebg-preview (1).png'
import { Link } from 'react-router-dom'




const Navbar = ({greeting}) => {
    
    return (
        <div>
        <p>{greeting}</p>

                <header>
                        <Link to='/'>
                            <div className='logo'>
                                <img src={Kike} alt='logo' width='150' ></img>
                            </div>
                        </Link>
                        <ul>
                            <li>
                                <Link to='/' className='cackles'>Cackles</Link>
                            </li>
                            <li>
                                <Link to='/'>Inicio</Link>
                            </li>
                            
                            
                            <li>
                                <Link to='/category/jordan1'>jordan1</Link>
                            </li>
                            <li>
                                <Link to='/category/jordan4'>jordan4</Link>
                            </li>
                            <li>
                                <Link to='/category/dunk'>dunk</Link>
                            </li>
                            <div className='cart'>
                                <Link to='/cart' >
                                    <CartWidget></CartWidget>
                                </Link>
                            </div>
                            
                            {/* 
                                <Link to='/'>Productos</Link>
                            </li> */}
                            </ul>
                            
                        
                </header>
        
        </div>
    )
}

export default Navbar


