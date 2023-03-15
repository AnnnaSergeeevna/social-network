const SEND_MESSAGE = 'SEND_MESSAGE'
let initialState = {
    dialogsPage: {
        dialogs: [
            { prflimg: <img src="../post.images.jpeg"></img>, id: 1, name: 'Name 1' },
            { prflimg: <img src="../post.images.jpeg"></img>, id: 2, name: 'Name 2' },
            { prflimg: <img src="../post.images.jpeg"></img>, id: 3, name: 'Name 3' },
            { prflimg: <img src="../post.images.jpeg"></img>, id: 4, name: 'Name 4' },
            { prflimg: <img src="../post.images.jpeg"></img>, id: 5, name: 'Name 5' },
            { prflimg: <img src="../post.images.jpeg"></img>, id: 6, name: 'Name 6' },
        ],
        messages: [
            { id: 1, message: 'Message 1' },
            { id: 2, message: 'Message 2' },
            { id: 3, message: 'Message 3' },
            { id: 4, message: 'Message 4' },
        ]
    }
}
const dialogsReduser = (state = initialState, action) => {
    switch (action.type) {
        
        case SEND_MESSAGE:
            {
            let stateCopy = {...state}
            stateCopy.dialogsPage.messages = [...state.dialogsPage.messages]
            stateCopy.dialogsPage.messages.push({ id: 5, message: state.newMessageText }) 
            return stateCopy
            }
        default:
            return state 
    }
}
export const sendMessageCreator = (newMessageText) => ({type: SEND_MESSAGE, newMessageText})
export default dialogsReduser