import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Dialogs.module.css'

const DialogItem = (props) => {
    return (
        <div className={classes.dialogs + ' ' + classes.active}>
            <NavLink to={'/dialogs/' + props.id}>
                {props.prflimg}{props.name}
            </NavLink>
        </div>

    )
}
export default DialogItem