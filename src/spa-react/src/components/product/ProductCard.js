import React from "react";
import { useCart } from "react-use-cart";

const ProductCard = ( props ) => {

  const {addItem} = useCart();

  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div class="card p-0 overflow-hidden h-100 shadow">
        <img src={props.image} class="card-img-top" alt={props.name}/>
        <div class="card-body">
          <h5 class="card-title">{props.name}</h5>
          <p class="card-text">{props.price} USD</p>
          <button class="btn btn-success" 
          onClick={ () => addItem(props.item)} > 
          Mua ngay
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default ProductCard;
