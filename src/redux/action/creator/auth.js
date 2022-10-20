import { createAsyncThunk } from "@reduxjs/toolkit";
import { registerType, loginType, refreshTokenType, logoutType } from "../type/auth";
import { authRegister, authLogin, authRefreshToken, authLogout } from "../../../utils/http";

export const registerActionCreator = createAsyncThunk(registerType, async (data, { fulfillWithValue, rejectWithValue }) => {
    try {
        const response = await authRegister(data);

        return fulfillWithValue(response);
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const loginActionCreator = createAsyncThunk(loginType, async (data, { fulfillWithValue, rejectWithValue }) => {
    try {
        const response = await authLogin(data);

        return fulfillWithValue(response);
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const refreshTokenActionCreator = createAsyncThunk(refreshTokenType, async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
        const response = await authRefreshToken();

        return fulfillWithValue(response);
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const logoutActionCreator = createAsyncThunk(logoutType, async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
        const response = await authLogout();

        return fulfillWithValue(response);
    } catch (error) {
        return rejectWithValue(error);
    }
});
