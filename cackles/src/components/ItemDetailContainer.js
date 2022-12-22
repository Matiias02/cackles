import ItemDetail from "./ItemDetail";
import { Loading } from "./Loading";


import { useGetItem } from "../hooks/useGetItem";


const ItemDetailContainer = ({producto}) => {
    
    const item = useGetItem()
    
    if (!item) {
        return <Loading/>
    }

    return (
        <>
            <div className="container py-5">
                <div className="row py-5">
                    <div><ItemDetail item={item} /></div>
                </div>
            </div>
        </>
    )
};

export default ItemDetailContainer;


