import React from "react";

import styles from "./countryCard.module.css";

import more from "../../assets/more.svg";

const CountryCard = ({ src, alt, cityName, countryName }) => {
  return (
    <div className={styles.card}>
      <div className={styles.thumbnail}>
        <img src={src} alt={alt} styles={{ width: "80%" }} />
      </div>
      <span>{cityName},</span>
      <div className={styles.detail}>
        <span>{countryName}</span>
        <img src={more} alt="" />
      </div>
    </div>
  );
};

export default CountryCard;
