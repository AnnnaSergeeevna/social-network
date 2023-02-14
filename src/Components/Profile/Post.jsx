import React from "react";
import styles from './Profile.module.css'
const Post = (props) => {
    return (
        <div className={styles.post}>
        <div className={styles.item}>
            <img src="../post.images.jpeg"></img>
{props.message}</div>
<div className={styles.likecount}>{props.likesCount} ❤️</div>
            </div>
    )
}
export default Post;