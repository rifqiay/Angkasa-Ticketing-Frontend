/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";
import styles from "./searchFlight.module.css";
import "./pagination.css";
import iconflight from "../../assets/iconflight.png";
import wifiIcon from "../../assets/wifi.svg";
import luggageIcon from "../../assets/luggage.svg";
import mealIcon from "../../assets/meal.svg";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import banner from "../../assets/img1.png";
import arrow from "../../assets/arrow.png";
import elips from "../../assets/elipse-putih.png";
import { useDispatch } from "react-redux";

const SearchFlight = () => {
  const dispatch = useDispatch();
  const [flights, setFlights] = useState([]);
  const [params, setParams] = useState({});
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  let [transitType, setTransitType] = useState("");
  const [facilities, setFacilities] = useState("");
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [airlines, setArilines] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [query, setQuery] = useSearchParams({});
  const [date, setDate] = useState("");
  const [ticket, setTicket] = useState("");
  const [ticketType, setTicketType] = useState("");
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const getFlight = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/api/v1/ticket`);
      setFlights(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const changeSearch = () => {
    const newParams = {
      origin,
      destination,
      date,
      ticketType,
    };

    setParams({
      ...newParams,
    });
    setQuery({
      ...newParams,
    });
  };

  const itemsPerPage = 3;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(flights.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(flights.length / itemsPerPage));
    getFlight();
  }, [query, flights]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % flights.length;
    setItemOffset(newOffset);
  };
  return (
    <>
      <div class="container-fluid">
        <img src={banner} class={`img-fluid ${styles.banner}`} alt="" />
      </div>
      <div class="container">
        <div class={`row ${styles.wrapper}`}>
          <div class="d-flex justify-content-between px-lg-0 px-4">
            <div class="w-50">
              <form class={`d-flex w-100 ${styles.wrapperfrom}`}>
                <div>
                  <label for="from" class={styles.label}>
                    From
                  </label>
                  <input
                    type="text"
                    class={`w-100 ${styles.input}`}
                    onChange={(e) => setOrigin(e.target.value)}
                  />
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
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
              </form>
              <div class="d-flex">
                <div>
                  <input
                    type="date"
                    name="departure"
                    class="bg-transparent border-0 text-light"
                    onChange={(e) => {
                      setDate(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <img src={elips} class="mx-1" alt="elips" />
                </div>
                <div>
                  <select
                    name="ticket"
                    id=""
                    class={`bg-transparent border-0 text-light ${styles.selectclass}`}
                    onChange={(e) => {
                      setTicket(e.target.value);
                    }}
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
                    name="class"
                    id=""
                    class="bg-transparent border-0 text-light selectclass"
                    onChange={(e) => {
                      setTicketType(e.target.value);
                    }}
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
              <button
                class="btn btn-primary bg-transparent"
                onClick={() => {
                  changeSearch(origin, destination, date, ticketType);
                }}
              >
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
                        <input
                          type="checkbox"
                          id="direct"
                          className="checkbox"
                        />
                      </div>
                      <div class="d-flex justify-content-between">
                        <label for="transit">Transit</label>
                        <input
                          type="checkbox"
                          id="transit"
                          className="checkbox"
                        />
                      </div>
                      <div class="d-flex justify-content-between">
                        <label for="transit2">Transit 2+</label>
                        <input
                          type="checkbox"
                          id="transit2"
                          className="checkbox"
                        />
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
                        <input
                          type="checkbox"
                          id="luggage"
                          className="checkbox"
                        />
                      </div>
                      <div class="d-flex justify-content-between">
                        <label for="meal">In-flight Meal</label>
                        <input type="checkbox" id="meal" className="checkbox" />
                      </div>
                      <div class="d-flex justify-content-between">
                        <label for="wifi">Wi-fi</label>
                        <input type="checkbox" id="wifi" className="checkbox" />
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
                        <input
                          type="checkbox"
                          id="dinihari"
                          className="checkbox"
                        />
                      </div>
                      <div class="d-flex justify-content-between">
                        <label for="pagi">06:00 - 12:00</label>
                        <input type="checkbox" id="pagi" className="checkbox" />
                      </div>
                      <div class="d-flex justify-content-between">
                        <label for="siang">12:00 - 18:00</label>
                        <input
                          type="checkbox"
                          id="siang"
                          className="checkbox"
                        />
                      </div>
                      <div class="d-flex justify-content-between">
                        <label for="malam">18:00 - 24:00</label>
                        <input
                          type="checkbox"
                          id="malam"
                          className="checkbox"
                        />
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
                        <input
                          type="checkbox"
                          id="diniharia"
                          className="checkbox"
                        />
                      </div>
                      <div class="d-flex justify-content-between">
                        <label for="pagia">06:00 - 12:00</label>
                        <input
                          type="checkbox"
                          id="pagia"
                          className="checkbox"
                        />
                      </div>
                      <div class="d-flex justify-content-between">
                        <label for="sianga">12:00 - 18:00</label>
                        <input
                          type="checkbox"
                          id="sianga"
                          className="checkbox"
                        />
                      </div>
                      <div class="d-flex justify-content-between">
                        <label for="malama">18:00 - 24:00</label>
                        <input
                          type="checkbox"
                          id="malama"
                          className="checkbox"
                        />
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
                        <input
                          type="checkbox"
                          id="garuda"
                          className="checkbox"
                        />
                      </div>
                      <div class="d-flex justify-content-between">
                        <label for="air">Air Asia</label>
                        <input type="checkbox" className="checkbox" />
                      </div>
                      <div class="d-flex justify-content-between">
                        <label for="lion">Lion Air</label>
                        <input type="checkbox" id="lion" className="checkbox" />
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
            {currentItems.map((item, index) => (
              <div class="card p-3 mt-3" key={index}>
                <div class="d-flex align-items-center">
                  <img
                    src={item.airline.thumbnail}
                    width="100px"
                    height="45px"
                    alt=""
                  />
                  <h5 class="ms-4 text-secondary">{item.airline.title}</h5>
                </div>
                <div class="d-flex justify-content-evenly align-items-center mt-3">
                  <div>
                    <h2>{item.place_from}</h2>
                    <span>12:33</span>
                  </div>
                  <div>
                    <img src={iconflight} alt="" />
                  </div>
                  <div>
                    <h2>{item.place_to}</h2>
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
                    <Link to={`/detail/${item.id}`}>
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
            ))}
            <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="<"
              renderOnZeroPageCount={null}
              containerClassName="pagination"
              pageLinkClassName="page-num"
              previousLinkClassName="page-nun"
              nextLinkClassName="page-num"
              activeLinkClassNan="active"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchFlight;
