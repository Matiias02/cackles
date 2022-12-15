import React from "react";
import  Navbar from "../src/components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import  'boxicons';
import ItemDetailContainer from "./components/ItemDetailContainer";
import { Layout } from "./components/Layout";
import { CartContextProvider } from "./contexts/cartContext";



export const CartContext = React.createContext([]);

function App() {

  return (
    <CartContextProvider>
      <Layout>
          <div className="App">
            <ItemListContainer/>
            {/* <ItemDetailContainer/> */}
          </div>
      </Layout>
    </CartContextProvider>
  );
}

export default App;
