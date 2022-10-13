import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./Slice/LoginSlice";
import RegisterUserReducer from "./Slice/RegisterSlice";

export default configureStore({
  reducer: {
    Login: LoginReducer,
    RegisterUser: RegisterUserReducer,
  },
});
