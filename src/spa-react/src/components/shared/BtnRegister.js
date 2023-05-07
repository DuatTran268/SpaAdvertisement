// import  Button  from "react-bootstrap/Button";
import React from "react";  
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const BtnRegister = () => {
  return (
    <div>
      <Link to={'/register'}>
          <Button className="btn btn-danger">
            Đăng ký
          </Button>
      </Link>
    </div>
  );
}


export default BtnRegister;