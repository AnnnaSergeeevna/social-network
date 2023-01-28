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
return (
        <div className={classes.dialogsColumns}>
            <div className={classes.dialogs}>{dialogsElements}
            </div>
            <div className={classes.messages}>{messagesElements}
            </div>
        </div>)
}
export default Dialogs;