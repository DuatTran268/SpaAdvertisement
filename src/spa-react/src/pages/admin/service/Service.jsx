import "./service.scss";
import Sidebar from '../../../components/admin/sidebar/Sidebar'
import Navbar from '../../../components/admin/navbar/Navbar'
import { Table } from 'react-bootstrap'
import { getAllServiceType } from '../../../api/ServiceApi'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import { Button, Col, Modal} from "react-bootstrap";


const AdminService = () => {

    const [ServiceList, setServiceList] = useState([]);
    const [id, setId] = useState("");
    const [editId, setEditId] = useState([]);
    const [name, setName] = useState([]);
    const [urlSlug, setUrlSlug] = useState([]);
    const [imageUrl, setImageUrl] = useState([]);
    const [shortDescription, setShortDescription] = useState([]);
    const [description, setDescription] = useState([]);
    const [price, setPrice] = useState([]);

    const [editName, setEditName] = useState([]);
    const [editUrlSlug, setEditUrlSlug] = useState([]);
    const [editImageUrl, setEditImageUrl] = useState([]);
    const [editShortDescription, setEditShortDescription] = useState([]);
    const [editDescription, setEditDescription] = useState([]);
    const [editPrice, setEditPrice] = useState([]);


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {

        getAllServiceType().then(data => {
          if (data)
          setServiceList(data);
          else
          setServiceList([]);
        })
      });

      const handleRemove= async (id)=>{
        if(window.confirm("co muon xoa") == true) {
          axios.delete(`https://localhost:7024/api/servicetypes/${id}`) 
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
        const url =`https://localhost:7024/api/servicetypes/${editId}`
        const data = {
          "name": editName,
          "urlSlug": editUrlSlug,
          "imageUrl": editImageUrl,
          "shortDescription": editShortDescription,
          "description": editDescription,
          "price": editPrice,
          "serviceId": 0
        }

        axios.put(url, data)
        .then((result)=>{
          getAllServiceType();
          clear();
          console.log("thanh cong");
        }).catch((err) => {
          console.log(err)
        })
      }


      const handleEdit = (id) => {
         handleShow();
        axios.get(`https://localhost:7024/api/servicetypes/${id}`)
        .then((result) => {
          setEditName(result.data.name);
          setEditUrlSlug(result.data.urlSlug);
          setEditImageUrl(result.data.imageUrl);
          setEditShortDescription(result.data.shortDescription);
          setEditDescription(result.data.description);
          setEditPrice(result.data.price);
          setEditId(id);       
        }).catch((error) => {
          console.log(error)
        })
      }

      const clear = () =>{
        setName('');
        setUrlSlug('');
        setImageUrl('');
        setShortDescription('');
        setDescription('');
        setPrice('');
        setEditName('');
        setEditUrlSlug('');
        setEditImageUrl('');
        setEditShortDescription('');
        setEditDescription('');
        setEditPrice(''); 
      }


  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
      <div className="product">
          <Link to="/admin/service/edit" >
            <button type="submit" className="btn btn-success add">Thêm mới</button>
          </Link>
        <div className="table">
          <Table bordered striped responsive>
            <thead>
              <tr>
                <th>Id</th>
                <th>Tên dịch vụ</th>
                <th>urlSlug</th>
                <th>Ảnh</th>
                <th>Mô tả dịch vụ</th>
                <th>Dịch vụ</th>
                <th>Giá dịch vụ</th>
                <th>Option</th>
              </tr>
            </thead>
            <tbody>
            {ServiceList.length > 0 ? (
                  ServiceList.map((item,index) => (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.urlSlug}</td>
                    <td>
                      <img src={item.imageUrl}/>
                    </td>
                    <td>{item.shortDescription}</td>
                    <td>{item.description}</td>
                    <td>{item.price}</td>              
                     <td className="option">
                    <button onClick={() =>handleRemove(item.id)} type="submit" className="btn btn-danger">
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
                            <input type="file" name="imageFile" accept="image/*" className="form-control mb-2" placeholder="Image"
                            value={editImageUrl} onChange={(e) => setEditImageUrl(e.target.value)}/>
                            </Col>
                            <Col>
                            <input type="text" className="form-control mb-2" placeholder="Mô tả ngắn"
                            value={editShortDescription} onChange={(e) => setEditShortDescription(e.target.value)}/>
                            </Col>
                            <Col>
                            <input type="text" className="form-control mb-2" placeholder="Mô tả"
                            value={editDescription} onChange={(e) => setEditDescription(e.target.value)}/>
                            </Col>
                            <Col>
                            <input type="text" className="form-control mb-2" placeholder="Giá"
                            value={editPrice} onChange={(e) => setEditPrice(e.target.value)}/>
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
                  <h4 className='text-danger text-center'>
                      Không tìm thấy dịch vụ nào
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

export default AdminService