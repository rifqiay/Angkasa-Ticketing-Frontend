import React from "react";

import styles from "./logo.module.css";

import logo from "../../assets/logoBlue.svg";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="" />
      <p>Ankasa</p>
    </div>
  );
};

export default Logo;
