import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { deleteServiceType, getFilterServiceType } from "../../../../api/ServiceTypeApi";
import Sidebar from "../../../../components/admin/sidebar/Sidebar";
import Navbar from "../../../../components/admin/navbar/Navbar";
import Loading from "../../../../components/Loading";
import { Image, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import ServiceTypeFilter from "../../../../components/admin/filter/ServiceTypeFilterModel";



const AdminServiceType = () => {
  const [servieTypeList, setServiceTypeList] = useState([]);
  const [reRender, setRender] = useState(false);

  const [isVisibleLoading, setIsVisibleLoading] = useState(true),
    serviceTypeFilter = useSelector((state) => state.serviceTypeFilter);
    
  let { id } = useParams,
    p = 1,
    ps = 20;

  useEffect(() => {
    document.title = "Quản lý dịch vụ";

    getFilterServiceType(
      serviceTypeFilter.name,
      serviceTypeFilter.price, ps, p).then((data) => {
      if (data) {
        setServiceTypeList(data.items);
      } else {
        setServiceTypeList([]);
      }
      setIsVisibleLoading(false);
    });
  }, [serviceTypeFilter, ps, p, reRender]);

  // delete
  const handleDeleteUser = (e, id) => {
    e.preventDefault();
    RemoveUser(id);
    async function RemoveUser(id) {
      if (window.confirm("Bạn có muốn xoá danh mục này")) {
        const response = await deleteServiceType(id);
        if (response) {
          alert("Đã xoá danh mục");
          setRender(true);
        } else alert("Đã xảy ra lỗi xoá danh mục này");
      }
    }
  };

  const getImage = (path) => {

    console.log(path)
    if (!path) {
      // set default image
      return `https://placehold.co/200x200?text=Image-not-found`;
    } 

    return `https://localhost:7024/${path}`;
  }


  return(
    <div className="list">
        <Sidebar />
        <div className="listContainer">
          <Navbar />
          <div className="container mt-5">
          <h3 className="text-success">Quản lý loại dịch vụ</h3>
            <ServiceTypeFilter/>
            {isVisibleLoading ? (
              <Loading />
            ) : (
              <Table striped responsive bordered>
                <thead>
                  <tr>
                    <th>Hình ảnh</th>
                    <th>Tên dịch vụ</th>
                    <th>Mô tả</th>
                    <th>Giá</th>
                    <th>Sửa</th>
                    <th>Xoá</th>
                  </tr>
                </thead>
                <tbody>
                  {servieTypeList.length > 0 ? (
                    servieTypeList.map((item, index) => (
                      <tr key={index}>
                        <td className="text-center">
                          <Image src={getImage(item.imageUrl)} width={60}/>
                        </td>
                        <td>{item.name}</td>
                        <td>{item.shortDescription}</td>
                        <td>{item.price}</td>

                        <td className="text-center">
                          <Link to={`/admin/servicetype/edit/${item.id}`}>
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
                      <td colSpan={6}>
                        <h4 className="text-danger text-center">
                          Không tìm thấy loại dịch vụ nào 
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
  )
}
export default AdminServiceType;