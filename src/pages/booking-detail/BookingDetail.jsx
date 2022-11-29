import React, { Fragment, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBookingByIdActionCreator } from "../../redux/action/creator/booking";
import moment from "moment";
import iconflight from "../../assets/iconflight.png";

const BookingDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const getById = useSelector(state => state.booking.getById)
  const zoneName = moment().locale("id");

  useEffect(() => {
    dispatch(getBookingByIdActionCreator(id));
  }, []);

  return (
    <Fragment>
      <div className="BookingDetail-Page bg-primary ">
        <div className="container justify-content-center ">
          <div className="row">
            <div className="col-lg-10 offset-md-1">
              <div className="card mt-5 mb-5">
                <div className="card-header bg-white">
                  <div className="row justify-content-between mt-2">
                    <div className="col-12">
                      <h2 className="card-title">Booking Pass</h2>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="card-body mt-3">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="d-flex justify-content-center align-items-center gap-5 p-3">
                          <img
                            src={getById.response?.reservation?.airline?.thumbnail}
                            width="100px"
                            height="45px"
                            alt=""
                          />
                          <div className="d-flex justify-content-center align-items-center gap-3">
                            <div>
                              <h2>{getById.response?.reservation?.place_from}</h2>
                            </div>
                            <div>
                              <img src={iconflight} alt="" />
                            </div>
                            <div>
                              <h2>{getById.response?.reservation?.place_to}</h2>
                            </div>
                          </div>
                        </div>
                        <div  className="row d-flex justify-content-between mt-5">
                          <div  className="col-4">
                            <p>Code</p>
                            <p>AB-221</p>
                          </div>
                          <div  className="col-6">
                            <p>Class</p>
                            <p>{getById.response?.reservation?.type}</p>
                          </div>
                        </div>
                        <div className="row d-flex justify-content-between mt-5">
                          <div  className="col-4">
                            <p>Terminal</p>
                            <p>A</p>
                          </div>
                          <div  className="col-6">
                            <p>Gate</p>
                            <p>221</p>
                          </div>
                        </div>
                        <div className="d-flex flex-column">
                          <p>Departure</p>
                          <p>
                            {moment(getById?.response?.reservation?.departure)
                              .locale(zoneName)
                              .format("MMMM Do YYYY, h:mm A")}{" "}
                            -{" "}
                            {moment(getById?.response?.reservation?.arival)
                              .locale(zoneName)
                              .format("LT")}
                          </p>
                        </div>
                      </div>
                      <div className="col d-flex align-items-center align-content-center justify-content-center p-5">
                        {
                          getById?.response?.status === 'PAID' ? (
                            <QRCodeSVG value={getById?.response?.ticketId} size={250} />
                          ) : (
                            <QRCodeSVG value={getById?.response?.bookingId} size={250} />
                          )
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BookingDetail;
