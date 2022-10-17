import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./Slice/LoginSlice";
import RegisterUserReducer from "./Slice/RegisterSlice";
import ProfileUserReducer from "./Slice/ProfileUserSlice";

export default configureStore({
  reducer: {
    Login: LoginReducer,
    RegisterUser: RegisterUserReducer,
    ProfileUser: ProfileUserReducer,
  },
});
