import React from "react";
import { BsThreeDotsVertical } from 'react-icons/bs'

const BookingDetail = () => {
  return <div className="overflow-hidden bg-blue-600">
    <div className="col-12 my-28">
      <div className="py-3 mx-[200px] text-center bg-white rounded">
        <div className="mx-20">
          <div className="row">
            <div className="col-6 text-start text-4xl font-bold">Booking Pass</div>
            <div className="col-6 flex justify-end py-2"><BsThreeDotsVertical size={30} /></div>
          </div>
          <div className="row border divide-x divide-dashed my-6">
            <div className="col-6">1</div>
            <div className="col-6">2</div>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default BookingDetail;
