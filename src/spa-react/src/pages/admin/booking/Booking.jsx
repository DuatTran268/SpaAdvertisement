
import "./booking.scss";
import Sidebar from "../../../components/admin/sidebar/Sidebar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Navbar from "../../../components/admin/navbar/Navbar";

const AdminBooking = () => {
  return (
    <div className="list">
    <Sidebar />
    <div className="listContainer">
      <Navbar />
      <div className="booking">
      <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Họ tên</TableCell>
            <TableCell className="tableCell">Email</TableCell>
            <TableCell className="tableCell">Số điện thoại</TableCell>
            <TableCell className="tableCell">Ngày đặt lịch</TableCell>
            <TableCell className="tableCell">Nội dung</TableCell>
            <TableCell className="tableCell">Phương thức thanh toán</TableCell>
            <TableCell className="tableCell">Trạng thái</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
              <tr>
                <td colSpan={7}>
                  <h4>
                    Không tìm thấy đơn đặt lịch nào
                  </h4>
                </td>
              </tr>
        </TableBody>
      </Table>
    </TableContainer>
      </div>
      
      </div>
      </div>

  );
};

export default AdminBooking;