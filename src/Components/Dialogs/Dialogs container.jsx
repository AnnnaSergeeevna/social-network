import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Dialogs.module.css'
import { sendMessageActionCreator, sendMessageCreator, } from '../../Redux/dialogsReduser'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'


let mapStateToProps = (state) => {
    return {dialogsPage: state.dialogsPage}
}
let mapDispatchToProps = (dispatch) => {
return {
    sendMessageBody: (body) => {
        dispatch(sendMessageActionCreator(body))
    },
    sendMessage: ()=> {
        dispatch(sendMessageCreator())
    }
}
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer; 
