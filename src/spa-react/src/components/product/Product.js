import React from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <>
      <div className="container mt-5 mb-2">
        <div className="product-header row pt-5 pb-3">
          <div className="col">
            <h3 className="product-header-title ">Sản phẩm</h3>
          </div>
          <Link className="product-header-more col" to={`/product`}>
            Xem thêm
          </Link>
        </div>
        <ProductCard />
      </div>
    </>
  );
};

export default Product;
