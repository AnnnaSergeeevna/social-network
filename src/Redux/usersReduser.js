import { getFollow, getUnfollow, getUsers, } from "../API/API"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS'

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 50,
    currentPage: 1,
    followingInProgress: []
}
const usersReduser = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count }
        }
        case FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state
    }
}
export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unFollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const toggleFollowingInProgress = (isFetching, userId) => ({ type: FOLLOWING_IN_PROGRESS, isFetching, userId })

export const getUsersThunk = (currentPage, pageSize) => {
    return (dispatch) => {
        getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setCurrentPage(currentPage))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            })
    }
}
export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId))
        getFollow(userId).then(data => {
            if (data.resultCode == 0) {
                dispatch(followAC(userId))
            }
            dispatch(toggleFollowingInProgress(false, userId))
        })
    }
}
export const unFollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId))
        getUnfollow(userId).then(data => {
            debugger
            if (data.resultCode == 0) {
                dispatch(unFollowAC(userId))
            }
            dispatch(toggleFollowingInProgress(false, userId))
        })
    }
}


export default usersReduser 