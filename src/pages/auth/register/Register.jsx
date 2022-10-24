import React, { useEffect, Fragment, useRef } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import BackgroundImage from "../../../assets/images/auth/illustration.png";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { registerActionCreator } from "../../../redux/action/creator/auth";
import { useDidUpdate } from "@mantine/hooks";

const Register = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    dispatch(registerActionCreator(data))
  };
  const toastId = useRef(null)
  const navigate = useNavigate();
  const AuthRegister = useSelector(state => state.auth.register,shallowEqual) 

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

    if(AuthRegister?.isPending){
      toast.dismiss()
      toastId.current = toast.loading("Loading...",toastOptions)
    }

    if(AuthRegister?.isRejected){
      toast.dismiss()
      toastId.current = toast.error(AuthRegister?.errorMessage,toastOptions)
    }

    if(AuthRegister?.isFulfilled){
      toast.dismiss()
      toastId.current = toast.success("Register Success",toastOptions)
      navigate("../login");
    }

    if(errors?.name){
      toast.dismiss(toastId.current)
      toast.error(`Nama : ${errors?.name?.message}`,toastOptions)
    }

    if(errors?.email){
      toast.dismiss(toastId.current)
      toast.error(`Email : ${errors?.email?.message}`,toastOptions)
    }

    if(errors?.password){
      toast.dismiss(toastId.current)
      toast.error(`Password : ${errors?.password?.message}`,toastOptions)
    }
  },[AuthRegister, errors])

  useEffect(() => {
    document.title = "Register | World Recipes";
  }, []);

  return (
    <Fragment>
      <div className="page-register">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 bg-primary profile-background">
              <img src={BackgroundImage} alt="illustration" />
            </div>
            <div className="col-lg-7">
              <form 
             onSubmit={handleSubmit(onSubmit)}
              className="w-100 form-sign-up">
                <div className="text-center">
                  <h2 className="text-warning">Let’s Get Started !</h2>
                  <h6 className="text-muted">
                    Create new account to access all features
                  </h6>
                </div>
                <div className="mb-2">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true})}
                    className="form-input form-control"
                    disabled={AuthRegister?.isPending}
                    placeholder="Enter Name"
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="text"
                    {...register("email", { required: true})}
                    className="form-input form-control"
                    disabled={AuthRegister?.isPending}
                    placeholder="Enter Email address"
                  />
                </div>
             
                <div className="mb-2">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    disabled={AuthRegister?.isPending}
                    className="form-input form-control"
                    {...register("password", { required: true})}
                    placeholder="Enter Password"
                  />
                </div>
         
                <div className="d-flex justify-content-start mb-4">
                  <input
                    className="form-input form-check-input"
                    type="checkbox"
                    value=""
                    id="agree-user"
                  />
                  <label className="form-check-label" htmlFor="agree-user">
                    &nbsp; I agree to terms & conditions
                  </label>
                </div>
                <div className="d-flex justify-content-center mb-2">
                  <button
                    type="form-input submit"
                    className="btn btn-warning my-2 text-light"
                  >
                    Register Account
                  </button>
                </div>
                <div className="col-12 d-flex justify-content-center">
                  <p className="text-muted">Already have account?</p>
                  <Link
                    className="text-warning text-decoration-none"
                    to={"../login"}
                  >
                    &nbsp;Log in Here
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
