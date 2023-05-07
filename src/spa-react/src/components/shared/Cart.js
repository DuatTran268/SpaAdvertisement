import React from "react";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

const Cart = () =>{
  const {totalItems} = useCart();

  return(
    <div className="cart">
      <Link className="text-danger cart-icon" to={'/cart'}>
        <FontAwesomeIcon icon={faBagShopping} fontSize={26}/>
        <span className="bg-danger">{totalItems}</span>
      </Link>

    </div>
  )
}

export default Cart;