import axios from "axios"
import React from "react"
import { connect } from "react-redux";
import Header from './Header';
import { getAuthUserData, setAuthUserData } from '../../Redux/AuthReduser';
import { values } from "redux-form";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData()
    }
    render() {
        return <Header {...this.props}/> 
    }
   
}
let mapStateToProps = (state) => {
    return {
isAuth: state.auth?.isAuth,
login: state.auth?.login
}}
export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer); 