import React from "react";
import { Button, Form } from "react-bootstrap";

const BookService = () => {
  return (
    <div className="container">
      <Form>
      <h3 className="text-center text-success">Đăng ký để nhận được tư vấn hỗ trợ</h3>
        <div className="row">
          {/* <div className="col">
            <Form.Group>
              <Form.Control type="date" placeholder="Đặt ngày" required />
            </Form.Group>
          </div> */}
          <div className="col">
            <Form.Group>
              <Form.Control type="text" placeholder="Tên của bạn" required />
            </Form.Group>
          </div>
          <div className="col">
            <Form.Group>
              <Form.Control type="tel" name="tel" placeholder="Số điện thoại bạn"
           pattern="[0-9]{4}[0-9]{3}[0-9]{3}" required />
            </Form.Group>
          </div>
          <div className="col text-center">
            <Button type="submit">Nhận tư vấn</Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default BookService;
