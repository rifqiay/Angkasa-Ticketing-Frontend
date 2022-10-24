import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Check from "../../assets/check.png";
import Destination from "../../assets/dst.png";
import Banner from "../../assets/img1.png";
import WarningLogo from "../../assets/warning.png";
import { getTicketByIdActionCreator } from "../../redux/action/creator/ticket";
import { getProfileActionCreator } from "../../redux/action/creator/profile";
import { bookingTicketByIdActionCreator } from "../../redux/action/creator/booking";
import styles from "./flightDetail.module.css";
import moment from "moment/moment";

const FlightDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const [fullName, setFullName] = useState("");
  const zoneName = moment().locale("id");
  const dispatch = useDispatch();
  const getTicketById = useSelector(
    (state) => state.ticket.getById,
    shallowEqual
  );
  const getProfile = useSelector((state) => state.profile.get, shallowEqual);

  useEffect(() => {
    dispatch(getTicketByIdActionCreator(id));
    dispatch(getProfileActionCreator());
  }, [id]);

  const handlePayment = (ticketId, data) => {
    console.log(ticketId, data);
    dispatch(bookingTicketByIdActionCreator({ id: ticketId, data }));
    navigate("/my-booking");
  };
  return (
    <>
      <div className="container-fluid">
        <img src={Banner} className={`img-fluid ${styles.banner}`} alt="" />
      </div>
      <div className={`container ${styles.contact}`}>
        <div className="row">
          {/* contact person detail */}
          <div className="col-lg-7">
            <h3 className={`my-3 ${styles.tres}`}>Contact Person Detail</h3>
            <div className="card p-3">
              <div>
                <label for="fullname" className="ms-2 mb-1">
                  Fullname
                </label>
                <input
                  type="text"
                  className="w-100 p-2"
                  id="fullname"
                  value={getProfile?.response?.name}
                  disabled
                />
              </div>
              <div className="mt-2">
                <label for="email" className="ms-2 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-100 p-2"
                  id="email"
                  value={getProfile?.response?.user.email}
                  disabled
                />
              </div>
              <div className="mt-2">
                <label for="phone" className="ms-2 mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="w-100 p-2"
                  id="phone"
                  value={getProfile?.response?.phone}
                  disabled
                />
              </div>
              <div
                className={`${styles.warning} mt-4 d-flex align-items-center`}
              >
                <div className="ms-4">
                  <img src={WarningLogo} alt="" />
                  <span className="ms-2 text-light">
                    Make sure the customer data is correct.
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* ticket */}
          <div className="col">
            <div className="d-flex justify-content-between align-items-center my-3">
              <h3 className={styles.tres}>Flight Details</h3>
              <h5 className={styles.tres}>View Details</h5>
            </div>
            <div className="card p-3">
              <div className="d-flex align-items-center">
                <img
                  src={getTicketById?.response?.airline?.thumbnail}
                  width="100px"
                  height="45px"
                  alt=""
                />
                <h4 className="ms-3">
                  {getTicketById?.response?.airline?.title}
                </h4>
              </div>
              <div className="d-flex justify-content-evenly my-4">
                <h5>{getTicketById?.response?.place_from}</h5>
                <div>
                  <img src={Destination} alt="" />
                </div>
                <h5>{getTicketById?.response?.place_to}</h5>
              </div>
              <div>
                <strong>
                  {moment(getTicketById?.response?.departure)
                    .locale(zoneName)
                    .format("MMMM Do YYYY, h:mm A")}{" "}
                  -{" "}
                  {moment(getTicketById?.response?.arival)
                    .locale(zoneName)
                    .format("LT")}
                </strong>
              </div>
              <div className="mt-4">
                <img src={Check} alt="" />
                <strong className="text-primary ms-1">Refundable</strong>
              </div>
              <div className="mt-2">
                <img src={Check} alt="" />
                <strong className="text-primary ms-1">Can reschedule</strong>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <h4>Total Payment</h4>
                <h3 className="text-primary">
                  $ {getTicketById?.response?.price}
                </h3>
              </div>
            </div>
          </div>
        </div>
        {/* passenger details */}
        <div className="row mt-3">
          <div className="col-lg-7">
            <h3>Passenger Details</h3>
            <div className="card p-3">
              <div className="d-flex justify-content-between">
                <span>Passenger: Adult</span>
                <div className="d-flex">
                  <span className="mx-1">Same as contact person</span>
                  <label
                    className={`${styles.togglerwrapper} ${styles.style1}`}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        setIsChecked(e.target.checked);
                        if (!isChecked) {
                          setFullName(getProfile?.response?.name);
                        } else {
                          setFullName("");
                        }
                      }}
                    />
                    <div className={styles.togglerslider}>
                      <div className={styles.togglerknob}></div>
                    </div>
                  </label>
                </div>
              </div>
              <label className="mt-3 mb-1">Title</label>
              <div className="input-group flex-nowrap">
                <select
                  name="title"
                  id="title"
                  className="p-2 border-0"
                  required
                >
                  <option value="Mr.">Mr.</option>
                  <option value="Mrs.">Mrs.</option>
                </select>
              </div>
              <hr />
              <div className="mt-3">
                <label for="fullname" className="mb-1">
                  Full Name
                </label>
                <input
                  type="text "
                  placeholder="Insert Your Full Name"
                  id="fullname"
                  className="w-100 p-2"
                  value={fullName}
                />
              </div>
              <label className="mt-3 mb-1">Nationality</label>
              <div className="input-group flex-nowrap">
                <select
                  name="national"
                  id="national"
                  className="p-2 border-0"
                  required
                >
                  <option>National</option>
                  <option value="indonesia">Indonesia</option>
                  <option value="japan">Japan</option>
                </select>
              </div>
              <hr />
            </div>
          </div>
        </div>
        {/* passenger detail */}
        <div className="row mt-3">
          <div className="col-lg-7">
            <h4>Passenger Details</h4>
            <div className="card p-3">
              <div className="d-flex justify-content-between">
                <div>
                  <input type="checkbox" id="insurance" />
                  <label for="insurance" className="ms-2">
                    Travel Insurance
                  </label>
                </div>
                <h5 className="text-primary">
                  $2,00<span className="text-secondary">/pax</span>
                </h5>
              </div>
              <hr />
              <strong>Get travel compensation up to $ 10.000,00</strong>
            </div>
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-primary w-50 mt-4"
                onClick={() =>
                  handlePayment(getTicketById?.response?.id, {
                    passenger: 1,
                    adult: 1,
                  })
                }
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightDetail;
