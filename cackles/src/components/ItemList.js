import Item from "./Item";

const ItemList = ({ products }) => {
    return (
        
        <ul className="flex items-center justify-center">
            <div className="">
                <div className="row">
                        {products.map((product) => (
                            <Item product={product} />
                        ))}
                </div>
            </div>
        </ul> 

    );
};

export default ItemList;