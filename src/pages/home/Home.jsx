import React from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.css";
import home1 from "../../assets/home1.svg";
import home2 from "../../assets/home2.svg";
import home3 from "../../assets/home3.svg";
import tokyo from "../../assets/tokyo.svg";
import Carousell from "../../components/carousell/Carousell";

const Home = () => {
  return (
    <>
      <div  className="row">
        <div  className="col-lg-6">
          <div  className="d-flex justify-content-center align-items-center h-100">
            <div  className={styles.res}>
              <h1  className={styles.title}>
                Find your{" "}
                <span  className={`text-primary ms-2 ${styles.flg}`}> Flight</span>
              </h1>
              <p  className="text-secondary mt-3 h5">
                and explore the world with us
              </p>
            </div>
          </div>
        </div>
        <div  className="col-lg-4 offset-lg-2">
          <img src={home1}  className={`img-fluid ${styles.rimg}`} alt="" />
        </div>
      </div>
      <div  className={`row ${styles.imgleft}`}>
        <div  className="col-lg-6">
          <img src={home2}  className={`img-fluid ${styles.limg}`} alt="" />
        </div>
        <div  className={`col-lg-4 offset-lg-2 ${styles.rimg2}`}>
          <div  className="h-100 d-flex align-items-end">
            <div  className="w-50">
              <img src={home3}  className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h6 className="text-primary">TRENDING</h6>
        <h3>Trending Destination</h3>
        <div className="row">
          <div className="col-lg-3 col-md-3 col-6">
            <img src={tokyo} className="img-fluid mt-2" alt="" />
          </div>
          <div className="col-lg-3 col-md-3 col-6">
            <img src={tokyo} className="img-fluid mt-2" alt="" />
          </div>
          <div className="col-lg-3 col-md-3 col-6">
            <img src={tokyo} className="img-fluid mt-2" alt="" />
          </div>
          <div className="col-lg-3 col-md-3 col-6">
            <img src={tokyo} className="img-fluid mt-2" alt="" />
          </div>
        </div>
      </div>

      <div className="container bg-primary py-5 rounded-5 mt-5">
        <div className="ms-lg-0 ms-5">
          <Carousell />
        </div>
      </div>
    </>
  );
};

export default Home;
