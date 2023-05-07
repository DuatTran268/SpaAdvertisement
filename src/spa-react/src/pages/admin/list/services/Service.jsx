import React, { useEffect, useState } from "react";
import Sidebar from "../../../../components/admin/sidebar/Sidebar";
import Navbar from "../../../../components/admin/navbar/Navbar";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { deleteService, getFilterService } from "../../../../api/ServiceApi";
import Loading from "../../../../components/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import ServiceFilter from "../../../../components/admin/filter/ServieFilterModel";

const AdminService = () => {
  const [servieList, setServiceList] = useState([]);
  const [reRender, setRender] = useState(false);

  const [isVisibleLoading, setIsVisibleLoading] = useState(true),
    serviceFilter = useSelector((state) => state.serviceFilter);

  let { id } = useParams,
    p = 1,
    ps = 10;

  useEffect(() => {
    document.title = "Quản lý dịch vụ";

    getFilterService(serviceFilter.name, ps, p).then((data) => {
      if (data) {
        setServiceList(data.items);
      } else {
        setServiceList([]);
      }
      setIsVisibleLoading(false);
    });
  }, [serviceFilter, ps, p, reRender]);

  // delete
  const handleDeleteUser = (e, id) => {
    e.preventDefault();
    RemoveUser(id);
    async function RemoveUser(id) {
      if (window.confirm("Bạn có muốn xoá danh mục này")) {
        const response = await deleteService(id);
        if (response) {
          alert("Đã xoá danh mục");
          setRender(true);
        } else alert("Đã xảy ra lỗi xoá danh mục này");
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
          <h3 className="text-success">Quản lý người dịch vụ</h3>
            <ServiceFilter/>
            {isVisibleLoading ? (
              <Loading />
            ) : (
              <Table striped responsive bordered>
                <thead>
                  <tr>
                    <th>Tên dịch vụ</th>
                    <th>Mô tả</th>
                    <th>Sửa</th>
                    <th>Xoá</th>
                  </tr>
                </thead>
                <tbody>
                  {servieList.length > 0 ? (
                    servieList.map((item, index) => (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.shortDescription}</td>
                        <td className="text-center">
                          <Link to={`/admin/service/edit/${item.id}`}>
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
                      <td colSpan={4}>
                        <h4 className="text-danger text-center">
                          Không tìm thấy dịch vụ nào
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
    </>
  );
};

export default AdminService;
