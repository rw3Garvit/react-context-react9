import React, { useContext } from "react";
import Card from "./Card";
import ProductContext from "../context/productContext";

const Table = () => {
  const { data, setdata } = useContext(ProductContext);

  return (
    <div>
      {data}
      <button onClick={() => setdata("hello garvit")}>
        click mee from table
      </button>
      <Card />
    </div>
  );
};

export default Table;
