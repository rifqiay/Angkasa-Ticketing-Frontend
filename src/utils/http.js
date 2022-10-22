import axios from "axios";
import { Duration } from "@icholy/duration";
import qs from "qs";
import { refreshTokenActionCreator } from "../redux/action/creator/auth";
import { customHistory as history } from "../router/browserHistory";

let store;
export const injectStore = (_store) => {
    store = _store;
};

const { REACT_APP_BACKEND_URL, REACT_APP_REQUEST_TIMEOUT } = process.env;
const axiosInstance = axios.create();
const duration = new Duration(REACT_APP_REQUEST_TIMEOUT);

axiosInstance.defaults.baseURL = REACT_APP_BACKEND_URL;
axiosInstance.defaults.timeout = duration.milliseconds();
axiosInstance.defaults.withCredentials = true;
axiosInstance.defaults.paramsSerializer = {
    serialize: (params = {}) => qs.stringify(params, { arrayFormat: 'brackets' })
}

axiosInstance.interceptors.request.use(
    (config) => {
        const isFormDataInstance = config.data instanceof FormData;

        if (!isFormDataInstance) config.data = qs.stringify(config.data);

        const token = localStorage.getItem("@acc_token");

        if (token !== null) config.headers.common.Authorization = `Bearer ${token}`;

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
axiosInstance.interceptors.response.use(
    (response) => {
        const token = response.data?.data?.accessToken;

        if (token) localStorage.setItem("@acc_token", token);

        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        if (
            originalRequest.url.includes("/auth/refresh-token") &&
            (error?.response?.data?.data?.message === "jwt expired" || error?.response?.data?.data?.message === "Refresh token unavailable" || error?.response?.data?.data?.message === "Refresh token must be conditioned")
        ) {
            localStorage.clear();
            history.replace("/");

            return Promise.reject();
        }

        if (
            !originalRequest.url.includes("/auth/refresh-token") &&
            (error?.response?.data?.data?.message === "jwt expired" || error?.response?.data?.data?.message === "Session unavailable" || error?.response?.data?.data?.message === "Bearer token must be conditioned") &&
            !originalRequest?._retry
        ) {
            try {
                await store.dispatch(refreshTokenActionCreator());

                originalRequest.headers.Authorization = `Bearer ${store.getState().auth.refreshToken?.response?.token}`;
                originalRequest._retry = true;

                return Promise.resolve(axios(originalRequest));
            } catch (errorDispatchRefreshTokenActionCreator) {
                return Promise.reject(errorDispatchRefreshTokenActionCreator);
            }
        }

        return Promise.reject(error);
    }
);

const AUTHENTICATION_PATH = "/auth";
const PROFILE_PATH = "/profile";
const TICKET_PATH = "/ticket";
const ORDER_PATH = "/order";

const queryParams = (value = {}) => {
    return {
        params: value
    };
};

export const authRegister = async (userData = {}) => await axiosInstance.post(`${AUTHENTICATION_PATH}/register`, userData);
export const authLogin = async (userData = {}) => await axiosInstance.post(`${AUTHENTICATION_PATH}/login`, userData);
export const authRefreshToken = async () => await axiosInstance.get(`${AUTHENTICATION_PATH}/refresh-token`);
export const authLogout = async () => await axiosInstance.get(`${AUTHENTICATION_PATH}/logout`);

export const fetchProfile = async () => await axiosInstance.get(PROFILE_PATH);
export const updateProfile = async (profileId = null, profileData = {}) => await axiosInstance.put(`${PROFILE_PATH}/${profileId}`, profileData);

export const getTickets = async (filter = {}) => {
    const isTicketFiltered = Object.keys(filter).length

    if (isTicketFiltered) {
        return await axiosInstance.get(TICKET_PATH, queryParams(filter))
    } else {
        return await axiosInstance.get(TICKET_PATH)
    }
}
export const getTicketById = async (id = null) => await axiosInstance.get(`${TICKET_PATH}/${id}`);
export const getIssuedTicketByTicketId = async (ticketId = null) => await axiosInstance.get(`${TICKET_PATH}/check/${ticketId}`);

export const getBookings = async (filter = {}) => {
    const isBookingFiltered = Object.keys(filter).length;

    if (isBookingFiltered) {
        return await axiosInstance.get(ORDER_PATH, queryParams(filter));
    } else {
        return await axiosInstance.get(ORDER_PATH);
    }
};
export const getBookingById = async (id = null) => await axiosInstance.get(`${ORDER_PATH}/${id}`);
export const getBookingByBookingId = async (bookingId = null) => await axiosInstance.get(`${ORDER_PATH}/booking/${bookingId}`);
export const bookingTicketById = async (id = null, bookingData = {}) => await axiosInstance.post(`${ORDER_PATH}/booking/ticket/${id}`, bookingData);
export const payBookingByBookingId = async (bookingId = null) => await axiosInstance.put(`${ORDER_PATH}/pay/booking/${bookingId}`);
export const cancelBookingByBookingId = async (bookingId = null) => await axiosInstance.put(`${ORDER_PATH}/cancel/booking/${bookingId}`);
