import React, { useEffect, useState } from "react";

import { getAllDashboard } from "../../../api/Dashboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faTruck, faUser } from "@fortawesome/free-solid-svg-icons";

const DashboardItem = () => {
  const [dashboardItem, setDashboardItem] = useState({});

  useEffect(() => {
    featchData();
    async function featchData() {
      const response = await getAllDashboard();
      console.log("response: ", response);
      if (response) {
        console.log("response check: ", response);
        setDashboardItem(response);
      } else {
        setDashboardItem({});
      }
    }
  }, []);

  return (
    <>
      <div className="card-body">
        <div className="text-danger">
          <h3>Số user</h3>
          <FontAwesomeIcon icon={faUser} fontSize={30} />
          <span className="text-success px-5">{dashboardItem.countUser}</span>
        </div>
      </div>
      <div className="card-body">
        <div className="text-danger">
          <h3>Loại dịch vụ</h3>
          <FontAwesomeIcon icon={faUser} fontSize={30} />
          <span className="text-success px-5">{dashboardItem.countCustomerSupport}</span>
        </div>
      </div>
      <div className="card-body">
        <div className="text-danger">
          <h3>Dịch vụ</h3>
          <FontAwesomeIcon icon={faUser} fontSize={30} />
          <span className="text-success px-5">{dashboardItem.countUser}</span>
        </div>
      </div>
      <div className="card-body">
        <div className="text-danger">
          <h3>Hỗ trợ</h3>
          <FontAwesomeIcon icon={faPhone} fontSize={30} />
          <span className="text-success px-5">{dashboardItem.countUser}</span>
        </div>
      </div>
      <div className="card-body">
        <div className="text-danger">
          <h3>Đặt hàng</h3>
          <FontAwesomeIcon icon={faTruck} fontSize={30} />
          <span className="text-success px-5">{dashboardItem.countUser}</span>
        </div>
      </div>
    </>
  );
};
export default DashboardItem;
