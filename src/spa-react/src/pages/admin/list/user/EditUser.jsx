import React, { useEffect, useState } from "react";
import {  useParams , Link} from "react-router-dom";
import { getUserById, updateUser } from "../../../../api/User";
import { Button, Form} from "react-bootstrap";
import Navbar from "../../../../components/admin/navbar/Navbar";
import Sidebar from "../../../../components/admin/sidebar/Sidebar";

const EditUser = () => {
  const [validated, setValidated] = useState(false);
  const initialState = {
      id: 0,
      fullName: "",
      urlSlug: "",
      email: "",
    },
    [user, setUser] = useState(initialState);

  let { id } = useParams();
  id = id ?? 0;

  useEffect(() => {
    document.title = "Thêm/ cập nhật user";

    getUserById(id).then((data) => {
      if (data) {
        console.log("data: ", data);
        setUser(data);
      } else {
        setUser(initialState);
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
      
      updateUser(id, data).then((data) => {
        if (data) {
          alert("Đã lưu thành công");
        } else {
          alert("Xảy ra lỗi khi lưu");
        }
      });
    }
  };

  return (
    <>
      <div className="list">
      <Sidebar />
        <div className="listContainer">
          <Navbar />
          <div className="container mt-5">
          <Form
            method="post"
            encType=""
            onSubmit={handleSubmit}
            noValidate
            validated={validated}
          >
            <Form.Control type="hidden" name="id" value={user.id} />
            <div className="row mb-3">
              <Form.Label className="col-sm-2 col-form-label">Tên người dùng</Form.Label>
              <div className="col-sm-10">
                <Form.Control
                  type="text"
                  name="fullName"
                  title="Full Name"
                  required
                  value={user.fullName || ""}
                  onChange={(e) =>
                    setUser({ ...user, fullName: e.target.value })
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Không được bỏ trống.
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
                  value={user.urlSlug || ""}
                  onChange={(e) =>
                    setUser({ ...user, urlSlug: e.target.value })
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Không được bỏ trống
                </Form.Control.Feedback>
              </div>
            </div>

            <div className="row mb-3">
              <Form.Label className="col-sm-2 col-form-label">
                Email
              </Form.Label>
              <div className="col-sm-10">
                <Form.Control
                  type="text"
                  name="email"
                  title="Email"
                  required
                  value={user.email || ""}
                  onChange={(e) =>
                    setUser({ ...user, email: e.target.value })
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Không được bỏ trống
                </Form.Control.Feedback>
              </div>
            </div>

            <div className="text-center">
              <Button variant="primary" type="submit">
                Lưu các thay đổi
              </Button>
              <Link to="/admin/users" className="btn btn-danger ms-2">
                Hủy và quay lại
              </Link>
            </div>
          </Form>
          </div>
        </div>
      </div>

    </>
  );
};

export default EditUser;
