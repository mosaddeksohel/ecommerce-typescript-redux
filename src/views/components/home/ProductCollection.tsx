import React from "react";
import ProductCart from "../common/productCart";

const ProductCollection = ({ products }: { products: any[] }) => {
  return (
    <div>
      {products.map((product) => (
        <ProductCart product={product} />
      ))}
    </div>
  );
};

export default ProductCollection;
