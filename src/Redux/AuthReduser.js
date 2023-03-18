import { getAuth, login, logout } from "../API/API"

const SET_USERS_DATA = 'SET_USERS_DATA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}
const authReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }

        default:
            return state
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USERS_DATA, payload: { userId, email, login, isAuth } })

export const getAuthUserData = () => (dispatch) => {
        getAuth().then(data => {
            if (data.resultCode === 0) {
                let { Id, login, email } = data.data
                dispatch(setAuthUserData(Id, email, login, true))
            }
        })
    }

export const getLogin = (email, password, rememberMe ) => (dispatch) => {
    return login(email, password, rememberMe)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        });
}

export const getLogout = () => (dispatch) => {
        logout().then(data => {
            if (data.resultCode === 0) { dispatch(setAuthUserData(null, null, null, false)) }
        })
    }

export default authReduser