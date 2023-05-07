import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const BtnLogin = () => {
  return (
    <div>
    <Link  to={"/admin"}>
      <Button className="btn btn-success">Đăng nhập</Button>
    </Link>
    </div>
  );
};

export default BtnLogin;
