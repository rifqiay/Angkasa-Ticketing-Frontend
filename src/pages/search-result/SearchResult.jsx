/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import styles from "./searchFlight.module.css";
import iconflight from "../../assets/iconflight.png";
import wifiIcon from "../../assets/wifi.svg";
import luggageIcon from "../../assets/luggage.svg";
import mealIcon from "../../assets/meal.svg";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Garuda from "../../assets/garuda-indonesia.svg";
import banner from "../../assets/img1.png";
import arrow from "../../assets/arrow.png";
import elips from "../../assets/elipse-putih.png";

const SearchFlight = () => {
  return (
    <>
      <div class="container-fluid">
        <img src={banner} class={`img-fluid ${styles.banner}`} alt="" />
      </div>
      <div class="container">
        <div class={`row ${styles.wrapper}`}>
          <div class="d-flex justify-content-between">
            <div class="w-50">
              <form class={`d-flex w-100 ${styles.wrapperfrom}`}>
                <div>
                  <label for="from" class={styles.label}>
                    From
                  </label>
                  <input type="text" class={`w-100 ${styles.input}`} />
                </div>
                <div class="d-flex align-self-end">
                  <img src={arrow} class="mb-2 mx-3" alt="" />
                </div>
                <div>
                  <div class="d-flex justify-content-end">
                    <label for="from" class={styles.label}>
                      To
                    </label>
                  </div>
                  <input
                    type="text"
                    class={`w-100 ${styles.input} ${styles.input2}`}
                  />
                </div>
              </form>
              <div class="d-flex">
                <div>
                  <input
                    type="date"
                    class="bg-transparent border-0 text-light"
                  />
                </div>
                <div>
                  <img src={elips} class="mx-1" alt="elips" />
                </div>
                <div>
                  <select
                    name=""
                    id=""
                    class={`bg-transparent border-0 text-light ${styles.selectclass}`}
                  >
                    <option class="text-dark">Passenger</option>
                    <option value="1" class="text-dark">
                      1 Passenger
                    </option>
                    <option value="2" class="text-dark">
                      2 Passenger
                    </option>
                    <option value="3" class="text-dark">
                      3 Passenger
                    </option>
                    <option value="4" class="text-dark">
                      4 Passenger
                    </option>
                    <option value="5" class="text-dark">
                      5 Passenger
                    </option>
                    <option value="6" class="text-dark">
                      6 Passenger
                    </option>
                  </select>
                </div>
                <div>
                  <img src="elipse-putih.png" class="mx-1" alt="" />
                </div>
                <div>
                  <select
                    name=""
                    id=""
                    class="bg-transparent border-0 text-light selectclass"
                  >
                    <option class="text-dark">Select class</option>
                    <option value="economy" class="text-dark">
                      Economy
                    </option>
                    <option value="bussines" class="text-dark">
                      Bussines
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <button class="btn btn-primary bg-transparent">
                Change Search
              </button>
            </div>
          </div>
        </div>
        {/* filter ticket and ticket show */}
        <div class="row">
          {/* filter ticket */}
          <div class="col-lg-3">
            <div class="d-flex justify-content-between">
              <h4>Filter</h4>
              <strong class="text-primary">Reset</strong>
            </div>
            <div class="card p-3 mt-3">
              <div class="accordion accordion-flush" id="accordionFlushExample">
                {/* transit */}
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#transit1"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      <strong>Transit</strong>
                    </button>
                  </h2>
                  <div
                    id="transit1"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <div class="d-flex justify-content-between">
                        <label for="direct">Direct</label>
                        <input type="checkbox" id="direct" />
                      </div>
                      <div class="d-flex justify-content-between">
                        <label for="transit">Transit</label>
                        <input type="checkbox" id="transit" />
                      </div>
                      <div class="d-flex justify-content-between">
                        <label for="transit2">Transit 2+</label>
                        <input type="checkbox" id="transit2" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* facilities */}
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#facilities"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      <strong>Facilities</strong>
                    </button>
                  </h2>
                  <div
                    id="facilities"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <div class="d-flex justify-content-between">
                        <label for="lugage">Luggage</label>
                        <input type="checkbox" id="luggage" />
                      </div>
                      <div class="d-flex justify-content-between">
                        <label for="meal">In-flight Meal</label>
                        <input type="checkbox" id="meal" />
                      </div>
                      <div class="d-flex justify-content-between">
                        <label for="wifi">Wi-fi</label>
                        <input type="checkbox" id="wifi" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* departure time */}
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#departure"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      <strong>Departure Time</strong>
                    </button>
                  </h2>
                  <div
                    id="departure"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <div class="d-flex justify-content-between">
                        <label for="dinihari">00:00 - 06:00</label>
                        <input type="checkbox" id="dinihari" />
                      </div>
                      <div class="d-flex justify-content-between">
                        <label for="pagi">06:00 - 12:00</label>
                        <input type="checkbox" id="pagi" />
                      </div>
                      <div class="d-flex justify-content-between">
                        <label for="siang">12:00 - 18:00</label>
                        <input type="checkbox" id="siang" />
                      </div>
                      <div class="d-flex justify-content-between">
                        <label for="malam">18:00 - 24:00</label>
                        <input type="checkbox" id="malam" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* time arrived */}
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#arrived"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      <strong>Time Arrived</strong>
                    </button>
                  </h2>
                  <div
                    id="arrived"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <div class="d-flex justify-content-between">
                        <label for="diniharia">00:00 - 06:00</label>
                        <input type="checkbox" id="diniharia" />
                      </div>
                      <div class="d-flex justify-content-between">
                        <label for="pagia">06:00 - 12:00</label>
                        <input type="checkbox" id="pagia" />
                      </div>
                      <div class="d-flex justify-content-between">
                        <label for="sianga">12:00 - 18:00</label>
                        <input type="checkbox" id="sianga" />
                      </div>
                      <div class="d-flex justify-content-between">
                        <label for="malama">18:00 - 24:00</label>
                        <input type="checkbox" id="malama" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* airline */}
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#ariliness"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      <strong>Airlines</strong>
                    </button>
                  </h2>
                  <div
                    id="ariliness"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <div class="d-flex justify-content-between">
                        <label for="garuda">Garuda Indonesia</label>
                        <input type="checkbox" id="garuda" />
                      </div>
                      <div class="d-flex justify-content-between">
                        <label for="air">Air Asia</label>
                        <input type="checkbox" />
                      </div>
                      <div class="d-flex justify-content-between">
                        <label for="lion">Lion Air</label>
                        <input type="checkbox" id="lion" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* show ticket */}
          <div class="col-lg-9 mt-4">
            <div class="d-flex justify-content-between">
              <div class="d-flex align-items-center">
                <h4>Select Ticket</h4>
                <span class="ms-2 text-secondary">(6 Flight Found)</span>
              </div>
              <div class="d-flex">
                <strong>Sort by</strong>
                <div>
                  <img src="transfer2.png" class="ms-2" alt="" />
                </div>
              </div>
            </div>
            {/* Card */}
            <div class="card p-3 mt-3">
              <div class="d-flex align-items-center">
                <img src={Garuda} alt="" />
                <h5 class="ms-4 text-secondary">Garuda Indonesia</h5>
              </div>
              <div class="d-flex justify-content-evenly align-items-center mt-3">
                <div>
                  <h2>IND</h2>
                  <span>12:33</span>
                </div>
                <div>
                  <img src={iconflight} alt="" />
                </div>
                <div>
                  <h2>JPN</h2>
                  <span>15:21</span>
                </div>
                <div class={styles.r}>
                  <strong class="text-secondary"> 3 hours 11 minutes </strong>
                  <p class="text-secondary text-center">(transit 1)</p>
                </div>
                <div class="d-flex">
                  <div class={styles.r}>
                    <img src={luggageIcon} alt="" />
                  </div>
                  <div class={`mx-2 ${styles.r}`}>
                    <img src={mealIcon} alt="" />
                  </div>
                  <div class={styles.r}>
                    <img src={wifiIcon} alt="" />
                  </div>
                </div>
                <div>
                  <strong class={`text-primary ${styles.r}`}>
                    $ 214,00 <span class="text-secondary">/pax</span>
                  </strong>
                </div>
                <div>
                  <Link to={`/detail/1`}>
                    <button class="btn btn-primary">Select</button>
                  </Link>
                </div>
              </div>
              <div class={`accordion-item mt-3 ${styles.res}`}>
                <h2 class="accordion-header" id="flush-headingOne">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#view"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    <strong class="text-primary">View Detail</strong>
                  </button>
                </h2>
                <div
                  id="view"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <div class="d-flex justify-content-between">
                      <strong class="text-secondary mt-2">
                        {" "}
                        3 hours 11 minutes{" "}
                      </strong>
                      <p class="text-secondary text-center">(transit 1)</p>
                    </div>
                    <div class="d-flex justify-content-between">
                      <div class="d-flex">
                        <div>
                          <img src={luggageIcon} alt="" />
                        </div>
                        <div class="mx-2">
                          <img src={mealIcon} alt="" />
                        </div>
                        <div>
                          <img src={wifiIcon} alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="d-flex justify-content-between">
                      <div class="mt-2">
                        <strong class="text-primary">
                          $ 214,00 <span class="text-secondary">/pax</span>
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchFlight;
