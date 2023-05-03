import "./booking.scss";
import Sidebar from "../../../components/admin/sidebar/Sidebar";
import Navbar from "../../../components/admin/navbar/Navbar";
import { Table } from "react-bootstrap";
import { getBooking } from "../../../api/ServiceApi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button, Col, Modal} from "react-bootstrap";

const AdminBooking = () => {

  const [bookingList, setBookingList] = useState([]);
  const [editId, setEditId] = useState([]);
  const [urlSlug, setUrlSlug] = useState([]);
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState([]);
  const [bookingDate, setBookingDate] = useState([]);
  const [noteMessage, setNoteMessage] = useState([]);
  const [priceTotal, setPriceTotal] = useState([]);

  const [editName, setEditName] = useState([]);
  const [editUrlSlug, setEditUrlSlug] = useState([]);
  const [editEmail, setEditEmail] = useState([]);
  const [editPhoneNumber, setEditPhoneNumber] = useState([]);
  const [editBookingDate, setEditBookingDate] = useState([]);
  const [editNoteMessage, setEditNoteMessage] = useState([]);
  const [editPriceTotal, setEditPriceTotal] = useState([]);


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getBooking().then(data => {
      if(data)
      setBookingList(data);
      else
      setBookingList([]);
    })
  });

  const handleRemove= async (id)=>{
    if(window.confirm("co muon xoa") == true) {
      axios.delete(`https://localhost:7024/api/bookings/${id}`) 
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
  const handleEdit = (id) => {
    handleShow();
   axios.get(`https://localhost:7024/api/bookings/${id}`)
   .then((result) => {
     setEditName(result.data.name);
     setEditEmail(result.data.email);
     setEditUrlSlug(result.data.urlSlug);
     setEditPhoneNumber(result.data.phoneNumber);
     setEditBookingDate(result.data.bookingDate);
     setEditNoteMessage(result.data.noteMessage);
     setEditPriceTotal(result.data.priceTotal);
     setEditId(id);       
   }).catch((error) => {
     console.log(error)
   })
 }


  const handleUpdate = () => {
    const url =`https://localhost:7024/api/bookings/${editId}`
    const data = {
      "id": editId,
      "name": editName,
      "email": editEmail,
      "urlSlug": editUrlSlug,
      "phoneNumber": editPhoneNumber,
      "bookingDate": editBookingDate,
      "noteMessage": editNoteMessage,
      "priceTotal": editPriceTotal,
    }

    axios.put(url, data)
    .then((result)=>{
      getBooking();
      clear();
      console.log("thanh cong");
    }).catch((err) => {
      console.log(err)
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
    setEditName('');
    setEditEmail('');
    setEditUrlSlug('');
    setEditPhoneNumber('');
    setEditBookingDate('');
    setEditNoteMessage('');
    setEditPriceTotal('');
  }
  

  
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="booking">
        <Link to="/admin/booking/edit" >
                      <button type="submit" className="btn btn-success">Thêm mới</button>
                      </Link>
          <div className="table">
            <Table striped responsive bordered>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Họ tên</th>
                  <th>Slug</th>
                  <th>Email</th>
                  <th>Số điện thoại</th>
                  <th>Ngày đặt lịch</th>
                  <th>Nội dung</th>
                  <th>Giá</th>
                  <th>Trạng thái</th>
                  <th>Người đặt</th>
                  <th>Đặt</th>
                  <th>Option</th>
                </tr>
              </thead>
              <tbody>
                {bookingList.length > 0 ? (
                  bookingList.map((item,index) => (
                    <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.urlSlug}</td>
                    <td>{item.email}</td>
                    <td>{item.phoneNumber}</td>
                    <td>{item.bookingDate}</td>
                    <td>{item.noteMessage}</td>
                    <td>{item.priceTotal}</td>
                    <td>{item.status}</td>
                    <td>{item.userId}</td>
                    <td>{item.serviceTypeBookings}</td>
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
                            <input type="text" className="form-control mb-2" placeholder="Id"
                            value={editId} onChange={(e) => setEditId(e.target.value)}/>
                            </Col>
                            <Col>
                            <input type="text" className="form-control mb-2" placeholder="Tên"
                            value={editName} onChange={(e) => setEditName(e.target.value)}/>
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
                            <input type="text" className="form-control mb-2" placeholder="Số điện thoại"
                            value={editPhoneNumber} onChange={(e) => setEditPhoneNumber(e.target.value)}/>
                            </Col>
                            <Col>
                            <input type="text" className="form-control mb-2" placeholder="Ngày đặt"
                            value={editBookingDate} onChange={(e) => setEditBookingDate(e.target.value)}/>
                            </Col>
                            <Col>
                            <input type="text" className="form-control mb-2" placeholder="Nội dung"
                            value={editNoteMessage} onChange={(e) => setEditNoteMessage(e.target.value)}/>
                            </Col>
                            <Col>
                            <input type="text" className="form-control mb-2" placeholder="Giá"
                            value={editPriceTotal} onChange={(e) => setEditPriceTotal(e.target.value)}/>
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
                  <td colSpan={12}>
                    <h4 className="text-danger text-center">
                      Không tìm thấy đơn đặt lịch nào
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

export default AdminBooking;
