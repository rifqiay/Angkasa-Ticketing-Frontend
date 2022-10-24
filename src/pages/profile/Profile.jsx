import React, { Fragment, useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import styles from "./profile.module.css";
import UserLogo from "../../assets/images/profile/user.png";
import Setting from "../../assets/images/profile/setting.png";
import Rating from "../../assets/images/profile/rating.png";
import LogOut from "../../assets/images/profile/logOut.png";
import { toast } from "react-toastify";
import { useDidUpdate } from "@mantine/hooks";
import map from "../../assets/map-pin.svg";
import { getProfileActionCreator, putProfileActionCreator } from "../../redux/action/creator/profile";
import { logoutActionCreator } from "../../redux/action/creator/auth";
import { useNavigate } from "react-router-dom";
import { createFormData } from "../../utils/form-data";

const Profile = () => {
  const dispatch = useDispatch();
  const toastId = useRef(null)
  const ProfilePut = useSelector(state => state.profile.put)
  const ProfileGet = useSelector(state => state.profile.get)
  const logout = useSelector(state => state.auth.logout)
  const { register, handleSubmit } = useForm();
  const [preview, setPreview] = useState('');
  const [avatar, setAvatar] = useState('');
  const isUpdated = useRef(null)
  const onSubmitPut = data => {
    const formDataProfile = createFormData(avatar, data)

    dispatch(putProfileActionCreator({
      id: ProfileGet?.response?.id,
      data: formDataProfile
    }))
    isUpdated.current = false
  };
  const onLogout = () => dispatch(logoutActionCreator())
  const navigate = useNavigate()
  
  useEffect(() => {
    dispatch(getProfileActionCreator())
  }, []);

  useEffect(() => {
    if (ProfilePut?.isFulfilled && !isUpdated.current) {
      dispatch(getProfileActionCreator())
      isUpdated.current = true
    }
  }, [ProfilePut])

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

    if (ProfileGet?.isPending) {
      toast.dismiss(toastId.current)
      toastId.current = toast.loading("Loading...", toastOptions)
    }

    if (ProfileGet?.isRejected) {
      toast.dismiss(toastId.current)
      toastId.current = toast.error(ProfileGet?.errorMessage, toastOptions)
    }

    if (ProfilePut?.isPending) {
      toast.dismiss(toastId.current)
      toastId.current = toast.loading("Loading...", toastOptions)
    }

    if (ProfilePut?.isRejected) {
      toast.dismiss(toastId.current)
      toastId.current = toast.error(ProfilePut?.errorMessage, toastOptions)
    }

    if (logout?.isPending) {
      toast.dismiss(toastId.current)
      toastId.current = toast.loading("Loading...", toastOptions)
    }

    if (logout?.isRejected) {
      toast.dismiss(toastId.current)
      toastId.current = toast.error(logout?.errorMessage, toastOptions)
    }

    if (logout?.isFulfilled) {
      toast.dismiss(toastId.current)
      toastId.current = toast.success("Succes log out, to access feature please sign in again", toastOptions)
      navigate('/home', { replace: true })
    }

    if (ProfilePut?.isFulfilled) {
      toast.dismiss(toastId.current)
      toastId.current = toast.success("Succes to update profile..", toastOptions)
    }
  }, [ProfileGet, ProfilePut, logout])

  const handleAvatarChange = (e) => {
    e.preventDefault()

    setAvatar(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <Fragment>
      <div className={styles.profile_background}>
        <div className="container">
          <form id="form-edit-profile"
            onSubmit={handleSubmit(onSubmitPut)}
          >
            <div className="row">
              <div className="col-lg-4 mt-4">
                <div className={styles.sect1}>
                  <div className=" text-center">
                    <img
                      src={!preview ? (ProfileGet?.response?.avatar || `https://avatars.dicebear.com/api/bottts/${ProfileGet?.response?.user?.email}.svg`) : preview}
                      alt="Avatar"
                      style={{
                        verticalAlign: 'middle',
                        width: '170px',
                        height: '170px',
                        borderRadius: '50%'
                      }}
                    />
                    <div className="mt-3"></div>
                    <input
                      type="file"
                      placeholder="photo"
                      className="form-control mt-3 mb-1 "
                      onChange={handleAvatarChange}
                    />
                    <h3 className="mt-4">{ProfileGet?.response?.name}
                    </h3>
                    <div className="row">
                      <div className="col-md-6 offset-md-3 ">
                        <img src={map} alt="map" />
                        <p>{ProfileGet?.response?.city}</p>
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
                    <div className="col-4" style={{ cursor: 'pointer' }} onClick={onLogout}>
                      <img src={LogOut} alt="userlogo" />
                    </div>
                    <div className="col-4">
                      <p className="ms-2" style={{ cursor: 'pointer' }} onClick={onLogout}>Logout</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-8 mt-4">
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
                        className={styles.input}
                        defaultValue={ProfileGet?.response?.user?.email}
                        placeholder="Insert Your Email"
                        disabled
                      />
                      <label htmlFor="phone" className={styles.label}>
                        Phone Number
                      </label>
                      <input
                        type="number"
                        defaultValue={ProfileGet?.response?.phone}
                        {...register("phone")}
                        className={styles.input}
                        placeholder="Insert Your Phone Number"
                      />
                      <p className={styles.settingText}>
                        {"Account Setting >"}
                      </p>
                    </div>
                    <div className={styles.biodata}>
                      <p className={styles.biodataText}>Biodata</p>

                      <label htmlFor="city" className={styles.city}>
                        City
                      </label>
                      <input
                        type="text"
                        defaultValue={ProfileGet?.response?.city}
                        {...register("city")}
                        className={styles.input}
                        placeholder="Insert Your City"
                      />
                      <label htmlFor="address" className={styles.label}>
                        Address
                      </label>
                      <input
                        type="text"
                        className={styles.input}
                        defaultValue={ProfileGet?.response?.address}
                        {...register("address")}
                        placeholder="Insert Your Adress"
                      />
                      <label htmlFor="postcode" className={styles.label}>
                        Zip Coder
                      </label>
                      <input
                        type="number"
                        className={styles.input}
                        defaultValue={ProfileGet?.response?.postcode}
                        {...register("postcode")}
                        placeholder="Insert Your Zip Code"
                      />
                    </div>
                  </div>
                  <div className={styles.btnDiv}>
                    <button type="submit" className="btn btn-primary">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;