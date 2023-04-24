import React, { useEffect } from "react";
import NotFoundImage from "./images/404NotFound.jpg";
import { Link } from "react-router-dom";

const NotFound = () => {
  useEffect(() => {
    document.title = "404 Not Found";
  });

  return (
    <>
      <div className="notfound text-center">
        <Link to={`/`}>
          <img src={NotFoundImage} alt="page not found" />
        </Link>
      </div>
    </>
  );
};

export default NotFound;
