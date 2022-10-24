import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAirlinesType } from "../type/airline";
import { getAirlines } from "../../../utils/http";

export const getAirlinesActionCreator = createAsyncThunk(
  getAirlinesType,
  async (filter, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await getAirlines(filter);

      return fulfillWithValue(response);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
