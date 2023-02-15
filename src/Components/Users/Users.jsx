import axios from "axios"
import React from "react"
import styles from './Users.module.css'
import userPhoto from '../Users/userPhoto.png'

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        let firstPage = this.props.currentPage - 10
        let lastPage = this.props.currentPage + 10
        if (firstPage < 1) {firstPage = 1}
        if (lastPage > pagesCount) {lastPage = pagesCount}
        for (let i = firstPage; i <= lastPage; i++) {
            pages.push(i)
        }
        return <div>
            <div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p ? styles.selectedPage : styles.pagesNmbrs}
                        onClick={() => { this.onPageChanged(p) }}>{p+' '}</span>
                })}
            </div>
            {
                this.props.users.map(u => <div key={u.id}>
                    <div className={styles.userinf}>
                        <span>
                            <div>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.usrPhoto} />
                            </div>
                            <div>
                                {u.followed
                                    ? <button className={styles.button} onClick={() => { this.props.unfollow(u.id) }} >Unfollow</button>
                                    : <button className={styles.button} onClick={() => { this.props.follow(u.id) }}>Follow</button>}
                            </div>
                        </span>
                        <span>
                            <div className={styles.usrdet} >
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                                {/* <h3>{u.location.city}</h3>
                            <div>{u.location.country}</div> */}
                            </div>
                        </span>
                    </div>
                </div>
                )
            }
        </div >
    }
}
export default Users

