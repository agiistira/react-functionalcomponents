import React from "react";

const Product = (props) => {
  return (
    <div className="product">
      <h1>List of Product</h1>
      <p>Name : {props.product.name}</p>
      <p>Price : {props.product.price}</p>
    </div>
  );
};

export default Product;
