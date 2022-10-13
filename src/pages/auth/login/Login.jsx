import React, { useState, useEffect, Fragment } from "react";
import { useNavigate, Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { postLogin } from "../../../app/redux/Slice/LoginSlice";

import { toast } from "react-toastify";
import BackgroundImage from "../../../assets/images/auth/illustration.png";

const Login = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: "",
    password: "",
    // role: "" || "user",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (document.getElementById("agree-user").checked) {
      dispatch(postLogin(data))
        .unwrap()

        .then((item) => {
          if (item.statusCode === 201) {
            setTimeout(() => {
              navigate("../home");
            }, 2000);
          } else {
            console.log("Login Failed");
          }
        });
    } else {
      toast.warning("Please Agree terms and conditions", {
        autoClose: 2000,
        toastId: "warningAgreeUser",
      });
    }
  };

  useEffect(() => {
    document.title = "Login | World Recipes";
  }, []);

  return (
    <div>
      <div className="page-login">
        <div className="container">
          <div className="row">
            <div className="col-5 profile-background">
              <img src={BackgroundImage} alt="illustration" />
            </div>
            <div className="col-7">
              <form onSubmit={handleLogin} className="w-100 form-sign-in">
                <div className="text-center my-5">
                  <h2 className="text-warning">Welcome</h2>
                  <h6 className="text-muted">
                    Log in into your exiting account
                  </h6>
                </div>

                <div>
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    name="email"
                    type="text"
                    className="form-control form-input"
                    id="email"
                    placeholder="Enter Email address"
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    name="password"
                    type="password"
                    className="form-control form-input"
                    id="password"
                    placeholder="Enter Password"
                    onChange={handleChange}
                  />
                </div>

                <div className="d-flex justify-content-start my-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="agree-user"
                  />
                  <label className="form-check-label" htmlFor="agree-user">
                    &nbsp;I agree to terms & conditions
                  </label>
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-warning my-2 text-light"
                  >
                    Log in Account
                  </button>
                </div>
                <div className="col-12 d-flex justify-content-center my-2">
                  <p className="text-muted">Don’t have an account?</p>
                  <Link
                    className="text-warning text-decoration-none"
                    to={"../register"}
                  >
                    &nbsp;Register Here
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
