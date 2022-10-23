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
import { Link } from "react-router-dom";

const Navi = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="container ">
        <nav class="navbar navbar-expand-lg bg-light bg-transparent">
          <div class="container-fluid">
            <Link to="/home">
              <Logo />
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
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
                            name="origin"
                            type="text"
                            className={styles.origin}
                            // onChange={(e) => setOrigin(e.target.value)}
                            required
                          />
                          <img src={switchIcon} alt="" />
                          <input
                            type="text"
                            className={styles.dest}
                            // onChange={(e) => setDestination(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className={styles["modal-trip"]}>
                        <button>
                          <div>
                            <img src={oneway} alt="" />
                            <span>One way</span>
                          </div>
                        </button>

                        <button>
                          <div>
                            <img src={round} alt="" />
                            <span>Round trip</span>
                          </div>
                        </button>
                      </div>

                      <div className={styles["modal-ticket"]}>
                        <p>Departure</p>
                        <input
                          type="date"
                          name="departure"
                          placeholder="dd-mm-yyyy"
                          min="1997-01-01"
                          max="2030-12-31"
                          className={styles.date}
                          // onChange={(e) => {
                          //   setDate(e.target.value);
                          // }}
                        />

                        <p>How many person?</p>
                        <div>
                          <select
                            name="child"
                            id="child"
                            className={styles.ticket}
                            // onChange={(e) => {
                            //   setChild(e.target.value);
                            // }}
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
                            // onChange={(e) => {
                            //   setAdult(e.target.value);
                            // }}
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
                              // onClick={(e) => setTicketType(e.target.value)}
                            />
                            <label htmlFor="economy">Economy</label>
                          </div>

                          <div>
                            <input
                              id="business"
                              value="business"
                              type="radio"
                              name="class"
                              // onClick={(e) => setTicketType(e.target.value)}
                            />
                            <label htmlFor="business">Business</label>
                          </div>

                          <div>
                            <input
                              id="firstClass"
                              value="firstClass"
                              type="radio"
                              name="class"
                              // onClick={(e) => setTicketType(e.target.value)}
                            />
                            <label htmlFor="firstClass">First Class</label>
                          </div>
                        </div>
                      </div>

                      <button
                        className={styles["modal-btn"]}
                        // onClick={() => handleSearchFlight(origin, destination)}
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
