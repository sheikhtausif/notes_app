import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS } from './actionTypes'
import axios from 'axios'

export const loginSuccess = (payload) => {
    return { type: LOGIN_SUCCESS, payload }
}
export const loginFailure = () => {
    return { type: LOGIN_FAILURE }
}
export const logoutSuccess = () => {
    return { type: LOGOUT_SUCCESS }
}

export const loginUser = (payload) => {
    return (dispatch) => {
        axios.post("https://reqres.in/api/login", payload)
            .then(res => dispatch(loginSuccess(res.data.token)))
            .catch((err) => console.log(err))
    }
}
