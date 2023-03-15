import React from 'react'
import { Navigate, NavLink } from 'react-router-dom'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem'
import Message from './Message'
import { Field } from 'redux-form'
import { reduxForm } from 'redux-form'


const Dialogs = (props) => {
    let state = props.dialogsPage
    let dialogsElements = state.dialogsPage.dialogs.map(d => <DialogItem id={d.id} prflimg={d.prflimg} name={d.name} />)
    let messagesElements = state.dialogsPage.messages.map(m => <Message message={m.message} />)
    let newMessageText = state.newMessageText 

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageText)
    }
    return (
        <div className={classes.dialogsColumns}>
            <div className={classes.dialogs}>{dialogsElements}
            </div> 
           <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>)
}
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.messages}>
        <Field component='textarea'name='newMessageBody' placeholder='Enter your message'/>
        <div className={classes.button}><button>Send message</button></div>
    </form>
    )
}
const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'}) (AddMessageForm)

export default Dialogs;