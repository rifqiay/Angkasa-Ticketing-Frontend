import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "../../components/buttonv2";
import Logo from "../logo/Logo";
import styles from "./navi.module.css";
import switchIcon from "../../assets/switchBlue.svg";
import oneway from "../../assets/oneway.svg";
import round from "../../assets/roundtrip.svg";
import arrow from "../../assets/arrow.svg";
import { Link } from "react-router-dom";

const BeforeLogin = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className={styles.navi}>
        <Logo />

        <div className={styles["btn-group"]}>
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
                  <span>Medan</span>
                  <img src={switchIcon} alt="" />
                  <span>Tokyo</span>
                </div>

                <div>
                  <span>Indonesia</span>
                  <span>Japan</span>
                </div>
              </div>

              <div className={styles["modal-trip"]}>
                <button name="trip">
                  <div>
                    <img src={oneway} alt="" />
                    <span>One way</span>
                  </div>
                </button>

                <button name="trip">
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
                />

                <p>How many person?</p>
                <div>
                  <select name="child" id="child" className={styles.ticket}>
                    <option value="1">1 Child</option>
                    <option value="2">2 Child</option>
                    <option value="3">3 Child</option>
                    <option value="4">4 Child</option>
                  </select>

                  <select name="adult" id="adult" className={styles.ticket}>
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
                  <input id="economy" type="radio" name="class" />
                  <label htmlFor="economy">Economy</label>

                  <input id="business" type="radio" name="class" />
                  <label htmlFor="business">Business</label>

                  <input id="firstClass" type="radio" name="class" />
                  <label htmlFor="firstClass">First Class</label>
                </div>
              </div>

              <button className={styles["modal-btn"]}>
                <span>SEARCH FLIGHT</span>
                <img src={arrow} alt="" />
              </button>
            </Modal.Body>
          </Modal>

          <Link to="/myBooking">
            <Button
              title="My Booking"
              type="button"
              className={styles["navi-btn"]}
              // onClick={handleLogin}
            />
          </Link>
        </div>

        <Link to="/login">
          <Button
            title="Sign Up"
            type="button"
            className={styles["sign-btn"]}
            // onClick={handleLogin}
          />
        </Link>
      </div>
    </div>
  );
};

export default BeforeLogin;
