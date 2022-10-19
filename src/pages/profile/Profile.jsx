import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./profile.module.css";
import UserLogo from "../../assets/images/profile/user.png";
import Setting from "../../assets/images/profile/setting.png";
import Rating from "../../assets/images/profile/rating.png";
import LogOut from "../../assets/images/profile/logOut.png";
import ImageProfile from "../../assets/images/profile/profile.png";
import map from "../../assets/map-pin.svg";
import { putProfileUser } from "../../app/redux/Slice/ProfileUserSlice";
import axios from "axios";
const Profile = () => {
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const [dataUser, setDataUser] = useState({
    name: data.name,
    phone: data.phone,
  });

  const handleChange = (e) => {
    setDataUser({
      ...dataUser,
      [e.target.name]: e.target.value,
    });
    console.log(dataUser);
    // console.log(newPicture);
  };
  const getData = () => {
    if (token) {
      axios
        .get("http://localhost:3200/users/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
          },
        })
        .then((response) =>
          //  console.log("cek response = ", response.data.data[0])
          setData(response.data.data[0])
        );
      // console.log("Cek data baru = ", response.data.data[0]);
    }
  };

  const handleUpdate = async (e) => {
    await e.preventDefault();
    const formData = new FormData();
    formData.append(
      "name",
      dataUser.name === undefined ? data.name : dataUser.name
    );
    formData.append(
      "phone",
      dataUser.phone === undefined ? data.phone : dataUser.phone
    );

    dispatch(putProfileUser(formData)).unwrap();
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Fragment>
      <div className={styles.profile_background}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mt-4">
              <div className={styles.sect1}>
                <div className=" text-center">
                  <img src={ImageProfile} alt="imageProfile" />
                  <div className="mt-3"></div>
                  <button type="button" class="btn btn-outline-primary">
                    Select Photo
                  </button>
                  <h3 className="mt-4">{data.name}</h3>
                  <div class="row">
                    <div className="col-md-6 offset-md-3 ">
                      <img src={map} alt="map" />
                      <p>Bandung, Indonesia</p>
                    </div>
                  </div>
                </div>

                <div className="row justify-content-between">
                  <div className="col-3">
                    <h5>Cards</h5>
                  </div>
                  <div className="col-3">
                    <h5>+Add</h5>
                  </div>
                </div>

                <div className="card ">
                  <div className="card-body bg-primary text-white border border-3">
                    <p>4441 1235 5512 5551</p>
                    <div className="row justify-content-between">
                      <div className="col-6">
                        <h5>X Card</h5>
                      </div>
                      <div className="col-6">
                        <h5>& 1,440.2</h5>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" row justify-content-center mt-4">
                  <div className="col-4">
                    <img src={UserLogo} alt="userlogo" />
                  </div>
                  <div className="col-4">
                    <p className="ms-2">Profile</p>
                  </div>
                </div>
                <div className=" row justify-content-center mt-4">
                  <div className="col-4">
                    <img src={Rating} alt="userlogo" />
                  </div>
                  <div className="col-4">
                    <p className="ms-2">My Review</p>
                  </div>
                </div>
                <div className=" row justify-content-center mt-4">
                  <div className="col-4">
                    <img src={Setting} alt="userlogo" />
                  </div>
                  <div className="col-4">
                    <p className="ms-2">Settings</p>
                  </div>
                </div>
                <div className=" row justify-content-center mt-4">
                  <div className="col-4">
                    <img src={LogOut} alt="userlogo" />
                  </div>
                  <div className="col-4">
                    <p className="ms-2">Logout</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8 mt-4">
              <form id="form-edit-profile" onSubmit={handleUpdate}>
                <div className={styles.sect2}>
                  <p className={styles.text}>Profile</p>
                  <p className={styles.text2}>Profile</p>
                  <div className={styles.formSheet}>
                    <div className={styles.contact}>
                      <p className={styles.contactText}>Contact</p>
                      <label htmlFor="email" className={styles.label}>
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className={styles.input}
                        value={data.email}
                        //   onChange={(e) => setEmail(e.target.value)}
                        placeholder="Insert Your Email"
                        disabled
                      />
                      <label htmlFor="phone" className={styles.label}>
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="number"
                        defaultValue={data.phone}
                        onChange={handleChange}
                        name="phone"
                        className={styles.input}
                        placeholder="Insert Your Phone Number"
                      />
                      <p className={styles.settingText}>
                        {"Account Setting >"}
                      </p>
                    </div>
                    <div className={styles.biodata}>
                      <p className={styles.biodataText}>Biodata</p>
                      <label htmlFor="name" className={styles.label}>
                        Username
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        defaultValue={data.name}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder="Insert Your Name"
                      />
                      <label htmlFor="city" className={styles.city}>
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        // value={citys}
                        // onChange={(e) => setCity(e.target.value)}
                        className={styles.input}
                        placeholder="Insert Your City"
                      />
                      <label htmlFor="address" className={styles.label}>
                        Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        className={styles.input}
                        // value={address}
                        // onChange={(e) => setAddress(e.target.value)}
                        placeholder="Insert Your Adress"
                      />
                      <label htmlFor="postcode" className={styles.label}>
                        Zip Coder
                      </label>
                      <input
                        type="number"
                        id="postcode"
                        className={styles.input}
                        name="post_code"
                        // value={post_code}
                        // onChange={(e) => setPost_code(e.target.value)}
                        placeholder="Insert Your Zip Code"
                      />
                    </div>
                  </div>
                  <div className={styles.btnDiv}>
                    <button type="submit" class="btn btn-primary">
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
