import React from "react";
import ProductCard from "./ProductCard";
import Dproduct from "../../data/Dproduct";


const ProductItem = () => {
  return (
    <>
      <div className="container mt-5 mb-2">
        <div className="row">
          {Dproduct.map((item, index) => {
            return(
              <ProductCard 
              image={item.image} 
              name={item.name} 
              price={item.price} 
              item={item}
              key={index}/>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default ProductItem;
