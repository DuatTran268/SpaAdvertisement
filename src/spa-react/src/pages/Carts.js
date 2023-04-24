import React, { useState } from "react";



const Cart = () =>{
  useState(() => {
    document.title = "Giỏ hàng"
  }, [])

  return (
    <>
      <h1>Đây là trang giỏi hàng</h1>
    </>
  )
}

export default Cart;