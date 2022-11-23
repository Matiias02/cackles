import React from 'react'
import { Layout } from '../components/Layout';
import ItemDetailContainer from '../components/ItemDetailContainer';

const ItemView = () => (
    <Layout>
        <ItemDetailContainer/>
        <h1>Vista del item</h1>
    </Layout>
)   
export default ItemView;