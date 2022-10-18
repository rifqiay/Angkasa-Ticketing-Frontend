import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <div className="footer-global shadow-sm">
        <footer className="container border-top">
          <div className="col-12 text-center mt-5">
            <h1 className="">Eat, Cook, Repeat</h1>
            <h5 className="text-muted">
              Share your best recipe by uploading here !
            </h5>
          </div>
          <div className="col-12 d-flex justify-content-center mt-5">
            <div className="col-xl-8 col-lg-9 col-md-12 col-sm-12  d-flex">
              <div className="col-2 text-center ">
                <h6 className="text-muted">Recipes</h6>
              </div>
              <div className="col-2 text-center">
                <h6 className="text-muted">Company</h6>
              </div>
              <div className="col-2 text-center">
                <h6 className="text-muted">Learn more</h6>
              </div>
              <div className="col-3 text-center">
                <h6 className="text-muted">Collaboration</h6>
              </div>
              <div className="col-3 text-end">
                <p className="text-muted">&copy; WorldRecipes</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Fragment>
  );
};

export default Footer;
