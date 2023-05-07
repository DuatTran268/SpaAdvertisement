import React from 'react'
import Sidebar from '../../../components/admin/sidebar/Sidebar'
import Navbar from '../../../components/admin/navbar/Navbar'

const AdminCart = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
      <h1>
        Đây là trang giỏ hàng
      </h1>
      </div>
    </div>
  )
}

export default AdminCart
