import React from "react";
import Dslider from "views/components/custom/Dslider";
import ProductCollection from "views/components/home/ProductCollection";

const Home = () => {
  return (
    <main>
      <div className="py-20">
        <Dslider />
      </div>
      <div>
        <ProductCollection />
      </div>
    </main>
  );
};

export default Home;
