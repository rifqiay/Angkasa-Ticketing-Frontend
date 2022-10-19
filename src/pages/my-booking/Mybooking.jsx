import React, { Fragment } from "react";
import styles from "./mybooking.module.css";
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
                <div className=" text-center">
                  <img src={ImageProfile} alt="imageProfile" />
                  <div className="mt-3"></div>
                  <button type="button" class="btn btn-outline-primary">
                    Select Photo
                  </button>
                  <h3 className="mt-4">Rifqi Ahmad Pratama</h3>
                  <div class="row">
                    <div className="col-md-6 offset-md-3 ">
                      <img src={map} alt="map" />
                      <p>Bandung, Indonesia</p>
                    </div>
                  </div>
                </div>

                <div className="row justify-content-between">
                  <div className="col-3">
                    <h5>Cards</h5>
                  </div>
                  <div className="col-3">
                    <h5>+Add</h5>
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
                  <div className="col-4">
                    <img src={UserLogo} alt="userlogo" />
                  </div>
                  <div className="col-4">
                    <p className="ms-2">Profile</p>
                  </div>
                </div>
                <div className=" row justify-content-center mt-4">
                  <div className="col-4">
                    <img src={Rating} alt="userlogo" />
                  </div>
                  <div className="col-4">
                    <p className="ms-2">My Review</p>
                  </div>
                </div>
                <div className=" row justify-content-center mt-4">
                  <div className="col-4">
                    <img src={Setting} alt="userlogo" />
                  </div>
                  <div className="col-4">
                    <p className="ms-2">Settings</p>
                  </div>
                </div>
                <div className=" row justify-content-center mt-4">
                  <div className="col-4">
                    <img src={LogOut} alt="userlogo" />
                  </div>
                  <div className="col-4">
                    <p className="ms-2">Logout</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8 mt-4">
              <form
                id="form-edit-profile"
                // onSubmit={handleUpdate}
              >
                <div className={styles.sect2}>
                  <h5>My BOOKING</h5>
                  <div className="row justify-content-between">
                    <div className="col-4">
                      <h2>My Booking</h2>
                    </div>
                    <div className="col-4">
                      <p>Order History</p>
                    </div>
                  </div>
                </div>
              </form>
              <form
                id="form-edit-profile"
                // onSubmit={handleUpdate}
              >
                <div className={styles.sect2}>
                  <p>Monday, 20 July '20 - 12:33</p>
                  <div className="d-flex">
                    <h3>IDN</h3>
                    <img className="ms-4" src={PlateImage} alt="PlateImage" />
                    <h3 className="ms-4">IDN</h3>
                  </div>
                  <p>Garuda Indonesia, AB-221</p>
                  <hr />
                  <div className="row justify-content-between">
                    <div className="col-2">
                      <p>Status</p>
                    </div>
                    <div className="col-7">
                      <p>Waiting for paymant</p>
                    </div>
                    <div
                      className="col-3 d-flex"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseWidthExample1"
                      aria-expanded="false"
                      aria-controls="collapseWidthExample1"
                    >
                      <p className="text-primary">View Details</p>
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
              </form>
              <form
                id="form-edit-profile"
                // onSubmit={handleUpdate}
              >
                <div className={styles.sect2}>
                  <p>Monday, 20 July '20 - 12:33</p>
                  <div className="d-flex">
                    <h3>IDN</h3>
                    <img className="ms-4" src={PlateImage} alt="PlateImage" />
                    <h3 className="ms-4">IDN</h3>
                  </div>
                  <p>Garuda Indonesia, AB-221</p>
                  <hr />
                  <div className="row justify-content-between">
                    <div className="col-2">
                      <p>Status</p>
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
                      <p className="text-primary">View Details</p>
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Mybooking;
