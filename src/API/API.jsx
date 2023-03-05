import axios from "axios"

const instanse = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '71266a72-adf7-4f3f-bf8c-758af4180355'
    }
})
                                        
 
export const getUsers = (currentPage, pageSize) => {
    return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
.then(response => {
        return response.data
    })
}
export const getUnfollow = (userId) => {
    return instanse.delete(`follow/${userId}`).then(response => {
        return response.data
    })
}
export const getFollow = (userId) => {
    return instanse.post(`follow/${userId}`).then(response => {
        return response.data
    })
}
export const getAuth = () => {
    return instanse.get(`auth/me`).then(response => {
    return response.data
})
}

export const getProfile = (userId) => {
    return instanse.get(`profile/${userId}`).then(response => {
        return response.data
    })
}
