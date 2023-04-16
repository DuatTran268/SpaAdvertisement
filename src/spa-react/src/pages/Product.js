import React, { useEffect } from "react";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";


const Product = () => {
  useEffect(() => {
    document.title = "Sản phẩm"
  })

  return (
    <div>
    <Header/>
    <h1>
      Đây là trang sản phẩm
    </h1>
    <Footer/>
    </div>
  )
}

export default Product;