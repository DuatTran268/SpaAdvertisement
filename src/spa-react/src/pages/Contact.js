import React, { useState } from "react";



const Contact = () => {
  useState(() => {
    document.title = "Liên hệ"
  }, [])

  return (
    <h1>Đây là trang liên hệ</h1>
  );
}

export default Contact;