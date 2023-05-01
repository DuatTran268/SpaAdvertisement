import { useEffect, useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { getUser } from "../../../Services/BlogRepository";
export default function AdminLogin() {

  const navigate = useNavigate()
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [admin, setUsers] = useState("");

    async function Click() {   
        const SpaCenter ={
        Email: email,
        Password: password,
      };
        const url = `https://localhost:7024/api/users`;
        axios.get(url,SpaCenter).then((result) =>{
          navigate("/adminHome")
        })
                
    }

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
          <input type="email" placeholder="Tên người dùng" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}/>
          <button onClick={Click} className="loginButton">Đăng nhập</button> 
        </form>
      </div>
    </div>
  );
}
