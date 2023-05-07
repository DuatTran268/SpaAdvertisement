import Sidebar from "../../../components/admin/sidebar/Sidebar"
import Navbar from "../../../components/admin/navbar/Navbar"
import Chart from "../../../components/admin/chart/Chart"
import Featured from "../../../components/admin/featured/Featured"
import "./home.scss"
import Table from "../../../components/admin/table/Table"
import Login from "../login/Login"
import DashboardItem from "../../../components/admin/dashboard/Dashboard"

const AdminHome = () => {
  return (
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
          <DashboardItem type="user"/>
          
        </div>
        <div className="charts">
          <Featured/>
          <Chart/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Giao dịch mới nhất</div>
          <Table/>
        </div>
      </div>
    </div>
  )
}

export default AdminHome
