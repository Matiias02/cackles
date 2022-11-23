import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Item = ({ product }) => {
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)

    return (
            <>
                <Modal show={show} onHide={handleClose} className='modal'>
                    <Modal.Header closeButton>
                        <Modal.Title>{product.name}</Modal.Title>
                    </Modal.Header>
                    <div>
                        <Modal.Body className='prodDetail'>{product.detail}</Modal.Body>
                        <img src={product.img} className='imgModal'></img>
                    </div>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cerrar
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Añadir al carrito
                        </Button>
                    </Modal.Footer>
                </Modal>
            
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={product.img}/>
                        <Card.Body>
                            <a href='#'><Card.Title>{product.name}</Card.Title></a>
                            <Card.Text>
                                {product.description}
                            </Card.Text>
                        <Button variant="primary" onClick={handleShow}>{product.price}</Button>
                        </Card.Body>
                </Card>
            </>
        );
    };

    export default Item;