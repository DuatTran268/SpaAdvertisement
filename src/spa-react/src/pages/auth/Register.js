import axios from "axios";

import React, { useEffect } from "react";
import { useState } from "react";
import { Toast } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";



const Register = () => {
  useEffect (() =>{
    document.title = "Đăng ký"
  }, []);

  const [fullname, setFullName] = useState("");
//   const [phoneNo, setPhoneNo] = useState("");
//   const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleSave = () => {
    const data = {
        FullName : fullname,
        Email : email,
        Password : password,
    };
    const url ='https://localhost:7024/api/users';
    axios.post(url,data).then((result)=>{
        alert(result.data);
        
    }).catch((err)=>{
        alert(err);
    })
  }



  return (
    <div>
    <div className="offset-lg-3 col-lg-6">
        <form className="container" >
            <div className="card">
                <div className="card-header">
                    <h1>Tạo tài khoản</h1>
                </div>
                <div className="card-body">

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label>Email<span className="errmsg">*</span></label>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} className="form-control"></input>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label>Mật khẩu <span className="errmsg">*</span></label>
                                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control"></input>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label> Họ và Tên<span className="errmsg">*</span></label>
                                <input value={fullname} onChange={(e) => setFullName(e.target.value)} className="form-control"></input>
                            </div>
                        </div>
                        {/* <div className="col-lg-6">
                            <div className="form-group">
                                <label>Số điện thoại <span className="errmsg"></span></label>
                                <input value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)}  className="form-control"></input>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label>Tỉnh/Thành Phố <span className="errmsg">*</span></label>
                                <select className="form-control">
                                    <option value="india">TP Hồ Chí Minh</option>
                                    <option value="usa">Hà Nội</option>
                                    <option value="singapore">Đà Lạt</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>Địa chỉ</label>
                                <textarea value={address} onChange={(e) => setAddress(e.target.value)} className="form-control"></textarea>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label>Giới tính</label>
                                <br></br>
                                <input type="radio"  name="gender" value="male" className="app-check"></input>
                                <label >Nam</label>
                                <input type="radio" name="gender" value="female" className="app-check"></input>
                                <label>Nữ</label>
                            </div>
                        </div> */}

                    </div>

                </div>
                <div className="card-footer">
                    <button onClick={handleSave} type="submit" className="btn btn-primary">Đăng ký</button> |
                    <Link to={'/login'} className="btn btn-danger">Quay về</Link>
                </div>
            </div>
        </form>
    </div>


</div>
  );
}

export default Register;