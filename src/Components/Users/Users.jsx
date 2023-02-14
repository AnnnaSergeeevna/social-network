import axios from "axios"
import React from "react"
import styles from './Users.module.css'
import userPhoto from '../Users/userPhoto.png'

class Users extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
        this.props.setUsers(response.data.items)
    })
    }
render () {
    return <div>
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

