import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getServiceById, updateService } from "../../../../api/ServiceApi";

import Navbar from "../../../../components/admin/navbar/Navbar";
import Sidebar from "../../../../components/admin/sidebar/Sidebar";
import { Button, Form} from "react-bootstrap";



const EditService = () => {
  const [validated, setValidated] = useState(false);
  const initialState = {
    id: 0,
    name: "",
    urlSlug: "",
    shortDescription: "",
  },
  [service, setService] = useState(initialState);

  const navigate = useNavigate();

  let { id } = useParams();
  id = id ?? 0;

  useEffect(() => {
    document.title = "Thêm cập nhật dịch vụ";

    getServiceById(id).then((data) => {
      if(data){
        setService(data);
      }
      else{
        setService(initialState);
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
      
      updateService(id, data).then((data) => {
        if (data) {
          alert("Đã lưu thành công");
          navigate(`/admin/service`);
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
          <h3 className="text-success mb-5">Thêm/cập nhật dịch vụ</h3>
          <Form
            method="post"
            encType=""
            onSubmit={handleSubmit}
            noValidate
            validated={validated}
          >
            <Form.Control type="hidden" name="id" value={service.id} />
            <div className="row mb-3">
              <Form.Label className="col-sm-2 col-form-label">Tên dịch vụ</Form.Label>
              <div className="col-sm-10">
                <Form.Control
                  type="text"
                  name="name"
                  title="Name"
                  required
                  value={service.name || ""}
                  onChange={(e) =>
                    setService({ ...service, name: e.target.value })
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
                  value={service.urlSlug || ""}
                  onChange={(e) =>
                    setService({ ...service, urlSlug: e.target.value })
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Không được bỏ trống
                </Form.Control.Feedback>
              </div>
            </div>

            <div className="row mb-3">
              <Form.Label className="col-sm-2 col-form-label">
                Short Description
              </Form.Label>
              <div className="col-sm-10">
                <Form.Control
                  type="text"
                  name="shortDescription"
                  title="Email"
                  required
                  value={service.shortDescription || ""}
                  onChange={(e) =>
                    setService({ ...service, shortDescription: e.target.value })
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
              <Link to="/admin/service" className="btn btn-danger ms-2">
                Hủy và quay lại
              </Link>
            </div>
          </Form>
          </div>
        </div>
      </div>

  )
}

export default EditService;