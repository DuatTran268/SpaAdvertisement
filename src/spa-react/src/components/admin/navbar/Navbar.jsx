import "./navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import { DarkModeContext } from "../context/darkModeReducer";
import { useContext } from "react";
import { Link } from "react-router-dom";



const Navbar = () => {
  const {dispatch} = useContext(DarkModeContext)

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Seach..." />
          <SearchOutlinedIcon/>
        </div>
        <div className="items">
          <div className="item">
            <DarkModeOutlinedIcon className="icon" onClick={()=> dispatch({type:"TOGGLE"})}/>
          </div>
          {/* <div className="item">
            <NotificationsNoneOutlinedIcon className="icon"/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon"/>
            <div className="counter">2</div>
          </div> */}
          <Link to={"/admin/setting"} style={{textDecoration:"none"}}>
          <div className="item">
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.Lfc-ED0sVK9GOkjPJjB2cwAAAA&pid=Api&P=0"
              alt=""
              className="avatar"
            />
          </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
