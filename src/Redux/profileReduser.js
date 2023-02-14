const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

let initialState = {
    posts: [
        { id: 1, message: 'This is my first post!', likesCount: 2 },
        { id: 2, message: 'Ohhh i so need to hug somebody!', likesCount: 4 }
    ],
    newPostText: ''
}
const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push({ id: 3, message: state.newPostText, likesCount: 0 })
            stateCopy.newPostText = ''
            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT: {            
            let stateCopy = {...state}
            stateCopy.newPostText = action.newPostText
            return stateCopy
        }
        default:
            return state
    }
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export default profileReduser