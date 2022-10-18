import React, { Fragment } from "react";
import { HiUser } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { MdSettings, MdOutlineLogout } from "react-icons/md";
import { Helmet } from "react-helmet-async";

const Mybooking = () => {
  return (
    <Fragment>
      <Helmet>
        <script src="https://cdn.tailwindcss.com"></script>
      </Helmet>

      <div className="overflow-hidden bg-gray-100">
        <div className="row">
          <div className="my-4 ml-5 mr-1 col-3">
            <div className="py-3 text-center bg-white rounded">
              <img
                className="mx-auto mb-3 border-4 border-blue-400 rounded-full d-block"
                src="images/nnzkZNYWHaU.svg"
                width={150}
                height={233}
              />
              <button
                type="button"
                class="py-2.5 px-5 mr-2 mb-4 text-sm font-medium text-blue-400 focus:outline-none bg-white rounded-lg border-2 border-blue-400 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Select Photo
              </button>
              <h1 className="mb-2 text-3xl font-bold">Mike Kowalski</h1>
              <h5 className="mb-4 text-xl font-normal">Medan, Indonesia</h5>
              <div className="mx-1 row">
                <div className="text-start col-6">Card</div>
                <div className="text-end text-blue-500 col-6">
                  <a href="#">+Add</a>
                </div>
              </div>
              <div className="m-4 bg-blue-500 rounded">
                <div className="text-white m-4 py-2">
                  <div className="text-start text-xl font-bold">
                    4441 1235 5512 5551
                  </div>
                  <div className="row">
                    <div className="text-start col-6">X Card</div>
                    <div className="text-end col-6">$ 1,440.2</div>
                  </div>
                </div>
              </div>
              <div className="flex mx-3">
                <HiUser size={30} color="#2395FF" className="mr-10" />
                <p className="font-bold text-blue-400">Profile</p>
              </div>
              <div className="flex mx-3 mt-4">
                <AiFillStar size={30} color="#979797" className="mr-10" />
                <p className="font-bold text-gray-400">My Review</p>
              </div>
              <div className="flex mx-3 mt-4">
                <MdSettings size={30} color="#979797" className="mr-10" />
                <p className="font-bold text-gray-400">Settings</p>
              </div>
              <div className="flex mx-3 mt-4">
                <MdOutlineLogout size={30} color="#F24545" className="mr-10" />
                <p className="font-bold text-red-600">Logout</p>
              </div>
            </div>
          </div>
          <div className="my-4 col-8">
            <div className="py-3 text-center bg-white rounded mb-4">
              <div
                className="col-12 text-start text-blue-400 mx-4 my-1"
                style={{ letterSpacing: "5px" }}
              >
                MY BOOKING
              </div>
              <div className="row mx-3">
                <div className="col-6 text-start font-bold text-3xl">
                  My Booking
                </div>
                <div className="col-6 text-end text-blue-400 font-bold text-lg my-1">
                  Order History
                </div>
              </div>
            </div>
            <div className="py-3 text-center bg-white rounded my-4">
              <p className="col-12 text-start mx-4 my-2">
                Monday, 20 July ‘20 - 12:33
              </p>
              <div className="row mx-3">
                <div className="col-1 text-start text-2xl font-bold">IDN</div>
                <div className="col-1 my-2">
                  <img src="images/Vector.svg" width={28} height={27} />
                </div>
                <div className="col-10 text-start text-2xl font-bold">JPN</div>
              </div>
              <p className="col-12 text-start text-gray-400 mx-4">
                Garuda Indonesia, AB-221
              </p>
              <hr className="my-3" />
              <div className="row mx-3">
                <div className="col-1 my-1 text-start text-lg font-semibold">
                  Status
                </div>
                <div className="col-3 text-center">
                  <div className="bg-orange-500 rounded p-2 mr-2 text-white">
                    Waiting for payment
                  </div>
                </div>
                <div className="col-8 my-1 text-end text-lg text-blue-400 font-semibold ">
                  <a href="#">View Details</a>
                </div>
              </div>
            </div>
            <div className="py-3 text-center bg-white rounded my-4">
              <p className="col-12 text-start mx-4 my-2">
                Monday, 20 July ‘20 - 12:33
              </p>
              <div className="row mx-3">
                <div className="col-1 text-start text-2xl font-bold">IDN</div>
                <div className="col-1 my-2">
                  <img src="images/Vector.svg" width={28} height={27} />
                </div>
                <div className="col-10 text-start text-2xl font-bold">JPN</div>
              </div>
              <p className="col-12 text-start text-gray-400 mx-4">
                Garuda Indonesia, AB-221
              </p>
              <hr className="my-3" />
              <div className="row mx-3">
                <div className="col-1 my-1 text-start text-lg font-semibold">
                  Status
                </div>
                <div className="col-3 text-center">
                  <div className="bg-green-500 rounded p-2 mr-2 text-white">
                    E-Ticket issued
                  </div>
                </div>
                <div className="col-8 my-1 text-end text-lg text-blue-400 font-semibold ">
                  <a href="#">View Details</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Mybooking;
