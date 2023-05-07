import React, { useEffect, useState } from "react";
import {  useParams , Link, useNavigate} from "react-router-dom";
import { getUserById, getUserFilter, updateUser } from "../../../../api/User";
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
      password: "",
      roleId: "",
    },
    [user, setUser] = useState(initialState),
    [filter, setFilter] = useState({roleList: []});

  const navigate = useNavigate();

  let { id } = useParams();
  id = id ?? 0;

  useEffect(() => {
    document.title = "Thêm/cập nhật user";

    getUserById(id).then((data) => {
      if (data) {
        console.log("data: ", data);
        setUser(data);
      } else {
        setUser(initialState);
      }
    });

    getUserFilter().then((data) => {
      if (data) {
        setFilter({
          roleList: data.roleList
        });
      }
      else{
        setFilter({roleList: []});
      }
    })
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
          navigate(`/admin/users`)
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
          <h3 className="text-success mb-5">Thêm/cập nhật người dùng</h3>
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

            <div className="row mb-3">
              <Form.Label className="col-sm-2 col-form-label">
                Password
              </Form.Label>
              <div className="col-sm-10">
                <Form.Control
                  type="text"
                  name="password"
                  title="Password"
                  required
                  value={user.password || ""}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Không được bỏ trống
                </Form.Control.Feedback>
              </div>
            </div>

            <div className="row mb-3">
              <Form.Label className="col-sm-2 col-form-label">
                Vai trò
              </Form.Label>
              <div className="col-sm-10">
                <Form.Select
                  name="roleId"
                  title="role Id"
                  value={user.roleId}
                  required
                  onChange={(e) =>
                    setUser({
                      ...user,
                      roleId: e.target.value,
                    })
                  }
                >
                  <option value="">-- Vai trò--</option>
                  {filter.roleList.length > 0 &&
                    filter.roleList.map((item, index) => (
                      <option key={index} value={item.value}>
                        {item.text}
                      </option>
                    ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Không được bỏ trống.
                </Form.Control.Feedback>
              </div>
            </div>

            <div className="text-center">
              <Button variant="success" type="submit">
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
