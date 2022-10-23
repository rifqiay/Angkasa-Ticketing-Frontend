import React, { Fragment } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { QRCodeSVG } from "qrcode.react";
import styles from './bookingDetail.module.css';
import style from './bookingDetailStyle';

const BookingDetail = () => {
  return (
    <Fragment>
      <div className={styles.bookingdetail_background}>
        <div className="container justify-content-center ">
          <div className="row">
            <div className="col-lg-10 offset-md-1">
              <div className="card mt-5 mb-5">
                <div className="card-header bg-white">
                  <div className="row justify-content-between mt-2">
                    <div className="col-6 text-start">
                      <h1 className="card-title"><b>Booking Pass</b></h1>
                    </div>
                    <div className="col-6 text-end">
                      <BsThreeDotsVertical size={30} />
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="card-body mt-3">
                    <div className="row">
                      <div className="col-lg-8" style={style.border1}>
                        <div class="row justify-content-evenly">
                          <div class="col-3">
                            <img src="/images/garuda-indonesia-logo-BD82882F07-seeklogo3.svg" width={130} height={107} />
                          </div>
                          <div class="col-3 my-3"><h1><b>IDN</b></h1></div>
                          <div class="col-3 my-3">
                            <img src="/images/Vector.svg" width={48} height={47} />
                          </div>
                          <div class="col-3 my-3"><h1><b>JPN</b></h1></div>
                        </div>
                        <div class="row justify-content-evenly mt-5">
                          <div class="col-4 text-start">
                            <p className={styles.grey}>Code</p>
                            <p className={styles.detail_color}>AB-221</p>
                          </div>
                          <div class="col-6 text-start">
                            <p className={styles.grey}>Class</p>
                            <p className={styles.detail_color}>Economy</p>
                          </div>
                        </div>
                        <div class="row justify-content-evenly mt-5">
                          <div class="col-4 text-start">
                            <p className={styles.grey}>Terminal</p>
                            <p className={styles.detail_color}>A</p>
                          </div>
                          <div class="col-6 text-start">
                            <p className={styles.grey}>Gate</p>
                            <p className={styles.detail_color}>221</p>
                          </div>
                        </div>
                        <div className="row mt-5">
                          <div class="col-12 text-start px-5">
                            <p className={styles.grey}>Departure</p>
                            <p className={styles.detail_color}>Monday, 20 July '20 - 12:33</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 text-center justify-content-center" style={style.border2}>
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
