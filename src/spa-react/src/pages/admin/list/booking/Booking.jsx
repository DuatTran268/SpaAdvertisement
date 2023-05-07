import Sidebar from "../../../../components/admin/sidebar/Sidebar";
import Navbar from "../../../../components/admin/navbar/Navbar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { deleteBooking, getFilterBooking } from "../../../../api/BookingApi";
import Loading from "../../../../components/Loading";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEdit, faMoneyCheck, faPersonCircleCheck, faTrash, faX } from "@fortawesome/free-solid-svg-icons";

const AdminBooking = () => {
  const [bookingList, setBookingList] = useState([]);
  const [isVisibleLoading, setIsVisibleLoading] = useState(true),
  bookingFilter = useSelector((state) => state.bookingFilter);

  let { id } = useParams,
  p = 1,
  ps = 10;


  useEffect(() => {
    document.title = "Quản lý đặt lịch dịch vụ";

    getFilterBooking(bookingFilter, ps, p).then((data) => {
      if (data) {
        setBookingList(data.items);
      } else {
        setBookingList([]);
      }
      setIsVisibleLoading(false);
    });
  }, [bookingFilter, p, ps]);

  // delete
  const handleDeleteUser = (e, id) => {
    e.preventDefault();
    RemoveBooking(id);
    async function RemoveBooking(id) {
      if (window.confirm("Bạn có muốn xoá đơn đặt lịch này")) {
        const response = await deleteBooking(id);
        if (response) {
          alert("Đã xoá đặt lịch");
          window.location.reload(true);
        } else alert("Đã xảy ra lỗi xoá danh mục này");
      }
    }
  };

    const handleChangeStatusBooking = (e, id) => {
    e.preventDefault();

    changeStatusCall(id);

    async function changeStatusCall(id) {
      // await changeCallStatus(id)
      if (window.confirm("Bạn có muốn thay đổi trạng thái")) {
        // const response = await changeCallStatus(id);
        // if (response){
        //   alert("Thay đổi trạng thái cuộc gọi thành công");
        //   window.location.reload(true);
        // }
        // else{
        //   alert("Thay đổi trạng thái thất bại")
        // }
      } 
    }
  };

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="container mt-5">
        <h3 className="text-success">Quản lý lịch đặt dịch vụ</h3>
        {isVisibleLoading ? (
              <Loading/>
            ) : (
              <Table striped responsive bordered>
                <thead>
                  <tr>
                    <th>Tên khách hàng</th>
                    <th>Email</th>
                    <th>Số điện thoại</th>
                    <th>Ngày đặt lịch</th>
                    <th>Tổng tiền</th>
                    <th>Trạng thái</th>
                    <th>Sửa</th>
                    <th>Xoá</th>
                  </tr>
                </thead>
                <tbody>
                  {bookingList.length > 0 ? (
                    bookingList.map((item, index) => (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phoneNumber}</td>
                        <td>{item.bookingDate}</td>
                        <td>{item.priceTotal}</td>
                        <td>
                            <div className="text-center" onClick={(e) => handleChangeStatusBooking(e, item.id)}>
                              {item.status ? (
                                <div className="text-success">
                                  <FontAwesomeIcon icon={faCheck}/>
                                  Đã cọc
                                </div>
                                
                              ) : (
                                <div className="text-danger">
                                  <FontAwesomeIcon icon={faX}/>
                                  Chưa cọc
                                </div>
                              )}
                            </div>
                          </td>
                        <td className="text-center">
                          <Link to={`/admin/booking/edit/${item.id}`}>
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
                          Không tìm thấy đơn đặt lịch nào
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

export default AdminBooking;
