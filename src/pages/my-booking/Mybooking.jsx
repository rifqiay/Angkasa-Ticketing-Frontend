import React, { Fragment } from "react";
import styles from "./mybooking.module.css";
import style from './myBookingStyle';
import { useDispatch, useSelector } from "react-redux";

import UserLogo from "../../assets/images/profile/user.png";
import Setting from "../../assets/images/profile/setting.png";
import Rating from "../../assets/images/profile/rating.png";
import LogOut from "../../assets/images/profile/logOut.png";
import ImageProfile from "../../assets/images/profile/profile.png";
import PlateImage from "../../assets/images/icons/plate.svg";
import map from "../../assets/map-pin.svg";
import ImageDetails from "../../assets/images/btnback.png";
import { putProfileUser } from "../../app/redux/Slice/ProfileUserSlice";
import axios from "axios";

const Mybooking = () => {
  return (
    <Fragment>
      <div className={styles.mybooking_background}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mt-4">
              <div className={styles.sect1}>
                <div className="text-center">
                  <img src={ImageProfile} alt="imageProfile" />
                  <div className="mt-3"></div>
                  <button type="button"  className="btn btn-outline-primary">
                    Select Photo
                  </button>
                  <h3 className="mt-4"><b>Rifqi Ahmad Pratama</b></h3>
                  <div class="row">
                    <div className="col-md-12">
                      <p>Bandung, Indonesia</p>
                    </div>
                  </div>
                </div>

                <div className="row justify-content-between">
                  <div className="col-6">
                    <h5>Cards</h5>
                  </div>
                  <div className="col-6 text-end">
                    <h5><a href="#" style={{ textDecoration: 'none' }}>+Add</a></h5>
                  </div>
                </div>

                <div className="card ">
                  <div className="card-body bg-primary text-white border border-3">
                    <p>4441 1235 5512 5551</p>
                    <div className="row justify-content-between">
                      <div className="col-6">
                        <h5>X Card</h5>
                      </div>
                      <div className="col-6">
                        <h5>& 1,440.2</h5>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" row justify-content-center mt-4">
                  <div className="col-3 text-center">
                    <img src={UserLogo} alt="userlogo" />
                  </div>
                  <div className="col-9">
                    <p className="ms-2 text-start" style={style.blueFont}><b>Profile</b></p>
                  </div>
                </div>
                <div className=" row justify-content-center mt-4">
                  <div className="col-3 text-center">
                    <img src={Rating} alt="userlogo" />
                  </div>
                  <div className="col-9">
                    <p className="ms-2 text-start"><b>My Review</b></p>
                  </div>
                </div>
                <div className=" row justify-content-center mt-4">
                  <div className="col-3 text-center">
                    <img src={Setting} alt="userlogo" />
                  </div>
                  <div className="col-9">
                    <p className="ms-2 text-start"><b>Settings</b></p>
                  </div>
                </div>
                <div className=" row justify-content-center mt-4">
                  <div className="col-3 text-center">
                    <img src={LogOut} alt="userlogo" />
                  </div>
                  <div className="col-9">
                    <p className="ms-2 text-start" style={style.redFont}><b>Logout</b></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8 mt-4">
                <div className={styles.sect2}>
                  <h5 className={styles.blueSpace}>MY BOOKING</h5>
                  <div className="row justify-content-between">
                    <div className="col-6 text-start">
                      <h3><b>My Booking</b></h3>
                    </div>
                    <div className="col-6 text-end">
                      <p style={style.blueFont}><b>Order History</b></p>
                    </div>
                  </div>
                </div>
                <div className={styles.sect2}>
                  <p>Monday, 20 July '20 - 12:33</p>
                  <div className="d-flex">
                    <h3><b>IDN</b></h3>
                    <img className="ms-4" src={PlateImage} alt="PlateImage" />
                    <h3 className="ms-4"><b>JPN</b></h3>
                  </div>
                  <p className={styles.airlinesAndCode}>Garuda Indonesia, AB-221</p>
                  <hr />
                  <div className="row justify-content-between">
                    <div className="col-2">
                      <h5 className={styles.greyFont}>Status</h5>
                    </div>
                    <div className="col-7">
                      <p>Waiting for payment</p>
                    </div>
                    <div
                      className="col-3 d-flex"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseWidthExample1"
                      aria-expanded="false"
                      aria-controls="collapseWidthExample1"
                    >
                      <h5 className="text-primary">View Details</h5>
                      <img
                        src={ImageDetails}
                        alt="ImageDetails"
                        className={styles.ImageDetails}
                      />
                    </div>
                  </div>
                  <div
                    className="collapse collapse-vertical"
                    id="collapseWidthExample1"
                  >
                    <div className="card card body">
                      This is some placeholder content for a horizontal
                      collapse. It's hidden by default and shown when triggered.
                    </div>
                  </div>
                </div>
                <div className={styles.sect2}>
                  <p>Monday, 20 July '20 - 12:33</p>
                  <div className="d-flex">
                    <h3><b>IDN</b></h3>
                    <img className="ms-4" src={PlateImage} alt="PlateImage" />
                    <h3 className="ms-4"><b>JPN</b></h3>
                  </div>
                  <p className={styles.airlinesAndCode}>Garuda Indonesia, AB-221</p>
                  <hr />
                  <div className="row justify-content-between">
                    <div className="col-2">
                      <h5 className={styles.greyFont}>Status</h5>
                    </div>
                    <div className="col-7">
                      <p>Etiket issued</p>
                    </div>
                    <div
                      className="col-3 d-flex"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseWidthExample"
                      aria-expanded="false"
                      aria-controls="collapseWidthExample"
                    >
                      <h5 className="text-primary">View Details</h5>
                      <img
                        src={ImageDetails}
                        alt="ImageDetails"
                        className={styles.ImageDetails}
                      />
                    </div>
                  </div>
                  <div
                    className="collapse collapse-vertical"
                    id="collapseWidthExample"
                  >
                    <div className="card card body">
                      This is some placeholder content for a horizontal
                      collapse. It's hidden by default and shown when triggered.
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

export default Mybooking;
