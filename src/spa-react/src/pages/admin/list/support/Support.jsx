import React, { useEffect, useState } from "react";
import Sidebar from "../../../../components/admin/sidebar/Sidebar";
import Navbar from "../../../../components/admin/navbar/Navbar";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  changeCallStatus,
  deleteSupport,
  getFilterSupport,
} from "../../../../api/SupportApi";
import Loading from "../../../../components/Loading";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faPhoneSlash,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import SupportFilter from "../../../../components/admin/filter/SupportFilterModel";

const AdminSupport = () => {
  const [supportList, setSupportList] = useState([]);
  const [reRender, setRender] = useState(false);

  const [isVisibleLoading, setIsVisibleLoading] = useState(true),
    supportFilter = useSelector((state) => state.supportFilter);

  // redender sau mỗi lần xoá
  

  let { id } = useParams,
    p = 1,
    ps = 10;

  useEffect(() => {
    document.title = "Quản lý hỗ trợ khách hàng";

    getFilterSupport(
      supportFilter.fullName,
      supportFilter.phoneNumber
      , ps, p).then((data) => {
      if (data) {
        setSupportList(data.items);
      } else {
        setSupportList([]);
      }
      setIsVisibleLoading(false);
    });
  }, [supportFilter, ps, p, reRender]);

  // delete
  const handleDeleteUser = (e, id) => {
    e.preventDefault();
    RemoveUser(id);
    async function RemoveUser(id) {
      if (window.confirm("Bạn có muốn xoá khách hàng cần hỗ trợ này")) {
        const response = await deleteSupport(id);
        if (response) {
          alert("Đã xoá khách hàng cần hỗ trợ");
          
          setRender(true);
        } else alert("Đã xảy ra lỗi xoá khách hàng này");
      }
    }
  };

  // change call
  // change published
  const handleChangeCallStatus = (e, id) => {
    e.preventDefault();

    changeStatusCall(id);

    async function changeStatusCall(id) {
      // await changeCallStatus(id)
      const response = await changeCallStatus(id);
      setRender(true);
      if (response) {
        alert("Thay đổi trạng thái cuộc gọi thành công");
        window.location.reload(true);
        // setRender(true);
        
      } else {
        alert("Thay đổi trạng thái thất bại");
      }
    }
  };

  return (
    <>
      <div className="list">
        <Sidebar />
        <div className="listContainer">
          <Navbar />
          <div className="container mt-5">
          <h3 className="text-success">Quản lý hỗ trợ khách hàng</h3>
          <SupportFilter/>
            {isVisibleLoading ? (
              <Loading />
            ) : (
              <>
                <div className="text-end">
                  <span className="text-warning">Chú thích: </span>
                  <span className="text-success px-3">
                    <FontAwesomeIcon icon={faPhone} />
                    Chưa gọi
                  </span>
                  <span className="text-danger px-5">
                    <FontAwesomeIcon icon={faPhoneSlash} />
                    Đã gọi
                  </span>
                </div>
                <Table striped responsive bordered>
                  <thead>
                    <tr>
                      <th>Tên khách hàng</th>
                      <th>Số điện thoại</th>
                      <th>Trạng thái</th>
                      {/* <th>Sửa</th> */}
                      <th>Xoá</th>
                    </tr>
                  </thead>
                  <tbody>
                    {supportList.length > 0 ? (
                      supportList.map((item, index) => (
                        <tr key={index}>
                          <td>{item.fullName}</td>
                          <td>{item.phoneNumber}</td>
                          <td>
                            <div
                              className="text-center"
                              onClick={(e) =>
                                handleChangeCallStatus(e, item.id)
                              }
                            >
                              {item.status ? (
                                <FontAwesomeIcon
                                  icon={faPhoneSlash}
                                  color="red"
                                />
                              ) : (
                                <FontAwesomeIcon icon={faPhone} color="green" />
                              )}
                            </div>
                          </td>
                          {/* <td className="text-center">
                            <Link to={`/admin/support/edit/${item.id}`}>
                              <FontAwesomeIcon icon={faEdit} />
                            </Link>
                          </td> */}
                          <td className="text-center">
                            <div onClick={(e) => handleDeleteUser(e, item.id)}>
                              <FontAwesomeIcon icon={faTrash} color="red" />
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={4}>
                          <h4 className="text-danger text-center">
                            Không tìm thấy khách hàng cần hỗ trợ nào
                          </h4>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSupport;
