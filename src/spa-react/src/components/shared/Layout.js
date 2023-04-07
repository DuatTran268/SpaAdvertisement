import React from "react";
import Header from "./Header";

const Layout = ({children}) => {
  return (
    <>
      <Header />
      <div className="">
          {children}
      </div>
      {/* footer */}
    </>
  );
};

export default Layout;
