import React from "react";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Cart = ({CartItem}) =>{
  return(
    <div>
      <Link className="text-danger cart" to={'/cart'}>
        <FontAwesomeIcon icon={faBagShopping} fontSize={20} className="bg-success"/>
        {/* <span>{CartItem.length === 0 ? "" : CartItem.length}</span> */}
      </Link>

    </div>
  )
}

export default Cart;