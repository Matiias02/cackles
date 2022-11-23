import React from 'react'
import CartWidget from './CartWidget';
import  Kike  from '../assets/img/dunk/descarga-removebg-preview (1).png'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';




const navbar = ({greeting}) => {
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
                            <div className='cart'>
                                <CartWidget></CartWidget>
                            </div>
                            
                            <li>
                                <Link to='/category/jordan1'>jordan1</Link>
                            </li>
                            <li>
                                <Link to='/category/jordan4'>jordan4</Link>
                            </li>
                            <li>
                                <Link to='/category/dunk'>dunk</Link>
                            </li>
                            <li>
                                <Link to='/item/:item'>Item</Link>
                            </li>
                            
                            
                            {/* 
                                <Link to='/'>Productos</Link>
                            </li> */}
                            </ul>
                            
                        
                </header>
        
        </div>
    )
}

export default navbar


