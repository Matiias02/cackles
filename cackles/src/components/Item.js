import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link, useNavigate } from 'react-router-dom'
import { useGetItemImg } from '../hooks/useGetItemImage';



const Item = ({ product }) => {
    const navigate = useNavigate();
    const img = useGetItemImg(product.img)
    
    function handleNavigate () {
        navigate (`/item/${product.id}`)
    }
    

    return (
            <>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img}/>
                        <Card.Body>
                            <Link to={`/item/${product.id}`}><Card.Title>{product.name}</Card.Title></Link>
                            <Card.Text>
                                {product.description}
                            </Card.Text>
                        <div>
                            <Link to={`/item/${product.id}`}>
                                <Button variant="primary" className='bg-cyan-800' >{product.price}</Button>
                            </Link>
                        </div>
                        </Card.Body>
                </Card>
            </>
        );
    
    };

    export default Item;