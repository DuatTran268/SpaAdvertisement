import "./booking.scss";
import Sidebar from "../../../components/admin/sidebar/Sidebar";
import Navbar from "../../../components/admin/navbar/Navbar";
import { Table } from "react-bootstrap";
const AdminBooking = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="booking">
          <div className="table">
            <Table striped responsive bordered>
              <thead>
                <tr>
                  <th>Họ tên</th>
                  <th>Email</th>
                  <th>Số điện thoại</th>
                  <th>Ngày đặt lịch</th>
                  <th>Nội dung</th>
                  <th>Phương thức thanh toán</th>
                  <th>Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={7}>
                    <h4 className="text-danger text-center">
                      Không tìm thấy đơn đặt lịch nào
                    </h4>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminBooking;
