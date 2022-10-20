import { combineReducers } from '@reduxjs/toolkit'
import auth from './auth'
import profile from './profile'
import ticket from './ticket'
import booking from './booking'

const appReducer = combineReducers({
    auth,
    profile,
    ticket,
    booking
})
const rootReducer = (state, action) => {
    if (action.type === 'logout/auth/fulfilled') {
        state = {}
        localStorage.clear()
    }

    return appReducer(state, action)
}

export default rootReducer
