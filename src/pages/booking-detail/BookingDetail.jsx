import React, { Fragment } from "react";
import styles from "./bookingDetail.module.css"
import { BsThreeDotsVertical } from 'react-icons/bs';

const BookingDetail = () => {
  return <Fragment>
    <div className={styles.bookingdetail_background}>
      <div className='container'>
        <div className={styles.bookingdetail_sect1}>
          <div className='row'>
            <div className='col-6 text-start'><h1><b>Booking Pass</b></h1></div>
            <div className='col-6'>
              <BsThreeDotsVertical size={30} className='float-end' style={{
                margin: '7px 0'
              }} />
            </div>
          </div>
          <div className={styles.bookingdetail_sect2}>
            <div className='row'>
              <div className='col-8' style={{
                borderStyle: 'solid dashed solid solid',
                borderColor: '#E5E5E5',
                borderRadius: '10px'
              }}>1</div>
              <div className='col-4' style={{
                borderStyle: 'solid solid solid none',
                borderColor: '#E5E5E5',
                borderRadius: '10px'
              }}>2</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
};

export default BookingDetail;
