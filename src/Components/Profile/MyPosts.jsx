import React from "react";
import styles from './Profile.module.css'
import Post from "./Post";


const MyPosts = (props) => {
    let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} />)

    return (
        <div>
            <h2>My posts</h2>
            <div>
                <textarea></textarea></div>
                <div className={styles.button}><button>Add post</button>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
 
    )
}
export default MyPosts;