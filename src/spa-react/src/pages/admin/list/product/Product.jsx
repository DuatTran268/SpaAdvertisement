import "./product.scss"
import Sidebar from '../../../../components/admin/sidebar/Sidebar'
import Navbar from '../../../../components/admin/navbar/Navbar'
import { useEffect, useState } from "react"
import Dproduct, { DproductColums } from "../../../../data/Dproduct"
import { DataGrid } from "@mui/x-data-grid"
import { DeleteOutline } from "@mui/icons-material"
import { Link } from "react-router-dom"

import { Button, Col, Modal, Table} from "react-bootstrap";

const AdminProduct = () => {

    const [editId, setEditId] = useState(0);
    const [editName, setEditName] = useState('');
    const [editUrlSlug, setEditUrlSlug] = useState('');
    const [editEmail, setEditEmail] = useState('');
    const [editImgUrl, setEditImgUrl] = useState('');
    const [ediDescription, setEdiDescription] = useState('');
    const [editPrice, setEditPrice] = useState(0);


  const [data, setData] = useState(Dproduct);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (id) => {
    setData(data.filter((Dproduct) => Dproduct.id !== id));
  };

  const handleEdit = (id) => {
    handleShow();
    
 }


  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer new">
        <Navbar/>
        <div className="user">
              <Link to="/admin/products" >
              <button type="submit" className="btn btn-success add">Thêm mới</button>
              </Link>
          <div className="table">
            
          <Table striped responsive bordered>
            <thead>
              <tr>
                <th>ID</th>
                <th>Tên sản phẩm</th>
                <th>UrlSlug</th>
                <th>Ảnh</th>
                <th>Mô tả</th>
                <th>Giá</th>
                <th>Option</th>
              </tr>
            </thead>
            <tbody>
               {Dproduct.length > 0 ? (
                  Dproduct.map((Dproduct,index) => (
                  <tr key={index}>
                    <td>{Dproduct.id}</td>
                    <td>{Dproduct.name}</td>
                    <td>{Dproduct.urlSlug}</td>
                    <td>
                      <img className="img" src={Dproduct.image}/>
                    </td>
                    <td>{Dproduct.description}</td>
                    <td>{Dproduct.price}</td>
                    <td className="option">
                      <button onClick={()=> handleDelete(Dproduct.id)} type="submit" className="btn btn-danger">
                        Xóa
                      </button>
                      <button onClick={()=> handleEdit(Dproduct)} type="submit" className="btn btn-primary"> &nbsp;
                        Edit
                      </button>
                      <Modal show={show} onClick={handleClose}>
                        <Modal.Header closeButon>
                            <Modal.Title>Chinh Sua</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Col>
                            <input type="text" className="form-control mb-2" placeholder="Id"
                            value={editId} onChange={(e) => setEditId(e.target.value)}/>
                            </Col>
                            <Col>
                            <input type="text" className="form-control mb-2" placeholder="Tên sản phẩm"
                            value={editName} onChange={(e) => setEditName(e.target.value)}/>
                            </Col>
                            <Col>
                            <input type="text" className="form-control mb-2" placeholder="Url"
                            value={editUrlSlug} onChange={(e) => setEditUrlSlug(e.target.value)}/>
                            </Col>
                            <Col>
                            <input type="file" name="imageFile" accept="image/*" className="form-control mb-2" placeholder="Image"
                            value={editImgUrl} onChange={(e) => setEditImgUrl(e.target.value)}/>
                            </Col>
                            <Col>
                            <input type="text" className="form-control mb-2" placeholder="Email"
                            value={editEmail} onChange={(e) => setEditEmail(e.target.value)}/>
                            </Col>
                            <Col>
                            <input type="text" className="form-control mb-2" placeholder="Mô tả"
                            value={ediDescription} onChange={(e) => setEdiDescription(e.target.value)}/>
                            </Col>                          
                            <Col>
                            <input type="text" className="form-control mb-2" placeholder="Giá"
                            value={Dproduct.price} onChange={(e) => setEditPrice(e.target.value)}/>
                            </Col>                          
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>Thoát</Button>
                          <Button variant="primary">Lưu</Button>
                        </Modal.Footer>
                      </Modal>
                    </td>
                  </tr>
                ))
               ):(
              <tr>
                <td colSpan={7}>
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

export default AdminProduct
