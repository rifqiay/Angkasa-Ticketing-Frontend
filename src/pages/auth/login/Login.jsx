import React, { useState, useEffect, Fragment ,useRef} from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { shallowEqual, useDispatch,useSelector } from "react-redux";
import { postLogin } from "../../../app/redux/Slice/LoginSlice";

import { toast } from "react-toastify";
import BackgroundImage from "../../../assets/images/auth/illustration.png";
import { useDidUpdate } from "@mantine/hooks";
import { loginActionCreator } from "../../../redux/action/creator/auth";
const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const onSubmit = data => {
    dispatch(loginActionCreator(data))
  };
  const toastId = useRef(null)


  const AuthLogin = useSelector(state => state.auth.register,shallowEqual) 

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
    if(AuthLogin?.isPending){
      toast.dismiss()
      toastId.current = toast.loading("Loading...",toastOptions)
    }
    if(AuthLogin?.isRejected){
      toast.dismiss()
      toastId.current = toast.error(AuthLogin?.errorMessage,toastOptions)
    }
    if(AuthLogin?.isFulfilled){
      toast.dismiss()
      toastId.current = toast.success("Register Success",toastOptions)
      navigate("../login");
    }

    if(errors?.email){
      toast.dismiss(toastId.current)
      toast.error(`Email : ${errors?.email?.message}`,toastOptions)
    }
    if(errors?.password){
      toast.dismiss(toastId.current)
      toast.error(`Password : ${errors?.password?.message}`,toastOptions)
    }
  },[AuthLogin, errors])
  // const [data, setData] = useState({
  //   email: "",
  //   password: "",
  //   // role: "" || "user",
  // });

  // const handleChange = (e) => {
  //   setData({
  //     ...data,
  //     [e.target.name]: e.target.value,
  //   });
  //   console.log(data);
  // };

  // const handleLogin = async (e) => {
  //   e.preventDefault();

  //   if (document.getElementById("agree-user").checked) {
  //     dispatch(postLogin(data))
  //       .unwrap()

  //       .then((item) => {
  //         if (item.statusCode === 201) {
  //           setTimeout(() => {
  //             navigate("../home");
  //           }, 2000);
  //         } else {
  //           console.log("Login Failed");
  //         }
  //       });
  //   } else {
  //     toast.warning("Please Agree terms and conditions", {
  //       autoClose: 2000,
  //       toastId: "warningAgreeUser",
  //     });
  //   }
  // };

  useEffect(() => {
    document.title = "Login | World Recipes";
  }, []);

  return (
    <div>
      <div className="page-login">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 bg-primary profile-background">
              <img
                src={BackgroundImage}
                alt="illustration"
                className="bg-primary"
              />
            </div>
            <div className="col-lg-7">
              <form 
              onSubmit={handleSubmit(onSubmit)}
              className="w-100 form-sign-in">
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
                 {...register("email", { required: true})}
                    type="text"
                    className="form-control form-input"
       
                    placeholder="Enter Email address"
                   // onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
    
                    type="password"
                    className="form-control form-input"
                    {...register("password", { required: true})}
                    placeholder="Enter Password"
                  //  onChange={handleChange}
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
