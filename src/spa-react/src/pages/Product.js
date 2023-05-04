import React, { useEffect } from "react";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import ProductCard from "../components/product/ProductCard";
import ProductItem from "../components/product/ProductItem";

const Product = () => {
  useEffect(() => {
    document.title = "Sản phẩm";
    window.scroll(0, 0);
  });

  return (
    <div>
      <Header />

      <h3 className="text-success mb-3 mt-5 text-center">
        Mua sản phẩm đi bạn
      </h3>
      <div className="container mb-5">
        <ProductItem />
      </div>

      <Footer />
    </div>
  );
};

export default Product;
