/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import ReactPaginate from "react-paginate";
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
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useDidUpdate } from "@mantine/hooks";
import { toast } from "react-toastify";
import { getTicketsActionCreator } from "../../redux/action/creator/ticket";
import moment from "moment/moment";
import ReactDatePicker from "react-datepicker";
import qs from "qs";
import "react-datepicker/dist/react-datepicker.css";
import humanizeDuration from 'humanize-duration'

const SearchFlight = () => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date())
  const [searchParams, setSearchParams] = useSearchParams()
  const paramsToObject = (entries) => {
    const result = {}

    for (const [key, value] of entries) {
      result[key] = value;
    }

    return result
  }
  const entries = searchParams.entries()
  const objectParams = paramsToObject(entries)
  const isMounted = useRef()
  const toastId = useRef(null)
  const getAll = useSelector(state => state.ticket.get, shallowEqual)
  const zoneName = moment().locale('id')

  const itemsPerPage = 6;

  useEffect(() => {
    if (!isMounted.current) {
      if (objectParams) {
        dispatch(getTicketsActionCreator({
          ...objectParams,
          limit: itemsPerPage
        }))
      } else {
        dispatch(getTicketsActionCreator())
      }

      isMounted.current = true
    } else {
      dispatch(getTicketsActionCreator({
        ...objectParams,
        limit: itemsPerPage
      }))
    }
  }, [])

  useDidUpdate(() => {
    const toastOptions = {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    };
    if (getAll?.isFulfilled) {
      toast.dismiss();
    }
    if (getAll?.isPending) {
      toast.dismiss();

      toastId.current = toast.loading("Loading...", toastOptions);
    }

  }, [getAll])

  const handlePageClick = (event) => {
    dispatch(getTicketsActionCreator({
      ...objectParams,
      page: event.selected ?? 1,
      limit: itemsPerPage
    }))
  };

  return (
    <>
      <div  className="container-fluid">
        <img src={banner}  className={`img-fluid ${styles.banner}`} alt="" />
      </div>
      <div  className="container">
        <div  className={`row ${styles.wrapper}`}>
          <div  className="d-flex justify-content-between px-lg-0 px-4">
            <div  className="w-50">
              <form  className={`d-flex w-100 ${styles.wrapperfrom}`}>
                <div>
                  <label for="from"  className={styles.label}>
                    From
                  </label>
                  <input
                    type="text"
                     className={`w-100 ${styles.input}`}
                    list="listOfPlaceFrom"
                    aria-label="Place From"
                    onChange={(e) => {
                      const searchQuery = {
                        ...qs.parse(objectParams.search),
                        place_from: {
                          search: e.target.value
                        }
                      }

                      setSearchParams({
                        ...objectParams,
                        search: qs.stringify(searchQuery)
                      })
                    }}
                  />
                </div>
                <div  className="d-flex align-self-end">
                  <img src={arrow}  className="mb-2 mx-3" alt="" />
                </div>
                <div>
                  <div  className="d-flex justify-content-end">
                    <label for="from"  className={styles.label}>
                      To
                    </label>
                  </div>
                  <input
                    type="text"
                     className={`w-100 ${styles.input} ${styles.input2}`}
                    list="listOfPlaceTo"
                    aria-label="Place To"
                    onSelect={(e) => {
                      const searchQuery = {
                        ...qs.parse(objectParams.search),
                        place_to: {
                          search: e.target.value
                        }
                      }

                      setSearchParams({
                        ...objectParams,
                        search: qs.stringify(searchQuery)
                      })
                    }}
                  />
                </div>
              </form>
              <div  className="d-flex">
                <div>
                  <ReactDatePicker
                    selected={startDate}
                    onChange={(date) => {
                      const searchQuery = {
                        ...qs.parse(objectParams.search),
                        departure: {
                          gte: new Date(date)
                        }
                      }

                      setSearchParams({
                        ...objectParams,
                        search: qs.stringify(searchQuery)
                      })

                      setStartDate(new Date(date))
                    }}
                    timeInputLabel="Time:"
                    dateFormat="MM/dd/yyyy h:mm a"
                    showTimeInput
                  />
                </div>
                <div>
                  <img src={elips}  className="mx-1" alt="elips" />
                </div>
                <div>
                  <select
                    name="ticket"
                    id="passanger-id"
                     className={`bg-transparent border-0 text-light ${styles.selectclass}`}
                    onChange={(e) => {
                      const searchQuery = {
                        ...qs.parse(objectParams.search),
                        stock: {
                          gte: parseInt(e.target.value)
                        }
                      }

                      setSearchParams({
                        ...objectParams,
                        search: qs.stringify(searchQuery)
                      })
                    }}
                  >
                    <option  className="text-dark">Passenger</option>
                    <option value="1"  className="text-dark">
                      1 Passenger
                    </option>
                    <option value="2"  className="text-dark">
                      2 Passenger
                    </option>
                    <option value="3"  className="text-dark">
                      3 Passenger
                    </option>
                    <option value="4"  className="text-dark">
                      4 Passenger
                    </option>
                    <option value="5"  className="text-dark">
                      5 Passenger
                    </option>
                    <option value="6"  className="text-dark">
                      6 Passenger
                    </option>
                  </select>
                </div>
                <div>
                  <img src="elipse-putih.png"  className="mx-1" alt="" />
                </div>
                <div>
                  <select
                    name="class"
                    id=""
                     className="bg-transparent border-0 text-light selectclass"
                    onChange={(e) => {
                      const searchQuery = {
                        ...qs.parse(objectParams.search),
                        type: {
                          equals: e.target.value
                        }
                      }

                      setSearchParams({
                        ...objectParams,
                        search: qs.stringify(searchQuery)
                      })
                    }}
                  >
                    <option  className="text-dark">Select class</option>
                    <option value="ECONOMY"  className="text-dark">
                      Economy
                    </option>
                    <option value="BUSINESS"  className="text-dark">
                      Bussines
                    </option>
                    <option value="FIRSTCLASS"  className="text-dark">
                      First Class
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <button
                 className="btn btn-primary bg-transparent"
                onClick={() => dispatch(getTicketsActionCreator({
                  ...objectParams,
                  limit: itemsPerPage
                }))}
              >
                Change Search
              </button>
            </div>
          </div>
        </div>
        {/* filter ticket and ticket show */}
        <div  className="row">
          {/* filter ticket */}
          <div  className="col-lg-3">
            <div  className="d-flex justify-content-between">
              <h4>Filter</h4>
              <strong  className="text-primary">Reset</strong>
            </div>
            <div  className="card p-3 mt-3">
              <div  className="accordion accordion-flush" id="accordionFlushExample">
                {/* transit */}
                <div  className="accordion-item">
                  <h2  className="accordion-header" id="flush-headingOne">
                    <button
                       className="accordion-button collapsed"
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
                     className="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div  className="accordion-body">
                      <div  className="d-flex justify-content-between">
                        <label for="direct">Direct</label>
                        <input
                          type="checkbox"
                          id="direct"
                          className="checkbox"
                        />
                      </div>
                      <div  className="d-flex justify-content-between">
                        <label for="transit">Transit</label>
                        <input
                          type="checkbox"
                          id="transit"
                          className="checkbox"
                        />
                      </div>
                      <div  className="d-flex justify-content-between">
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
                <div  className="accordion-item">
                  <h2  className="accordion-header" id="flush-headingOne">
                    <button
                       className="accordion-button collapsed"
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
                     className="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div  className="accordion-body">
                      <div  className="d-flex justify-content-between">
                        <label for="lugage">Luggage</label>
                        <input
                          type="checkbox"
                          id="luggage"
                          className="checkbox"
                        />
                      </div>
                      <div  className="d-flex justify-content-between">
                        <label for="meal">In-flight Meal</label>
                        <input type="checkbox" id="meal" className="checkbox" />
                      </div>
                      <div  className="d-flex justify-content-between">
                        <label for="wifi">Wi-fi</label>
                        <input type="checkbox" id="wifi" className="checkbox" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* departure time */}
                <div  className="accordion-item">
                  <h2  className="accordion-header" id="flush-headingOne">
                    <button
                       className="accordion-button collapsed"
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
                     className="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div  className="accordion-body">
                      <div  className="d-flex justify-content-between">
                        <label for="dinihari">00:00 - 06:00</label>
                        <input
                          type="checkbox"
                          id="dinihari"
                          className="checkbox"
                        />
                      </div>
                      <div  className="d-flex justify-content-between">
                        <label for="pagi">06:00 - 12:00</label>
                        <input type="checkbox" id="pagi" className="checkbox" />
                      </div>
                      <div  className="d-flex justify-content-between">
                        <label for="siang">12:00 - 18:00</label>
                        <input
                          type="checkbox"
                          id="siang"
                          className="checkbox"
                        />
                      </div>
                      <div  className="d-flex justify-content-between">
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
                <div  className="accordion-item">
                  <h2  className="accordion-header" id="flush-headingOne">
                    <button
                       className="accordion-button collapsed"
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
                     className="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div  className="accordion-body">
                      <div  className="d-flex justify-content-between">
                        <label for="diniharia">00:00 - 06:00</label>
                        <input
                          type="checkbox"
                          id="diniharia"
                          className="checkbox"
                        />
                      </div>
                      <div  className="d-flex justify-content-between">
                        <label for="pagia">06:00 - 12:00</label>
                        <input
                          type="checkbox"
                          id="pagia"
                          className="checkbox"
                        />
                      </div>
                      <div  className="d-flex justify-content-between">
                        <label for="sianga">12:00 - 18:00</label>
                        <input
                          type="checkbox"
                          id="sianga"
                          className="checkbox"
                        />
                      </div>
                      <div  className="d-flex justify-content-between">
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
                <div  className="accordion-item">
                  <h2  className="accordion-header" id="flush-headingOne">
                    <button
                       className="accordion-button collapsed"
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
                     className="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div  className="accordion-body">
                      <div  className="d-flex justify-content-between">
                        <label for="garuda">Garuda Indonesia</label>
                        <input
                          type="checkbox"
                          id="garuda"
                          className="checkbox"
                        />
                      </div>
                      <div  className="d-flex justify-content-between">
                        <label for="air">Air Asia</label>
                        <input type="checkbox" className="checkbox" />
                      </div>
                      <div  className="d-flex justify-content-between">
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
          <div  className="col-lg-9 mt-4">
            <div  className="d-flex justify-content-between">
              <div  className="d-flex align-items-center">
                <h4>Select Ticket</h4>
                <span  className="ms-2 text-secondary">(6 Flight Found)</span>
              </div>
              <div  className="d-flex">
                <strong>Sort by</strong>
                <div>
                  <img src="transfer2.png"  className="ms-2" alt="" />
                </div>
              </div>
            </div>
            {/* Card */}
            {(getAll?.response || []).map((item, index) => {
              const departure = moment(item.departure)
              const arival = moment(item.arival)
              const diffInSecond = arival.diff(departure)

              return (
                <div  className="card p-3 mt-3" key={index}>
                  <div  className="d-flex align-items-center">
                    <img
                      src={item.airline.thumbnail}
                      width="100px"
                      height="45px"
                      alt=""
                    />
                    <h5  className="ms-4 text-secondary">{item.airline.title}</h5>
                  </div>
                  <div  className="d-flex justify-content-evenly align-items-center mt-3">
                    <div>
                      <h2>{item.place_from}</h2>
                      <span>{moment(departure).locale(zoneName).format('LT')}</span>
                    </div>
                    <div>
                      <img src={iconflight} alt="" />
                    </div>
                    <div>
                      <h2>{item.place_to}</h2>
                      <span>{moment(arival).locale(zoneName).format('LT')}</span>
                    </div>
                    <div  className={styles.r}>
                      <strong  className="text-secondary">{humanizeDuration(diffInSecond, {
                        delimiter: ' '
                      })}</strong>
                      <p  className="text-secondary text-center">({item.transit})</p>
                    </div>
                    <div  className="d-flex">
                      <div  className={styles.r}>
                        <img src={luggageIcon} alt="" />
                      </div>
                      <div  className={`mx-2 ${styles.r}`}>
                        <img src={mealIcon} alt="" />
                      </div>
                      <div  className={styles.r}>
                        <img src={wifiIcon} alt="" />
                      </div>
                    </div>
                    <div>
                      <strong  className={`text-primary ${styles.r}`}>
                        $ {item.price} <span  className="text-secondary">/pax</span>
                      </strong>
                    </div>
                    <div>
                      <Link to={`/detail/${item.id}`}>
                        <button  className="btn btn-primary">Select</button>
                      </Link>
                    </div>
                  </div>
                  <div  className={`accordion-item mt-3 ${styles.res}`}>
                    <h2  className="accordion-header" id="flush-headingOne">
                      <button
                         className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#view"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        <strong  className="text-primary">View Detail</strong>
                      </button>
                    </h2>
                    <div
                      id="view"
                       className="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div  className="accordion-body">
                        <div  className="d-flex justify-content-between">
                          <strong  className="text-secondary mt-2">
                            {" "}
                            3 hours 11 minutes{" "}
                          </strong>
                          <p  className="text-secondary text-center">(transit 1)</p>
                        </div>
                        <div  className="d-flex justify-content-between">
                          <div  className="d-flex">
                            <div>
                              <img src={luggageIcon} alt="" />
                            </div>
                            <div  className="mx-2">
                              <img src={mealIcon} alt="" />
                            </div>
                            <div>
                              <img src={wifiIcon} alt="" />
                            </div>
                          </div>
                        </div>
                        <div  className="d-flex justify-content-between">
                          <div  className="mt-2">
                            <strong  className="text-primary">
                              $ 214,00 <span  className="text-secondary">/pax</span>
                            </strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
            <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={getAll?.pagination?.total?.sheet || 1}
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
