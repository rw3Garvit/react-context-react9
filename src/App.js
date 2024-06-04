import { useState } from "react";
import "./App.css";
import Table from "./components/Table";
import ProductContext from "./context/productContext";

function App() {
  const [data, setdata] = useState("false");

  return (
    <div className="App">
      <ProductContext.Provider value={{ data, setdata }}>
        <Table />
      </ProductContext.Provider>
    </div>
  );
}

export default App;
