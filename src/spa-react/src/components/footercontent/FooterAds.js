import React from "react";

const FooterAds = () => {
  return (
    <div className="footer-logo col-4">
      <h4 className="footer-info-title">Theo dõi chúng tôi</h4>
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMixiGaming&tabs&width=270&height=200&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="270"
        height="200"
        scrolling="no"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        title="page"
      ></iframe>
      <div className="footer-social row"></div>
    </div>
  );
};

export default FooterAds;
