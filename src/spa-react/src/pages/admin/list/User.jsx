import "./list.scss";
import "./user.scss";
import Navbar from "../../../components/admin/navbar/Navbar";
import Sidebar from "../../../components/admin/sidebar/Sidebar";
import { TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Table } from "react-bootstrap";
import { getUser } from "../../../Services/BlogRepository";
import { useEffect, useState } from "react";

const AdminUser = () => {

    const [userList, setUserList] = useState([]);

    useEffect(() => {

      getUser().then(data => {
        if (data)
        setUserList(data);
        else
        setUserList([]);
      })
    });
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
                <th>ID</th>
                <th>Tên người dùng</th>
                <th>UrlSlug</th>
                <th>Email</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
               {userList.length > 0 ? (
                  userList.map((item,index) => (
                  <tr key={index}>

                    <td>{item.id}</td>
                    <td>{item.fullName}</td>
                    <td>{item.urlSlug}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                    
                  </tr>
                ))
               ):(
              <tr>
                <td colSpan={5}>
                  <h4 className="text-danger text-center">
                    Không tìm thấy người dùng nào
                  </h4>
                </td>
              </tr>
               )}
            </tbody>
          </Table>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AdminUser;
