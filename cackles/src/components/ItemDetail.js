import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/cartContext';
import { ItemCount } from './ItemCount';



const ItemDetail = ({ item }) => {
    const {addItem} = useContext(CartContext)

    const navigate = useNavigate();
    const [count, setCount] = useState(1);
    const [currentStock, setCurrentStock] = useState(item.stock);
    const maxQuantity = currentStock;

    function handleCount(type) {
        if (type === "plus" && count < maxQuantity) setCount(count + 1);
        if (type === "minus" && count > 1) setCount(count - 1);
    }
    function handleAdd() {
        if (currentStock < count) alert("Nos quedamos sin stock de este producto :(");
        else { 
            setCurrentStock(currentStock - count);
            addItem(item, count)
        }
    }
    function handleCheckout() {
        navigate("/cart");
    }


    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src={item.img} alt='vistaDelI'
                            height='400px' width='525px'>
                        </img>
                    </div>
                    <div className='col-md-6'>
                        <h1 className='display-5 fw-bold my-4'>{item.name}</h1>
                        <h3 className='display-6 '>
                            $ {item.price}
                        </h3>
                        <p className='lead'>{item.detail}</p>
                        <h5 className='text-black-50'>{item.description}</h5>
                        
                        <div>
                            <h6 className='text-black-50'>Selecciona tu talle</h6>
                            <button className='btn btn-outline-dark'>8us</button>
                            <button className='btn btn-outline-dark'>9us</button>
                            <button className='btn btn-outline-dark'>10us</button>
                        </div>
                        
                        <h4 className="text-black-50">
                            En stock: {item.stock}
                        </h4>
                        <div className="flex flex-col flex-1 items-center">
                            {/* Count */}
                            {currentStock > 0 ? (
                                <ItemCount count={count} handleCount={handleCount} />
                            ) : (
                                <span className="text-red-500 mt-10">Sin stock</span>
                            )}
                            
                            <div className="w-full flex flex-col align-items-center col-md-9">
                                <button
                                    onClick={handleAdd}
                                    className="btn btn-secondary"
                                    disabled={currentStock === 0}
                                >
                                    Agregar al carrito
                                </button>
                                <button
                                    onClick={handleCheckout}
                                    className="btn btn-primary active"
                                >
                                    Finalizar Compra
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};
export default ItemDetail;



