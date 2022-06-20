import React, { useEffect, useState } from "react";
import ProductService from "services/Product.service";
import Dslider from "views/components/custom/Dslider";
import ProductCollection from "views/components/home/ProductCollection";

const Home = () => {
  const [products, setProducts] = useState<[] | any[]>([]);

  useEffect(() => {
    ProductService.getAllProduct()
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <main>
      <div className="py-20">
        <Dslider />
      </div>
      <div>
        <ProductCollection products={products} />
      </div>
    </main>
  );
};

export default Home;
