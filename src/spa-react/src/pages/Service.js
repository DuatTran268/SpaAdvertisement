import React, { useState } from "react";



const Service = () => {
  useState(() =>{
    document.title = "Dịch vụ"
  }, [])

  return (
    <>
      <h1>Đây là trang Dịch vụ</h1>
    </>
  );
}

export default Service;