import { Loading } from './Loading';
import ItemList from './ItemList'
import { useGetItem } from '../hooks/useGetItem';


    const ItemListContainer = () => {

        const items = useGetItem();

        if (!items) {
            return <Loading/>
        }
    
        return (
            <div className="h-full">
                <ItemList products={items} key={items.id}/>
            </div>
        );
    };





export default ItemListContainer