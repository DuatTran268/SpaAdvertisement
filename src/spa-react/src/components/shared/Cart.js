import React from "react";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Cart = () =>{
  return(
    <span>
    <Link className="text-danger" to={'/cart'}>
      <FontAwesomeIcon icon={faCartPlus}/>
    </Link>
    </span>
  )
}

export default Cart;