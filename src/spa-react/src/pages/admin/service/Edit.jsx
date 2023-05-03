import React from 'react'
import Sidebar from '../../../components/admin/sidebar/Sidebar'
import Navbar from '../../../components/admin/navbar/Navbar'
import { Link } from 'react-router-dom'
import { Button, Form } from "react-bootstrap";


const ServiceEdit = () => {
  return (
    <div className="list">
    <Sidebar/>
    <div className="listContainer">
      <Navbar/>
      <div className="container-sm mt-5">
        <h1 className='mb-5'>Thêm/Cập nhật danh sách dịch vụ</h1>
      <Form>
        <Form.Control type="hidden" name="id" />
        <div className="row">
          <div className="col-6 mb-3">
            <Form.Group>
              <Form.Control type="text" placeholder="Nhập tên dịch vụ" required />
            </Form.Group>
          </div>
          <div className="col-6">
            <Form.Group>
              <Form.Control type="text" placeholder="Nhập Url" required />
            </Form.Group>
          </div>

          <div className="col-6 mb-3">
            <Form.Group>
              <Form.Control type="text" placeholder="Mô tả dịch vụ" required />
            </Form.Group>
          </div>
          <div className="col-6">
            <Form.Group>
              <Form.Control type="text" placeholder="Chi tiết Dịch vụ" required />
            </Form.Group>
          </div>
          <div className="col-6">
            <Form.Group>
              <Form.Control type="text" placeholder="Giá dịch vụ" required />
            </Form.Group>
          </div>

          <div className="col-6">          
            <Form.Control type="file" name="imageFile" accept="image/*" title="Image file"/>
        </div>

          <div className="text-center mt-3">
          <Button variant="primary" type="submit">
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