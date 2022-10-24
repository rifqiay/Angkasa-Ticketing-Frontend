import React, { Fragment, useState, useEffect, useRef } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { QRCodeSVG } from "qrcode.react";
import { getTicketByIdActionCreator } from "../../redux/action/creator/ticket"
import { useLocation } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useDidUpdate } from "@mantine/hooks";
import moment from "moment/moment";
import styles from './bookingDetail.module.css';
import style from './bookingDetailStyle';

const BookingDetail = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  
  const [id, setId] = useState('');
  const isMounted = useRef();
  const toastId = useRef(null);
  const getById = useSelector((state) => state.ticket.get, shallowEqual);
  const zoneName = moment().locale("id");
  /*const formatingDateTime = (value) => {
    const dateNow = moment().format("YYYY-MM-DD");
    const dateTimeNow = `${dateNow} ${value}`;
    return new Date(dateTimeNow);
  };*/

  useEffect(() => {
    if (!isMounted.current) {
      if (id) {
        dispatch(
          getTicketByIdActionCreator({
            id
          })
        );
      } else {
        dispatch(getTicketByIdActionCreator());
      }

      isMounted.current = true;
    } else {
      dispatch(
        getTicketByIdActionCreator({
          id
        })
      );
    }
  }, []);

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
    if (getById?.isFulfilled) {
      toast.dismiss();
    }
    if (getById?.isPending) {
      toast.dismiss();

      toastId.current = toast.loading("Loading...", toastOptions);
    }
  }, [getById]);
  return (
    <Fragment>
      <div className={styles.bookingdetail_background}>
        <div className="container justify-content-center ">
          <div className="row">
            <div className="col-lg-10 offset-md-1">
              <div className="card mt-5 mb-5">
                <div className="card-header bg-white">
                  <div className="row justify-content-between mt-2">
                    <div className="col-6 text-start">
                      <h1 className="card-title"><b>Booking Pass</b></h1>
                    </div>
                    <div className="col-6 text-end">
                      <BsThreeDotsVertical size={30} />
                    </div>
                  </div>
                </div>
                {(getById?.response || []).map((item, index) => {
                  const departure = moment(item.departure);

                  return (
                    <div className="container">
                      <div className="card-body mt-3">
                        <div className="row">
                          <div className="col-lg-8" style={style.border1}>
                            <div class="row justify-content-evenly">
                              <div class="col-3">
                                <img src={item.airline.thumbnail} width={130} height={107} />
                              </div>
                              <div class="col-3 my-3"><h1><b>{item.country_from}</b></h1></div>
                              <div class="col-3 my-3">
                                <img src="/images/Vector.svg" width={48} height={47} />
                              </div>
                              <div class="col-3 my-3"><h1><b>{item.country_to}</b></h1></div>
                            </div>
                            <div class="row justify-content-evenly mt-5">
                              <div class="col-4 text-start">
                                <p className={styles.grey}>Code</p>
                                <p className={styles.detail_color}>{item.origin}</p>
                              </div>
                              <div class="col-6 text-start">
                                <p className={styles.grey}>Class</p>
                                <p className={styles.detail_color}>{item.type}</p>
                              </div>
                            </div>
                            <div class="row justify-content-evenly mt-5">
                              <div class="col-4 text-start">
                                <p className={styles.grey}>Terminal</p>
                                <p className={styles.detail_color}>A</p>
                              </div>
                              <div class="col-6 text-start">
                                <p className={styles.grey}>Gate</p>
                                <p className={styles.detail_color}>221</p>
                              </div>
                            </div>
                            <div className="row mt-5">
                              <div class="col-12 text-start px-5">
                                <p className={styles.grey}>Departure</p>
                                <p className={styles.detail_color}>{moment(departure).locale(zoneName).format("LLLL")}</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 text-center justify-content-center" style={style.border2}>
                            <QRCodeSVG value="https://reactjs.org/" size={250} />,
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BookingDetail;
