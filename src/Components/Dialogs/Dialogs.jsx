import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem'
import Message from './Message'


const Dialogs = (props) => {
    let state = props.dialogsPage
    let dialogsElements = state.dialogsPage.dialogs.map(d => <DialogItem id={d.id} prflimg={d.prflimg} name={d.name} />)
    let messagesElements = state.dialogsPage.messages.map(m => <Message message={m.message} />)
    let newMessageText = state.newMessageText
    let sendMessageClick = () => {
        props.sendMessage()
    }
    let onMessageChange = (event) => {
        let body = event.target.value
        props.sendMessageBody(body)
    }
    return (
        <div className={classes.dialogsColumns}>
            <div className={classes.dialogs}>{dialogsElements}
            </div>
            <div className={classes.messages}>{messagesElements}
                <textarea onChange={onMessageChange} value={newMessageText} />
                <div className={classes.button}><button onClick={sendMessageClick}>Send message</button></div>
            </div>
        </div>)
}
export default Dialogs;