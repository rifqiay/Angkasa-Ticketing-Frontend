import React, { Fragment, useEffect, useRef } from "react";
import styles from "./mybooking.module.css";
import { useDispatch, useSelector } from "react-redux";

import UserLogo from "../../assets/images/profile/user.png";
import Setting from "../../assets/images/profile/setting.png";
import Rating from "../../assets/images/profile/rating.png";
import LogOut from "../../assets/images/profile/logOut.png";
import PlateImage from "../../assets/images/icons/plate.svg";
import map from "../../assets/map-pin.svg";
import ImageDetails from "../../assets/images/btnback.png";
import { getProfileActionCreator } from "../../redux/action/creator/profile";
import moment from "moment/moment";
import { useNavigate } from "react-router-dom";
import { logoutActionCreator } from "../../redux/action/creator/auth";
import { useDidUpdate } from "@mantine/hooks";
import { toast } from "react-toastify";

const Mybooking = () => {
  const dispatch = useDispatch();
  const ProfileGet = useSelector(state => state.profile.get)
  const zoneName = moment().locale("id");
  const navigate = useNavigate();
  const logout = useSelector(state => state.auth.logout)
  const onLogout = () => dispatch(logoutActionCreator())
  const toastId = useRef(null)

  useDidUpdate(() => {
    const toastOptions = {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    };

    if (logout?.isPending) {
      toast.dismiss(toastId.current)
      toastId.current = toast.loading("Loading...", toastOptions)
    }

    if (logout?.isRejected) {
      toast.dismiss(toastId.current)
      toastId.current = toast.error(logout?.errorMessage, toastOptions)
    }

    if (logout?.isFulfilled) {
      toast.dismiss(toastId.current)
      toastId.current = toast.success("Succes log out, to access feature please sign in again", toastOptions)
      navigate('/home', { replace: true })
    }
  }, [logout])

  useEffect(() => {
    dispatch(getProfileActionCreator())
  }, []);

  return (
    <Fragment>
      <div className={styles.mybooking_background}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mt-4">
              <div className={styles.sect1}>
                <div className=" text-center">
                  <img
                    src={ProfileGet?.response?.avatar || `https://avatars.dicebear.com/api/bottts/${ProfileGet?.response?.user?.email}.svg`}
                    alt="Avatar"
                    style={{
                      verticalAlign: 'middle',
                      width: '170px',
                      height: '170px',
                      borderRadius: '50%'
                    }}
                  />
                  <div className="mt-3"></div>
                  <h3 className="mt-4">{ProfileGet?.response?.name}</h3>
                  <div  className="row">
                    <div className="col-md-6 offset-md-3 ">
                      <img src={map} alt="map" />
                      <p>{ProfileGet?.response?.city}</p>
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
                  <div className="col-4" style={{ cursor: 'pointer' }} onClick={onLogout}>
                    <img src={LogOut} alt="userlogo" />
                  </div>
                  <div className="col-4">
                    <p className="ms-2" style={{ cursor: 'pointer' }} onClick={onLogout}>Logout</p>
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
              
              {ProfileGet?.response?.user?.orders?.map((item, index) => (
                <div key={index} className={styles.sect2}>
                  <p>
                    {moment(item.reservation.departure)
                      .locale(zoneName)
                      .format("MMMM Do YYYY, h:mm A")}{" "}
                    -{" "}
                    {moment(item.reservation.arival)
                      .locale(zoneName)
                      .format("LT")}
                  </p>
                  <div className="d-flex">
                    <h3>{item.reservation.place_from}</h3>
                    <img className="ms-4" src={PlateImage} alt="PlateImage" />
                    <h3 className="ms-4">{item.reservation.place_to}</h3>
                  </div>
                  <p>{item.reservation.airline.title}</p>
                  <hr />
                  <div className="row justify-content-between">
                    <div className="col-2">
                      <p>Status</p>
                    </div>
                    <div className="col-7">
                      <p>{item.status}</p>
                    </div>
                    <div
                      className="col-3 d-flex"
                      type="button"
                      onClick={() => navigate(`/booking/${item.id}`)}
                      // data-bs-toggle="collapse"
                      // data-bs-target="#collapseWidthExample1"
                      // aria-expanded="false"
                      // aria-controls="collapseWidthExample1"
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
              ))}
              
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Mybooking;
