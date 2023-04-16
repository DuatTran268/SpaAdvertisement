import "./list.scss"
import Navbar from "../../../components/admin/navbar/Navbar"
import Sidebar from "../../../components/admin/sidebar/Sidebar"



const AdminUser = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <h1>
          Đây là trang người dùng
        </h1>
      </div>
    </div>
  )
}

export default AdminUser
