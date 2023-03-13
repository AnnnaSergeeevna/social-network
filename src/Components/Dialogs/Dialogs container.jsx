import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Dialogs.module.css'
import { sendMessageActionCreator, sendMessageCreator, } from '../../Redux/dialogsReduser'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from '../../HOC/withAuth'


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
export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
) (Dialogs) 
