import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <div className={classes.head}>
            <div><img src='../headerLogo.png' /> Social Network </div>
            <div><button className={classes.login}>
                {props.isAuth ? props.login
               : <NavLink to={'/login'}>Login</NavLink> }
            </button></div>
        </div>
    )
}
export default Header;