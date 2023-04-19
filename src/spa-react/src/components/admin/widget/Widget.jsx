import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';


const Widget = ({ type }) => {
  let data;

  const amount = 100;
  const diff = 20;
  

  switch (type) {
    case "user":
      data = {
        title: "NGƯỜI DÙNG",
        isMoney: false,
        link: "Xem thêm",
        icon: <PersonIcon className="icon" style={{color:"crimson",backgroundColor: "rgba(255,0,0,0.2)"}}/>,
      };
      break;
    case "order":
      data = {
        title: "ĐƠN HÀNG",
        isMoney: false,
        link: "Xem thêm",
        icon: <ShoppingCartIcon className="icon" style={{color:"goldenrod",backgroundColor: "rgba(218,165,32,0.2)"}}/>,
      };
      break;
      case "earning":
      data = {
        title: "THU NHẬP",
        isMoney: true,
        link: "Xem thêm",
        icon: <MonetizationOnIcon className="icon" style={{color:"green",backgroundColor: "rgba(0,128,0,0.2)"}}/>,
      };
      break;
      case "balance":
      data = {
        title: "TIỀN DƯ",
        isMoney: true,
        link: "Xem thêm",
        icon: <AccountBalanceWalletIcon className="icon" style={{color:"purple",backgroundColor: "rgba(128,0,128,0.2)"}}/>,
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$"} {amount}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
