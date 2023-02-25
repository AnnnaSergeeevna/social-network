import Users from "./Users";
import React from "react"
import { connect } from "react-redux";
import { follow, setCurrentPage, setTotalUsersCount, setUsers, unfollow } from "../../Redux/usersReduser";
import { getUsers } from "../../API/API";

class UserContainer extends React.Component {
    componentDidMount() {
        getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        getUsers(pageNumber, this.props.pageSize)
            .then(data => {
            this.props.setUsers(data.items)
        })
    }

    render() {
        return <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        />
    }
}
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount})(UserContainer)