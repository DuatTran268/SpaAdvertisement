import React, { useEffect } from "react";  



const Login = () => {
  useEffect (() => {
    document.title = "Đăng nhập"
  }, [])

  
  return (
    <>
      <h1>Đây là trang đăng nhập</h1>
    </>
  );
}

export default Login;