import "../list.scss";
import Navbar from "../../../../components/admin/navbar/Navbar";
import Sidebar from "../../../../components/admin/sidebar/Sidebar";
import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { deleteUser, getFilterUser } from "../../../../api/User";
// import { useSelector } from "react-redux";
import Loading from "../../../../components/Loading";
import { Button, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import UserFilter from "../../../../components/admin/filter/UserFilterModel";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminUser = () => {
  const [userList, setUserList] = useState([]);
  const [isVisibleLoading, setIsVisibleLoading] = useState(true),
  userFilter = useSelector((state) => state.userFilter);

  let {id} = useParams,
    p = 1,
    ps = 10;

  useEffect(() => {
    document.title = "Quản lý người dùng";

    getFilterUser(
      userFilter.fullName,
      userFilter.email
       ,ps , p).then((data) => {
      if (data) {
        console.log("check data:  ", data);
        setUserList(data.items);
      } else {
        setUserList([]);
      }
      setIsVisibleLoading(false);
    });
  }, [userFilter, ps, p]);

  // delete
  const handleDeleteUser = (e, id) => {
    e.preventDefault();
    RemoveUser(id);
    async function RemoveUser(id) {
      if (window.confirm("Bạn có muốn xoá danh mục này")) {
        const response = await deleteUser(id);
        if (response) {
          alert("Đã xoá danh mục");
          window.location.reload(true);
        } else alert("Đã xảy ra lỗi xoá danh mục này");
      }
    }
  };

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="container mt-5">
          <UserFilter/>
          {isVisibleLoading ? (
            <Loading />
          ) : (
            <Table striped responsive bordered>
              <thead>
                <tr>
                  <th>Tên user</th>
                  <th>Email</th>
                  <th>Sửa</th>
                  <th>Xoá</th>
                </tr>
              </thead>
              <tbody>
                {userList.length > 0 ? (
                  userList.map((item, index) => (
                    <tr key={index}>
                      <td>{item.fullName}</td>
                      <td>{item.email}</td>
                      <td className="text-center">
                        <Link to={`/admin/users/edit/${item.id}`}>
                          <FontAwesomeIcon icon={faEdit} />
                        </Link>
                      </td>
                      <td className="text-center">
                        <div onClick={(e) => handleDeleteUser(e, item.id)}>
                          <FontAwesomeIcon icon={faTrash} color="red" />
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3}>
                      <h4 className="text-danger text-center">
                        Không tìm thấy người dùng nào
                      </h4>
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminUser;
