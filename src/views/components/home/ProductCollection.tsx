import React from "react";
import ProductCart from "../common/productCart";

const ProductCollection = ({ products }: { products: IProduct[] }) => {
  return (
    <div className="grid grid-cols-2 gap-4 text-gray-800 md:grid-cols-4 lg:grid-cols-5">
      {products.map((product) => (
        <ProductCart product={product} />
      ))}
    </div>
  );
};

export default ProductCollection;
