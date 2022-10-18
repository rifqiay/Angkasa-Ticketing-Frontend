import React from "react";
import { BsThreeDotsVertical } from 'react-icons/bs'

const BookingDetail = () => {
  return <div className="overflow-hidden bg-blue-600">
    <div className="col-12 my-28">
      <div className="py-5 mx-[200px] text-center bg-white rounded">
        <div className="mx-20">
          <div className="row">
            <div className="my-8 text-4xl font-bold col-6 text-start">Booking Pass</div>
            <div className="flex justify-end py-2 col-6"><BsThreeDotsVertical size={30} /></div>
          </div>
          <div className="my-6 border divide-x rounded-lg row divide-dashed">
            <div className="p-5 col-8">
              <div className='row'>
                <div className='py-2 col-3'>
                  <img src="/images/garuda-indonesia-logo-BD82882F07-seeklogo3.svg" width={150} height={127} />
                </div>
                <div className='py-4 text-4xl font-bold text-center col-3'>IDN</div>
                <div className='py-4 col-2'>
                  <img src='/images/Vector.svg' width={38} height={37} />
                </div>
                <div className='py-4 text-4xl font-bold text-start col-4'>JPN</div>
              </div>
              <div className='pb-3 mt-8'>
                <div className='text-gray-400 row text-start'>
                  <div className='col-6'>Code</div>
                  <div className='col-6'>Class</div>
                </div>
                <div className='row text-start'>
                  <div className='text-lg col-6'>AB-221</div>
                  <div className='text-lg col-6'>Economy</div>
                </div>
              </div>
              <div className='py-3'>
                <div className='text-gray-400 row text-start'>
                  <div className='col-6'>Terminal</div>
                  <div className='col-6'>Gate</div>
                </div>
                <div className='row text-start'>
                  <div className='text-lg col-6'>A</div>
                  <div className='text-lg col-6'>221</div>
                </div>
              </div>
              <div className='py-3 text-start'>
                <div className='text-gray-400 col-12'>Departure</div>
                <div className='text-lg col-12'>Monday, 20 July ‘20 - 12:33</div>
              </div>
            </div>
            <div className="col-4">2</div>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default BookingDetail;
