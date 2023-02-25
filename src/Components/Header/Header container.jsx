import axios from "axios"
import React from "react"
import { connect } from "react-redux";
import Header from './Header';
import { setAuthUserData } from '../../Redux/AuthReduser';
import { getAuth } from "../../API/API";

class HeaderContainer extends React.Component {
    componentDidMount() {
        getAuth().then(data => {
            if (data.resultCode === 0) {
                let {Id, email, login} = data.data
                this.props.setAuthUserData(Id, email, login)
            }
            })
    }
    render() {
        return <Header {...this.props}/> 
    }
   
}
let mapStateToProps = (state) => {
    return {
isAuth: state.auth.isAuth,
login: state.auth.login
}}
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer); 