import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getServiceById, updateService } from "../../../../api/ServiceApi";

import Navbar from "../../../../components/admin/navbar/Navbar";
import Sidebar from "../../../../components/admin/sidebar/Sidebar";
import { Button, Form} from "react-bootstrap";
import { getBookingById, updateBooking } from "../../../../api/BookingApi";



const EditBooking = () => {
  const [validated, setValidated] = useState(false);
  const initialState = {
    id: 0,
    name: "",
    email: "",
    urlSlug: "",
    phoneNumber: "",
    bookingDate: "",
    noteMessage: "",
    priceTotal: "",
    userId: "",
  },
  [booking, setBooking] = useState(initialState);

  let { id } = useParams();
  id = id ?? 0;

  useEffect(() => {
    document.title = "Thêm cập nhật dịch vụ";

    getBookingById(id).then((data) => {
      if(data){
        setBooking(data);
      }
      else{
        setBooking(initialState);
      }
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.currentTarget.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    } else {
      let data = new FormData(e.target);
      
      updateBooking(id, data).then((data) => {
        if (data) {
          alert("Đã lưu thành công");
        } else {
          alert("Xảy ra lỗi khi lưu");
        }
      });
    }
  }

  return (
    <div className="list">
      <Sidebar />
        <div className="listContainer">
          <Navbar />
          <div className="container mt-5">
          <h3 className="text-success mb-5">Thêm/cập nhật đặt lịch dịch vụ</h3>
          <Form
            method="post"
            encType=""
            onSubmit={handleSubmit}
            noValidate
            validated={validated}
          >
            <Form.Control type="hidden" name="id" value={booking.id} />
            <div className="row mb-3">
              <Form.Label className="col-sm-2 col-form-label">Tên khách hàng</Form.Label>
              <div className="col-sm-10">
                <Form.Control
                  type="text"
                  name="name"
                  title="Name"
                  required
                  value={booking.name || ""}
                  onChange={(e) =>
                    setBooking({ ...booking, name: e.target.value })
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Không được bỏ trống.
                </Form.Control.Feedback>
              </div>
            </div>

            <div className="row mb-3">
              <Form.Label className="col-sm-2 col-form-label">Email</Form.Label>
              <div className="col-sm-10">
                <Form.Control
                  type="text"
                  name="email"
                  title="Url Slug"
                  required
                  value={booking.email || ""}
                  onChange={(e) =>
                    setBooking({ ...booking, email: e.target.value })
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Không được bỏ trống
                </Form.Control.Feedback>
              </div>
            </div>

            <div className="row mb-3">
              <Form.Label className="col-sm-2 col-form-label">UrlSlug</Form.Label>
              <div className="col-sm-10">
                <Form.Control
                  type="text"
                  name="urlSlug"
                  title="Url Slug"
                  required
                  value={booking.urlSlug || ""}
                  onChange={(e) =>
                    setBooking({ ...booking, urlSlug: e.target.value })
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Không được bỏ trống
                </Form.Control.Feedback>
              </div>
            </div>

            <div className="row mb-3">
              <Form.Label className="col-sm-2 col-form-label">Số điện thoại</Form.Label>
              <div className="col-sm-10">
                <Form.Control
                  type="text"
                  name="phoneNumber"
                  title="Số điện thoại"
                  required
                  value={booking.phoneNumber || ""}
                  onChange={(e) =>
                    setBooking({ ...booking, phoneNumber: e.target.value })
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Không được bỏ trống
                </Form.Control.Feedback>
              </div>
            </div>

            <div className="row mb-3">
              <Form.Label className="col-sm-2 col-form-label">Ngày hẹn</Form.Label>
              <div className="col-sm-10">
                <Form.Control
                  type="text"
                  name="bookingDate"
                  title="Lịch ngày hẹn"
                  required
                  value={booking.bookingDate || ""}
                  onChange={(e) =>
                    setBooking({ ...booking, bookingDate: e.target.value })
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Không được bỏ trống
                </Form.Control.Feedback>
              </div>
            </div>

            <div className="row mb-3">
              <Form.Label className="col-sm-2 col-form-label">
                Lưu ý
              </Form.Label>
              <div className="col-sm-10">
                <Form.Control
                  type="text"
                  name="shortDescription"
                  title="Email"
                  required
                  value={booking.noteMessage || ""}
                  onChange={(e) =>
                    setBooking({ ...booking, noteMessage: e.target.value })
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Không được bỏ trống
                </Form.Control.Feedback>
              </div>
            </div>

            <div className="row mb-3">
              <Form.Label className="col-sm-2 col-form-label">Trạng thái</Form.Label>
              <div className="col-sm-10">
                <Form.Control
                  type="text"
                  name="status"
                  title="Trạng thái"
                  required
                  value={booking.status || ""}
                  onChange={(e) =>
                    setBooking({ ...booking, status: e.target.value })
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Không được bỏ trống
                </Form.Control.Feedback>
              </div>
            </div>

            <div className="row mb-3">
              <Form.Label className="col-sm-2 col-form-label">Tổng tiền</Form.Label>
              <div className="col-sm-10">
                <Form.Control
                  type="text"
                  name="priceTotal"
                  title="Tổng tiền"
                  required
                  value={booking.priceTotal || ""}
                  onChange={(e) =>
                    setBooking({ ...booking, priceTotal: e.target.value })
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Không được bỏ trống
                </Form.Control.Feedback>
              </div>
            </div>

            <div className="row mb-3">
              <Form.Label className="col-sm-2 col-form-label">Mã id khách hàng</Form.Label>
              <div className="col-sm-10">
                <Form.Control
                  type="text"
                  name="userId"
                  title="Tổng tiền"
                  required
                  value={booking.userId || ""}
                  onChange={(e) =>
                    setBooking({ ...booking, userId: e.target.value })
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Không được bỏ trống
                </Form.Control.Feedback>
              </div>
            </div>

            <div className="text-center">
              <Button variant="success" type="submit">
                Lưu các thay đổi
              </Button>
              <Link to="/admin/booking" className="btn btn-danger ms-2">
                Hủy và quay lại
              </Link>
            </div>
          </Form>
          </div>
        </div>
      </div>

  )
}

export default EditBooking;