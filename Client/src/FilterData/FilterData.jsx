import React from "react";
import products from "../Data/data.json"; // Make sure this path is correct
import Product from "../Components/Card";

const FilterData = () => {
  return (
    <div className="products">
      {products.map((product) => ( 
        <Product{...product} />
      ))}
    </div>
  );
};

export default FilterData;
