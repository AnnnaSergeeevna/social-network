const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

let initialState = {
    posts: [
        { id: 1, message: 'Post 1', likesCount: 2 },
        { id: 2, message: 'Post 2', likesCount: 4 }
    ],
    newPostText: ''
}
const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            state.posts.push({ id: 3, message: state.newPostText, likesCount: 0 })
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText
            return state
        default:
            return state
    }
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export default profileReduser