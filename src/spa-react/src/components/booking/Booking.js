import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Header from "../../components/shared/Header";
import Footer from "../shared/Footer";

const Booking = () => {
  useState(() => {
    document.title = "Booking now";
    window.scroll(0, 0);
  });

  return (
    <>
      <Header />

      <div className="container-sm mt-5">
        <Form>
          <div className="row">
            <div className="col-6 mb-5">
              <Form.Group>
                <Form.Control type="date" placeholder="Đặt ngày" required />
              </Form.Group>
            </div>
            <div className="col-6">
              <Form.Group>
                <Form.Control type="text" placeholder="Tên của bạn" required />
              </Form.Group>
            </div>
            <div className="col-6">
              <Form.Group>
                <Form.Control
                  type="tel"
                  name="tel"
                  placeholder="Số điện thoại bạn"
                  pattern="[0-9]{4}[0-9]{3}[0-9]{3}"
                  required
                />
              </Form.Group>
            </div>
            <div className="col-6">
              <Form.Group>
                <Form.Control
                  type="email"
                  placeholder="Email của bạn"
                  required
                />
              </Form.Group>
            </div>
            <Form.Group>
              <textarea
                className="col-12 mt-5"
                type="area"
                placeholder="Lời nhắn"
                rows="6"
              />
            </Form.Group>
            <div className="col text-center mt-5">
              <Button type="submit">Xác nhận</Button>
            </div>
          </div>
        </Form>
      </div>
      <Footer/>
    </>
  );
};

export default Booking;
