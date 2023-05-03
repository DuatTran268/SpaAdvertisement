import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Toast } from "bootstrap";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState("");


  const handleEmailChange = (value) => {
    setEmail(value);
  };
  
  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleLogin = () =>{
    const data = {
      Email : email,
      Password : password,
    };
    const url = 'https://localhost:7024/api/users';
    axios.post(url,data).then((res) =>{
      navigate('/home')
      alert(res.data);
    }).catch((err) =>{
      alert(err);
    })
  }
  
  
  
  return (
    <div className="row">
      <div className="offset-lg-3 col-lg-6" style={{ marginTop: "100px" }}>
        <form onClick={handleLogin} className="container">
          <div className="card">
            <div className="card-header">
              <h2>Đăng nhập</h2>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>
                  Email <span className="errmsg">*</span>
                </label>
                <input           
                  onChange={(e) => handleEmailChange(e.target.value)}
                  className="form-control"
                ></input>
              </div>
              <div className="form-group">
                <label>
                  Mật khẩu <span className="errmsg">*</span>
                </label>
                <input
                  onChange={(e) => handlePasswordChange(e.target.value)}
                  className="form-control" type="password"
                ></input>
              </div>
            </div>
            <div className="card-footer">
              <button onClick={handleLogin} type="submit" className="btn btn-primary">
                Đăng nhập
              </button>{" "}
              |
              <Link className="btn btn-success" to={"/register"}>
                Đăng ký
              </Link>{" "}
              |
              <Link className="btn btn-danger" to={"/"}>
                Quay về
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
