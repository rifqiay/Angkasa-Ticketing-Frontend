import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBookingsType, getBookingByIdType, getBookingByBookingIdType, bookingTicketByIdType, payBookingByBookingIdType, cancelBookingByBookingIdType } from "../type/booking";
import { getBookings, getBookingById, getBookingByBookingId, bookingTicketById, payBookingByBookingId, cancelBookingByBookingId } from "../../../utils/http";

export const getBookingsActionCreator = createAsyncThunk(getBookingsType, async (filter, { fulfillWithValue, rejectWithValue }) => {
    try {
        const response = await getBookings(filter);

        return fulfillWithValue(response);
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const getBookingByIdActionCreator = createAsyncThunk(getBookingByIdType, async (id, { fulfillWithValue, rejectWithValue }) => {
    try {
        const response = await getBookingById(id);

        return fulfillWithValue(response);
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const getBookingByBookingIdActionCreator = createAsyncThunk(getBookingByBookingIdType, async (bookingId, { fulfillWithValue, rejectWithValue }) => {
    try {
        const response = await getBookingByBookingId(bookingId);

        return fulfillWithValue(response);
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const bookingTicketByIdActionCreator = createAsyncThunk(bookingTicketByIdType, async ({ id, data }, { fulfillWithValue, rejectWithValue }) => {
    try {
        const response = await bookingTicketById(id, data);

        return fulfillWithValue(response);
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const payBookingByBookingIdActionCreator = createAsyncThunk(payBookingByBookingIdType, async (bookingId, { fulfillWithValue, rejectWithValue }) => {
    try {
        const response = await payBookingByBookingId(bookingId);

        return fulfillWithValue(response);
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const cancelBookingByBookingIdActionCreator = createAsyncThunk(cancelBookingByBookingIdType, async (bookingId, { fulfillWithValue, rejectWithValue }) => {
    try {
        const response = await cancelBookingByBookingId(bookingId);

        return fulfillWithValue(response);
    } catch (error) {
        return rejectWithValue(error);
    }
});
