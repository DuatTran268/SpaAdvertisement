import React from "react";

import FooterInfo from "../footercontent/FooterInfo";
import FooterLogo from "../footercontent/FooterLogo";
import FooterAds from "../footercontent/FooterAds";
import './style.scss'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
  <div className="footer">
    <div className="row pt-5">
      <FooterLogo/>
      <FooterInfo/>
      <FooterAds/>
    </div>
    <hr/>
    <div className="footer-bottom text-center pb-3">
      Coypyright &copy; by 
      <Link to={'https://www.facebook.com/tran.duat.2368'} target="_blank" className="footer-copyright">
        Seventeen Group
      </Link>
    </div>
  </div>);
};

export default Footer;
