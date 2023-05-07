import React from "react";
import { Link } from "react-router-dom";
import ProductItem from "./ProductItem";

const Products = () => {
  return (
    <>
      <div className="container mt-5 mb-2">
        <div className="service-header row pt-5">
          <div className="col">
            <h3 className="service-header-title ">Sản phẩm</h3>
          </div>
          <Link className="service-header-more col" to={`/product`}>
            Xem thêm
          </Link>
        </div>
        <ProductItem />
      </div>
    </>
  );
};

export default Products;
