import React, { Fragment } from "react";
import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <Fragment>
      <div className="page-not-found">
        <div className="container">
          <div className="col-12 d-flex justify-content-center">
            <img
              src={require("../../assets/images/notfound.png")}
              alt="notfound"
            ></img>
            <div className="d-flex align-items-center">
              <p className="text-not-found">404|</p>
              <p className="text-not-found">Page Not Found</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PageNotFound;
