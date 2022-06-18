import React from "react";
import ProductCart from "../common/productCart";

const ProductCollection = () => {
  return (
    <div>
      {[1, 2, 3, 4].map((item) => (
        <ProductCart />
      ))}
    </div>
  );
};

export default ProductCollection;
