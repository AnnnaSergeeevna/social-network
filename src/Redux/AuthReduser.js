import { getAuth } from "../API/API"

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
                ...action.data,
                isAuth: true
            }
       
        default:
            return state
    }
}

export const setAuthUserData = (userId, email,login) => ({type: SET_USERS_DATA, data: {userId, email,login}})

export const getAuthUserData = () => {
    return (dispatch) => {
        getAuth().then(data => {
            if (data.resultCode === 0) {
                let {Id, email, login} = data.data
                dispatch(setAuthUserData(Id, email, login))
            }
            })
    }
}
export default authReduser