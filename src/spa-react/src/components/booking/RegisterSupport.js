import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

import { putCustomerSupport } from "../../api/Support";
import { useParams } from "react-router-dom";

const BookService = () => {
  const [validated, setValidated] = useState(false);
  const initialState = {
      id: 0,
      fullName: "",
      phoneNumber: "",
    },
    [support, setSupport] = useState(initialState);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.currentTarget.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    } else {
      let data = new FormData(e.target);
      putCustomerSupport(data).then((data) => {
        if (data) {
          alert("Cảm ơn bạn đã gửi thông tin để được hỗ trợ");
        } else {
          alert("Đã xảy ra lỗi khi gửi thông tin");
        }
      });
    }
  };

  return (
    <div className="container">
      <h3 className="text-center text-success">
        Đăng ký để nhận được tư vấn hỗ trợ
      </h3>
      <Form
        method="post"
        encType=""
        onSubmit={handleSubmit}
        noValidate
        validated={validated}
      >
        <Form.Control type="hidden" name="id" value={support.id} />

        <div className="row">
          {/* <div className="col">
            <Form.Group>
              <Form.Control type="date" placeholder="Đặt ngày" required />
            </Form.Group>
          </div> */}
          <div className="col">
            <Form.Control
              type="text"
              name="fullName"
              title="FullName"
              required
              placeholder="Tên của bạn"
              value={support.fullName || ""}
              onChange={(e) => setSupport({ ...support, fullName: e.target.value})}
            />
          </div>
          <div className="col">
              <Form.Control
                type="tel"
                name="phoneNumber"
                title="PhoneNumber"
                placeholder="Số điện thoại bạn"
                pattern="[0-9]{4}[0-9]{3}[0-9]{3}"
                required
                value={support.phoneNumber || ""}
                onChange={(e) => setSupport({ ...support, phoneNumber: e.target.value})}
              />
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
