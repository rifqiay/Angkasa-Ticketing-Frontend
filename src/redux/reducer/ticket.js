import { createReducer } from '@reduxjs/toolkit'

const initialState = {
    getById: {},
    getByTicketId: {}
}

const ticketReducer = createReducer(initialState, (builder) => {
    builder
        .addMatcher(
            (action) => action.type.endsWith('ticket/pending'),
            (state, action) => {
                const type = action.type.split('/')

                state[type[0]] = {
                    isPending: true
                }
            }
        )
        .addMatcher(
            (action) => action.type.endsWith('ticket/rejected'),
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
            (action) => action.type.endsWith('ticket/fulfilled'),
            (state, action) => {
                const type = action.type.split('/')
                const data = {
                    isFulfilled: true,
                    response: action.payload?.data?.data
                }

                state[type[0]] = data
            }
        )
})

export default ticketReducer
