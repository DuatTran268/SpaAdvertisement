import React from "react";
import { Button, Form } from "react-bootstrap";

const BookService = () => {
  return (
    <div className="container">
      <Form>
        <div className="row">
          <div className="col">
            <Form.Group>
              <Form.Control type="date" placeholder="Đặt ngày" required />
            </Form.Group>
          </div>
          <div className="col">
            <Form.Group>
              <Form.Control type="text" placeholder="Tên của bạn" required />
            </Form.Group>
          </div>
          <div className="col">
            <Form.Group>
              <Form.Control type="email" placeholder="Email của bạn" required />
            </Form.Group>
          </div>
          <div className="col">
            <Button type="submit">Đặt lịch ngay</Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default BookService;
