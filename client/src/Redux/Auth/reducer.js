import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS } from './actionTypes'
import { saveData, loadData } from '../../Utils/localStorage'

const initialState = {
    isLogin: loadData('token') === '' ? false : true,
    token: loadData('token') || '',
    user: "",
    isError: false,
    isLoading: false,
}

export const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_SUCCESS:
            saveData('token', payload)
            return {
                ...state,
                isLogin: true,
                token: payload
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isLogin: false,
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isLogin: false,
            }

        default: return state
    }
}