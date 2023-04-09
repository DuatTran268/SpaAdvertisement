import {
  faEnvelope,
  faGlobe,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const FooterInfo = () => {
  return (
    <div className="footer-info col-4">
      <h4 className="footer-info-title">Liên hệ ngay</h4>
      <div className="footer-info-contact">
        <div className="footer-info-contact-item">
          <FontAwesomeIcon icon={faEnvelope} className="footer-fa-icon fa-email"/>
          Email:
          <Link
            to={"mailto:2012254@dlu.edu.vn"}
            className="footer-text-link"
          >
            2012254@dlu.edu.vn
          </Link>
        </div>

        <div className="footer-info-contact-item">
          <FontAwesomeIcon icon={faPhone} className="footer-fa-icon fa-phone" />
          Hotline:
          <Link to={"tel:0989962356"} className="footer-text-link">
            0966668888
          </Link>
        </div>

        <div className="footer-info-contact-item">
          <FontAwesomeIcon icon={faGlobe} className="footer-fa-icon fa-address" />
          Địa chỉ:
          <Link className="footer-text-link">
            95 Lý Nam Đế - Phường 8 - Thành phố Đà Lạt
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterInfo;
