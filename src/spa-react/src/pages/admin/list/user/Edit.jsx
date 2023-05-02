import React, { useEffect, useState } from 'react'

import Sidebar from '../../../../components/admin/sidebar/Sidebar'
import Navbar from '../../../../components/admin/navbar/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Form } from "react-bootstrap";
import axios from 'axios';
import { getDeleteUser, getUser } from "../../../../api/ServiceApi";

const UserEdit = () => {
  const navigate = useNavigate()
  const [userList, setUserList] = useState([]);
  const [data, setData] = useState([]);
  const [fullName, setFullName] = useState([]);
    const [urlSlug, setUrlSlug] = useState([]);
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const [roleId, setRoleId] = useState([]);

    const [editFullName, setEditFullName] = useState([]);
    const [editUrlSlug, setEditUrlSlug] = useState([]);
    const [editEmail, setEditEmail] = useState([]);
    const [editPassword, setEditPassword] = useState([]);
    const [editRoleId, setEditRoleId] = useState([]);

    useEffect(() => {
      
      getUser().then(data => {
        if (data)
        setUserList(data);
        else
        setUserList([]);
      })
    });

    async function handleSave(event) {
  
      event.preventDefault();
      try {
        await axios.post("https://localhost:7024/api/users/Add", {
          
        fullName: fullName,
        urlSlug: urlSlug,
        Email: email,
        Password: password,
        roleId: roleId
        
        });
        alert("Student Registation Successfully");
          clear();
        
      
        getUser();
      } catch (err) {
        alert(err);
      }
    }

    const Save = () => {
        const url ='https://localhost:7024/api/users/Add'
        const data = {
          "fullName": fullName,
          "urlSlug": urlSlug,
          "email": email,
          "password": password,
          "roleId": roleId
        }

        axios.post(url, data)
        .then((result)=>{
          getUser();
          clear();
          navigate('/admin/users');
          console.log("thanh cong");
        }).catch((err) => {
          console.log(err)
        })
      }


    const clear = () =>{
      setFullName('');
      setUrlSlug('');
      setEmail('');
      setPassword('');
      setRoleId(0);
      setEditFullName('');
      setEditUrlSlug('');
      setEditEmail('');
      setEditPassword('');
      setEditRoleId(0);

    }

    const handleActiveChange = (e) =>{
      if (e.target.checked) {
        setEditRoleId(1);
      }else{
        setEditRoleId(0);
      }
    }


  return (
    <div className="list">
    <Sidebar/>
    <div className="listContainer">
      <Navbar/>
      <div className="container-sm mt-5">
        <h1>Thêm/Cập nhật danh sách người dùng</h1>
      <Form>
        
        <div className="row">
          <div className="col-6 mb-3">
            <Form.Group>
              <Form.Control value={editFullName} onChange={(e) => setEditFullName(e.target.value)} 
              type="text" placeholder="Nhập tên" required />
            </Form.Group>
          </div>
          <div className="col-6">
            <Form.Group>
              <Form.Control value={editUrlSlug} onChange={(e) => setEditUrlSlug(e.target.value)}
              type="text" placeholder="Nhập Url" required />
            </Form.Group>
          </div>
          <div className="col-6">
            <Form.Group>
              <Form.Control value={editEmail} onChange={(e) => setEditEmail(e.target.value)}
               type="email" placeholder="Nhập Email" required />
            </Form.Group>
          </div>
          <div className="col-6">
            <Form.Group>
              <Form.Control value={editPassword} onChange={(e) => setEditPassword(e.target.value)}
               type="password" placeholder="Nhập mật khẩu" required />
            </Form.Group>
          </div>
          <div className="col-6">
            <Form.Group>
              <input type="checkbox" 
              checked={editRoleId === 1 ? true : false}
              onChange={(e)=> handleActiveChange(e)} value={editRoleId}/>
              <label>RoleId</label>
            </Form.Group>
          </div>
         
          <div className="text-center mt-3">
          <Button onClick={handleSave} variant="primary" type="submit">
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
  )
}

export default UserEdit
