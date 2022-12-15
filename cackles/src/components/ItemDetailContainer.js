import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
// IMAGENES

// MOCK
import  { productos }  from "../mocks/item.mock";

const ItemDetailContainer = ({producto}) => {
    
    const [item, setItem] = useState([]);
    const  [hasProduct, setHasProduct] = useState(false);

    useEffect(() => {
        new Promise((resolve) => 
            setTimeout(() => resolve(productos[producto.id - 1]),2000)
        ).then((data)=> setItem(data)).then((data) => setHasProduct(!data));
        },[producto]);

    return (
        <>
            <div className="container py-5">
                <div className="row py-5">
                    {!hasProduct ? <p>Loading...</p> : <div><ItemDetail item={item} /></div>}
                </div>
            </div>
        </>
    )
};

export default ItemDetailContainer;


