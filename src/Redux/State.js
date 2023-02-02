let rerenderEntireTree = () => {
    console.log('state changed')
}
let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Post 1', likesCount: 2 },
            { id: 2, message: 'Post 2', likesCount: 4 }
        ],
        newPostText: '',
    },
    dialogsPage: {
        dialogs: [
            { prflimg: <img src="../post.images.jpeg"></img>, id: 1, name: 'Name 1' },
            { prflimg: <img src="../post.images.jpeg"></img>, id: 2, name: 'Name 2' },
            { prflimg: <img src="../post.images.jpeg"></img>, id: 3, name: 'Name 3' },
            { prflimg: <img src="../post.images.jpeg"></img>, id: 4, name: 'Name 4' },
            { prflimg: <img src="../post.images.jpeg"></img>, id: 5, name: 'Name 5' },
            { prflimg: <img src="../post.images.jpeg"></img>, id: 6, name: 'Name 6' },
            { prflimg: <img src="../post.images.jpeg"></img>, id: 7, name: 'Name 7' }
        ],
        messages: [
            { id: 1, message: 'Message 1' },
            { id: 2, message: 'Message 2' },
            { id: 3, message: 'Message 3' },
            { id: 4, message: 'Message 4' },
        ],
        newMessageText: '',
    }
}
window.state = state

export let addPost = () => {
    let newPost = { id: 3, message: state.profilePage.newPostText, likesCount: 0 }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}
export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export let sendMessage = () => {
    let newMessage = { id: 5, message: state.dialogsPage.newMessageText }
    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newMessageText = ''
    rerenderEntireTree(state)
}
export let sendNewMessage = (body) => {
    state.dialogsPage.newMessageText = body
    rerenderEntireTree(state)
}
export const subscribe = (observer) => {
    rerenderEntireTree = observer
}

export default state