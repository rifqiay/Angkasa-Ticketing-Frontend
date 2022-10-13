/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

import Button from "../../components/button";
import TicketCard from "../../components/ticketCard/TicketCard";
import Dropdown from "../../components/dropdown/Dropdown";
import Footer from "../../components/footer/Footer";

import styles from "./searchFlight.module.css";

import plane from "../../assets/logoWhite.svg";
import switchIcon from "../../assets/switch.svg";

import wifiIcon from "../../assets/wifi.svg";
import luggageIcon from "../../assets/luggage.svg";
import mealIcon from "../../assets/meal.svg";
import { useNavigate, useSearchParams } from "react-router-dom";
import styless from "../../components/ticketCard/ticketCard.module.css";
import { Link } from "react-router-dom";

import Garuda from "../../assets/garuda-indonesia.svg";

const SearchFlight = () => {
  const [flights, setFlights] = useState([]);
  const [pagination, setPaginaiton] = useState([]);
  const navigate = useNavigate();
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
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [date, setDate] = useState("");
  const [ticket, setTicket] = useState("");
  const [ticketType, setTicketType] = useState("");

  // const fetchFlight = async ({ origin, destination, date, ticketType, transitType, facilities, departure, arrival, airlines, sortBy, minPrice, maxPrice, page, limit }) => {
  //   try {
  //     const result = await axios.get(
  //       `https://avtur-ankasa-ticketing.herokuapp.com/v1/flights?${origin && `&origin=${origin}`}${destination && `&destination=${destination}`}${date && `&date=${date}`}${ticketType && `&type=${ticketType}`}${transitType && `&transit=${transitType}`}${facilities && `&fasilitas=${facilities}`}${departure && `&departure=${departure}`
  //       }${arrival && `&arrival=${arrival}`}${airlines && `&airline=${airlines}`}${minPrice && `&min=${minPrice}`}${maxPrice && `&max=${maxPrice}`}${sortBy && `&sortBy=${sortBy}`}${page && `&page=${page}`}${limit && `&limit=${limit}`}`
  //     );
  //     setFlights(result.data.data);
  //     setPaginaiton(result.data.pagination)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const changeSearch = (origin, destination, date, ticketType) => {
  //   const newParams = {
  //     origin,
  //     destination,
  //     date,
  //     ticketType,
  //     ...page
  //   }

  //   setParams({
  //     ...newParams
  //   })
  //   setQuery({
  //     ...newParams
  //   });
  // };

  // const onSelect = (id) => {
  //   navigate(`/flightDetail/${id}`)
  // }

  // const btn = [];
  // for (let i = 0; i < pagination.totalPage; i += 1) {
  //   btn.push(i);
  // }

  // const [page, setPage] = useState({
  //   limit: 3,
  //   currentPage: 1
  // })

  // // const {origin} = useParams()

  // // console.log('ini statenya')
  // // console.log(direct)
  // // console.log(origin)
  // // console.log(destination)
  // // console.log(date)
  // console.log("ini pagination");
  // console.log(page);
  // console.log("ini origin");
  // console.log(query.get("origin"));
  // console.log("ini destination");
  // console.log(query.get("destination"));
  // console.log("ini transitType");
  // console.log(transitType);
  // console.log("ini departure");
  // console.log(departure);
  // console.log("ini facilites");
  // console.log(facilities);
  // console.log(flights);

  // const onHandleReset = () => {
  //   let x = document.getElementsByClassName("checkbox");
  //   for (let item of x) {
  //     item.checked = false
  //   }
  //   console.log("ini checkbox");
  //   console.log(x);
  //   setPage({
  //     currentPage: 1,
  //     limit:3
  //   })
  //   setDate("")
  //   setTicketType("")
  //   setTransitType("");
  //   setFacilities("");
  //   setArrival("");
  //   setDeparture("");
  //   setArilines("");
  //   setSortBy("");
  //   setMinPrice("");
  //   setMaxPrice("");
  //   const defaultParams = {
  //     origin,
  //     destination,
  //     ...page
  //   };
  //   setParams({
  //     ...defaultParams,
  //   });
  //   setQuery({
  //     ...defaultParams,
  //   });
  // };

  // useEffect(() => {
  //   const newOrigin = query.get("origin");
  //   const newDestination = query.get("destination");
  //   const newParams = {
  //     origin: newOrigin,
  //     destination: newDestination,
  //     // ...page
  //   };
  //   setOrigin(newOrigin);
  //   setDestination(newDestination);
  //   setParams({
  //     ...params,
  //     ...newParams,
  //   });
  //   // setQuery({
  //   //   ...params,
  //   //   ...newParams
  //   // });
  //   const dataParam = {
  //     origin: newOrigin,
  //     destination: newDestination,
  //     date,
  //     ticketType,
  //     departure,
  //     arrival,
  //     transitType,
  //     facilities,
  //     airlines,
  //     minPrice,
  //     maxPrice,
  //     sortBy,
  //     page: page.currentPage,
  //     limit: page.limit
  //   };
  //   fetchFlight(dataParam);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [query]);
  return (
    <>
      <div>
        <div className={styles.flight}>
          <div>
            <div>
              <img src={plane} alt="" />
            </div>

            <div className={styles.detail}>
              <div>
                <span>From</span>
                <span>To</span>
              </div>

              <div>
                <input
                  name="origin"
                  type="text"
                  className={styles.origin}
                  onChange={(e) => setOrigin(e.target.value)}
                />
                <img src={switchIcon} alt="" />
                <input
                  type="text"
                  className={styles.dest}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>

              <div>
                <input
                  type="date"
                  name="departure"
                  placeholder="dd-mm-yyyy"
                  min="1997-01-01"
                  max="2030-12-31"
                  className={styles.date}
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                />
                <span> • </span>
                <select
                  name="ticket"
                  id="ticket"
                  className={styles.qty}
                  onChange={(e) => {
                    setTicket(e.target.value);
                  }}
                >
                  <option value="1">1 Passenger</option>
                  <option value="2">2 Passengers</option>
                  <option value="3">3 Passengers</option>
                  <option value="4">4 Passengers</option>
                </select>
                <span> • </span>
                <select
                  name="class"
                  id="class"
                  className={styles.class}
                  onChange={(e) => {
                    setTicketType(e.target.value);
                  }}
                >
                  <option value="Economy">Economy</option>
                  <option value="Business">Business</option>
                  <option value="First Class">First Class</option>
                </select>
              </div>
            </div>
          </div>

          <Button
            title="Change Search"
            type="button"
            className={styles["change-search"]}
          />
          {/* <Button
            title="Change Search"
            type="button"
            className={styles["change-search"]}
            onClick={() => {
              changeSearch(origin, destination, date, ticketType);
            }}
          /> */}
        </div>

        <div className={styles["search-result"]}>
          <div className={styles["filter-wrap"]}>
            <div className={styles.subtitle}>
              <p>Filter</p>
              <Button
                title="Reset"
                type="button"
                className={styles["reset-filter"]}
              />
              {/* <Button
                title="Reset"
                type="button"
                className={styles["reset-filter"]}
                onClick={() => {
                  onHandleReset();
                }}
              /> */}
            </div>

            <div className={styles.filters}>
              <p>Transit</p>
              <div className={styles.options}>
                <div>
                  <label>Direct</label>
                  <input
                    className="checkbox"
                    id="transit"
                    type="checkbox"
                    // checked={direct === "0" ? true : false}
                    onChange={(e) => {
                      let newDirect = "1";
                      let allTransit = "";
                      let newParams = {};
                      if (e.target.checked) {
                        allTransit = transitType
                          ? transitType + "." + newDirect
                          : transitType + newDirect;
                        setTransitType(allTransit);
                        newParams = {
                          transit: allTransit,
                        };
                        setParams({
                          ...params,
                          ...newParams,
                        });
                        setQuery({
                          ...params,
                          ...newParams,
                        });
                      } else {
                        if (transitType.includes(".")) {
                          console.log("apakah berjalan");
                          allTransit = transitType.split(".").filter((item) => {
                            return item !== "1";
                          });
                          allTransit =
                            allTransit.length > 1
                              ? allTransit.join(".")
                              : allTransit.join("");
                          setTransitType(allTransit);
                          newParams = {
                            transit: allTransit,
                          };
                          setParams({
                            ...params,
                            ...newParams,
                          });
                          setQuery({
                            ...params,
                            ...newParams,
                          });
                        } else {
                          setTransitType("");
                          delete params.transit;
                          setQuery({
                            ...params,
                          });
                        }
                      }
                    }}
                  />
                </div>
                <div>
                  <label>Transit</label>
                  <input
                    className="checkbox"
                    type="checkbox"
                    onChange={(e) => {
                      let newDirect = "2";
                      let allTransit = "";
                      let newParams = {};
                      if (e.target.checked) {
                        allTransit = transitType
                          ? transitType + "." + newDirect
                          : transitType + newDirect;
                        setTransitType(allTransit);
                        newParams = {
                          transit: allTransit,
                        };
                        setParams({
                          ...params,
                          ...newParams,
                        });
                        setQuery({
                          ...params,
                          ...newParams,
                        });
                      } else {
                        if (transitType.includes(".")) {
                          console.log("apakah berjalan");
                          allTransit = transitType.split(".").filter((item) => {
                            return item !== "2";
                          });
                          allTransit =
                            allTransit.length > 1
                              ? allTransit.join(".")
                              : allTransit.join("");
                          setTransitType(allTransit);
                          newParams = {
                            transit: allTransit,
                          };
                          setParams({
                            ...params,
                            ...newParams,
                          });
                          setQuery({
                            ...params,
                            ...newParams,
                          });
                        } else {
                          setTransitType("");
                          delete params.transit;
                          setQuery({
                            ...params,
                          });
                        }
                      }
                    }}
                  />
                </div>
                <div>
                  <label>Transit 2+</label>
                  <input
                    className="checkbox"
                    type="checkbox"
                    onChange={(e) => {
                      let newDirect = "3";
                      let allTransit = "";
                      let newParams = {};
                      if (e.target.checked) {
                        allTransit = transitType
                          ? transitType + "." + newDirect
                          : transitType + newDirect;
                        setTransitType(allTransit);
                        newParams = {
                          transit: allTransit,
                        };
                        setParams({
                          ...params,
                          ...newParams,
                        });
                        setQuery({
                          ...params,
                          ...newParams,
                        });
                      } else {
                        if (transitType.includes(".")) {
                          console.log("apakah berjalan");
                          allTransit = transitType.split(".").filter((item) => {
                            return item !== "3";
                          });
                          allTransit =
                            allTransit.length > 1
                              ? allTransit.join(".")
                              : allTransit.join("");
                          setTransitType(allTransit);
                          newParams = {
                            transit: allTransit,
                          };
                          setParams({
                            ...params,
                            ...newParams,
                          });
                          setQuery({
                            ...params,
                            ...newParams,
                          });
                        } else {
                          setTransitType("");
                          delete params.transit;
                          setQuery({
                            ...params,
                          });
                        }
                      }
                    }}
                  />
                </div>
              </div>

              <div className={styles.hl} />

              <p>Facilities</p>
              <div className={styles.options}>
                <div>
                  <label>Luggage</label>
                  <input
                    className="checkbox"
                    type="checkbox"
                    onChange={(e) => {
                      let luggage = "1";
                      let newFacilities = "";
                      let newParams = {};
                      if (e.target.checked) {
                        newFacilities = facilities
                          ? facilities + "." + luggage
                          : facilities + luggage;
                        setFacilities(newFacilities);
                        newParams = {
                          facilities: newFacilities,
                        };
                        setParams({
                          ...params,
                          ...newParams,
                        });
                        setQuery({
                          ...params,
                          ...newParams,
                        });
                      } else {
                        if (facilities.includes(".")) {
                          console.log("apakah berjalan");
                          newFacilities = facilities
                            .split(".")
                            .filter((item) => {
                              return item !== "1";
                            });
                          newFacilities =
                            newFacilities.length > 1
                              ? newFacilities.join(".")
                              : newFacilities.join("");
                          setFacilities(newFacilities);
                          newParams = {
                            facilities: newFacilities,
                          };
                          setParams({
                            ...params,
                            ...newParams,
                          });
                          setQuery({
                            ...params,
                            ...newParams,
                          });
                        } else {
                          setFacilities("");
                          delete params.facilities;
                          setQuery({
                            ...params,
                          });
                        }
                      }
                    }}
                  />
                </div>
                <div>
                  <label>In-Flight Meal</label>
                  <input
                    className="checkbox"
                    type="checkbox"
                    onChange={(e) => {
                      let meal = "2";
                      let newFacilities = "";
                      let newParams = {};
                      if (e.target.checked) {
                        newFacilities = facilities
                          ? facilities + "." + meal
                          : facilities + meal;
                        setFacilities(newFacilities);
                        newParams = {
                          facilities: newFacilities,
                        };
                        setParams({
                          ...params,
                          ...newParams,
                        });
                        setQuery({
                          ...params,
                          ...newParams,
                        });
                      } else {
                        if (facilities.includes(".")) {
                          console.log("apakah berjalan");
                          newFacilities = facilities
                            .split(".")
                            .filter((item) => {
                              return item !== meal;
                            });
                          newFacilities =
                            newFacilities.length > 1
                              ? newFacilities.join(".")
                              : newFacilities.join("");
                          setFacilities(newFacilities);
                          newParams = {
                            facilities: newFacilities,
                          };
                          setParams({
                            ...params,
                            ...newParams,
                          });
                          setQuery({
                            ...params,
                            ...newParams,
                          });
                        } else {
                          setFacilities("");
                          delete params.facilities;
                          setQuery({
                            ...params,
                          });
                        }
                      }
                    }}
                  />
                </div>
                <div>
                  <label>Wi-Fi</label>
                  <input
                    className="checkbox"
                    type="checkbox"
                    onChange={(e) => {
                      let wifi = "3";
                      let newFacilities = "";
                      let newParams = {};
                      if (e.target.checked) {
                        newFacilities = facilities
                          ? facilities + "." + wifi
                          : facilities + wifi;
                        setFacilities(newFacilities);
                        newParams = {
                          facilities: newFacilities,
                        };
                        setParams({
                          ...params,
                          ...newParams,
                        });
                        setQuery({
                          ...params,
                          ...newParams,
                        });
                      } else {
                        if (facilities.includes(".")) {
                          console.log("apakah berjalan");
                          newFacilities = facilities
                            .split(".")
                            .filter((item) => {
                              return item !== wifi;
                            });
                          newFacilities =
                            newFacilities.length > 1
                              ? newFacilities.join(".")
                              : newFacilities.join("");
                          setFacilities(newFacilities);
                          newParams = {
                            facilities: newFacilities,
                          };
                          setParams({
                            ...params,
                            ...newParams,
                          });
                          setQuery({
                            ...params,
                            ...newParams,
                          });
                        } else {
                          setFacilities("");
                          delete params.facilities;
                          setQuery({
                            ...params,
                          });
                        }
                      }
                    }}
                  />
                </div>
              </div>

              <div className={styles.hl} />

              <p>Departure Time</p>
              <div className={styles.options}>
                <div>
                  <label>00:00 - 06:00</label>
                  <input
                    className="checkbox"
                    type="checkbox"
                    onChange={(e) => {
                      let time = "dinihari";
                      let allDeparture = "";
                      let newParams = {};
                      if (e.target.checked) {
                        // setMorningDeparture(newDirect);
                        allDeparture = departure
                          ? departure + "." + time
                          : departure + time;
                        setDeparture(allDeparture);
                        newParams = {
                          departure: allDeparture,
                        };
                        setParams({
                          ...params,
                          ...newParams,
                        });
                        setQuery({
                          ...params,
                          ...newParams,
                        });
                        // if(transitType){
                        //   newParams = {
                        //     ...params,
                        //     departure: allDeparture,
                        //     transit: transitType
                        //   }
                        //   setParams(newParams)
                        //   setQuery(newParams);
                        // } else {
                        //   setQuery({
                        //     ...params,
                        //     departure: allDeparture,
                        //     // departure: departure,
                        //   });
                        // }
                        // setQuery({
                        //   ...{},
                        //   // transit: transitType,
                        //   departure: allDeparture,
                        // });
                      } else {
                        if (departure.includes(".")) {
                          console.log("apakah berjalan");
                          allDeparture = departure.split(".").filter((item) => {
                            return item !== "dinihari";
                          });
                          allDeparture =
                            allDeparture.length > 1
                              ? allDeparture.join(".")
                              : allDeparture.join("");
                          setDeparture(allDeparture);
                          newParams = {
                            departure: allDeparture,
                          };
                          setParams({
                            ...params,
                            ...newParams,
                          });
                          setQuery({
                            ...params,
                            ...newParams,
                          });
                          // if(transitType){
                          //   newParams = {
                          //     ...newParams,
                          //     departure: allDeparture,
                          //     transit: transitType
                          //   }
                          //   setParams(newParams)
                          //   setQuery(newParams);
                          // } else {
                          //   setQuery({
                          //     ...params,
                          //     departure: allDeparture,
                          //     // departure: departure,
                          //   });
                          // }
                          // setQuery({
                          //   // transit: transitType,
                          //   departure: allDeparture,
                          // });
                        } else {
                          // setDirect("");
                          setDeparture("");
                          delete params.departure;
                          setQuery({
                            ...params,
                            // ...newParams
                          });
                        }

                        // console.log(allTransit);
                      }
                    }}
                  />
                </div>
                <div>
                  <label>06:00 - 12:00</label>
                  <input
                    className="checkbox"
                    type="checkbox"
                    onChange={(e) => {
                      let time = "pagi";
                      let allDeparture = "";
                      let newParams = {};
                      if (e.target.checked) {
                        allDeparture = departure
                          ? departure + "." + time
                          : departure + time;
                        setDeparture(allDeparture);
                        newParams = {
                          departure: allDeparture,
                        };
                        setParams({
                          ...params,
                          ...newParams,
                        });
                        setQuery({
                          ...params,
                          ...newParams,
                        });
                      } else {
                        if (departure.includes(".")) {
                          console.log("apakah berjalan");
                          allDeparture = departure.split(".").filter((item) => {
                            return item !== "pagi";
                          });
                          allDeparture =
                            allDeparture.length > 1
                              ? allDeparture.join(".")
                              : allDeparture.join("");
                          setDeparture(allDeparture);
                          newParams = {
                            departure: allDeparture,
                          };
                          setParams({
                            ...params,
                            ...newParams,
                          });
                          setQuery({
                            ...params,
                            ...newParams,
                          });
                        } else {
                          setDeparture("");
                          delete params.departure;
                          setQuery({
                            ...params,
                            // ...newParams
                          });
                        }
                      }
                    }}
                  />
                </div>
                <div>
                  <label>12:00 - 18:00</label>
                  <input
                    className="checkbox"
                    type="checkbox"
                    onChange={(e) => {
                      let time = "sore";
                      let allDeparture = "";
                      let newParams = {};
                      if (e.target.checked) {
                        allDeparture = departure
                          ? departure + "." + time
                          : departure + time;
                        setDeparture(allDeparture);
                        newParams = {
                          departure: allDeparture,
                        };
                        setParams({
                          ...params,
                          ...newParams,
                        });
                        setQuery({
                          ...params,
                          ...newParams,
                        });
                      } else {
                        if (departure.includes(".")) {
                          console.log("apakah berjalan");
                          allDeparture = departure.split(".").filter((item) => {
                            return item !== "sore";
                          });
                          allDeparture =
                            allDeparture.length > 1
                              ? allDeparture.join(".")
                              : allDeparture.join("");
                          setDeparture(allDeparture);
                          newParams = {
                            departure: allDeparture,
                          };
                          setParams({
                            ...params,
                            ...newParams,
                          });
                          setQuery({
                            ...params,
                            ...newParams,
                          });
                        } else {
                          setDeparture("");
                          delete params.departure;
                          setQuery({
                            ...params,
                            // ...newParams
                          });
                        }
                      }
                    }}
                  />
                </div>
                <div>
                  <label>18:00 - 24:00</label>
                  <input
                    className="checkbox"
                    type="checkbox"
                    onChange={(e) => {
                      let time = "malam";
                      let allDeparture = "";
                      let newParams = {};
                      if (e.target.checked) {
                        allDeparture = departure
                          ? departure + "." + time
                          : departure + time;
                        setDeparture(allDeparture);
                        newParams = {
                          departure: allDeparture,
                        };
                        setParams({
                          ...params,
                          ...newParams,
                        });
                        setQuery({
                          ...params,
                          ...newParams,
                        });
                      } else {
                        if (departure.includes(".")) {
                          console.log("apakah berjalan");
                          allDeparture = departure.split(".").filter((item) => {
                            return item !== "malam";
                          });
                          allDeparture =
                            allDeparture.length > 1
                              ? allDeparture.join(".")
                              : allDeparture.join("");
                          setDeparture(allDeparture);
                          newParams = {
                            departure: allDeparture,
                          };
                          setParams({
                            ...params,
                            ...newParams,
                          });
                          setQuery({
                            ...params,
                            ...newParams,
                          });
                        } else {
                          setDeparture("");
                          delete params.departure;
                          setQuery({
                            ...params,
                            // ...newParams
                          });
                        }
                      }
                    }}
                  />
                </div>
              </div>

              <div className={styles.hl} />

              <p>Arrival Time</p>
              <div className={styles.options}>
                <div>
                  <label>00:00 - 06:00</label>
                  <input
                    className="checkbox"
                    type="checkbox"
                    onChange={(e) => {
                      let time = "dinihari";
                      let newArrival = "";
                      let newParams = {};
                      if (e.target.checked) {
                        newArrival = arrival
                          ? arrival + "." + time
                          : arrival + time;
                        setArrival(newArrival);
                        newParams = {
                          arrival: newArrival,
                        };
                        setParams({
                          ...params,
                          ...newParams,
                        });
                        setQuery({
                          ...params,
                          ...newParams,
                        });
                      } else {
                        if (arrival.includes(".")) {
                          console.log("apakah berjalan");
                          newArrival = arrival.split(".").filter((item) => {
                            return item !== time;
                          });
                          newArrival =
                            newArrival.length > 1
                              ? newArrival.join(".")
                              : newArrival.join("");
                          setArrival(newArrival);
                          newParams = {
                            departure: newArrival,
                          };
                          setParams({
                            ...params,
                            ...newParams,
                          });
                          setQuery({
                            ...params,
                            ...newParams,
                          });
                        } else {
                          setArrival("");
                          delete params.arrival;
                          setQuery({
                            ...params,
                            // ...newParams
                          });
                        }
                      }
                    }}
                  />
                </div>
                <div>
                  <label>06:00 - 12:00</label>
                  <input
                    className="checkbox"
                    type="checkbox"
                    onChange={(e) => {
                      let time = "pagi";
                      let newArrival = "";
                      let newParams = {};
                      if (e.target.checked) {
                        newArrival = arrival
                          ? arrival + "." + time
                          : arrival + time;
                        setArrival(newArrival);
                        newParams = {
                          arrival: newArrival,
                        };
                        setParams({
                          ...params,
                          ...newParams,
                        });
                        setQuery({
                          ...params,
                          ...newParams,
                        });
                      } else {
                        if (arrival.includes(".")) {
                          console.log("apakah berjalan");
                          newArrival = arrival.split(".").filter((item) => {
                            return item !== time;
                          });
                          newArrival =
                            newArrival.length > 1
                              ? newArrival.join(".")
                              : newArrival.join("");
                          setArrival(newArrival);
                          newParams = {
                            departure: newArrival,
                          };
                          setParams({
                            ...params,
                            ...newParams,
                          });
                          setQuery({
                            ...params,
                            ...newParams,
                          });
                        } else {
                          setArrival("");
                          delete params.arrival;
                          setQuery({
                            ...params,
                            // ...newParams
                          });
                        }
                      }
                    }}
                  />
                </div>
                <div>
                  <label>12:00 - 18:00</label>
                  <input
                    className="checkbox"
                    type="checkbox"
                    onChange={(e) => {
                      let time = "sore";
                      let newArrival = "";
                      let newParams = {};
                      if (e.target.checked) {
                        newArrival = arrival
                          ? arrival + "." + time
                          : arrival + time;
                        setArrival(newArrival);
                        newParams = {
                          arrival: newArrival,
                        };
                        setParams({
                          ...params,
                          ...newParams,
                        });
                        setQuery({
                          ...params,
                          ...newParams,
                        });
                      } else {
                        if (arrival.includes(".")) {
                          console.log("apakah berjalan");
                          newArrival = arrival.split(".").filter((item) => {
                            return item !== time;
                          });
                          newArrival =
                            newArrival.length > 1
                              ? newArrival.join(".")
                              : newArrival.join("");
                          setArrival(newArrival);
                          newParams = {
                            departure: newArrival,
                          };
                          setParams({
                            ...params,
                            ...newParams,
                          });
                          setQuery({
                            ...params,
                            ...newParams,
                          });
                        } else {
                          setArrival("");
                          delete params.arrival;
                          setQuery({
                            ...params,
                            // ...newParams
                          });
                        }
                      }
                    }}
                  />
                </div>
                <div>
                  <label>18:00 - 24:00</label>
                  <input
                    className="checkbox"
                    type="checkbox"
                    onChange={(e) => {
                      let time = "malam";
                      let newArrival = "";
                      let newParams = {};
                      if (e.target.checked) {
                        newArrival = arrival
                          ? arrival + "." + time
                          : arrival + time;
                        setArrival(newArrival);
                        newParams = {
                          arrival: newArrival,
                        };
                        setParams({
                          ...params,
                          ...newParams,
                        });
                        setQuery({
                          ...params,
                          ...newParams,
                        });
                      } else {
                        if (arrival.includes(".")) {
                          console.log("apakah berjalan");
                          newArrival = arrival.split(".").filter((item) => {
                            return item !== time;
                          });
                          newArrival =
                            newArrival.length > 1
                              ? newArrival.join(".")
                              : newArrival.join("");
                          setArrival(newArrival);
                          newParams = {
                            departure: newArrival,
                          };
                          setParams({
                            ...params,
                            ...newParams,
                          });
                          setQuery({
                            ...params,
                            ...newParams,
                          });
                        } else {
                          setArrival("");
                          delete params.arrival;
                          setQuery({
                            ...params,
                            // ...newParams
                          });
                        }
                      }
                    }}
                  />
                </div>
              </div>

              <div className={styles.hl} />
              <p>Airline</p>
              <div className={styles.options}>
                <div>
                  <label>Garuda Indonesia</label>
                  <input
                    className="checkbox"
                    type="checkbox"
                    onChange={(e) => {
                      let airline = "garudaindonesia";
                      let newAirlines = "";
                      let newParams = {};
                      if (e.target.checked) {
                        newAirlines = airlines
                          ? airlines + "|" + airline
                          : airlines + airline;
                        setArilines(newAirlines);
                        newParams = {
                          airlines: newAirlines,
                        };
                        setParams({
                          ...params,
                          ...newParams,
                        });
                        setQuery({
                          ...params,
                          ...newParams,
                        });
                      } else {
                        if (airlines.includes("|")) {
                          // console.log("apakah berjalan");
                          newAirlines = airlines.split("|").filter((item) => {
                            return item !== airline;
                          });
                          newAirlines =
                            newAirlines.length > 1
                              ? newAirlines.join("|")
                              : newAirlines.join("");
                          setArilines(newAirlines);
                          newParams = {
                            airlines: newAirlines,
                          };
                          setParams({
                            ...params,
                            ...newParams,
                          });
                          setQuery({
                            ...params,
                            ...newParams,
                          });
                        } else {
                          setArilines("");
                          delete params.airlines;
                          setQuery({
                            ...params,
                          });
                        }
                      }
                    }}
                  />
                </div>
                <div>
                  <label>Air Asia</label>
                  <input
                    className="checkbox"
                    type="checkbox"
                    onChange={(e) => {
                      let airline = "airasia";
                      let newAirlines = "";
                      let newParams = {};
                      if (e.target.checked) {
                        newAirlines = airlines
                          ? airlines + "|" + airline
                          : airlines + airline;
                        setArilines(newAirlines);
                        newParams = {
                          airlines: newAirlines,
                        };
                        setParams({
                          ...params,
                          ...newParams,
                        });
                        setQuery({
                          ...params,
                          ...newParams,
                        });
                      } else {
                        if (airlines.includes("|")) {
                          // console.log("apakah berjalan");
                          newAirlines = airlines.split("|").filter((item) => {
                            return item !== airline;
                          });
                          newAirlines =
                            newAirlines.length > 1
                              ? newAirlines.join("|")
                              : newAirlines.join("");
                          setArilines(newAirlines);
                          newParams = {
                            airlines: newAirlines,
                          };
                          setParams({
                            ...params,
                            ...newParams,
                          });
                          setQuery({
                            ...params,
                            ...newParams,
                          });
                        } else {
                          setArilines("");
                          delete params.airlines;
                          setQuery({
                            ...params,
                          });
                        }
                      }
                    }}
                  />
                </div>
                <div>
                  <label>Batik Air</label>
                  <input
                    className="checkbox"
                    type="checkbox"
                    onChange={(e) => {
                      let airline = "batikair";
                      let newAirlines = "";
                      let newParams = {};
                      if (e.target.checked) {
                        newAirlines = airlines
                          ? airlines + "|" + airline
                          : airlines + airline;
                        setArilines(newAirlines);
                        newParams = {
                          airlines: newAirlines,
                        };
                        setParams({
                          ...params,
                          ...newParams,
                        });
                        setQuery({
                          ...params,
                          ...newParams,
                        });
                      } else {
                        if (airlines.includes("|")) {
                          // console.log("apakah berjalan");
                          newAirlines = airlines.split("|").filter((item) => {
                            return item !== airline;
                          });
                          newAirlines =
                            newAirlines.length > 1
                              ? newAirlines.join("|")
                              : newAirlines.join("");
                          setArilines(newAirlines);
                          newParams = {
                            airlines: newAirlines,
                          };
                          setParams({
                            ...params,
                            ...newParams,
                          });
                          setQuery({
                            ...params,
                            ...newParams,
                          });
                        } else {
                          setArilines("");
                          delete params.airlines;
                          setQuery({
                            ...params,
                          });
                        }
                      }
                    }}
                  />
                </div>
              </div>

              <div className={styles.hl} />
              <p>Price Range</p>
              <div className={styles.options}>
                <div className={styles.pricing}>
                  <label>Min. price</label>
                  <input
                    value={minPrice}
                    onChange={(e) => {
                      let price = e.target.value;
                      setMinPrice(price);
                      setParams({
                        ...params,
                        minPrice: price,
                      });
                      setQuery({
                        ...params,
                        minPrice: price,
                      });
                    }}
                    type="number"
                    step="10000"
                    min="0"
                  />
                </div>
                <div className={styles.pricing}>
                  <label>Max. price</label>
                  <input
                    value={maxPrice}
                    onChange={(e) => {
                      let price = e.target.value;
                      setMaxPrice(price);
                      setParams({
                        ...params,
                        maxPrice: price,
                      });
                      setQuery({
                        ...params,
                        maxPrice: price,
                      });
                    }}
                    type="number"
                    step="10000"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={styles["ticket-wrap"]}>
            <div className={styles.subtitle}>
              <p>
                Select Ticket<span></span>
              </p>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Dropdown
                  setSortBy={setSortBy}
                  setQuery={setQuery}
                  setParams={setParams}
                  params={params}
                />
                <button className={styles.sort}>
                  {/* <img src={sort} alt='' /> */}
                </button>
              </div>
            </div>

            <div>
              <TicketCard
                airlineImg={Garuda}
                airline={"Garuda Indonesia"}
                origin={"IND"}
                arr={"15.21"}
                destination={"JPN"}
                dept={"12.33"}
                price={"500"}
                direct={"Non Direct"}
                transit={"Non Transit"}
                mtransit={"Non More Transit"}
                luggage={luggageIcon}
                meal={mealIcon}
                wifi={wifiIcon}
                // id={"1"}
                // onClick={onSelect}
                button={
                  <>
                    <Link to={"#"}>
                      <Button
                        title="Select"
                        type="button"
                        className={styless.select}
                      />
                    </Link>
                  </>
                }
              />
              {/* {flights.map((flight) => (
                <TicketCard
                  airlineImg={flight.airline_image}
                  airline={flight.airline_name}
                  origin={flight.origin}
                  arr={flight.arrival_time}
                  destination={flight.destination}
                  dept={flight.departure_time}
                  price={flight.price}
                  direct={flight.direct === 1 ? "Direct" : "Non Direct"}
                  transit={flight.transit === 1 ? "Transit" : "Non Transit"}
                  mtransit={
                    flight.more_transit === 1
                      ? "More Transit"
                      : "Non More Transit"
                  }
                  luggage={flight.lugage === 1 ? luggageIcon : ""}
                  meal={flight.meal === 1 ? mealIcon : ""}
                  wifi={flight.wifi === 1 ? wifiIcon : ""}
                  id={flight.id}
                  onClick={onSelect}
                  button={
                    <>
                      <Link to={`/flightDetail/${flight.id}`}>
                        <Button
                          title="Select"
                          type="button"
                          className={styless.select}
                        />
                      </Link>
                    </>
                  }
                />
              ))} */}
            </div>
            {/* <div>
              <nav className="mt-4">
                <ul className="pagination">
                  <li
                    className={`page-item ${
                      page.currentPage <= 1 && "disabled"
                    }`}
                  >
                    <button
                      className="page-link"
                      type="button"
                      onClick={() => {
                        const newPage = {
                          currentPage: page.currentPage - 1,
                          limit: page.limit,
                        };
                        setPage((current) => ({
                          ...current,
                          currentPage: newPage.currentPage,
                        }));

                        setParams({
                          ...params,
                          ...newPage,
                        });
                        setQuery({
                          ...params,
                          ...newPage,
                        });
                      }}
                    >
                      Previous
                    </button>
                  </li>
                  {btn.map((item, index) => (
                    <li
                      className={`page-item ${
                        index + 1 === page.currentPage && "active"
                      }`}
                      key={Math.random(100)}
                    >
                      <button
                        onClick={() => index + 1}
                        type="button"
                        className="page-link"
                      >
                        {index + 1}
                      </button>
                    </li>
                  ))}
                  <li
                    className={`page-item ${
                      page.currentPage === pagination.totalPage && "disabled"
                    }`}
                  >
                    <button
                      className="page-link"
                      type="button"
                      onClick={() => {
                        const newPage = {
                          currentPage: page.currentPage + 1,
                          limit: page.limit,
                        };
                        setPage((current) => ({
                          ...current,
                          currentPage: newPage.currentPage,
                        }));

                        setParams({
                          ...params,
                          ...newPage,
                        });
                        setQuery({
                          ...params,
                          ...newPage,
                        });
                      }}
                    >
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
            </div> */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SearchFlight;
