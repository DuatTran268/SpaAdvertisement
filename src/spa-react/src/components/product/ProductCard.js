import React from "react";
import DataProduct from "../../data/Dproduct";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Product.scss";
import { Link } from "react-router-dom";

const ProductCard = ({ Dproduct, addToCard }) => {
  // const [count, setCount] = useState(0)
  // const increment = () => {
  //   setCount(count + 1)
  // }

  return (
    <div className="row g-4">
      {DataProduct.map((productItem, index) => {
        return (
          <div className="product col-sm-3  gy-4 ">
            <div className="prodcut-wrap" key={index}>
              <div className="product-image">
                <Link to={`/product/detail`}>
                <img src={productItem.image} alt={productItem} />
                </Link>
              </div>
              <div className="product-content text-center">
                <h5 className="product-content-title mb-3">
                  <Link to={`/product/detail`} className="text-success text-decoration-none">{productItem.name}</Link>
                </h5>
                <div className="product-content-bottom row">
                  <div className="product-price col">
                    Giá: {productItem.price}
                  </div>
                  <div
                    className="product-button-addCart col"
                    onClick={() => addToCard(productItem)}
                  >
                    <Button className="btn-success">
                      <FontAwesomeIcon icon={faCartShopping} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
