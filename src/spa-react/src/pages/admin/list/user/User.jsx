import "../list.scss"
import "./user.scss";
import Navbar from "../../../../components/admin/navbar/Navbar";
import Sidebar from "../../../../components/admin/sidebar/Sidebar";

import { Button, Col, Modal, Row, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { getDeleteUser, getUser } from "../../../../api/ServiceApi";


const AdminUser = () => {

    const [userList, setUserList] = useState([]);
    const [id, setId] = useState("");
    const [fullName, setFullName] = useState('');
    const [urlSlug, setUrlSlug] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [roleId, setRoleId] = useState('');

    const [editId, setEditId] = useState(0);
    const [editFullName, setEditFullName] = useState('');
    const [editUrlSlug, setEditUrlSlug] = useState('');
    const [editEmail, setEditEmail] = useState('');
    const [editPassword, setEditPassword] = useState('');
    const [editRoleId, setEditRoleId] = useState(0);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    useEffect(() => {
      
      getUser().then(data => {
        if (data)
        setUserList(data);
        else
        setUserList([]);
      })
    });

    const handleRemove= async (id)=>{
      if(window.confirm("Xóa người dùng này") == true) {
        axios.delete(`https://localhost:7024/api/users/${id}`) 
        .then((result)=>{
          if(result.status ===200)
          {
            console.log('Thành công')
          }
        }).catch((error)=>{
          console.error(error);
        })
      }
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

    const handleUpdate = () => {
      const url =`https://localhost:7024/api/users/${editId}`
      const data = {
        "id": editId,
        "fullName": editFullName,
        "urlSlug": editUrlSlug,
        "email": editEmail,
        "password": editPassword,
        "roleId": 1
      }

      axios.put(url, data)
      .then((result)=>{
        getUser();
        clear();
        alert("Thành công");
      }).catch((err) => {
        console.log(err)
      })
    }
    

    const handleEdit = (id) => {
       handleShow();
      axios.get(`https://localhost:7024/api/users/${id}`)
      .then((result) => {
        setEditFullName(result.data.fullName);
        setEditEmail(result.data.email);
        setEditPassword(result.data.password);
        setEditUrlSlug(result.data.urlSlug);
        setEditId(id);     
      }).catch((error) => {
        console.log(error)
      })
    }

  

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="user">
              <Link to="/admin/users/edit" >
              <button type="submit" className="btn btn-success add">Thêm mới</button>
              </Link>
          <div className="table">
            
          <Table striped responsive bordered>
            <thead>
              <tr>
                <th>ID</th>
                <th>Tên người dùng</th>
                <th>UrlSlug</th>
                <th>Email</th>
                <th>Password</th>
                <th>Option</th>
              </tr>
            </thead>
            <tbody>
               {userList.length > 0 ? (
                  userList.map((item,index) => (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.fullName}</td>
                    <td>{item.urlSlug}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>

                    <td className="option">
                      <button onClick={()=> handleRemove(item.id)} type="submit" className="btn btn-danger">
                        Xóa
                      </button>
                      <button onClick={()=> handleEdit(item.id)} type="submit" className="btn btn-primary"> &nbsp;
                        Edit
                      </button>
                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButon>
                            <Modal.Title>Chinh Sua</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Col>
                            <input type="text" className="form-control mb-2" placeholder="Id" disabled
                            value={editId} onChange={(e) => setEditId(e.target.value)}/>
                            </Col>
                            <Col>
                            <input type="text" className="form-control mb-2" placeholder="Tên" 
                            value={editFullName} onChange={(e) => setEditFullName(e.target.value)}/>
                            </Col>
                            <Col>
                            <input type="text" className="form-control mb-2" placeholder="Url"
                            value={editUrlSlug} onChange={(e) => setEditUrlSlug(e.target.value)}/>
                            </Col>
                            <Col>
                            <input type="text" className="form-control mb-2" placeholder="Email"
                            value={editEmail} onChange={(e) => setEditEmail(e.target.value)}/>
                            </Col>
                            <Col>
                            <input type="text" className="form-control mb-2" placeholder="Mật khẩu"
                            value={editPassword} onChange={(e) => setEditPassword(e.target.value)}/>
                            </Col>
                            {/* <Col>
                            <input type="checkbox" 
                            checked={editRoleId === 1 ? true : false}
                            onChange={(e)=> handleActiveChange(e)} value={editRoleId}/>
                            <label>IsSuccess</label>
                            </Col> */}
                          
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>Thoát</Button>
                          <Button variant="primary" onClick={handleUpdate}>Lưu</Button>
                        </Modal.Footer>
                      </Modal>
                    </td>
                  </tr>
                ))
               ):(
              <tr>
                <td colSpan={6}>
                  <h4 className="text-danger text-center">
                    Không tìm thấy người dùng nào
                  </h4>
                </td>
              </tr>
               )}
            </tbody>
          </Table>
          </div>          
        </div>
      </div>
    </div>
  );
};

export default AdminUser;
