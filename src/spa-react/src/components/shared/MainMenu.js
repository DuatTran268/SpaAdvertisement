import React from "react";
import MenuItem from "../controls/MenuItem";
// import './styles/style.scss';
const MainMenu = () => {
  return (
    <ul className="navbar-nav ">
      <MenuItem link="/home" title={"Trang Chủ"}/>
      <MenuItem link={"/service"} title="Dịch vụ"/>
      <MenuItem link={"/product"} title="Sản phẩm"/>
      <MenuItem link={"/about-us"} title="Giới thiệu"/>
      <MenuItem link={"/contact"} title="Liên hệ"/>
    </ul>
  )
}

export default MainMenu;