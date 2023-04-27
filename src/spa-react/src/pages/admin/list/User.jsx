import "./list.scss";
import "./user.scss";
import Navbar from "../../../components/admin/navbar/Navbar";
import Sidebar from "../../../components/admin/sidebar/Sidebar";
import { TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Table } from "react-bootstrap";

const AdminUser = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="user">
          <div className="table">
          <Table striped responsive bordered>
            <thead>
              <tr>
                <th>Tên người dùng</th>
                <th>Giới tính</th>
                <th>Thời gian tham gia</th>
                <th>Email</th>
                <th>Số điện thoại</th>

              </tr>
            </thead>
            <tbody>
               
              <tr>
                <td colSpan={5}>
                  <h4 className="text-danger text-center">
                    Không tìm thấy người dùng nào
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

export default AdminUser;
