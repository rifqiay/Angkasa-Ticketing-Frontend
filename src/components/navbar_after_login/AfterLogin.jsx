import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "../../components/buttonv2";
import Logo from "../logo/Logo";
import styles from "./navi.module.css";
import user from "../../assets/user.svg";
import mail from "../../assets/mail.svg";
import bell from "../../assets/bell.svg";
import switchIcon from "../../assets/switchBlue.svg";
import oneway from "../../assets/oneway.svg";
import round from "../../assets/roundtrip.svg";
import arrow from "../../assets/arrow.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import qs from "qs";
import { useSearchParams } from "react-router-dom";

const Navi = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [show, setShow] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [searchParams, setSearchParams] = useSearchParams();
  const paramsToObject = (entries) => {
    const result = {};

    for (const [key, value] of entries) {
      result[key] = value;
    }

    return result;
  };
  const entries = searchParams.entries();
  const objectParams = paramsToObject(entries);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="container ">
        <nav className="navbar navbar-expand-lg bg-light bg-transparent">
          <div className="container-fluid">
            <Link to="/home">
              <Logo />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className={`navbar-nav me-auto mb-2 mb-lg-0`}>
                <div className={`d-flex justify-content-end ${styles.resBtn}`}>
                  <Button
                    title="Find Ticket"
                    type="button"
                    className={styles["navi-btn"]}
                    onClick={handleShow}
                  />

                  <Modal
                    show={show}
                    onHide={handleClose}
                    className={styles["modal-wrap"]}
                  >
                    <Modal.Body className={styles.modal}>
                      <div className={styles["modal-header"]}>
                        <span>Hey,</span>
                        <p>Where you want to go?</p>
                      </div>

                      <div className={styles["modal-detail"]}>
                        <div>
                          <span>From</span>
                          <span>To</span>
                        </div>

                        <div>
                          <input
                            type="text"
                            className={styles.origin}
                            onChange={(e) => {
                              const searchQuery = {
                                ...qs.parse(objectParams.search),
                                place_from: {
                                  search: e.target.value,
                                },
                              };

                              setSearchParams({
                                ...objectParams,
                                search: qs.stringify(searchQuery),
                              });
                            }}
                            required
                          />
                          <img src={switchIcon} alt="" />
                          <input
                            type="text"
                            className={styles.dest}
                            onChange={(e) => {
                              const searchQuery = {
                                ...qs.parse(objectParams.search),
                                place_to: {
                                  search: e.target.value,
                                },
                              };

                              setSearchParams({
                                ...objectParams,
                                search: qs.stringify(searchQuery),
                              });
                            }}
                            required
                          />
                        </div>
                      </div>

                      <div className={styles["modal-trip"]}>
                        <button
                          onClick={(e) => {
                            const searchQuery = {
                              ...qs.parse(objectParams.search),
                              trip: {
                                equals: "ONEWAY",
                              },
                            };

                            setSearchParams({
                              ...objectParams,
                              search: qs.stringify(searchQuery),
                            });
                          }}
                        >
                          <div>
                            <img src={oneway} alt="" />
                            <span>One way</span>
                          </div>
                        </button>

                        <button
                          onClick={(e) => {
                            const searchQuery = {
                              ...qs.parse(objectParams.search),
                              trip: {
                                equals: "ROUNDTRIP",
                              },
                            };

                            setSearchParams({
                              ...objectParams,
                              search: qs.stringify(searchQuery),
                            });
                          }}
                        >
                          <div>
                            <img src={round} alt="" />
                            <span>Round trip</span>
                          </div>
                        </button>
                      </div>

                      <div className={styles["modal-ticket"]}>
                        <p>Departure</p>
                        <ReactDatePicker
                          selected={startDate}
                          onChange={(date) => {
                            const searchQuery = {
                              ...qs.parse(objectParams.search),
                              departure: {
                                gte: new Date(date),
                              },
                            };

                            setSearchParams({
                              ...objectParams,
                              search: qs.stringify(searchQuery),
                            });

                            setStartDate(new Date(date));
                          }}
                          timeInputLabel="Time:"
                          dateFormat="MM/dd/yyyy h:mm a"
                          showTimeInput
                        />

                        <p>How many person?</p>
                        <div>
                          <select
                            name="child"
                            id="child"
                            className={styles.ticket}
                            onChange={(e) => {
                              const searchQuery = {
                                ...qs.parse(objectParams.search),
                                stock: {
                                  gte: parseInt(e.target.value),
                                },
                              };

                              setSearchParams({
                                ...objectParams,
                                search: qs.stringify(searchQuery),
                              });
                            }}
                          >
                            <option>Child</option>
                            <option value="1">1 Child</option>
                            <option value="2">2 Child</option>
                            <option value="3">3 Child</option>
                            <option value="4">4 Child</option>
                          </select>

                          <select
                            name="adult"
                            id="adult"
                            className={styles.ticket}
                            onChange={(e) => {
                              const searchQuery = {
                                ...qs.parse(objectParams.search),
                                stock: {
                                  gte: parseInt(e.target.value),
                                },
                              };

                              setSearchParams({
                                ...objectParams,
                                search: qs.stringify(searchQuery),
                              });
                            }}
                          >
                            <option>Adult</option>
                            <option value="1">1 Adult</option>
                            <option value="2">2 Adult</option>
                            <option value="3">3 Adult</option>
                            <option value="4">4 Adult</option>
                          </select>
                        </div>
                      </div>

                      <div className={styles["modal-ticket-type"]}>
                        <p>Which class do you want?</p>
                        <div>
                          <div>
                            <input
                              id="economy"
                              value="economy"
                              type="radio"
                              name="class"
                              onClick={(e) => {
                                const searchQuery = {
                                  ...qs.parse(objectParams.search),
                                  type: {
                                    equals: "ECONOMY",
                                  },
                                };

                                setSearchParams({
                                  ...objectParams,
                                  search: qs.stringify(searchQuery),
                                });
                              }}
                            />
                            <label htmlFor="economy">Economy</label>
                          </div>

                          <div>
                            <input
                              id="business"
                              value="business"
                              type="radio"
                              name="class"
                              onClick={(e) => {
                                const searchQuery = {
                                  ...qs.parse(objectParams.search),
                                  type: {
                                    equals: "BUSINESS",
                                  },
                                };

                                setSearchParams({
                                  ...objectParams,
                                  search: qs.stringify(searchQuery),
                                });
                              }}
                            />
                            <label htmlFor="business">Business</label>
                          </div>

                          <div>
                            <input
                              id="firstClass"
                              value="firstClass"
                              type="radio"
                              name="class"
                              onClick={(e) => {
                                const searchQuery = {
                                  ...qs.parse(objectParams.search),
                                  type: {
                                    equals: "FIRSTCLASS",
                                  },
                                };

                                setSearchParams({
                                  ...objectParams,
                                  search: qs.stringify(searchQuery),
                                });
                              }}
                            />
                            <label htmlFor="firstClass">First Class</label>
                          </div>
                        </div>
                      </div>

                      <button
                        className={styles["modal-btn"]}
                        onClick={() => {
                          navigate(`/search${location.search}`);
                          handleClose();
                        }}
                      >
                        <span>SEARCH FLIGHT</span>
                        <img src={arrow} alt="" />
                      </button>
                    </Modal.Body>
                  </Modal>

                  <div>
                    <Link to="/my-Booking">
                      <Button
                        title="My Booking"
                        type="button"
                        className="btn btn-transparent"
                      />
                    </Link>
                  </div>
                </div>
              </div>

              <div className={`d-flex justify-content-end`}>
                <div className={styles["profile-section"]}>
                  <div>
                    <img src={mail} alt="" />
                  </div>

                  <div>
                    <img src={bell} alt="" />
                  </div>

                  <div>
                    <Link to={"/profile"}>
                      <img src={user} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navi;
