import React, { useEffect } from "react";



const Register = () => {
  useEffect (() =>{
    document.title = "Đăng ký"
  }, []);

  return (
    <>
      <h1>Đây là trang đăng ký</h1>
    </>
  );
}

export default Register;