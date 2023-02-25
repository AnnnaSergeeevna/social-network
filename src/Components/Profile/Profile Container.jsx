import Profile from './Profile';
import axios from "axios"
import React from "react"
import { connect } from "react-redux";
import { setUserProfile } from "../../Redux/profileReduser";
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { getProfile } from '../../API/API';


 class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router?.params.userId
        if (!userId) {
            userId = 27125
        }
        getProfile(userId)
        .then(data => {
            this.props.setUserProfile(data)
        })
    }
    render () {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile  
})
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}
export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));