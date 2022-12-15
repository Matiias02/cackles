import React from 'react';
import { Layout } from '../components/Layout';
import ItemDetailContainer from '../components/ItemDetailContainer';
import { useParams } from 'react-router-dom';


const ItemView = () => {
    const producto = useParams();

    return(
    <Layout>
        <ItemDetailContainer producto={producto}/>
    </Layout>
    )
}  
export default ItemView;