import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link, useNavigate } from 'react-router-dom'


const Item = ({ product }) => {
    const navigate = useNavigate();
    
    function handleNavigate () {
        navigate (`/item/${product.id}`)
    }
    

    return (
            <>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={product.img}/>
                        <Card.Body>
                            <a href='#'><Card.Title>{product.name}</Card.Title></a>
                            <Card.Text>
                                {product.description}
                            </Card.Text>
                        <div>
                            <Link to={`/item/${product.id}`}>
                                <Button variant="primary">{product.price}</Button>
                            </Link>
                        </div>
                        </Card.Body>
                </Card>
            </>
        );
    
    };

    export default Item;