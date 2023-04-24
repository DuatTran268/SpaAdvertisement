import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 2235235,
      product: "Kem trị mụn",
      img: "https://gaspa.vn/wp-content/uploads/2022/06/Body-ngay-scaled.jpeg",
      customer: "Đạt",
      date: "1",
      amount: 50,
      method: "Thanh toán online",
      status: "Tán thành",
    },
    {
      id: 2235235,
      product: "Kem dưỡng da",
      img: "https://gaspa.vn/wp-content/uploads/2022/06/Body-ngay-scaled.jpeg",
      customer: "Duật",
      date: "1",
      amount: 50,
      method: "Thanh toán online",
      status: "Tán thành",
    },

    
    {
      id: 2342353,
      product: "Kem dưỡng ẩm",
      img: "https://gaspa.vn/wp-content/uploads/2022/06/Body-ngay-scaled.jpeg",
      customer: "Nhật",
      date: "1",
      amount: 10,
      method: "Thanh toán khi giao hàng",
      status: "Chưa giải quyết",
    },
    {
      id: 2357741,
      product: "Thuốc trị nám",
      img: "https://gaspa.vn/wp-content/uploads/2022/06/Body-ngay-scaled.jpeg",
      customer: "Hoàng",
      date: "2",
      amount: 4,
      method: "Online",
      status: "Tán thành",
    },
    {
      id: 2342355,
      product: "Thuốc trị sẹo",
      img: "https://gaspa.vn/wp-content/uploads/2022/06/Body-ngay-scaled.jpeg",
      customer: "Nga",
      date: "3",
      amount: 5,
      method: "Thanh toán trực tuyến",
      status: "Chưa giải quyết",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Sản phẩm</TableCell>
            <TableCell className="tableCell">Khách hàng</TableCell>
            <TableCell className="tableCell">Ngày</TableCell>
            <TableCell className="tableCell">Số lượng</TableCell>
            <TableCell className="tableCell">Phương thức thanh toán</TableCell>
            <TableCell className="tableCell">Trạng thái</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;