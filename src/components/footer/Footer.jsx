import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";

import styles from "./footer.module.css";

import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import youtube from "../../assets/youtube.svg";

import map from "../../assets/map-pin.svg";

const Footer = ({ className }) => {
  return (
    <div className={className}>
      <div className={styles.footer}>
        <div className={styles["footer-left"]}>
          <div>
            <Logo />
            <p>
              Find your flight and explore the world with us. We will take care
              of the rest
            </p>
          </div>

          <div>
            <span className={styles.cr}>©Ankasa. All Rights Reserved.</span>
          </div>
        </div>

        <div className={styles["footer-mid"]}>
          <p className={styles.subtitle}>Features</p>
          <div>
            <Link to="/ticket" className={styles.feature}>
              <p>Find Ticket</p>
            </Link>
            <Link to="/booking" className={styles.feature}>
              <p>My Booking</p>
            </Link>
            <Link to="/chat" className={styles.feature}>
              <p>Chat</p>
            </Link>
            <Link to="/notification" className={styles.feature}>
              <p>Notification</p>
            </Link>
          </div>
        </div>

        <div className={styles["footer-right"]}>
          <div>
            <p className={styles.subtitle}>Follow Us</p>
            <div className={styles.contacts}>
              <div>
                <img src={facebook} alt="" />
              </div>
              <div>
                <img src={twitter} alt="" />
              </div>
              <div>
                <img src={instagram} alt="" />
              </div>
              <div>
                <img src={youtube} alt="" />
              </div>
            </div>
          </div>

          <div className={styles.location}>
            <div className={styles["location-icon"]}>
              <img src={map} alt="" />
            </div>
            <span>Jakarta, Indonesia</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
