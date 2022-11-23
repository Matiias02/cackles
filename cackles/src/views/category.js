import { useParams } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer";
import { Layout } from "../components/Layout";
import Item from "../components/Item";
import {productos} from "../mocks/item.mock";

const CategoryView = () => {
    const { category } = useParams();
    // const categories = productos.filter((product) => product.category === category);

    return (
        <Layout>
            <ItemListContainer />
            {/* {categories.map ((product) => 
                <Item product={product}/> 
            )}*/}
            
        </Layout>
    );

};

export default CategoryView;