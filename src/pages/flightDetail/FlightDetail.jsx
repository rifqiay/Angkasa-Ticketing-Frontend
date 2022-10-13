import React, { useState, useEffect } from "react";
import styles from "./flightDetail.module.css";
import Banner from "../../assets/img1.png";
import Banner2 from "../../assets/banner.png";
// import Input from "../../components/base/input/index";
import WarningLogo from "../../assets/warning.png";
import LogoGaruda from "../../assets/garuda-indonesia.svg";
import Destination from "../../assets/dst.png";
import Check from "../../assets/check.png";
import Button from "../../components/button/index";
import Footer from "../../components/footer/Footer";

const FlightDetail = () => {
  const [add, setAdd] = useState(true);
  const onGroup = () => {
    if (add) {
      setAdd(true);
    } else {
      setAdd(false);
    }
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.bannerWrapper}>
          <img className={styles.banner} src={Banner} alt="banner" />
          <img src={Banner2} className={styles.banner2} alt="banner" />
        </div>
        <div className={`${styles.contentWrapper}`}>
          <div className={styles.contactDetail}>
            <p className={styles.contactText}>Contact Person Detail</p>
            <form>
              <div className={styles.contactBox}>
                <p className={styles.textFullname}>Full Name</p>
                <input
                  type="text"
                  className={styles.input1}
                  placeholder="Insert Full Name"
                  disabled
                />
                <p className={styles.emailText}>Email</p>
                <input
                  type="email"
                  className={styles.input2}
                  placeholder="Insert Your Email"
                  disabled
                />
                <p className={styles.phoneText}>Phone Number</p>
                <select className={styles.sBtn} name="phone" id="phoneNumber">
                  <option value="+62">+62</option>
                  <option value="+1">+1</option>
                  <option value="+2">+2</option>
                  <option value="+3">+3</option>
                  <option value="+4">+4</option>
                  <option value="+5">+5</option>
                </select>
                <input
                  type="number"
                  className={styles.input3}
                  placeholder="Insert Your Phone Number"
                  disabled
                />
                <div className={styles.line}></div>
                <div className={styles.warning}>
                  <img
                    src={WarningLogo}
                    alt="warning"
                    className={styles.warningLogo}
                  />
                  <p className={styles.warningText}>
                    Make sure the customer data is correct.
                  </p>
                </div>
              </div>
            </form>
          </div>
          <div className={styles.wrapperFlight}>
            <p className={styles.flightDetailText}>Flight Detail</p>
            <i className={styles.viewDetailText}>View Detail</i>
            <div className={styles.fDetailBox}>
              <div className={styles.airLinesLogo}>
                <img className={styles.imgLogo} src={LogoGaruda} alt="logo" />
                <p className={styles.airLinesName}>'Garuda Indonesia'</p>
              </div>
              <div className={styles.flightDestination}>
                <p className={styles.origin}>'Indonesia'</p>
                <img className={styles.destIcon} src={Destination} alt="" />
                <p className={styles.destina}>JAPAN </p>
                <p className={styles.dateFlight}>sunday, 15 agustus 2020</p>
                <div className={styles.ellipse}></div>
                <p className={styles.timeFlight}>departur date</p>
                <div>
                  <img className={styles.check} src={Check} alt="" />
                  <p className={styles.refund}>Refundable</p>
                  <img className={styles.check2} src={Check} alt="" />
                  <p className={styles.reschedule}>Can reschedule</p>
                </div>
                <div className={styles.line2}></div>
              </div>
              <div className={styles.payment}>
                <p className={styles.paymentText}>Total Payment</p>
                <p className={styles.price}>500</p>
              </div>
            </div>
          </div>
          <form>
            <div className={styles.passengerWrapper}>
              <p className={styles.passengerText}>Passenger Details</p>
              <div className={styles.passengerBox}>
                <div className={styles.confirm}>
                  <p className={styles.textConfirm}>Passenger: 1 Adult</p>
                  <p className={styles.textConfirm2}>Same as contact person</p>
                  <input type="checkbox" onClick={() => onGroup()} />
                </div>
                {add ? (
                  <>
                    <p p className={styles.titleText}>
                      Title
                    </p>
                    <select
                      className={styles.sBtn2}
                      name="title"
                      id="title"
                      required
                    >
                      <option value="Mr.">Mr.</option>
                      <option value="Mrs.">Mrs.</option>
                    </select>
                    <div className={styles.line3}></div>
                    <p className={styles.passengerName}>Full Name</p>
                    <input
                      name="fullname"
                      type="text"
                      className={styles.input4}
                      placeholder="Insert Your Name"
                      required
                    />
                    <p className={styles.nationalityText}>Nationality</p>
                    <select
                      className={styles.sBtn3}
                      name="nationality"
                      id="ntionality"
                      required
                    >
                      <option value="Indonesia">Indonesia</option>
                      <option value="Norwey">Norwey</option>
                      <option value="Iceland">Iceland</option>
                      <option value="Switzerland">Switzerland</option>
                      <option value="Sweden">Sweden</option>
                      <option value="Finland">Finland</option>
                    </select>
                    <div className={styles.line4}></div>
                    <p className={styles.passengerSeat}>Seat</p>
                    <input
                      type="number"
                      name="totalorder"
                      className={styles.input5}
                      placeholder="Insert How many seat"
                      required
                    />
                  </>
                ) : null}
              </div>
              <p className={styles.passengerText2}>Passenger Details</p>
              <div className={styles.passengerBox2}>
                <input type="checkbox" />
                <p className={styles.textInsurance}>Travel Insurance</p>
                <p className={styles.textPrice}>
                  $ 200<span>/pax</span>
                </p>
                <div className={styles.line5}></div>
                <p className={styles.textCompensation}>
                  Get travel compensation $ 10.000,00
                </p>
              </div>
              <Button
                className={styles.paymentBtn}
                type="submit"
                title="Proceed to Payment"
              />
            </div>
          </form>
        </div>
        <Footer className={styles.footer} />
      </div>
    </>
  );
};

export default FlightDetail;
