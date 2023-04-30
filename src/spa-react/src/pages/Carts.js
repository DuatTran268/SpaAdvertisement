import React, { useState } from "react";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import Carts from "../components/cart/Carts";
import { CartProvider } from "react-use-cart";

const Cart = () => {
  useState(() => {
    document.title = "Giỏ hàng";
    window.scroll(0,0);
  }, []);

  return (
    <>
        <Header />
        <Carts />
        <Footer />
    </>
  );
};

export default Cart;


