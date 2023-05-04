import React, { useEffect, useState } from "react";

import Sidebar from "../../../../components/admin/sidebar/Sidebar";
import Navbar from "../../../../components/admin/navbar/Navbar";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import {
  addUser,
  getUser,
  getUserById,
} from "../../../../api/ServiceApi";
import {isInteger } from "../../../../Utils/Utils";


const UserEdit = () => {
  const [editRoleId, setEditRoleId] = useState([]);
  const [fullName, setFullName] = useState([]);
    const [urlSlug, setUrlSlug] = useState([]);
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const navigate = useNavigate()
    


  const clear = () =>{
    setFullName('');
    setUrlSlug('');
    setEmail('');
    setPassword('');
    setEditRoleId(0);

  }

  const handleSave = () => {
    const url = 'https://localhost:7024/api/users'
    const data = {
      "fullName": fullName,
      "urlSlug": urlSlug,
      "email": email,
      "password": password,
      "roleId" : 1
    }

    axios.post(url,data)
    .then((result) =>{
      getUser();
      clear();
      alert("Thêm người dùng thành công");
      navigate(`/admin/users`)
    }).catch((error)=>{
      alert("Lỗi")
    })
  }

  

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="container-sm mt-5">
          <h1>Thêm/Cập nhật danh sách người dùng</h1>
          <Form
          >
            <div className="row">
              <div className="col-6 mb-3">
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Nhập tên"
                    required
                    value={fullName} onChange={(e) => setFullName(e.target.value)}
                  />
                </Form.Group>
              </div>
              <div className="col-6">
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Nhập Url"
                    required
                    value={urlSlug} onChange={(e) => setUrlSlug(e.target.value)}
                  />
                </Form.Group>
              </div>
              <div className="col-6">
                <Form.Group>
                  <Form.Control
                    type="email"
                    placeholder="Nhập Email"
                    required
                    value={email} onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
              </div>
              <div className="col-6">
                <Form.Group>
                  <Form.Control
                    type="password"
                    placeholder="Nhập mật khẩu"
                    required
                    value={password} onChange={(e) => setPassword(e.target.value)}
                    
                  />
                </Form.Group>
              </div>
              {/* <div className="col-6">
                <Form.Group>
                  <input
                    type="checkbox"
                    checked={editRoleId === 1 ? true : false}
                    onChange={(e) => handleActiveChange(e)}
                    value={editRoleId}
                  />
                  <label>RoleId</label>
                </Form.Group>
              </div> */}

              <div className="text-center mt-3">
                <Button onClick={() => handleSave()} variant="primary" type="submit">
                  Lưu các thay đổi
                </Button>
                <Link to="/admin/users" className="btn btn-danger ms-2">
                  Hủy và quay lại
                </Link>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default UserEdit;
