import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {Link} from "react-router-dom";
import { DarkModeContext } from "../context/darkModeReducer";
import { useContext } from "react";

const Sidebar = () => {

  const {dispatch} = useContext(DarkModeContext)

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/admin" style={{textDecoration:"none"}}>
        <span className="logo">Admin</span>
        </Link>
        </div>
        <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/admin" style={{textDecoration:"none"}}>
            <li>
            <DashboardIcon className="icon"/>
                <span>Dashboard</span>
            </li>
            </Link>
            <p className="title">LISTS</p>
            <Link to="/admin/users" style={{textDecoration:"none"}}>
            <li>
            <Person3OutlinedIcon className="icon"/>
                <span>Người dùng</span>
            </li>
            </Link>
            <Link to="/admin/products" style={{textDecoration:"none"}}>
            <li>
              <ProductionQuantityLimitsOutlinedIcon className="icon"/>
                <span>Sản phẩm</span>
            </li>
            </Link>
            <Link to="/admin/Cart" style={{textDecoration:"none"}}>
            <li>
              <ShoppingCartOutlinedIcon className="icon"/>
                <span>Đơn hàng</span>
            </li>
            </Link>
            <Link to={'/admin/booking'} style={{textDecoration:"none"}}>
            <li>
              <LocalShippingOutlinedIcon className="icon"/>
                <span>Booking</span>
            </li>
            </Link>
            <p className="title">USEFUL</p>
            <li>
              <NotificationsNoneOutlinedIcon className="icon"/>
                <span>Notifications</span>
            </li>
            <p className="title">SERVICE</p>
            <li>
              <PsychologyOutlinedIcon className="icon"/>
                <span>Logs</span>
            </li>
            <Link to={"/admin/setting"} style={{textDecoration:"none"}}>
            <li>
              <SettingsSuggestOutlinedIcon className="icon"/>
                <span>Setting</span>
            </li>
            </Link>
            <Link to={"/"} style={{textDecoration:"none"}}>
             <li>
              <LogoutOutlinedIcon className="icon"/>
                <span>Logout</span>
            </li>
            </Link>
           
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={()=> dispatch({type:"LIGHT"})}></div>
        <div className="colorOption" onClick={()=> dispatch({type:"DARK"})}></div>
      </div>
    </div>
  )
}

export default Sidebar
