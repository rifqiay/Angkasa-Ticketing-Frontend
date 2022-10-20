import { createReducer } from '@reduxjs/toolkit'

const initialState = {
    get: {},
    getById: {},
    getByBookingId: {},
    bookingTicket: {},
    payBooking: {},
    cancelBooking: {}
}

const bookingReducer = createReducer(initialState, (builder) => {
    builder
        .addMatcher(
            (action) => action.type.endsWith('booking/pending'),
            (state, action) => {
                const type = action.type.split('/')

                state[type[0]] = {
                    isPending: true
                }
            }
        )
        .addMatcher(
            (action) => action.type.endsWith('booking/rejected'),
            (state, action) => {
                const type = action.type.split('/')

                state[type[0]] = {
                    isRejected: true,
                    statusCode: action.payload?.response?.status,
                    errorMessage: action.payload?.response?.data?.data?.message || action.payload?.message
                }
            }
        )
        .addMatcher(
            (action) => action.type.endsWith('booking/fulfilled'),
            (state, action) => {
                const type = action.type.split('/')
                let data = {
                    isFulfilled: true,
                    response: action.payload?.data?.data
                }

                data = action.type.startsWith('get/booking') ? {
                    ...data,
                    pagination: action.payload?.data?.pagination
                } : data

                state[type[0]] = data
            }
        )
})

export default bookingReducer
