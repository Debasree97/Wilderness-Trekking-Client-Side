import React from "react";
import pageNotFound from "../../images/pageNotFound.png";

const NotFound = () => {
  return (
    <div className="d-flex justify-content-center mb-4">
      <img className="img-fluid" src={pageNotFound} alt="" />
    </div>
  );
};

export default NotFound;
