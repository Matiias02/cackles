import React from "react";
import  Navbar from "../src/components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import  'boxicons';


function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting={"HOLA"}/>
    </div>
  );
}

export default App;
