import React, { useState, useEffect } from "react";
import styles from "./flightDetail.module.css";
import Banner from "../../assets/img1.png";
import WarningLogo from "../../assets/warning.png";
import Destination from "../../assets/dst.png";
import Check from "../../assets/check.png";
import Garuda from "../../assets/garuda-indonesia.svg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const FlightDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState("");

  const getData = async () => {
    try {
      const result = await axios.get(
        `http://localhost:8080/api/v1/ticket/${id}`
      );
      setData(result?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);
  console.log(data);
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
                  placeholder="Insert Full Name"
                  className="w-100 p-2"
                  id="fullname"
                />
              </div>
              <div className="mt-2">
                <label for="email" className="ms-2 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Insert your Email"
                  className="w-100 p-2"
                  id="email"
                />
              </div>
              <div className="mt-2">
                <label for="phone" className="ms-2 mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="Insert Your Phone Number"
                  className="w-100 p-2"
                  id="phone"
                />
              </div>
              <div
                className={`${styles.warning} mt-4 d-flex align-items-center`}
              >
                <div className="ms-4">
                  <img src={WarningLogo} alt="" />
                  <span className="ms-2">
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
                  src={data?.airline?.thumbnail}
                  width="100px"
                  height="45px"
                  alt=""
                />
                <h4 className="ms-3">{data?.airline?.title}</h4>
              </div>
              <div className="d-flex justify-content-evenly my-4">
                <h5>{data?.place_from}</h5>
                <div>
                  <img src={Destination} alt="" />
                </div>
                <h5>{data?.place_to}</h5>
              </div>
              <div>
                <strong>Sunday, 15 August 2020 . 12:33 - 15:21</strong>
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
                <h3 className="text-primary">$ 145,00</h3>
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
                  <label class={`${styles.togglerwrapper} ${styles.style1}`}>
                    <input type="checkbox" />
                    <div class={styles.togglerslider}>
                      <div class={styles.togglerknob}></div>
                    </div>
                  </label>
                </div>
              </div>
              <label className="mt-3 mb-1">Title</label>
              <div className="input-group flex-nowrap">
                <select name="title" id="title" required>
                  <option value="Mr.">Mr.</option>
                  <option value="Mrs.">Mrs.</option>
                </select>
                <input
                  type="text"
                  className="form-control p-2"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>
              <div className="mt-3">
                <label for="fullname" className="mb-1">
                  Full Name
                </label>
                <input
                  type="text "
                  placeholder="Insert Your Full Name"
                  id="fullname"
                  className="w-100 p-2"
                />
              </div>
              <label className="mt-3 mb-1">Nationality</label>
              <div className="input-group flex-nowrap">
                <select name="national" id="national" required>
                  <option value="indonesia">Indonesia</option>
                  <option value="japan">Japan</option>
                </select>
                <input
                  type="text"
                  className="form-control p-2"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>
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
              <button className="btn btn-primary w-50 mt-4">
                <Link to={`/my-booking`} className="text-light">
                  Proceed to Payment
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightDetail;
