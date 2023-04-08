import React from "react";
import { Link } from "react-router-dom";
// import "./styles/style.scss";
import logo from './images/logo.png';
import MainMenu from "./MainMenu";
import Cart from "./Cart";
import SearchForm from "./SearchForm";


const Header = () => {
  return (
    <header className="bg-primary sticky-top">
      <nav className="container-fluid navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <Link to={"/"} className="text-danger text-decoration-none">
            <img src={logo} alt="logo" className="logo"/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-around" id="navbarSupportedContent">
            <MainMenu />
            <SearchForm />
            <Cart/>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
