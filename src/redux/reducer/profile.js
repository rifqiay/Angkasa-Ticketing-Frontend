import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    get: {},
    put: {},
};

const profileReduceer = createReducer(initialState, (builder) => {
    builder
        .addMatcher(
            (action) => action.type.endsWith("profile/pending"),
            (state, action) => {
                const type = action.type.split("/");

                state[type[0]] = {
                    isPending: true,
                };
            }
        )
        .addMatcher(
            (action) => action.type.endsWith("profile/rejected"),
            (state, action) => {
                const type = action.type.split("/");

                state[type[0]] = {
                    isRejected: true,
                    statusCode: action.payload?.response?.status,
                    errorMessage: action.payload?.response?.data?.data?.message || action.payload?.message,
                };
            }
        )
        .addMatcher(
            (action) => action.type.endsWith("profile/fulfilled"),
            (state, action) => {
                const type = action.type.split("/");

                state[type[0]] = {
                    isFulfilled: true,
                    response: action.payload?.data?.data,
                };
            }
        );
});

export default profileReduceer;
