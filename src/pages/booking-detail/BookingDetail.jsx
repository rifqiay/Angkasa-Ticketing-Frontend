import React, { Fragment } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import ImageGaruda from "../../assets/images/booking/garuda.png";
import { QRCodeSVG } from "qrcode.react";
const BookingDetail = () => {
  return (
    <Fragment>
      <div className="BookingDetail-Page bg-primary ">
        <div className="container justify-content-center ">
          <div className="row">
            <div className="col-lg-10 offset-md-1">
              <div className="card mt-5 mb-5">
                <div className="card-header bg-white">
                  <div className="row justify-content-between mt-2">
                    <div className="col-4">
                      <h2 className="card-title">Booking Pass</h2>
                    </div>
                    <div className="col-1">
                      <BsThreeDotsVertical size={30} />
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="card-body mt-3 ">
                    <div className="row">
                      <div className="col-lg-6">
                        <img src={ImageGaruda} alt="ImageGaruda" />
                        <div  className="row justify-content-evenly mt-5">
                          <div  className="col-4">
                            <p>Code</p>
                            <p>AB-221</p>
                          </div>
                          <div  className="col-6">
                            <p>Class</p>
                            <p>Economy</p>
                          </div>
                        </div>
                        <div  className="row justify-content-evenly mt-5">
                          <div  className="col-4">
                            <p>Terminal</p>
                            <p>A</p>
                          </div>
                          <div  className="col-6">
                            <p>Gate</p>
                            <p>221</p>
                          </div>
                        </div>
                        <div className="container">
                          <p>Departure</p>
                          <p>Monday, 20 July'20 - 12:33</p>
                        </div>
                      </div>
                      <div className="col-4 text-center justify-content-center">
                        <QRCodeSVG value="https://reactjs.org/" size={250} />,
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BookingDetail;
