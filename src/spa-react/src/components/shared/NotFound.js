import React from "react";
import NotFoundImage from "./images/404NotFound.jpg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="notfound text-center">
      <Link to={`/`}>
        <img src={NotFoundImage} alt="page not found" />
      </Link>
      </div>
    </>
  );
}

export default NotFound;