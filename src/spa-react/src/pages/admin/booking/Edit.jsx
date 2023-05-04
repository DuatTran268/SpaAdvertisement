import React, { useEffect, useState } from 'react'
import Sidebar from '../../../components/admin/sidebar/Sidebar'
import Navbar from '../../../components/admin/navbar/Navbar'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { Button, Form } from "react-bootstrap";
import { addService, addServiceImage, getAllServiceType, getSerciveById } from '../../../api/ServiceApi';
import axios from 'axios';




const BookingEdit = () => {

  const navigate = useNavigate()
  const [urlSlug, setUrlSlug] = useState([]);
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState([]);
  const [bookingDate, setBookingDate] = useState([]);
  const [noteMessage, setNoteMessage] = useState([]);
  const [priceTotal, setPriceTotal] = useState([]);
  const [userId, setUserId] = useState([]);



  const handleSave = () => {
    const url = 'https://localhost:7024/api/bookings'
    const data = {
        "name": name,
        "email": email,
        "urlSlug": urlSlug,
        "phoneNumber": phoneNumber,
        "bookingDate": bookingDate,
        "noteMessage": noteMessage,
        "priceTotal": priceTotal,
        "status": true,
        "userId": 1,
      }
    axios.get(url,data)
    .then((result) =>{
      getAllServiceType();
      clear();
      alert("Thêm dịch vụ thành công");
      navigate('/admin/booking')
    }).catch((error)=>{
      alert("loi")
    })
}
const clear = () =>{
    setName('');
    setEmail('');
    setUrlSlug('');
    setPhoneNumber('');
    setBookingDate('');
    setNoteMessage('');
    setPriceTotal('');
    setUserId('');
}




  return (
    <div className="list">
    <Sidebar/>
    <div className="listContainer">
      <Navbar/>
      <div className="container-sm mt-5">
        <h1 className='mb-5'>Thêm/Cập nhật danh sách dịch vụ</h1>
      <Form>
        <div className="row">
          <div className="col-6 mb-3">
            <Form.Group>
              <Form.Control type="text" placeholder="Nhập tên họ tên" 
              required 
              value={name} onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
          </div>
          <div className="col-6">
            <Form.Group>
              <Form.Control type="text" placeholder="Nhập Url" 
              required
              value={urlSlug} onChange={(e) => setUrlSlug(e.target.value)}
              />
            </Form.Group>
          </div>
        
          <div className="col-6 mb-3">
            <Form.Group>
              <Form.Control type="text" placeholder="Nhập Email"
               required
               value={email} onChange={(e) => setEmail(e.target.value)}
               />
            </Form.Group>
          </div>
          <div className="col-6">
            <Form.Group>
              <Form.Control type="text" placeholder="Số điện thoại"
               required
               value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}
              
               />
            </Form.Group>
          </div>
          <div className="col-6">
            <Form.Group>
              <Form.Control type="text" placeholder="Ngày đặt lịch" 
              required 
              value={bookingDate} onChange={(e) => setBookingDate(e.target.value)}
              />
            </Form.Group>
          </div>
          <div className="col-6 mb-3">
            <Form.Group>
              <Form.Control type="text" placeholder="Nội dung" 
              required 
              value={noteMessage} onChange={(e) => setNoteMessage(e.target.value)}
              />
            </Form.Group>
          </div>
          <div className="col-6 ">
            <Form.Group>
              <Form.Control type="text" placeholder="Giá" 
              required 
              value={priceTotal} onChange={(e) => setPriceTotal(e.target.value)}
              />
            </Form.Group>
          </div>
          <div className="col-6">
            <Form.Group>
              <Form.Control type="text" placeholder="Người đặt" 
              required 
              value={userId} onChange={(e) => setUserId(e.target.value)}
              />
            </Form.Group>
          </div>

          <div className="text-center mt-3">

          <Button onClick={()=> handleSave()} variant="primary" type="submit">
            Lưu các thay đổi
          </Button>
          <Link to="/admin/booking" className="btn btn-danger ms-2">
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

export default BookingEdit
