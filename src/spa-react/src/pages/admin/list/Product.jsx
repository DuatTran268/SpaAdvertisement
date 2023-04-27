import "./product.scss"
import Sidebar from '../../../components/admin/sidebar/Sidebar'
import Navbar from '../../../components/admin/navbar/Navbar'
import { Table } from 'react-bootstrap'

const AdminProduct = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
      <div className="product">
        <div className="table">
          <Table bordered striped responsive>
            <thead>
              <tr>
                <th>Tên sản phẩm</th>
                <th>Số lượng</th>
                <th>Bán được</th>
                <th>Giá sản phẩm</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={5}>
                  <h4 className='text-danger text-center'>
                      Không tìm thấy sản phẩm nào
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

export default AdminProduct
