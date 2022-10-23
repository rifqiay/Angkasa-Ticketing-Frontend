import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTicketsType, getTicketByIdType, getIssuedTicketByTicketIdType } from "../type/ticket";
import { getTickets, getTicketById, getIssuedTicketByTicketId } from "../../../utils/http";

export const getTicketsActionCreator = createAsyncThunk(getTicketsType, async (filter, { fulfillWithValue, rejectWithValue }) => {
    try {
        const response = await getTickets(filter)

        return fulfillWithValue(response)
    } catch (error) {
        return rejectWithValue(error)
    }
})

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

