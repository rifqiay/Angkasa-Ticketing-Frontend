import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const postRegisterUser = createAsyncThunk(
  "RegisterUser/postRegisterUser",
  async (dataUser) => {
    try {
      const response = await axios.post(
        "http://localhost:3200/users/register",
        JSON.stringify(dataUser),
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      if (response.data.statusCode === 201) {
        toast.success("Sign Up Success. wait a few seconds", {
          autoClose: 2000,
          toastId: "successRegister",
        });
      } else {
        toast.warning(response.data.message, {
          autoClose: 2000,
          toastId: "warningRegister",
        });
      }

      return response.data;
    } catch (error) {
      toast.warning(error.response.data.message, {
        autoClose: 2000,
        toastId: "errorRegister",
      });
    }
  }
);

const RegisterUserSlice = createSlice({
  name: "RegisterUser",
  initialState: {
    isLoading: false,
    isError: null,
    status: "idle",
    RegisterUser: [],
  },
  extraReducers: {
    [postRegisterUser.pending]: (state) => {
      state.isLoading = true;
      state.status = "loading";
    },
    [postRegisterUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.RegisterUser = action.payload;
      state.status = "success";
    },
    [postRegisterUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.error;
      state.status = "failed";
    },
  },
});

export default RegisterUserSlice.reducer;
