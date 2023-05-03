import "./cart.scss"
import "../list.scss"
import Sidebar from '../../../../components/admin/sidebar/Sidebar'
import Navbar from '../../../../components/admin/navbar/Navbar'
import { Table } from 'react-bootstrap'
import { getServiceBooking } from "../../../../api/ServiceApi"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { Button, Col, Modal } from "react-bootstrap";

const AdminCart = () => {

  const  [serviceBookingList, setServiceBookingList] = useState([]);
  const [editUserNumber, setEditUserNumber] = useState([]);
  const [editPrice, setEditPrice] = useState([]);
  const [editServiceTypeId, setEditServiceTypeId] = useState([]);
  const [editBookingId, setEditBookingId] = useState([]);
  const [editId, setEditId] = useState([]);
  const [userNumber, setUserNumber] = useState([]);
  const [price, setPrice] = useState([]);
  const [serviceTypeId, setServiceTypeId] = useState([]);
  const [bookingId, setBookingId] = useState([]);
  const [id, setId] = useState([]);
  

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getServiceBooking().then(data => {
      if(data)
      setServiceBookingList(data);
      else
      setServiceBookingList([]);
    })
  });
 
  const handleRemove= async (id)=>{
    if(window.confirm("co muon xoa") === true) {
      axios.delete(`https://localhost:7024/api/typebookings/${id}`) 
      .then((result)=>{
        if(result.status ===200)
        {
          console.log('thanh cong')
        }
      }).catch((error)=>{
        console.error(error);
      })
    }
  }

  const handleUpdate = () => {
    const url =`https://localhost:7024/api/typebookings/${editId}`
    const data = {
      "id": editId,
      "userNumber": 0,
      "price": editPrice,
      "serviceTypeId": 0,
      "bookingId": 0
    }
    axios.put(url, data)
    .then((result)=>{
      getServiceBooking();
      clear();
      console.log("thanh cong");
    }).catch((err) => {
      console.log(err)
    })
  }
  const clear = () =>{
    setEditUserNumber('');
    setEditPrice('');
    setEditServiceTypeId('');
    setEditBookingId('');
    setUserNumber('');
    setPrice('');
    setServiceTypeId('');
    setBookingId('');

  }

  const handleEdit = (id) => {
    handleShow();
   axios.get(`https://localhost:7024/api/typebookings/${id}`)
   .then((result) => {
    setEditUserNumber(result.data.userNumber);
    setEditPrice(result.data.price);
    setEditServiceTypeId(result.data.serviceTypeId);
    setEditBookingId(result.data.bookingId);
    setEditId(id);       
   }).catch((error) => {
     console.log(error)
   })
 }

  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <div className="cart">
          <div className="table">
            <Table striped responsive bordered>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Tên người mua</th>
                  <th>Giá sản phẩm</th>
                  <th>Dịch vụ</th>
                  <th>Đơn đặt</th>
                  <th>Option</th>
                </tr>
              </thead>
              <tbody>
              {serviceBookingList.length > 0 ? (
                  serviceBookingList.map((item,index) => (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.userNumber}</td>
                    <td>{item.price}</td>
                    <td>{item.serviceTypeId}</td>
                    <td>{item.bookingId}</td>
                    <td className="option">
                      <button onClick={() => handleRemove(item.id)} type="submit" className="btn btn-danger">
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
                            <input type="text" className="form-control mb-2" placeholder="Id"
                            value={editId} onChange={(e) => setEditId(e.target.value)}/>
                            </Col>
                            <Col>
                            <input type="text" className="form-control mb-2" placeholder="Tên người mua"
                            value={editUserNumber} onChange={(e) => setEditUserNumber(e.target.value)}/>
                            </Col>
                            <Col>
                            <input type="text" className="form-control mb-2" placeholder="Giá"
                            value={editPrice} onChange={(e) => setEditPrice(e.target.value)}/>
                            </Col>
                            <Col>
                            <input type="text" className="form-control mb-2" placeholder="Dịch vụ"
                            value={editServiceTypeId} onChange={(e) => setEditServiceTypeId(e.target.value)}/>
                            </Col>
                            <Col>
                            <input type="text" className="form-control mb-2" placeholder="Đơn đặt"
                            value={editBookingId} onChange={(e) => setEditBookingId(e.target.value)}/>
                            </Col>  
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
                  <td colSpan={7}>
                    <h4 className="text-danger text-center">
                      Không tìm thấy đơn hàng nào
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
  )
}


export default AdminCart
