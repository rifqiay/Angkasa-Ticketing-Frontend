import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTicketByIdType, getIssuedTicketByTicketIdType } from "../type/ticket";
import { getTicketById, getIssuedTicketByTicketId } from "../../../utils/http";

export const getTicketByIdActionCreator = createAsyncThunk(getTicketByIdType, async (id, { fulfillWithValue, rejectWithValue }) => {
    try {
        const response = await getTicketById(id);

        return fulfillWithValue(response);
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const getIssuedTicketByTicketIdActionCreator = createAsyncThunk(getIssuedTicketByTicketIdType, async (id, { fulfillWithValue, rejectWithValue }) => {
    try {
        const response = await getIssuedTicketByTicketId(id);

        return fulfillWithValue(response);
    } catch (error) {
        return rejectWithValue(error);
    }
});

