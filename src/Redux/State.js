let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Arigato', likesCount: 4 },
            { id: 2, message: "Hold on i'm here", likesCount: 8 }
        ]
    },
    dialogsPage: {
        dialogs: [
            {prflimg: <img src="../post.images.jpeg"></img>, id: 1, name: 'Name 1' },
            {prflimg: <img src="../post.images.jpeg"></img>, id: 2, name: 'Name 2' },
            {prflimg: <img src="../post.images.jpeg"></img>, id: 3, name: 'Name 3' },
            {prflimg: <img src="../post.images.jpeg"></img>, id: 4, name: 'Name 4' },
            {prflimg: <img src="../post.images.jpeg"></img>, id: 5, name: 'Name 5' },
            {prflimg: <img src="../post.images.jpeg"></img>, id: 6, name: 'Name 6' },
            {prflimg: <img src="../post.images.jpeg"></img>, id: 7, name: 'Name 7' }
        ],
        messages: [
            { id: 1, message: 'Message 1' },
            { id: 2, message: 'Message 2' },
            { id: 3, message: 'Message 3' },
            { id: 4, message: 'Message 4' },
        ]
    }
}
export default state