import React from "react";
import imgBaner from "./images/aboutbanner.png";
import "./AboutStatic.scss";
import equitment from "./images/equipment.png";
import equitment2 from "./images/equipment3.png";
import equitment3 from "./images/equipment3.png";
import facility1 from "./images/facility1.jpeg";
import facility2 from "./images/facility2.jpeg";
import facility3 from "./images/facility3.jpeg";
import facility4 from "./images/facility4.jpeg";
import feedback from "./images/feedback.png";
const AboutStatic = () => {
  return (
    <div className="container text-center">
      <h2 className="about-text-title text-primary text-center mt-5">
        HỆ THỐNG SPA TEAM – CHĂM SÓC SẮC ĐẸP VIỆT
      </h2>
      <p className="text-paragraph">
        Thành lập từ năm 2013, Gà Spa với 10 năm kinh nghiệm trong lĩnh vực chăm
        sóc và điều trị các vấn đề về: Mụn – Thâm – Sẹo. Đi từ spa lên Phòng
        khám chuyên khoa Da Liễu, Gà Spa đã không ngừng nâng cấp dịch vụ, không
        gian và thiết bị nhằm đem đến những trải nghiệm tốt nhất cho khách hàng.
        Điều trị thành công cho hơn 4.000.000 khách hàng. Không ngừng mở rộng và
        phát triển để tối ưu trải nghiệm và hiệu quả cho khách.
      </p>
      <iframe
        width="100%"
        height="600px"
        src="https://www.youtube.com/embed/OicqINiiXOU"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>

      <p className="text-paragraph">
        Gà Spa hiện có tổng 25 chi nhánh tại TP.HCM, trải dài từ Miền Trung đến
        Miền Nam để có thể phục vụ và đồng hành cùng với tất cả khách hành trong
        quá trình trị mụn ở mọi miền. Nhằm đáp ứng tốt nhu cầu làm đẹp của các
        anh chị em ở mọi miền đất nước.
      </p>
      <h3 className="about-text-title mt-4">
        ĐỘI NGŨ BÁC SĨ VÀ KỸ THUẬT VIÊN CÓ CHUYÊN MÔN CAO
      </h3>
      <img src={imgBaner} alt="banner" className="mt-3" />
      <h3 className="about-text-title text-primary text-center mt-5 mb-3">
        TRANG THIẾT BỊ HIỆN ĐẠI ĐƯỢC CHỨNG NHẬN QUỐC TẾ FPA HOA KỲ VÀ CẤP PHÉP
        ĐIỀU TRỊ TẠI BỘ Y TẾ VIỆT NAM
      </h3>

      <div className="d-flex flex-wrap">
        <div className="col-4">
          <img src={equitment} alt="equitment" className="about-img" />
        </div>
        <div className="col-4">
          <img src={equitment2} alt="equitment" className="about-img" />
        </div>
        <div className="col-4">
          <img src={equitment3} alt="equitment" className="about-img" />
        </div>
      </div>

      <h3 className="about-text-title text-primary text-center mt-5">
        CƠ SỞ VẬT CHẤT HIỆN ĐẠI MANG TIÊU CHUẨN 5 SAO
      </h3>

      <div className="d-flex flex-wrap">
        <div className="col-3 ">
          <img src={facility1} alt="equitment" className="about-img" />
        </div>
        <div className="col-3 ">
          <img src={facility2} alt="equitment" className="about-img" />
        </div>
        <div className="col-3 ">
          <img src={facility3} alt="equitment" className="about-img" />
        </div>
        <div className="col-3 ">
          <img src={facility4} alt="equitment" className="about-img" />
        </div>
      </div>
      <ul>
        <li className="text-paragraph">
          Tất cả giường điều trị tại Gà Spa được thiết kế độc lập, kín đáo mang
          đến không gian riêng tư, sự thoải mái nhất cho khách hàng khi đến trải
          nghiệm các dịch vụ tại Gà Spa.
        </li>
        <li className="text-paragraph">
          Hệ thống công nghệ luôn được trang bị đầy đủ từ cơ bản cho đến nâng
          cao. Đồng thời, luôn cập nhật và ứng dụng các công nghệ mới, hiện đại
          hàng đầu thế giới vào các dịch vụ tại Spa.
        </li>
        <li className="text-paragraph">
          Chuỗi phòng chờ tiện nghi chắc chắn sẽ làm khách hàng hài lòng.
        </li>
      </ul>
      <h3 className="about-text-title text-primary text-center mt-5">
        QUY TRÌNH DỊCH VỤ CHUẨN Y KHOA
      </h3>
      <p className="text-paragraph text-center">
        Phòng khám da liễu Gà Spa được cấp phép hoạt động bởi Sở Y Tế
      </p>

      <img src={feedback} alt="banner feedback" className="mt-3 banner-feedback"  />

    </div>
  );
};

export default AboutStatic;
