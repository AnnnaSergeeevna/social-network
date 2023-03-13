import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '71266a72-adf7-4f3f-bf8c-758af4180355'
    }
})


export const getUsers = (currentPage, pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data
        })
}
export const getUnfollow = (userId) => {
    return instance.delete(`follow/${userId}`).then(response => {
        return response.data
    })
}
export const getFollow = (userId) => {
    return instance.post(`follow/${userId}`).then(response => {
        return response.data
    })
}
export const getAuth = () => {
    return instance.get(`auth/me`).then(response => {
        return response.data
    })
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => {
            return response.data
        })
    },
    getStatus(userId) {
        return instance.get(`profile/status/`+ userId).then(response => {
            return response.data
        })
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status }).then(response => {
            return response.data
        })
    }
}