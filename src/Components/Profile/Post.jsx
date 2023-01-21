import React from "react";
import styles from './Profile.module.css'
const Post = (props) => {
    return (
        <div>
        <div className={styles.item}>
            <img src="../post.images.jpeg"></img>
{props.message}</div>
            <div><span>like ❤️</span></div>
            </div>
    )
}
export default Post;