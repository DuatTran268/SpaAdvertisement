import React from "react";
import DataProduct from "../../data/Dproduct";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Product.scss";

const ProductCard = ({ Dproduct, addToCard }) => {
  // const [count, setCount] = useState(0)
  // const increment = () => {
  //   setCount(count + 1)
  // }

  return (
    <div className="row g-4">
      {DataProduct.map((productItem) => {
        return (
          <div className="product col-sm-3  gy-4 ">
            <div className="prodcut-wrap">
              <div className="product-image">
                <img src={productItem.image} alt={productItem} />
              </div>
              <div className="product-content text-center">
                <h5 className="product-content-title text-success mb-3">{productItem.name}</h5>
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
