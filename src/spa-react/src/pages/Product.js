import React, { useEffect } from "react";



const Product = () => {
  useEffect(() => {
    document.title = "Sản phẩm"
  })

  return (
    <h1>
      Đây là trang sản phẩm
    </h1>
  )
}

export default Product;