import React from "react";
import { HiUser } from 'react-icons/hi';
import { AiFillStar } from 'react-icons/ai';
import { MdSettings, MdOutlineLogout } from 'react-icons/md'

const Mybooking = () => {
  return <div className="overflow-hidden bg-gray-100">
    <div className="row">
      <div className="my-4 ml-5 mr-1 col-3">
        <div className='py-3 text-center bg-white rounded'>
          <img className='mx-auto mb-3 border-4 border-blue-400 rounded-full d-block' src="images/nnzkZNYWHaU.svg" width={150} height={233} />
          <button type="button" class="py-2.5 px-5 mr-2 mb-4 text-sm font-medium text-blue-400 focus:outline-none bg-white rounded-lg border-2 border-blue-400 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Select Photo</button>
          <h1 className="mb-2 text-3xl font-bold">Mike Kowalski</h1>
          <h5 className="mb-4 text-xl font-normal">Medan, Indonesia</h5>
          <div className='mx-1 row'>
            <div className='text-start col-6'>Card</div>
            <div className='text-end text-blue-500 col-6'><a href="#">+Add</a></div>
          </div>
          <div className="m-4 bg-blue-500 rounded">
            <div className='text-white m-4 py-2'>
              <div className='text-start text-xl font-bold'>4441 1235 5512 5551</div>
              <div className='row'>
                <div className='text-start col-6'>X Card</div>
                <div className='text-end col-6'>$ 1,440.2</div>
              </div>
            </div>
          </div>
          <div className='flex mx-3'>
            <HiUser size={30} color='#2395FF' className='mr-10' />
            <p className="font-bold text-blue-400">Profile</p>
          </div>
          <div className='flex mx-3 mt-4'>
            <AiFillStar size={30} color='#979797' className='mr-10' />
            <p className="font-bold text-gray-400">My Review</p>
          </div>
          <div className='flex mx-3 mt-4'>
            <MdSettings size={30} color='#979797' className='mr-10' />
            <p className="font-bold text-gray-400">Settings</p>
          </div>
          <div className='flex mx-3 mt-4'>
            <MdOutlineLogout size={30} color='#F24545' className='mr-10' />
            <p className="font-bold text-red-600">Logout</p>
          </div>
        </div>
      </div>
      <div className="my-4 col-8">
        <div className='py-3 text-center bg-white rounded mb-4'>2</div>
        <div className='py-3 text-center bg-white rounded my-4'>2</div>
        <div className='py-3 text-center bg-white rounded my-4'>2</div>
      </div>
    </div>
  </div>
};

export default Mybooking;
