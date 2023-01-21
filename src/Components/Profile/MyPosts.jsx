import React from "react";
import styles from './Profile.module.css'
import Post from "./Post";

const MyPosts = (props) => {
    return (
        <div>
            <h2>My posts</h2>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={styles.posts}>
                <Post message='Arigato' />
                <Post message="Hold on i'm here" />
            </div>
        </div>

    )
}
export default MyPosts;