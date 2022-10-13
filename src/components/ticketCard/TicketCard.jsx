import React from "react";

import styles from "./ticketCard.module.css";

import flight from "../../assets/flight.svg";

const TicketCard = ({
  airlineImg,
  airline,
  origin,
  arr,
  destination,
  dept,
  price,
  id,
  direct,
  transit,
  more_transit,
  luggage,
  wifi,
  meal,
  onClick,
  button,
}) => {
  return (
    <div className={styles.ticket}>
      <div className={styles.airline}>
        <div style={{ width: "100px" }}>
          <img style={{ width: "100%" }} src={airlineImg} alt="" />
        </div>
        <span>{airline}</span>
      </div>

      <div className={styles["flight-info"]}>
        <div className={styles.schedule}>
          <div>
            <p>{origin}</p>
            <span>{dept}</span>
          </div>

          <div>
            <img src={flight} alt="" />
          </div>

          <div>
            <p>{destination}</p>
            <span>{arr}</span>
          </div>
        </div>

        <div className={styles.duration}>
          <p>3 hours 11 minutes</p>
          <span>{direct ? "direct" : transit || more_transit}</span>
        </div>

        <div className={styles.facilities}>
          <div>
            <img src={luggage} alt="" />
          </div>
          <div>
            <img src={meal} alt="" />
          </div>
          <div>
            <img src={wifi} alt="" />
          </div>
        </div>

        <div className={styles.pricetag}>
          <p>{`Rp ${price}`}</p>
          <span>/pax</span>
        </div>

        {button}
      </div>
    </div>
  );
};

export default TicketCard;
