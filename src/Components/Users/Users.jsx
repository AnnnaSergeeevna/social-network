import React from "react"
import { NavLink } from 'react-router-dom'
import styles from './Users.module.css'
import userPhoto from '../Users/userPhoto.png'

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    let firstPage = props.currentPage - 10
    let lastPage = props.currentPage + 10
    if (firstPage < 1) { firstPage = 1 }
    if (lastPage > pagesCount) { lastPage = pagesCount }
    for (let i = firstPage; i <= lastPage; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? styles.selectedPage : styles.pagesNmbrs}
                    onClick={() => { props.onPageChanged(p) }}>{p + ' '}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <div className={styles.userinf}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.usrPhoto} />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress
                                    .some(id=>id===u.id)} className={styles.button} onClick={() => {props.unFollow(u.id)
                                }} >Unfollow</button>

                                : <button disabled={props.followingInProgress.some(id=>id===u.id) } className={styles.button} onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}
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
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? styles.selectedPage : styles.pagesNmbrs}
                    onClick={() => { props.onPageChanged(p) }}>{p + ' '}</span>
            })}
        </div>
    </div >
}

export default Users

