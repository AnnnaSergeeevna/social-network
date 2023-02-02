import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

const DialogItem = (props) => {
    return (
        <div className={classes.dialogs + ' ' + classes.active}><NavLink to={'/dialogs/' + props.id}>{props.prflimg}{props.name}</NavLink></div>

    )
}
const Message = (props) => {
    return (
        <div className={classes.messages}>{props.message}</div>

    )
}


const Dialogs = (props) => {
let dialogsElements = props.dialogs.map( d =>  <DialogItem id={d.id} prflimg={d.prflimg} name={d.name} />)
let messagesElements = props.messages.map( m => <Message message={m.message} />)

let newMessageElement = React.createRef()
let sendMessage = () => {
    props.sendMessage()
}
let onMessageChange = () => {
    let body = newMessageElement.current.value
    props.sendNewMessage(body)
}
return (
        <div className={classes.dialogsColumns}>
            <div className={classes.dialogs}>{dialogsElements}
            </div>
            <div className={classes.messages}>{messagesElements}
            <textarea onChange={onMessageChange} ref={newMessageElement}value={props.newMessageText}/>
            <div className={classes.button}><button onClick={sendMessage}>Send message</button></div>
            </div>
        </div>)
}
export default Dialogs;