import React from "react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmptyCart from "../assets/img/empty.png";
import  Item  from "../components/Item";
import { Layout } from "../components/Layout";
import {Loading} from "../components/Loading";
import {TrashWidget} from "../components/TrashWidget"
import { CartContext } from "../contexts/cartContext";
import Swal from 'sweetalert';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CartView = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const { productsAdded, clear, totalAmount, removeItem } = useContext(CartContext);
    // +++Checkout+++
    const datosFormulario = React.useRef()

    const consultarFormulario= (e)=>{
        e.preventDefault()
        console.log(datosFormulario);
        const datForm= new FormData(datosFormulario.current);
        console.log(datForm);
        const cliente = Object.fromEntries(datForm);
        console.log(cliente)
        e.target.reset();
        navigate("/")
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleFinalizePurchase = () => {
    setIsLoading(true);
    setTimeout(() => {
        clear();
        setIsLoading(false);
        Swal({
            title: "Gracias por preferirnos", 
            text: "Compra Finalizada",
            icon: "success",
            timer:"2000",});
        navigate("/");
    }, 2000);
    };

    return (
        <Layout>
            <div className="flex flex-col  justify-center ">
                {productsAdded.length === 0 ? (
                    <div className="flex flex-col items-center justify-center ">
                        <img src={EmptyCart} alt="Empty Cart" className="w-44 h-44" />
                        <h1 className="text-2xl">No has agregado productos</h1>
                        <button
                        onClick={() => navigate("/")}
                        className="rounded-lg p-2 bg-gray-800 text-white mt-4"
                        >
                        Ir al Inicio
                        </button>
                    </div>
                )   : (
                    <div>
                        <div className="flex gap-4 ">
                            {productsAdded.map((product) => {
                            const quantityAdded = product.quantityAdded;

                            return (
                                <div className="relative">
                                    <Item
                                        product={product.item}
                                        quantityAdded={quantityAdded}
                                    />
                                    <TrashWidget itemId={product.item.id} />
                                </div>
                            );
                        })}
                        </div>
                        <div className="flex justify-end mt-4">
                            {isLoading ? (
                                <Loading size="50px" />
                                ) : (
                                <div className="flex flex-col">
                                    <span>Total a pagar: ${totalAmount}</span>
                                    {/* <Checkout/> */}
                                    
                                    <button
                                        onClick={handleShow}
                                        className="rounded-lg p-2 bg-gray-800 text-white"
                                        
                                        >
                                        Finalizar Compra
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
                <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Finalizar Compra</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="container">
        <form onSubmit={consultarFormulario} ref={datosFormulario}> 
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                <input type="text" className="form-control" name="nombre" />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" name="email" />
            </div>
            <div className="mb-3">
                <label htmlFor="dni" className="form-label">DNI</label>
                <input type="number" className="form-control" name="dni" />
            </div>
            <div className="mb-3">
                <label htmlFor="celular" className="form-label">Numero telefonico</label>
                <input type="number" className="form-control" name="celular" />
            </div>
            <div className="mb-3">
                <label htmlFor="direccion" className="form-label">Dirección</label>
                <input type="text" className="form-control" name="direccion" />
            </div>
        </form>
        </div> 
        </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" className="bg-stone-800" onClick={handleClose}>
                    Inicio
                </Button>
                <Button variant="primary" className="bg-cyan-800" onClick={handleFinalizePurchase}>
                    Finalizar
                </Button>
            </Modal.Footer>
            </Modal>
        </Layout>
    );
};

export default CartView;
