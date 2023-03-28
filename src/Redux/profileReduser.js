import {  profileAPI } from "../API/API";

const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    posts: [
        { id: 1, message: 'This is my first post!', likesCount: 2 },
        { id: 2, message: 'Ohhh i so need to hug somebody!', likesCount: 4 }],
    profile: null,
    status: ''
}
const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let stateCopy = { ...state }
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push({
                id: 3,
                message: action.values,
                likesCount: 0
            })
            stateCopy.values = 'newPostText'
            return stateCopy
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case SET_STATUS: {
            return { ...state, status: action.status }  
        }
        default:
            return state
    }
}
export const addPostActionCreator = (values) => ({ type: ADD_POST, values })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })

export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId).then(data => {
        dispatch(setUserProfile(data))
    })
}
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(data => {
        dispatch(setStatus(data))
    })
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(data => {
        if (data.resultCode === 0) {
        dispatch(setStatus(status))}
    })
}


export default profileReduser