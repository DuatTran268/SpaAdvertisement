import "./cart.scss"
import Sidebar from '../../../components/admin/sidebar/Sidebar'
import Navbar from '../../../components/admin/navbar/Navbar'
import { Table } from 'react-bootstrap'
import "./list.scss"
const AdminCart = () => {
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
                  <th>Tên sản phẩm</th>
                  <th>Tên người mua</th>
                  <th>Email</th>
                  <th>Số điện thoại</th>
                  <th>Giá sản phẩm</th>
                  <th>Ngày mua</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={7}>
                    <h4 className="text-danger text-center">
                      Không tìm thấy đơn hàng nào
                    </h4>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminCart
