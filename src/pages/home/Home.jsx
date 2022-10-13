import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import CountryCard from "../../components/countryCard/CountryCard";

import styles from "./home.module.css";

import home1 from "../../assets/home1.svg";
import home2 from "../../assets/home2.svg";
import home3 from "../../assets/home3.svg";
import japan from "../../assets/japan.svg";
import destination from "../../assets/destination.svg";

const Home = () => {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles["header-left"]}>
          <div className={styles.catchphrase}>
            <p>
              Find your <span>Flight</span>
            </p>
            <p>and explore the world with us</p>
          </div>
          <div style={{ width: "830px" }}>
            <img src={home2} alt="" style={{ width: "100%" }} />
          </div>
        </div>

        <div className={styles["header-right"]}>
          <div style={{ width: "400px" }}>
            <img src={home1} alt="" style={{ width: "100%" }} />
          </div>

          <div style={{ width: "160px", margin: "80px 0 0 70px" }}>
            <img src={home3} alt="" style={{ width: "100%" }} />
          </div>
        </div>
      </div>

      <div className={styles.trending}>
        <span>T R E N D I N G</span>
        <div className={styles.title}>
          <span>Trending destinations</span>
          <Link to="/">
            <span>View all</span>
          </Link>
        </div>
        <div className={styles.cards}>
          <CountryCard
            src={japan}
            alt=""
            cityName="Tokyo"
            countryName="Japan"
          />
          <CountryCard
            src={japan}
            alt=""
            cityName="Tokyo"
            countryName="Japan"
          />
          <CountryCard
            src={japan}
            alt=""
            cityName="Tokyo"
            countryName="Japan"
          />
          <CountryCard
            src={japan}
            alt=""
            cityName="Tokyo"
            countryName="Japan"
          />
          <CountryCard
            src={japan}
            alt=""
            cityName="Tokyo"
            countryName="Japan"
          />
        </div>
      </div>

      <div className={styles["top-destination"]}>
        <div className={styles.topten}>
          <span>T O P 5</span>
          <p>Top 5 destinations</p>
        </div>
        <div className={styles["topten-img"]}>
          <div>
            <img src={destination} alt="" />
            <span>P a r i s</span>
          </div>
          <div>
            <img src={destination} alt="" />
            <span>P a r i s</span>
          </div>
          <div>
            <img src={destination} alt="" />
            <span>P a r i s</span>
          </div>
          <div>
            <img src={destination} alt="" />
            <span>P a r i s</span>
          </div>
          <div>
            <img src={destination} alt="" />
            <span>P a r i s</span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
