import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../../../../components/admin/navbar/Navbar";
import Sidebar from "../../../../components/admin/sidebar/Sidebar";
import { Button, Form } from "react-bootstrap";
import {
  getServiceFilter,
  getServiceTypeById,
  updateServiceType,
} from "../../../../api/ServiceTypeApi";
import { isEmptyOrSpaces } from "../../../../Utils/Utils";



const EditServiceType = () => {
  const [validated, setValidated] = useState(false);
  const initialState = {
      id: 0,
      name: "",
      urlSlug: "",
      imageUrl: "",
      shortDescription: "",
      description: "",
      price: "",
      serviceId: "",
    },
    [serviceType, setServiceType] = useState(initialState),
    [filter, setFilter] = useState({ serviceList: [] });

  const navigate = useNavigate();

  let { id } = useParams();
  id = id ?? 0;

  useEffect(() => {
    document.title = "Thêm cập nhật loại dịch vụ";

    getServiceTypeById(id).then((data) => {
      if (data) {
        setServiceType(data);
      } else {
        setServiceType(initialState);
      }
    });

    getServiceFilter().then((data) => {
      if (data) {
        setFilter({
          serviceList: data.serviceList,
        });
      } else {
        setFilter({ serviceList: [] });
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

      updateServiceType(id, data).then((data) => {
        if (data) {
          alert("Đã lưu thành công");
          navigate(`/admin/servicetype/`);
        } else {
          alert("Xảy ra lỗi khi lưu");
        }
      });
    }
  };

  const getImage = (path) => {
    console.log(path);
    if (!path) {
      // set default image
      return `https://placehold.co/200x200?text=Image-not-found`;
    }

    return `https://localhost:7024/${path}`;
  };

  

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="container mt-5">
        <h3 className="text-success mb-5">Thêm/cập nhật loại dịch vụ</h3>
          <Form
            method="post"
            encType=""
            // encType="multipart/form-data"
            onSubmit={handleSubmit}
            noValidate
            validated={validated}
          >
            <Form.Control type="hidden" name="id" value={serviceType.id} />
            <div className="row mb-3">
              <Form.Label className="col-sm-2 col-form-label">
                Tên dịch vụ
              </Form.Label>
              <div className="col-sm-10">
                <Form.Control
                  type="text"
                  name="name"
                  title="Name"
                  required
                  value={serviceType.name || ""}
                  onChange={(e) =>
                    setServiceType({ ...serviceType, name: e.target.value })
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Không được bỏ trống.
                </Form.Control.Feedback>
              </div>
            </div>

            <div className="row mb-3">
              <Form.Label className="col-sm-2 col-form-label">
                UrlSlug
              </Form.Label>
              <div className="col-sm-10">
                <Form.Control
                  type="text"
                  name="urlSlug"
                  title="Url Slug"
                  required
                  value={serviceType.urlSlug || ""}
                  onChange={(e) =>
                    setServiceType({ ...serviceType, urlSlug: e.target.value })
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
                  title="shortDescription"
                  required
                  value={serviceType.shortDescription || ""}
                  onChange={(e) =>
                    setServiceType({
                      ...serviceType,
                      shortDescription: e.target.value,
                    })
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Không được bỏ trống
                </Form.Control.Feedback>
              </div>
            </div>

            <div className="row mb-3">
              <Form.Label className="col-sm-2 col-form-label">
                Description
              </Form.Label>
              <div className="col-sm-10">
                <Form.Control
                  type="text"
                  name="Description"
                  title="description"
                  required
                  value={serviceType.description || ""}
                  onChange={(e) =>
                    setServiceType({
                      ...serviceType,
                      description: e.target.value,
                    })
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Không được bỏ trống
                </Form.Control.Feedback>
              </div>
            </div>

            <div className="row mb-3">
              <Form.Label className="col-sm-2 col-form-label">Price</Form.Label>
              <div className="col-sm-10">
                <Form.Control
                  type="text"
                  name="price"
                  title="price"
                  required
                  value={serviceType.price || ""}
                  onChange={(e) =>
                    setServiceType({ ...serviceType, price: e.target.value })
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Không được bỏ trống
                </Form.Control.Feedback>
              </div>
            </div>

            <div className="row mb-3">
              <Form.Label className="col-sm-2 col-form-label">
                Thuộc dịch vụ
              </Form.Label>
              <div className="col-sm-10">
                <Form.Select
                  name="serviceId"
                  title="Service Id"
                  value={serviceType.serviceId}
                  required
                  onChange={(e) =>
                    setServiceType({
                      ...serviceType,
                      serviceId: e.target.value,
                    })
                  }
                >
                  <option value="">--Loại dịch vụ--</option>
                  {filter.serviceList.length > 0 &&
                    filter.serviceList.map((item, index) => (
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

            <div className="row mb-3">
              <Form.Label className="col-sm-2 col-form-label">
                Chọn hình ảnh
              </Form.Label>
              <div className="col-sm-10">
                <Form.Control
                  type="file"
                  name="imageFile"
                  accept="image/*"
                  title="Image file"
                  onChange={(e) =>
                    setServiceType({
                      ...serviceType,
                      imageFile: e.target.files[0],
                    })
                  }
                />
                {/* <Form.Control.Feedback type="invalid">
                  Không được bỏ trống.
                </Form.Control.Feedback> */}
              </div>
            </div>

            {!isEmptyOrSpaces(serviceType.imageUrl) && (
              <div className="row mb-3">
                <Form.Label className="col-sm-2 col-form-label">
                  Hình hiện tại
                </Form.Label>
                <div className="col-sm-10">
                  <img
                    src={getImage(serviceType.imageUrl)}
                    alt={serviceType.title}
                    style={{width: "50%"}}
                  />
                </div>
              </div>
            )}

            <div className="text-center">
              <Button variant="success" type="submit">
                Lưu các thay đổi
              </Button>
              <Link to="/admin/servicetype" className="btn btn-danger ms-2">
                Hủy và quay lại
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EditServiceType;
