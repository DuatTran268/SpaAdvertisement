import Sidebar from "../../../components/admin/sidebar/Sidebar"
import Navbar from "../../../components/admin/navbar/Navbar"
import Widget from "../../../components/admin/widget/Widget"
import Chart from "../../../components/admin/chart/Chart"
import Featured from "../../../components/admin/featured/Featured"
import "./home.scss"
import Table from "../../../components/admin/table/Table"
import Login from "../login/Login"

const AdminHome = () => {
  return (
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="earning"/>
          <Widget type="balance"/>
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
