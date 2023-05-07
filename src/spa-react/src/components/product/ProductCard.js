import React from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import "./Product.scss"
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

const ProductCard = (props) => {
  const { addItem } = useCart();

  const handleAddCart = () => {
    if(true){
      alert("Bạn đã thêm sản phẩm vào giỏ hàng")
    }
  }


  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div class="card p-0 overflow-hidden h-100 shadow">
        <div className="images">
          <Link to={`/product/detail`}>
            <img
              src={props.image}
              class="card-img-top images-item"
              alt={props.name}
            />
          </Link>
        </div>
        <div class="card-body">
          <Link className="text-decoration-none text-success" to={`/product/detail`}>
            <h5 class="card-title">{props.name}</h5>
          </Link>
          <p class="card-text">{props.price} USD</p>
          <div className="text-end">
            <Button className="btn btn-success" 
            onClick={() => {
              return (
                handleAddCart(),
                addItem(props.item)
              )
            }}>
              Add Cart
              <FontAwesomeIcon icon={faCartArrowDown} className="ms-2"/>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
