import "./login.scss";
import { Link } from "react-router-dom";
export default function AdminLogin() {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="/static/media/logo.c941ddb9c58471c233bb.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Hệ thống quản trị nội dung</h1>
          <input type="email" placeholder="Tên người dùng" />
          <input type="password" placeholder="Mật khẩu" />
          <Link Link to="/admin">
          <button className="loginButton">Đăng nhập</button>
          </Link>
        </form>
      </div>
    </div>
  );
}
