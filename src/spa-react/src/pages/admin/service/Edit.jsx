import React, { useEffect, useState } from 'react'
import Sidebar from '../../../components/admin/sidebar/Sidebar'
import Navbar from '../../../components/admin/navbar/Navbar'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { Button, Form } from "react-bootstrap";
import { addService, addServiceImage, getAllServiceType, getSerciveById } from '../../../api/ServiceApi';
import axios from 'axios';




const ServiceEdit = () => {

  const navigate = useNavigate()
  const [name, setName] = useState([]);
  const [urlSlug, setUrlSlug] = useState([]);
  const [imageUrl, setImageUrl] = useState([]);
  const [shortDescription, setShortDescription] = useState([]);
  const [description, setDescription] = useState([]);
  const [price, setPrice] = useState([]);



  const handleSave = () => {
    const url = 'https://localhost:7024/api/servicetypes'
    const data = {
        "name": name,
        "urlSlug": urlSlug,
        "imageUrl": imageUrl,
        "shortDescription": shortDescription,
        "description": description,
        "price": price,
        "serviceId": 1
      }
    axios.post(url,data)
    .then((result) =>{
      getAllServiceType();
      clear();
      alert("Thêm dịch vụ thành công");
      navigate('/admin/service')
    }).catch((error)=>{
      alert("loi")
    })
}
const clear = () =>{
  setName('');
  setUrlSlug('');
  setImageUrl('');
  setShortDescription('');
  setDescription('');
  setPrice('');
}
const handleAddImage= async (id)=>{       
  axios.post(`https://localhost:7024/api/servicetypes/${id}/picture}`) 
  .then((result)=>{
    if(result.status ===200)
    {
      
      console.log('thanh cong')
    }
  }).catch((error)=>{
    console.error(error);
  })
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
              <Form.Control type="text" placeholder="Nhập tên dịch vụ" 
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
              <Form.Control type="text" placeholder="Mô tả dịch vụ"
               required
               value={shortDescription} onChange={(e) => setShortDescription(e.target.value)}
               />
            </Form.Group>
          </div>
          <div className="col-6">
            <Form.Group>
              <Form.Control type="text" placeholder="Nội dung"
               required
               value={description} onChange={(e) => setDescription(e.target.value)}
              
               />
            </Form.Group>
          </div>
          <div className="col-6">
            <Form.Group>
              <Form.Control type="text" placeholder="Giá dịch vụ" 
              required 
              value={price} onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
          </div>
          <div className="col-6">
            <Form.Control
              type="file"
              name="imageFile"
              accept="image/*"
              title="Image file"
              onSubmit={handleAddImage}
              value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}
            />
        </div>
          <div className="text-center mt-3">

          <Button onClick={()=> handleSave()} variant="primary" type="submit">
            Lưu các thay đổi
          </Button>
          <Link to="/admin/service" className="btn btn-danger ms-2">
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

export default ServiceEdit
