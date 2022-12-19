import React from "react";
import  Navbar from "../src/components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import  'boxicons';
import ItemDetailContainer from "./components/ItemDetailContainer";
import { Layout } from "./components/Layout";




export const CartContext = React.createContext([]);

function App() {

  return (
      <Layout>
          <div className="App">
            <ItemListContainer/>
            {/* <ItemDetailContainer/> */}
          </div>
      </Layout>
  );
}

export default App;
