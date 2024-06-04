import React, { useContext } from "react";
import ProductContext from "../context/productContext";

const Data = () => {
  let { data, setdata } = useContext(ProductContext);

  return (
    <div>
      {data}
      <button onClick={() => setdata("true")}>click me fro, data</button>
    </div>
  );
};

export default Data;
